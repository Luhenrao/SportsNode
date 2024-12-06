const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Administrador, Carrinho, Cliente, Compra, Estoque, Funcionario, Produto, Venda} = require('./models'); // importa os modelos corretamente

const app = express();
app.use(bodyParser.json());

// Rotas para Cliente
app.post('/cliente', async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.update(req.body);
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.destroy();
      res.json({ message: 'Cliente deletado' });
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rotas para Produto
app.post('/produto', async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.update(req.body);
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.destroy();
      res.json({ message: 'Produto deletado' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rotas para Venda
app.post('/venda', async (req, res) => {
  try {
    const venda = await Venda.create(req.body);
    res.status(201).json(venda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/vendas', async (req, res) => {
  try {
    const vendas = await Venda.findAll();
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/vendas/:id', async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (venda) {
      res.json(venda);
    } else {
      res.status(404).json({ error: 'Venda não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/vendas/:id', async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (venda) {
      await venda.destroy();
      res.json({ message: 'Venda deletada' });
    } else {
      res.status(404).json({ error: 'Venda não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/funcionario', async (req, res) => {
    try {
      const funcionario = await Funcionario.create(req.body);
      res.status(201).json(funcionario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/funcionarios', async (req, res) => {
    try {
      const funcionarios = await Funcionario.findAll();
      res.json(funcionarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/funcionarios/:id', async (req, res) => {
    try {
      const funcionario = await Funcionario.findByPk(req.params.id);
      if (funcionario) {
        res.json(funcionario);
      } else {
        res.status(404).json({ error: 'Funcionário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.put('/funcionarios/:id', async (req, res) => {
    try {
      const funcionario = await Funcionario.findByPk(req.params.id);
      if (funcionario) {
        await funcionario.update(req.body);
        res.json(funcionario);
      } else {
        res.status(404).json({ error: 'Funcionário não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/funcionarios/:id', async (req, res) => {
    try {
      const funcionario = await Funcionario.findByPk(req.params.id);
      if (funcionario) {
        await funcionario.destroy();
        res.json({ message: 'Funcionário deletado' });
      } else {
        res.status(404).json({ error: 'Funcionário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.post('/administrador', async (req, res) => {
    try {
      const administrador = await Administrador.create(req.body);
      res.status(201).json(administrador);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/administradores', async (req, res) => {
    try {
      const administradores = await Administrador.findAll();
      res.json(administradores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/administradores/:id', async (req, res) => {
    try {
      const administrador = await Administrador.findByPk(req.params.id);
      if (administrador) {
        res.json(administrador);
      } else {
        res.status(404).json({ error: 'Administrador não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.put('/administradores/:id', async (req, res) => {
    try {
      const administrador = await Administrador.findByPk(req.params.id);
      if (administrador) {
        await administrador.update(req.body);
        res.json(administrador);
      } else {
        res.status(404).json({ error: 'Administrador não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/administradores/:id', async (req, res) => {
    try {
      const administrador = await Administrador.findByPk(req.params.id);
      if (administrador) {
        await administrador.destroy();
        res.json({ message: 'Administrador deletado' });
      } else {
        res.status(404).json({ error: 'Administrador não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.post('/carrinho', async (req, res) => {
    try {
      const carrinho = await Carrinho.create(req.body);
      res.status(201).json(carrinho);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/carrinhos', async (req, res) => {
    try {
      const carrinhos = await Carrinho.findAll();
      res.json(carrinhos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/carrinhos/:id', async (req, res) => {
    try {
      const carrinho = await Carrinho.findByPk(req.params.id);
      if (carrinho) {
        res.json(carrinho);
      } else {
        res.status(404).json({ error: 'Carrinho não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.put('/carrinhos/:id', async (req, res) => {
    try {
      const carrinho = await Carrinho.findByPk(req.params.id);
      if (carrinho) {
        await carrinho.update(req.body);
        res.json(carrinho);
      } else {
        res.status(404).json({ error: 'Carrinho não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/carrinhos/:id', async (req, res) => {
    try {
      const carrinho = await Carrinho.findByPk(req.params.id);
      if (carrinho) {
        await carrinho.destroy();
        res.json({ message: 'Carrinho deletado' });
      } else {
        res.status(404).json({ error: 'Carrinho não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.post('/estoque', async (req, res) => {
    try {
      const estoque = await Estoque.create(req.body);
      res.status(201).json(estoque);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/estoques', async (req, res) => {
    try {
      const estoques = await Estoque.findAll();
      res.json(estoques);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/estoques/:id', async (req, res) => {
    try {
      const estoque = await Estoque.findByPk(req.params.id);
      if (estoque) {
        res.json(estoque);
      } else {
        res.status(404).json({ error: 'Estoque não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.put('/estoques/:id', async (req, res) => {
    try {
      const estoque = await Estoque.findByPk(req.params.id);
      if (estoque) {
        await estoque.update(req.body);
        res.json(estoque);
      } else {
        res.status(404).json({ error: 'Estoque não encontrado' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/estoques/:id', async (req, res) => {
    try {
      const estoque = await Estoque.findByPk(req.params.id);
      if (estoque) {
        await estoque.destroy();
        res.json({ message: 'Estoque deletado' });
      } else {
        res.status(404).json({ error: 'Estoque não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.post('/compra', async (req, res) => {
    try {
      const compra = await Compra.create(req.body);
      res.status(201).json(compra);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/compras', async (req, res) => {
    try {
      const compras = await Compra.findAll();
      res.json(compras);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/compras/:id', async (req, res) => {
    try {
      const compra = await Compra.findByPk(req.params.id);
      if (compra) {
        res.json(compra);
      } else {
        res.status(404).json({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.put('/compras/:id', async (req, res) => {
    try {
      const compra = await Compra.findByPk(req.params.id);
      if (compra) {
        await compra.update(req.body);
        res.json(compra);
      } else {
        res.status(404).json({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/compras/:id', async (req, res) => {
    try {
      const compra = await Compra.findByPk(req.params.id);
      if (compra) {
        await compra.destroy();
        res.json({ message: 'Compra deletada' });
      } else {
        res.status(404).json({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  
  

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
