 // --- Cursor Suave (Mejorado) ---
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
    });
});

// --- ¡¡IMPORTANTE!! EDITA ESTAS RAZONES ---
// ¡He creado razones románticas en español para Jennifer!
// Asegúrate de que los archivos gif (ej. 'gif1.gif') existan en tu carpeta.
const reasons = [
    { 
        text: "Porque iluminas mis días con solo una sonrisa. Tu alegría es mi sol. ☀️", 
        emoji: "💖",
        gif: "gif1.gif" // Cambia esto por tu gif
    },
    { 
        text: "Porque en tus brazos encuentro mi lugar seguro, mi hogar y mi paz. 🥰", 
        emoji: "🏠",
        gif: "gif2.gif" // Cambia esto por tu gif
    },
    { 
        text: "Por tu inteligencia y tu forma de ver el mundo, siempre aprendo algo nuevo contigo. 🧠✨", 
        emoji: "🌟",
        gif: "gif1.gif" // Cambia esto por tu gif
    },
    { 
        text: "Porque me amas con una paciencia infinita y me haces querer ser un hombre mejor cada día. ❤️", 
        emoji: "🙏",
        gif: "gif2.gif" // Cambia esto por tu gif
    },
    { 
        text: "Y simplemente... porque eres TÚ. Perfectamente imperfecta, y eres el amor de mi vida. 🌹", 
        emoji: "😍",
        gif: "gif1.gif" // Cambia esto por tu gif
    }
];

// --- Variables del DOM ---
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
const endingSection = document.querySelector('.ending-section');

// --- Estado de la App ---
let currentReasonIndex = 0;
let isTransitioning = false;
let allReasonsShown = false;

// --- Función para crear Tarjetas ---
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    // Estructura mejorada para el emoji
    text.innerHTML = `<span class="emoji">${reason.emoji}</span> ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Recuerdo Bonito">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    // Animación de entrada de la tarjeta
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8, // Más suave
        ease: "elastic.out(1, 0.75)"
    });

    return card;
}

// --- Función para mostrar Razón (Mejorada) ---
function displayNewReason() {
    if (isTransitioning || allReasonsShown) return; // Si ya se mostraron todas, no hace nada
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Actualiza el contador (en español)
        reasonCounter.textContent = `Razón ${currentReasonIndex + 1} de ${reasons.length}`;
        
        currentReasonIndex++;

        // ¡Crea una explosión de emojis!
        for (let i = 0; i < 15; i++) {
            createFloatingElement();
        }

        // --- LÓGICA DEL FINAL ---
        if (currentReasonIndex === reasons.length) {
            allReasonsShown = true;
            
            // Transforma el botón
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    // Cambia el texto del botón (en español)
                    shuffleButton.textContent = "Nuestra historia continúa... 💫";
                    shuffleButton.classList.add('story-mode');
                }
            });

            // --- MUESTRA LA SECCIÓN FINAL (NUEVO) ---
            // Oculta el contador
            gsap.to(reasonCounter, { opacity: 0, duration: 0.5, delay: 0.5 });
            
            // Muestra la sección
            endingSection.style.display = 'block';
            gsap.to(endingSection, { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out', 
                delay: 1 
            });
            // Anima al osito
            gsap.to('.teddy-hug', { 
                scale: 1, 
                duration: 1, 
                ease: 'elastic.out(1, 0.75)', 
                delay: 1.5 
            });
            // Anima el texto final
            gsap.to('.ending-text', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: 1.8 
            });
        }
        
        setTimeout(() => {
            isTransitioning = false;
        }, 800); // Da tiempo a la animación de la tarjeta
    }
}

// --- Listener del Botón Principal (Mejorado) ---
shuffleButton.addEventListener('click', () => {
    // Animación de clic
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });

    if (allReasonsShown) {
        // --- Si ya se mostraron todas, lleva a la PÁGINA FINAL ---
        gsap.to('body', {
            opacity: 0,
            duration: 1,
            ease: "power1.in",
            onComplete: () => {
                // CAMBIA 'last.html' SI TU PÁGINA FINAL SE LLAMA DIFERENTE
                window.location.href = 'last.html'; 
            }
        });
    } else {
        // Si no, muestra la siguiente razón
        displayNewReason();
    }
});

// --- Función de Emojis Flotantes (Mejorada) ---
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '❤️', '⭐', '🥰'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    
    // Aparece cerca del botón
    const buttonRect = shuffleButton.getBoundingClientRect();
    element.style.left = (buttonRect.left + buttonRect.width / 2) + (Math.random() * 100 - 50) + 'px';
    element.style.top = (buttonRect.top + window.scrollY) + 'px';
    element.style.fontSize = (Math.random() * 30 + 25) + 'px'; // Más grandes
    
    document.body.appendChild(element);

    // Animación (más rápida e intensa)
    gsap.to(element, {
        y: (Math.random() * -300) - 200, // Sube
        x: (Math.random() * 300) - 150, // Se esparce
        rotation: Math.random() * 360,
        scale: (Math.random() * 0.5) + 0.5,
        opacity: 1,
        duration: Math.random() * 2 + 2, // Más rápido
        ease: "power1.out",
        onComplete: () => element.remove()
    });
}
