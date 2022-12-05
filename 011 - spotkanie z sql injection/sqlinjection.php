<!-- SKRYPT Z PODATNOŚCIĄ NA SQL INJECTION -->
<!-- w input wystarczy wpisać na przykład: -->
<!-- 0 OR "1=1" -->

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>oto dane wyjściowe:</h1>
  <?php
    $input = $_POST['input'];
    if (!$input) {
      echo "brak parametrów, spróbuj ponownie";
      exit;
    }
    @ $db = new mysqli('localhost', 'username', 'password', 'ksiegarnia');
    if ($db->connect_error) {
      echo "błąd połączenia z bazą";
      exit;
    }
    $request = "SELECT ISBN, Autor, Tytul, Cena FROM Ksiazki WHERE ISBN = " . $input;
    $stmt = $db->prepare($request);
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