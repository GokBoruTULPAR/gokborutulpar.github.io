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

  // Mobil menü geçişi
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

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
