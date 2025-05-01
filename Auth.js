const jwt = require('jsonwebtoken');
const config = require('./config');

const JWT_SECRET = config.JWT_SECRET;
// Auth.js
const User = require('./User'); // Ajoutez cette ligne en haut du fichier

// Middleware pour vérifier le JWT
exports.authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ 
      success: false,
      message: 'Authentification requise' 
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    return res.status(403).json({ 
      success: false,
      message: 'Token invalide ou expiré' 
    });
  }
};

// Génération du token JWT
exports.generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { 
    expiresIn: config.JWT_EXPIRE || '7d' 
  });
};

// Mise à jour de la dernière connexion
exports.updateLastLogin = async (userId) => {
  try {
    await User.findByIdAndUpdate(userId, { 
      lastLogin: Date.now() 
    });
  } catch (error) {
    console.error('Erreur mise à jour dernière connexion:', error);
  }
};