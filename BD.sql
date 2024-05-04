-- Tabela Bebidas
CREATE TABLE Bebidas (
    id_bebida SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    descricao TEXT,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Bares
CREATE TABLE Bares (
    id_bar SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    descricao TEXT,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Associação Bar_Bebida
CREATE TABLE Bar_Bebida (
    id_bar_bebida SERIAL PRIMARY KEY,
    id_bar INTEGER REFERENCES Bares(id_bar),
    id_bebida INTEGER REFERENCES Bebidas(id_bebida),
    preco DECIMAL(10, 2) NOT NULL,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uk_bar_bebida UNIQUE (id_bar, id_bebida) -- Garante que uma bebida só pode ter um preço em um bar
);
