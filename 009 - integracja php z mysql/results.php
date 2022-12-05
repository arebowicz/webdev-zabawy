<!-- za "PHP i MySQL Vademecum Profesjonalisty" Luke Welling, Laura Thomson -->

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>oto rezultaty wyszukiwania</h1>
  <?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    $method = $_POST['method'];
    $expression = $_POST['expression'];
    if (!$method || !$expression) {
      echo "brak parametrów, spróbuj ponownie";
      exit;
    }
    if (!($method == "autor") && !($method == "tytul") && !($method == "isbn")) {
      echo "nieprawidłowa metoda poszukiwania, spróbuj ponownie";
      exit;
    }
    @ $db = new mysqli('localhost', 'username', 'password', 'ksiegarnia');
    if ($db->connect_error) {
      echo "błąd połączenia z bazą";
      exit;
    }
    $request = "SELECT ISBN, Autor, Tytul, Cena FROM Ksiazki WHERE {$method} = ?";
    $stmt = $db->prepare($request);
    $stmt->bind_param('s', $expression);  
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($isbn, $author, $title, $price);
    echo "<p>Liczba znalezionych rekordów: ".$stmt->num_rows."</p>";
    while($stmt->fetch()) {
      echo "<p>Tytuł: " . $title;
      echo "<br />Autor: " . $author;
      echo "<br />ISBN: " . $isbn;
      echo "<br />Cena: " . number_format($price,2) . "</p>";
    }
    $stmt->free_result();
    $db->close();
  ?>
</body>
</html>