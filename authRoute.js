const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./User');
const { generateToken, updateLastLogin } = require('./Auth');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validation des données
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Email et mot de passe requis.' 
      });
    }

    // Recherche de l'utilisateur
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Identifiants incorrects.' 
      });
    }

    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false,
        message: 'Identifiants incorrects.' 
      });
    }

    // Mise à jour de la dernière connexion
    await updateLastLogin(user._id);

    // Génération du token JWT
    const token = generateToken(user._id);

    // Réponse réussie
    res.status(200).json({
      success: true,
      message: 'Connexion réussie',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name || user.email.split('@')[0]
      }
    });

  } catch (error) {
    console.error('Erreur de connexion:', error);
    res.status(500).json({ 
      success: false,
      message: 'Erreur serveur lors de la connexion.' 
    });
  }
});
// Route d'inscription
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Email et mot de passe requis.' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        success: false,
        message: 'Le mot de passe doit contenir au moins 6 caractères.' 
      });
    }

    // Vérification si l'email existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: 'Cet email est déjà utilisé.' 
      });
    }

    // Création du nouvel utilisateur
    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    // Génération du token
    const token = generateToken(user._id);

    // Réponse
    res.status(201).json({
      success: true,
      message: 'Inscription réussie',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });

  } catch (error) {
    console.error('Erreur inscription:', error);
    res.status(500).json({ 
      success: false,
      message: 'Erreur serveur.' 
    });
  }
});

// Route mot de passe oublié
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'Aucun compte associé à cet email.' 
      });
    }

    // Génération d'un token de réinitialisation
    const resetToken = generateToken(user._id, '15m');
    
    // Envoyer l'email avec le lien de réinitialisation
    // (implémentez cette partie selon votre service d'email)
    
    res.json({ 
      success: true,
      message: 'Un lien de réinitialisation a été envoyé à votre email.' 
    });

  } catch (error) {
    console.error('Erreur mot de passe oublié:', error);
    res.status(500).json({ 
      success: false,
      message: 'Erreur serveur.' 
    });
  }
});

module.exports = router;