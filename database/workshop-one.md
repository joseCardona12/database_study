CREATE DATABASE plumbing;
USE plumbing;

CREATE TABLE clients(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE services(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(8,2) NOT NULL
);

CREATE TABLE plumbers(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE bills(
	id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    total DECIMAL(8,2) NOT NULL,
    client_id INT NOT NULL,
    service_id INT NOT NULL,
    plumber_id INT NOT NULL

);
CREATE TABLE discounts(
	id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(8,2) NOT NULL,
    bill_id INT NOT NULL
);

CREATE TABLE payments(
	id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(8,2) NOT NULL,
    date DATE NOT NULL,
    bill_id INT NOT NULL
);

CREATE TABLE audits(
	id INT AUTO_INCREMENT PRIMARY KEY,
    table_column VARCHAR(50) NOT NULL,
    action VARCHAR(50) NOT NULL,
    date DATE NOT NULL
);

-- connection or relations with the tables --
-- First relation --
-- Table clients with services --
ALTER TABLE services
	ADD COLUMN client_id INT NOT NULL,
    ADD FOREIGN KEY(client_id) REFERENCES clients(id);

-- TAble plumbers with services M:M Create new table --
CREATE TABLE plumber_services(
	id INT AUTO_INCREMENT PRIMARY KEY,
    plumber_id INT,
    service_id INT,
    FOREIGN KEY (plumber_id) REFERENCES plumbers(id),
    FOREIGN KEY (service_id) REFERENCES services(id)    
);
    
-- Relation table bills with the table discounts --
ALTER TABLE discounts
    ADD FOREIGN KEY(bill_id) REFERENCES bills(id);

-- All tables have relation with table audits. Create ralation --
ALTER TABLE audits
	ADD COLUMN client_id INT NOT NULL,
    ADD COLUMN service_id INT NOT NULL,
    ADD COLUMN plumber_id INT NOT NULL,
    ADD COLUMN bill_id INT NOT NULL,
    ADD COLUMN discount_id INT NOT NULL,
    ADD COLUMN payment_id INT NOT NULL,
    ADD FOREIGN KEY (client_id) REFERENCES clients(id),
    ADD FOREIGN KEY (service_id) REFERENCES services(id),
    ADD FOREIGN KEY (plumber_id) REFERENCES plumbers(id),
    ADD FOREIGN KEY (bill_id) REFERENCES bills(id),
    ADD FOREIGN KEY (discount_id) REFERENCES discounts(id),
    ADD FOREIGN KEY (payment_id) REFERENCES payments(id);

DESC audits;

-- ADD news columns --
-- DBA se equivocó y olvidó agregar un campo a la tabla clientes. --
-- Agrega un campo llamado direccion (cadena de texto de máximo 255 caracteres) a la tabla clientes --

ALTER TABLE clients
	ADD COLUMN address VARCHAR(255) NOT NULL;

-- El DBA también olvidó agregar un campo a la tabla servicios. 
-- Agrega un campo llamado fecha (fecha) a la tabla servicios. --

ALTER TABLE services
	ADD COLUMN date DATE NOT NULL;
    
-- El DBA cometió otro error y olvidó agregar un campo a la tabla plomeros. 
-- Agrega un campo llamado direccion (cadena de texto de máximo 255 caracteres) a la tabla plomeros. --

ALTER TABLE plumbers
	ADD COLUMN address VARCHAR(255) NOT NULL;
    
-- El DBA cometió otro error y olvidó agregar un campo a la tabla facturas. 
-- Agrega un campo llamado direccion (cadena de texto de máximo 255 caracteres) a la tabla facturas. --

ALTER TABLE bills
	ADD COLUMN address VARCHAR(255) NOT NULL;

![Image_de_la_base_de_datos_creada]("./img/database-one.png");