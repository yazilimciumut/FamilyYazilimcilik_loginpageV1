<!-- <?php -->
// session_start();

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $kullaniciAdi = $_POST["kullanici_ad"];
//     $sifre = $_POST["sifre"];

//     // Veritabanı bağlantısı
//     $servername = "localhost";
//     $username = "kullanici_adi";
//     $password = "sifre";
//     $dbname = "veritabani_adi";

//     $conn = new mysqli($servername, $username, $password, $dbname);

//     if ($conn->connect_error) {
//         die("Veritabanı bağlantı hatası: " . $conn->connect_error);
//     }

//     // Kullanıcı bilgilerini kontrol etme
//     $sql = "SELECT id, kullanici_ad FROM kullanicilar WHERE kullanici_ad = '$kullaniciAdi' AND sifre = '$sifre'";

//     $result = $conn->query($sql);

//     if ($result->num_rows == 1) {
//         // Giriş başarılı, oturum başlat
//         $row = $result->fetch_assoc();
//         $_SESSION["kullanici_id"] = $row["id"];
//         $_SESSION["kullanici_ad"] = $row["kullanici_ad"];
//         header("Location: dashboard.php"); // Giriş başarılıysa yönlendirme yapabilirsiniz.
//     } else {
//         echo "Kullanıcı adı veya şifre hatalı.";
//     }

//     $conn->close();
// }
// ?>
