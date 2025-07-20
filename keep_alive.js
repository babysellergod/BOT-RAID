const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot activo desde Render! ✅');
});

function keepAlive() {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🌐 Servidor Keep-Alive activo en el puerto ${PORT}`);
  });
}

module.exports = keepAlive;
