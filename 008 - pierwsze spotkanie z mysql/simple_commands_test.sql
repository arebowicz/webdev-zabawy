/* za "PHP i MySQL Vademecum Profesjonalisty" Luke Welling, Laura Thomson
 * logowanie: mysql -u username -p
 * uruchomienie skryptu: SORUCE insert_ksiegarnia.sql;
 */

SELECT Nazwisko, Miejscowosc
FROM Klienci;

SELECT *
FROM Pozycje_zamowione;

SELECT *
FROM Zamowienia
WHERE Klientid=3;

SELECT *
FROM Zamowienia
WHERE Klientid=3 OR Klientid=2;

SELECT Zamowienia.ZamowienieID, Zamowienia.Wartosc, Zamowienia.Data
FROM Klienci, Zamowienia
WHERE Klienci.Nazwisko='Julia Kowalska' AND Klienci.KlientID=Zamowienia.Klientid;

SELECT *
FROM Klienci, Zamowienia;

SELECT Klienci.Nazwisko
FROM Klienci, Zamowienia, Ksiazki, Pozycje_zamowione
WHERE Klienci.KlientID=Zamowienia.KlientID
AND Zamowienia.ZamowienieID=Pozycje_zamowione.ZamowienieID
AND Pozycje_zamowione.ISBN=Ksiazki.ISBN
AND Ksiazki.Tytul LIKE '%Java%';