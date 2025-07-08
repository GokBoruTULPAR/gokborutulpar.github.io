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
    // Özel fontun yüklendiğinden emin olmak için FontFaceObserver kullanabiliriz,
    // ancak şimdilik basit bir window.onload veya daha uzun bir setTimeout deneyeceğiz
    // Fontların yüklenmesini beklemek en kritik adımdır
    
    // YAZIYI ORTALAMAK İÇİN H2'YE TEXT-ALIGN: CENTER VERDİYSENİZ, BURAYI OKUYUN:
    // H2'nin kendisi ortalanmışsa ve .typewriter display: inline-block ise
    // .typewriter içindeki genişlik değişirken ortalama sorun yaratabilir.
    // Animasyonu h2'nin kendisi üzerinde yapmak daha kolay olabilir.
    // Alternatif olarak, h2'nin text-align: center'ı kalsın, ancak typewriterElement'in
    // kendisi h2'nin içinde olduğu için ortalamaya devam edecektir.


    // Adım 1: Fontların yüklendiğinden emin olun.
    // document.fonts.ready, tüm web fontlarının yüklendiğinde resolve olan bir Promise döndürür.
    document.fonts.ready.then(() => {
      // Fontlar yüklendikten sonra işlemi başlat

      // Adım 2: Elementin kopya boyutunu almak için geçici bir element oluştur.
      // Bu, orijinal elementin stillerini animasyon başlamadan bozmamızı engeller.
      const tempElement = typewriterElement.cloneNode(true);
      tempElement.style.position = 'absolute';
      tempElement.style.visibility = 'hidden';
      tempElement.style.width = 'auto';
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.style.overflow = 'visible'; // Metni kesme
      tempElement.style.borderRight = 'none'; // Imleci geçici olarak kaldır
      tempElement.style.animation = 'none'; // Animasyonları devre dışı bırak
      tempElement.style.transition = 'none'; // Geçişleri devre dışı bırak

      document.body.appendChild(tempElement);

      // Adım 3: Tarayıcının DOM'a eklemeyi ve stilleri uygulamasını bekle.
      // requestAnimationFrame, bir sonraki çizimden önce çalışmayı garanti eder.
      requestAnimationFrame(() => {
        const actualWidth = tempElement.offsetWidth; // Geçici elementin gerçek genişliğini al
        console.log('Typewriter elementinin gerçek genişliği (font yüklendikten sonra):', actualWidth + 'px');

        // Adım 4: Ölçülen genişliği ana elementin CSS değişkeni olarak ata.
        typewriterElement.style.setProperty('--typewriter-width', `${actualWidth}px`);

        // Adım 5: Geçici elementi kaldır.
        document.body.removeChild(tempElement);

        // Adım 6: Animasyonu tetiklemek için elementin başlangıç genişliğini 0'a ayarla.
        // Bu adımlar, tarayıcının animasyonu sıfırdan başlatmasını sağlar.
        typewriterElement.style.width = '0';
        typewriterElement.style.overflow = 'hidden'; // Animasyon için tekrar gizle

        // Tarayıcının stil değişikliğini fark etmesi için küçük bir "reflow" tetikleme.
        // Bu, animasyonun kesinlikle başlamasını garanti etmenin yaygın bir yoludur.
        void typewriterElement.offsetWidth; // Reflow tetikleniyor

        // NOT: CSS'de animation özelliği zaten tanımlı olduğu için ek bir başlatma gerekmez.
        // Ancak bazı durumlarda (eğer hala çalışmazsa), burada
        // typewriterElement.style.animation = 'none';
        // void typewriterElement.offsetWidth;
        // typewriterElement.style.animation = 'typing 3s steps(16, end) forwards, blink .75s step-end infinite';
        // gibi bir resetleme ve yeniden uygulama yapılabilir.
        // Şimdilik buna gerek yok gibi duruyor.

      });
    });
  }
});