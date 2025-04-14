INSERT INTO salas (localizacao, tipo)
VALUES
	('r2a', 'camarote'),
	('t4g', 'imprensa'),
	('g5t', 'imprensa');

INSERT INTO organizadores (nome, cnpj)
VALUES
	('Eventos xaxim', '5834.40.43014.44-4'),
	('The organizer', '4234.4234214.122-1'),
	('Master eventos', '42142.41234.411-9');

INSERT INTO anunciantes (nome, cnpj)
VALUES
	('Nike', '5834.40.43014.44-4'),
	('Bet Sports', '4234.4234214.122-1'),
	('Itaú', '42142.41234.411-9');

INSERT INTO distribuidores (nome, cnpj)
VALUES
	('Globo', '5834.40.43014.44-4'),
	('SCTV', '4234.4234214.122-1'),
	('SBT', '42142.41234.411-9');

INSERT INTO eventos (nome, descricao, tipo, data, id_organizador, custo)
VALUES
	('Grenal 2025', 'Uma partida épica entre gremio e inter pelo titulo da libertadores', 'jogo', '22-04-2025', 1, 100230.40),
	('Baladinha no estadio', 'Um pequeno evento para jogadores aproveitarem o fim da temporada de jogos', 'balada', '15-02-2020', 3, 31330.77),
	('Visita de turistas', 'Visita de algumas pessoas influentes interessadas em conhecer o estádio', 'visita', '18-07-2023', 2, 5230.15);

INSERT INTO pessoas (nome, cpf, data_nascimento)
VALUES
	('Jonas Abelardo Silva', '432.412.412-50', '22-01-2000'),
	('Edenilson Lucas Pinto', '566.221.341-66', '18-11-1980'),
	('Julio Lanzarini Carvalho', '423.442.111-43', '30-08-2002');

INSERT INTO tickets (id_evento, id_pessoa, assento, preco, id_sala)
VALUES
	(1, 1, 'fd8', 10.00, 1),
	(1, 2, '4kj', 10.00, NULL),
	(1, 3, 'iaa', 15.00, NULL),
	(2, 1, '3jk', 15.00, NULL),
	(2, 2, '9jd', 10.00, NULL),
	(3, 1, 'js6', 9.00, NULL),
	(3, 3, 'lo3', 10.00, NULL);


INSERT INTO anuncios (valor, id_evento, id_anunciante)
VALUES
	(20422.23, 1, 2),
	(9331.90, 2, 1),
	(42348.52, 1, 3);

INSERT INTO distribuicoes (id_distribuidora, id_evento, id_sala)
VALUES
	(1, 2, 2),
	(3, 2, 3),
	(1, 1, 2),
	(2, 3, 3);

INSERT INTO estacionamentos (localizacao, preferencial, reservado)
VALUES
	('fd8', true, 2),
	('4kj', true, NULL),
	('iaa', false, NULL),
	('3jk', false, NULL),
	('9jd', false, NULL);
