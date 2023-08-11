function girisKontrol() {
  var kullaniciAdi = document.getElementById("kullaniciAdi1").value;
  var sifre = document.getElementById("sifre1").value;

  if (kullaniciAdi === "" || sifre === "") {
    alert("Lütfen kullanıcı adı ve şifre giriniz.");
  } else {
    // Giriş başarılıysa yeni siteye yönlendir
    alert("Başarılı şekilde giriş yaptınız.");
    window.location.href = "administrator/index.html"; // Yeni site URL'sini burada belirtin
  }
}

function sifreUnuttum() {
  var kullaniciAdi = document.getElementById("username_input").value;
  var kullaniciAdiTekrar = document.getElementById("kullanici-tekrar").value;
  var eposta = document.getElementById("eposta").value;

  if (kullaniciAdi === "" || kullaniciAdiTekrar === "" || eposta === "") {
    alert("Lütfen kullanıcı adınızı, kullanıcı adını tekrar ve e-posta adresinizi giriniz.");
  } else if (kullaniciAdi !== kullaniciAdiTekrar) {
    alert("Kullanıcı adları eşleşmiyor.");
  } else {
    alert("E-posta adresiniz gönderildi.");
  }
}

function kayitYap() {
  var kullaniciAdi = document.getElementById("username_input").value;
  var eposta = document.getElementById("email_input").value;
  var sifre = document.getElementById("sifre_input").value;

  if (kullaniciAdi === "" || eposta === "" || sifre === "") {
    alert("Lütfen kullanıcı adınızı, e-posta adresinizi ve şifrenizi giriniz.");
  } else {
    alert("Başarıyla kayıt oldunuz.");
  }
}
