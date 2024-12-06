const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Carrega os modelos passando `sequelize`
const Administrador = require('./Administrador')(sequelize);
const Carrinho = require('./Carrinho')(sequelize);
const Cliente = require('./Cliente')(sequelize);
const Compra = require('./Compra')(sequelize);
const Estoque = require('./Estoque')(sequelize);
const Funcionario = require('./Funcionario')(sequelize);
const Produto = require('./Produto')(sequelize);
const Venda = require('./Venda')(sequelize);

// Relacionamentos

// Relacionamento: Um Administrador pode gerenciar vários Funcionários
Administrador.hasMany(Funcionario, { 
    foreignKey: 'idAdministrador', 
    as: 'funcionarios' 
});
Funcionario.belongsTo(Administrador, { 
    foreignKey: 'idAdministrador', 
    as: 'administrador' 
});

// Relacionamento: Um Cliente pode ter vários Carrinhos
Cliente.hasMany(Carrinho, { 
    foreignKey: 'idCliente', 
    as: 'carrinhos' 
});
Carrinho.belongsTo(Cliente, { 
    foreignKey: 'idCliente', 
    as: 'cliente' 
});

// Relacionamento: Um Carrinho pode ter vários Produtos
Carrinho.hasMany(Produto, { 
    foreignKey: 'idCarrinho', 
    as: 'produtos' 
});
Produto.belongsTo(Carrinho, { 
    foreignKey: 'idCarrinho', 
    as: 'carrinho' 
});

// Relacionamento: Um Cliente pode fazer várias Compras
Cliente.hasMany(Compra, { 
    foreignKey: 'idCliente', 
    as: 'compras' 
});
Compra.belongsTo(Cliente, { 
    foreignKey: 'idCliente', 
    as: 'cliente' 
});

// Relacionamento: Um Produto pode estar em vários Estoques
Produto.belongsToMany(Estoque, { 
    through: 'ProdutoEstoque', 
    foreignKey: 'idProduto', 
    as: 'estoques' 
});
Estoque.belongsToMany(Produto, { 
    through: 'ProdutoEstoque', 
    foreignKey: 'idEstoque', 
    as: 'produtos' 
});

// Relacionamento: Um Funcionario pode realizar várias Vendas
Funcionario.hasMany(Venda, { 
    foreignKey: 'idFuncionario', 
    as: 'vendas' 
});
Venda.belongsTo(Funcionario, { 
    foreignKey: 'idFuncionario', 
    as: 'funcionario' 
});

// Relacionamento: Uma Compra pode ter muitos Produtos
Compra.belongsToMany(Produto, { 
    through: 'CompraProduto', 
    foreignKey: 'idCompra', 
    as: 'produtos' 
});
Produto.belongsToMany(Compra, { 
    through: 'CompraProduto', 
    foreignKey: 'idProduto', 
    as: 'compras' 
});

// Relacionamento: Uma Venda pode ter muitos Produtos
Venda.belongsToMany(Produto, { 
    through: 'VendaProduto', 
    foreignKey: 'idVenda', 
    as: 'produtos' 
});
Produto.belongsToMany(Venda, { 
    through: 'VendaProduto', 
    foreignKey: 'idProduto', 
    as: 'vendas' 
});

// Sincroniza o banco de dados
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { 
    sequelize, 
    Administrador, 
    Carrinho, 
    Cliente, 
    Compra, 
    Estoque, 
    Funcionario, 
    Produto, 
    Venda 
};
