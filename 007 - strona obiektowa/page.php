<?php
  class Page {
    public $charset = "UTF-8";
    public $title = "Obiektowa strona w PHP";
    public $menu = array("Strona główna" => "index.php",
                         "Lorem" => "lorem.php",
                         "Ipsum" => "ipsum.php");
    public $content;
    public function create() {
      echo "<html>\n<head>\n";
      $this->setCharset();
      $this->showTitle();
      echo "</head>\n<body>\n";
      $this->showMenu();
      echo $this->content;
      echo "</body>\n</html>";
    }
    public function setCharset() {
      echo "<meta charset=\"" . $this->charset . "\">\n";
    }
    public function showTitle() {
      echo "<title>" . $this->title . "</title>\n";
    }
    public function showMenu() {
      echo "<nav>\n";
      foreach ($this->menu as $name => $url) {
        $this->showMenuItem($name, $url);
      }
      echo "</nav>";
    }
    public function showMenuItem($name, $url) {
      echo "<a href=\"" . $url . "\">" . $name . "</a>\n";
    }
  }
?>