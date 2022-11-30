<?php
  $iloscopon = $_POST['iloscopon'];
  $iloscoleju = $_POST['iloscoleju'];
  $ilosswiec = $_POST['iloscswiec'];
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Wyniki zamówienia</h1>
    <?php
      echo '<p>Zamówienie przyjęte o ' . date('H:i, jS F Y') . '.</p>';
      // htmlspecialchars(%zmienna) -- względy bezpieczeństwa
      echo '<p>Opon: ' . htmlspecialchars($iloscopon);
      echo '<br />Butelek oleju: ' . htmlspecialchars($iloscoleju);
      echo '<br />Świec zapłonowych: ' . htmlspecialchars($ilosswiec) . '</p>';
    ?>
  </body>
</html>