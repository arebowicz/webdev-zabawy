/* za "PHP i MySQL Vademecum Profesjonalisty" Luke Welling, Laura Thomson
 * logowanie: mysql -u root -p
 * uruchomienie skryptu: SORUCE configure_from_root.sql;
 */

CREATE DATABASE dbname;
GRANT ALL ON dbname.* TO 'username'@'localhost';