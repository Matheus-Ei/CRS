CREATE TABLE salas (
	id SERIAL PRIMARY KEY,
	localizacao VARCHAR(50) NOT NULL,
	tipo VARCHAR(20) NOT NULL
);

CREATE TABLE  organizadores (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	cnpj VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE anunciantes (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	cnpj VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE distribuidores (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	cnpj VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE eventos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	descricao TEXT,
	tipo VARCHAR(30) NOT NULL,
	data DATE NOT NULL,
	id_organizador INTEGER REFERENCES organizadores(id),
	custo FLOAT
);

CREATE TABLE pessoas (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	cpf VARCHAR(100) NOT NULL UNIQUE,
	data_nascimento DATE
);


CREATE TABLE tickets (
	id SERIAL PRIMARY KEY,
	id_evento INTEGER REFERENCES eventos(id) NOT NULL,
	id_pessoa INTEGER REFERENCES pessoas(id) NOT NULL,
	id_sala INTEGER REFERENCES salas(id),
	assento VARCHAR(50),
	preco FLOAT
);

CREATE TABLE anuncios (
	id SERIAL PRIMARY KEY,
	valor FLOAT,
	id_evento INTEGER REFERENCES eventos(id),
	id_anunciante INTEGER REFERENCES anunciantes(id)
);

CREATE TABLE distribuicoes (
	id SERIAL PRIMARY KEY,
	id_distribuidora INTEGER REFERENCES distribuidores(id) NOT NULL,
	id_evento INTEGER REFERENCES eventos(id) NOT NULL,
	id_sala INTEGER REFERENCES salas(id) NOT NULL
);

CREATE TABLE estacionamentos (
	id SERIAL PRIMARY KEY,
	localizacao VARCHAR(50),
	preferencial BOOLEAN,
	reservado INTEGER REFERENCES pessoas(id)
);