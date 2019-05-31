const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('loja.db');

const criarTabela = `CREATE TABLE IF NOT EXISTS produto (
    descricao text NOT NULL,
    tipoItem varchar(50) NOT NULL,
    url varchar(50) NOT NULL,
    id int(11) NOT NULL,
    nomeItem varchar(50) NOT NULL
  )`;
  const inserirDados = `INSERT INTO produto('descricao','tipoItem','url','id','nomeItem') VALUES
  ('Abridor de Garrafa', 'Outros', 'Abridor1.png', 1, 'Abridor de Garrafa'),
  ('Camiseta 2017', 'Camiseta', 'Camiseta1.png', 2, 'Camiseta 2017'),
  ('Camiseta 2018', 'Camiseta', 'Camiseta2.png', 3, 'Camiseta 2018'),
  ('Camiseta 2019', 'Camiseta', 'Camiseta3.png', 4, 'Camiseta 2019'),
  ('Caneca 2017', 'Caneca', 'Caneca1.png', 5, 'Caneca 2017'),
  ('Caneca 2018', 'Caneca', 'Caneca2.png', 6, 'Caneca 2018'),
  ('Caneca 2019', 'Caneca', 'Caneca3.png', 7, 'Caneca 2019'),
  ('Moletom 2017', 'Moletom', 'Moletom1.png', 8, 'Moletom 2017'),
  ('Moletom 2018', 'Moletom ', 'Moletom2.png', 9, 'Moletom 2018'),
  ('Moletom 2019 ', 'Moletom', 'Moletom3.png', 10, 'Moletom 2019'),
  ('Adesivo ', 'Outros', 'Adesivo1.png', 11, 'Adesivo'),
  ('Chaveiro ', 'Outros', 'Chaveiro1.png', 12, 'Chaveiro') 
  `;  
bd.serialize(function(){
    bd.run(criarTabela);
    bd.run(inserirDados);
});

  module.exports = bd;