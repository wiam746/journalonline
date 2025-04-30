export const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simuler une requête API avec délai
      setTimeout(() => {
        // Pour la démo, nous acceptons n'importe quel email/mot de passe non vides
        // Dans un vrai cas, vous feriez ici un appel fetch() à votre API
        if (email && password) {
          // Données utilisateur simulées après une connexion réussie
          const userData = {
            id: '123456',
            name: email.split('@')[0], // Juste pour avoir un nom à afficher
            email: email,
            // autres données utilisateur...
          };
          
          // Simuler l'enregistrement du jeton d'authentification
          localStorage.setItem('token', 'fake-jwt-token');
          localStorage.setItem('user', JSON.stringify(userData));
          
          resolve(userData);
        } else {
          reject(new Error('Email ou mot de passe incorrect'));
        }
      }, 1000); // Délai simulé de 1 seconde
    });
  };