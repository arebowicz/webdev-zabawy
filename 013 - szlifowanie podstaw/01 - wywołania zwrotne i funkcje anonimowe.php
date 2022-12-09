<?php
  class Product {
    public $name;
    public $price;
    public function __construct (string $name, float $price) {
      $this->name = $name;
      $this->price = $price;
    }
  }
  class ProcessSale {
    private $callbacks;
    public function registerCallback (callable $callback) {
      if (!is_callable($callback)) {
        throw new Exception("Niepoprawne wywołanie zwrotne");
      }
      $this->callbacks[] = $callback;
    }
    public function sale(Product $product) {
      echo "{$product->name}: przetwarzanie sprzedaży <br />";
      foreach ($this->callbacks as $callback) {
        call_user_func($callback, $product);
      }
    }
  }
  $logger = function($product) {
    echo "przetworzono ({$product->name})";
  };
  $processor = new ProcessSale();
  $processor->registerCallback($logger);
  $processor->sale(new Product("kawa", 10));
?>