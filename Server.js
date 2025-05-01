// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const authRoutes = require('./authRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: config.NODE_ENV === 'development' ? '*' : config.FRONTEND_URL,
  credentials: true
}));

// Connexion MongoDB
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connecté avec succès'))
.catch(err => {
  console.error('Erreur de connexion MongoDB:', err.message);
  process.exit(1);
});

// Routes
app.use('/api/auth', authRoutes);

// Route test
app.get('/', (req, res) => {
  res.send('API d\'authentification en fonctionnement');
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur serveur interne' });
});

// Démarrage serveur
const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} en mode ${config.NODE_ENV}`);
});