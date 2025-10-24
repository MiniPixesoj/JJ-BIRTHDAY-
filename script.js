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
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500, // Que suban
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 7, // Duración un poco más larga
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

    // Crear elementos flotantes
    setInterval(createFloating, 800); // Un poco más frecuentes
});

// Efectos de hover y clic del botón
document.querySelectorAll('.cta-button').forEach(button => {
    // El hover de CSS ya es bueno, así que quitamos el de GSAP para evitar conflictos
    // button.addEventListener('mouseenter', ...
    // button.addEventListener('mouseleave', ...

    // Transición suave de página al hacer clic
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Previene cualquier comportamiento por defecto
        gsap.to('body', {
            opacity: 0,
            duration: 0.7,
            ease: "power1.in",
            onComplete: () => {
                // Aquí va la página de las "razones"
                window.location.href = 'cause.html'; 
            }
        });
    });
});
