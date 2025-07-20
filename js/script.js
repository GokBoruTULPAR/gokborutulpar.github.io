document.addEventListener("DOMContentLoaded", () => {

  // particlesJS kütüphanesini burada başlatıyoruz
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#00ffff" },
      "shape": { "type": "circle" },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00ffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "out_mode": "bounce"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": { "opacity": 0.6 }
        },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });

  // Particles.js Konfigürasyonu
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#1a237e'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#1a237e',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

  // Hamburger Menü
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Menüden bir linke tıklanınca menüyü kapat (mobilde)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // İkonu değiştir
    const icon = darkModeToggle.querySelector('i');
    if(document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
  // Sayfa yüklendiğinde dark mode ise ikon güncelle
  window.addEventListener('DOMContentLoaded', () => {
    const icon = darkModeToggle.querySelector('i');
    if(document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

  // Splash giriş animasyonu
  window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    if (splash) {
      setTimeout(() => {
        splash.classList.add('splash-hide');
        setTimeout(() => splash.style.display = 'none', 700);
      }, 1000);
    }
  });

  // Typewriter animasyonu için metnin genişliğini dinamik olarak ayarlama
  const typewriterElement = document.querySelector('.typewriter');

  if (typewriterElement) {




    document.fonts.ready.then(() => {
    

 
      const tempElement = typewriterElement.cloneNode(true);
      tempElement.style.position = 'absolute';
      tempElement.style.visibility = 'hidden';
      tempElement.style.width = 'auto';
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.style.overflow = 'visible'; 
      tempElement.style.borderRight = 'none'; 
      tempElement.style.animation = 'none'; 
      tempElement.style.transition = 'none'; 

      document.body.appendChild(tempElement);

    
      requestAnimationFrame(() => {
        const actualWidth = tempElement.offsetWidth; 
        console.log('Typewriter elementinin gerçek genişliği (font yüklendikten sonra):', actualWidth + 'px');

    
        typewriterElement.style.setProperty('--typewriter-width', `${actualWidth}px`);

      
        document.body.removeChild(tempElement);

        
        typewriterElement.style.width = '0';
        typewriterElement.style.overflow = 'hidden'; 

       
        void typewriterElement.offsetWidth; 


      });
    });
  }
});
