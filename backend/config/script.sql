CREATE DATABASE armario;
-- Tabla final
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS productos;

CREATE TABLE usuarios (
usuario_id SERIAL PRIMARY KEY,
username VARCHAR(50),
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(300) NOT NULL
);

CREATE TABLE productos (
id SERIAL PRIMARY KEY,
titulo VARCHAR(255) NOT NULL,
descripcion VARCHAR(255) NOT NULL UNIQUE,
img VARCHAR(255) NOT NULL,
caracteristicas VARCHAR(255) NOT NULL,
price int NOT NULL,
cantidad int NOT NULL,
usuario_id INT NOT NULL REFERENCES usuarios(usuario_id) ON DELETE CASCADE
);

INSERT INTO usuarios VALUES 
(DEFAULT, 'Santiago', 'Admin@admin.com', 123456);

INSERT INTO productos (id, titulo, descripcion, img, caracteristicas, price, cantidad, usuario_id) VALUES
  (DEFAULT,
  'SWEATER BEACH VERDE',
  'escote redondo con jacquard exclusivo millie. Lleva goma millie. Composición: 80% ALGODÓN 10% POLIAMIDA 10% POLIESTER',
  'https://pontetu.cl/cdn/shop/files/41054cb3-d8ef-4697-bfd9-e473725e313e-593a19b8dc4c17c23117175059881142-1024-1024.webp?crop=center&height=1275&v=1717558153&width=850',
  'Medidas: Ancho: 55 cm, Largo: 46 cm, Sisa: 20 cm',
  8900,
  5,
  1);
----------
