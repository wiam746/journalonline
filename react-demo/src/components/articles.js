import React from 'react';
import '../style/articles.css';
import { Link } from 'react-router-dom';

function Articles() {
  const articles = [
    {
      id: 1,
      image: "image/Capture d’écran 2025-04-12 222501.png", // Replace with actual path
      title: 'Microsoft Majorana 1 : révolution quantique ou simple coup marketing ? ',
      excerpt: 'Microsoft revient à la charge avec les fermions de Majorana et promet un bond en avant pour l’informatique quantique. Entre résultats expérimentaux intrigants et marketing bien rodé, son nouveau processeur “Majorana 1” soulève autant d’espoirs que de scepticisme...',
      date: '4 mars 2023',
      author: 'Admin',
      link: '/article/1'
    },
    {
      id: 2,
      image: 'image/Capture d’écran 2025-04-12 222824.png',
      title: 'Production d’hydrogène vert au Maroc: Quelle technologie est la plus adaptée à diﬀérents niveaux de pénétration renouvelable?',
      excerpt: 'En effet, compte tenu des conditions géographiques favorables du Maroc, les technologies solaires (PV et CSP) et éoliennes sont généralement considérées comme les plus prometteuses. Le Maroc bénéﬁcie d’un ensoleillement abondant tout au long de l’année et d’un excellent potentiel éolien.... ',
      date: '2 mars 2023',
      author: 'Admin',
      link: '/article/2'
    },
    {
      id: 3,
      image: "image/Capture d’écran 2025-04-12 223100.png",
      title: 'Propriété intellectuelle : la convergence technologique au secours des ayants droit',
      excerpt: 'Des agents d IA pourront bientôt surveiller le web à la recherche de copies et de diffusions illégales de contenus. Alliée à la blockchain, l IA pourrait être le futur de la propriété intellectuelle, analyse Fabien Aufrechter, directeur Innovation & Stratégie chez Vivendi....',
      date: '28 févr 2023',
      author: 'Admin',
      link: '/article/3'
    },
    {
      id: 4,
      image: "image/Capture d’écran 2025-04-12 223715.png",
      title: 'Le génie électrique au-delà de l’énergie',
      excerpt: 'Au-delà des barrages et des immenses projets de la filière des batteries, le génie électrique se déploie un peu partout. Portrait d une jeune ambassadrice du secteur : Cassie-Anaïs Savoie, étudiante de 22 ans à Polytechnique Montréal, à qui l engagement a valu en février 2023 la Bourse de leadership au féminin Hatch commémorative 6 décembre 1989....',
      author: 'Admin',
      link: '/article/4'
    }
  ];

  return (
    <div className="articles-container">
      <h1 className="section-title">
        <span className="arrow">&#62;</span>Les articles
      </h1>
      
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-image-container">
              <img src={article.image} alt={article.title} className="article-image" />
            </div>
            <div className="article-content">
              <h2 className="article-title">
                <Link to={article.link}>{article.title}</Link>
              </h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-date">{article.date}</span> - <span className="article-author">{article.author}</span> - 
                <Link to={article.link} className="read-more">Lire plus</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="pagination-item active">1</button>
        <button className="pagination-item">2</button>
        <button className="pagination-item">3</button>
        <button className="pagination-item dots">...</button>
        <button className="pagination-item">8</button>
        <button className="pagination-item">9</button>
        <button className="pagination-item next">&#62;</button>
      </div>

      <footer className="article-footer">
        <p>Copyright © 2023 Ensa Nationale des Sciences Appliquées - All rights reserved</p>
      </footer>
    </div>
  );
}

export default Articles;