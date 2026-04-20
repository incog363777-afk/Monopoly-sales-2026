require('dotenv').config();
const app = require('./webhook');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: '🤖 WhatsApp Bot Monopoly Sales 2026 - Online!' });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor ejecutándose en puerto ${PORT}`);
    console.log(`📍 Webhook URL: http://localhost:${PORT}/webhook`);
});