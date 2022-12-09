<?php
  class Address {
    private $number;
    private $street;
    public function __construct(string $maybenumber, string $maybestreet = null) {
      if (is_null($maybestreet)) {
        $this->streetaddress = $maybenumber;
      } else {
        $this->number = $maybenumber;
        $this->street = $maybestreet;
      }
    }
    public function __set(string $property, string $value) {
      if (preg_match("/^(\d+.*?)[\s,]+(.+)$/", $value, $matches)) {
        $this->number = $matches[1];
        $this->street = $matches[2];
      } else {
        throw new \Exception("Nie można przetworzyć adresu: '{$value}'");
      }
    }
    public function __get(string $property) {
      if ($property === "streetaddress") {
        return $this->number . " " . $this->street;
      }
    }
  }
  $address = new Address("441b Bakers Street");
  echo "Adres: {$address->streetaddress}<br />";
  $address2 = new Address("441b", "Bakers Street");
  echo "Adres: {$address2->streetaddress}<br />";
  $address3 = new Address("441b, Bakers Street");
  echo "Adres: {$address3->streetaddress}<br />";
?>