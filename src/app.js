const express = require('express');
const app = express();
const port = 3000;
const homeRoutes = require('./routes/homeRoutes');
const barRoutes = require('./routes/barRoutes');
const bebidaRoutes = require('./routes/bebidaRoutes');
const preco = require('./routes/preco');

app.use('/', homeRoutes);
app.use('/bar', barRoutes);
app.use('/bebida', bebidaRoutes);
app.use('/preco', preco);

app.listen(port, () => {
  console.log('rodando na 3k');
});