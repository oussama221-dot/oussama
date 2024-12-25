// Prevent default navigation and handle anchor clicks with href starting with https://
document.querySelectorAll('a[href^="https://"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      window.location.href = href;
    });
  });
  
  // Create and animate floating symbols
  const floatingContainer = document.querySelector('.floating-elements');
  const symbols = ['🍕', '🍝', '🥗', '🍷'];
  
  for (let i = 0; i < 10; i++) {
    const element = document.createElement('div');
    element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    element.className = 'floating-element';
    element.style.left = Math.random() * 100 + '%';
    element.style.top = Math.random() * 100 + '%';
    element.style.animation = `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`;
    element.style.fontSize = '2rem';
    floatingContainer.appendChild(element);
  }
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      // Add active class to clicked button
      button.classList.add('active');
      
      const category = button.textContent.toLowerCase();
      const menuItems = document.querySelectorAll('.menu-item');
      
      menuItems.forEach(item => {
        if (category === 'all') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(category.split(' ')[0])) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
  
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
  });
  document.querySelectorAll('a[href^="https://"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      window.location.href = href;
    });
  });
  
  const aboutCards = document.querySelectorAll('.about-card');
  aboutCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.style.animation = 'fadeInUp 0.8s ease-out forwards';
  });
    document.querySelector('.menu-button').addEventListener('click', () => {
        document.querySelector('.menu').scrollIntoView({ behavior: 'smooth' });
    });