function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function setConsistentCardHeight() {
    if (window.innerWidth > 768) {
        let cards = document.querySelectorAll('.card');
        let maxHeight = 0;

        cards.forEach(card => {
            if (card.offsetHeight > maxHeight) {
                maxHeight = card.offsetHeight;
            }
        });

        cards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
    } else {
        document.querySelectorAll('.card').forEach(card => {
            card.style.height = 'auto';
        });
    }
}

function setDynamicCardWidth() {
    const cardContainer = document.querySelector('.image-row');
    const cards = cardContainer.querySelectorAll('.card');
    const containerWidth = cardContainer.offsetWidth;
    const gap = 10;
    const numberOfItemsPerRow = getNumberOfItemsPerRow();

    const cardWidth = (containerWidth - gap * (numberOfItemsPerRow - 1)) / numberOfItemsPerRow;

    cards.forEach(card => {
        card.style.width = `${cardWidth}px`;
    });
}

function getNumberOfItemsPerRow() {
    if (window.innerWidth < 768) {
      return 1;
    }
    else {
      const cards = document.querySelectorAll('.image-row .card').length;

      if (cards >= 3) {
          return 3;
      } else if (cards == 2) {
          return 2;
      } else {
          return 1;
      }
    }
}

function initializePage() {
    setConsistentCardHeight();
    setDynamicCardWidth();
}

window.addEventListener('load', initializePage);
window.addEventListener('resize', function() {
    initializePage();
});
