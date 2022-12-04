/*
 * logowanie: mysql -u username -p
 * uruchomienie skryptu: SORUCE create_ksiegarnia.sql;
 */

USE ksiegarnia;

CREATE TABLE Klienci
( KlientID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Nazwisko char(50) NOT NULL,
  Adres char(100) NOT NULL,
  Miejscowosc char(30) NOT NULL
);

CREATE TABLE Zamowienia
( Zamowienieid INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Klientid INT UNSIGNED NOT NULL,
  Wartosc FLOAT(6,2),
  Data DATE NOT NULL,

  FOREIGN KEY (KlientID) REFERENCES Klienci(KlientID)
);

CREATE TABLE Ksiazki
( ISBN CHAR(13) NOT NULL PRIMARY KEY,
  Autor CHAR(50),
  Tytul CHAR(100),
  Cena FLOAT(4,2)
);

CREATE TABLE Pozycje_zamowione
( ZamowienieID INT UNSIGNED NOT NULL,
  ISBN CHAR(13) NOT NULL,
  Ilosc TINYINT UNSIGNED,

  PRIMARY KEY (ZamowienieID, ISBN),
  FOREIGN KEY (ZamowienieID) REFERENCES Zamowienia(ZamowienieID),
  FOREIGN KEY (ISBN) REFERENCES Ksiazki(ISBN)
);

CREATE TABLE Recenzje_ksiazek
( ISBN CHAR(13) NOT NULL PRIMARY KEY,
  Recenzja TEXT,

  FOREIGN KEY (ISBN) REFERENCES Ksiazki(ISBN)
);

SHOW TABLES;

DESCRIBE Klienci;

DESCRIBE Zamowienia;

DESCRIBE Ksiazki;

DESCRIBE Pozycje_zamowione;

DESCRIBE Recenzje_ksiazek;