// Animation légère sur les cartes au survol (déjà géré par CSS, mais on peut ajouter un effet JS si besoin)
// Préparation pour menu responsive (ex : hamburger)
// Placeholder pour fonctionnalités futures

document.addEventListener('DOMContentLoaded', function() {
  // Exemple : effet d'ombre supplémentaire au survol (optionnel)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 12px 32px rgba(0,87,183,0.18)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });

  // Placeholder pour menu responsive (à compléter si besoin)
}); 