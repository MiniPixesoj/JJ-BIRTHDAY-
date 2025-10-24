// --- EFECTO DE CURSOR SUAVE (MEJORADO CON GSAP) ---
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    // Usamos GSAP para un movimiento suave que sigue al mouse
    gsap.to(cursor, {
        duration: 0.3, // Puedes ajustar la suavidad (más alto = más lento)
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out" // Efecto de desaceleración suave
    });
});
// --- FIN DEL EFECTO DE CURSOR ---


// Texto de bienvenida personalizado para Jennifer
const greetingText = "Feliz cumpleaños mi amor. Eres la persona más maravillosa que he conocido... ❤️";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 80); // Un poco más rápido
    }
}

// Emojis flotantes (añadí el corazón rojo ❤️)
const floatingElements = ['💖', '✨', '🌸', '❤️', '💕', '🥰'];

function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';

    // --- CAMBIO 1: MÁS INTENSOS (MÁS GRANDES) ---
    element.style.fontSize = (Math.random() * 30 + 25) + 'px';

    document.body.appendChild(element);

    gsap.to(element, {
        y: -500, // Que suban

        // --- CAMBIO 2: MÁS INTENSOS (MÁS MOVIMIENTO) ---
        x: Math.random() * 200 - 100,

        rotation: Math.random() * 360,

        // --- CAMBIO 3: MÁS RÁPIDO ---
        duration: Math.random() * 3 + 3,

        opacity: 1,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// Inicializar animaciones
window.addEventListener('load', () => {
    // Animación del título
    gsap.to('h1', {
        opacity: 1,
        duration: 1.5, // Más suave
        y: 0, // Empezar desde su posición
        scale: 1,
        from: { y: -50, scale: 0.8 }, // Desde arriba y pequeño
        ease: "elastic.out(1, 0.75)" // Efecto elástico
    });

    // Animación del botón
    gsap.to('.cta-button', {
        opacity: 1,
        duration: 1,
        y: 0,
        from: { y: 50 }, // Desde abajo
        ease: "back.out(1.7)", // Efecto "back"
        delay: 0.5 // Aparece después del título
    });

    // Empezar efecto de escritura (después de una breve pausa)
    setTimeout(typeGreeting, 1000);

    // --- CAMBIO 4: MÁS ABUNDANTES ---
    setInterval(createFloating, 300);
});


// === NUEVAS VARIABLES DE AUDIO ===
const ctaButton = document.querySelector('.cta-button');
const backgroundMusic = document.getElementById('backgroundMusic');
const clickSound = document.getElementById('clickSound');

let musicStarted = false; // Bandera para controlar la reproducción de fondo

function playClickSound() {
    if (clickSound) {
        clickSound.currentTime = 0; // Reinicia para permitir múltiples clics rápidos
        clickSound.volume = 0.8; // Volumen del sonido de clic
        clickSound.play().catch(e => console.error("Error al reproducir el sonido de clic:", e));
    }
}
// ===================================


// Efectos de hover y clic del botón
ctaButton.addEventListener('click', (e) => {
    e.preventDefault(); // Previene cualquier comportamiento por defecto

    // 1. Lógica de inicio de música (Solo en el primer clic)
    if (!musicStarted && backgroundMusic) {
        backgroundMusic.volume = 0.4; // Volumen más bajo para el fondo
        backgroundMusic.play().catch(e => console.error("Error al iniciar la música de fondo:", e));
        musicStarted = true;
    }

    // 2. Sonido del clic
    playClickSound();

    // 3. Transición suave de página al hacer clic
    gsap.to('body', {
        opacity: 0,
        duration: 0.7,
        ease: "power1.in",
        onComplete: () => {
            // Detener la música al salir de la página
            if (backgroundMusic) backgroundMusic.pause();
            // Aquí va la página de las "razones"
            window.location.href = 'cause.html';
        }
    });
});