const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();

// Kullanıcılar için geçici şifre sıfırlama kodlarını depolayacağımız bir nesne
const passwordResetTokens = {};

app.use(express.urlencoded({ extended: true }));

app.post('/forgot-password', (req, res) => {
  const userEmail = req.body.email;

  // Kullanıcının veritabanında kayıtlı olduğunu ve geçerli bir e-posta adresi girdiğini doğrulayın

  // Şifre sıfırlama token'ı oluşturun
  const token = crypto.randomBytes(20).toString('hex');
  passwordResetTokens[userEmail] = token;

  // E-posta gönderimi için nodemailer kullanımı
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your.email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your.email@gmail.com',
    to: userEmail,
    subject: 'Şifre Sıfırlama İsteği',
    text: `Şifre sıfırlama bağlantısı: http://yourwebsite.com/reset-password?token=${token}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('E-posta gönderildi: ' + info.response);
    }
  });

  res.send('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
});

app.get('/reset-password', (req, res) => {
  const token = req.query.token;
  const userEmail = getEmailFromToken(token);

  // Kullanıcının veritabanında kayıtlı olduğunu ve token'ın geçerli olduğunu doğrulayın

  // Şifre sıfırlama sayfasını gösterin
  res.send(`
    <html>
      <body>
        <h1>Yeni Şifre Belirleme</h1>
        <form action="/update-password" method="POST">
          <input type="hidden" name="token" value="${token}">
          <label for="password">Yeni Şifre:</label>
          <input type="password" name="password" required>
          <button type="submit">Şifreyi Güncelle</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/update-password', (req, res) => {
  const token = req.body.token;
  const newPassword = req.body.password;
  const userEmail = getEmailFromToken(token);

  // Yeni şifreyi veritabanında güncelleyin

  res.send('Şifre başarıyla güncellendi.');
});

function getEmailFromToken(token) {
  // Token'ı kullanarak e-posta adresini döndürün
  // passwordResetTokens nesnesini kullanarak eşleşen token'ı bulun
}

app.listen(3000, () => {
  console.log('Sunucu çalışıyor...');
});
