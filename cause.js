// --- BASE DE DATOS DE RAZONES (¡TRADUCIDA Y CON MEJOR TEXTO!) ---
const reasons = [
    // --- Razones de la Distancia y el Vínculo Único ---
    {
        text: "La forma en que nuestro amor supera la distancia y las fronteras, demostrando que es real y fuerte. 🌍",
        emoji: "✈️",
        gif: "gif3.gif"
    },
    {
        text: "Porque cada llamada contigo es un viaje al paraíso, acortando mágicamente los miles de kilómetros que nos separan. 📱",
        emoji: "💫",
        gif: "gif4.gif"
    },
    {
        text: "Aunque haya días de peleas y tormentas, siempre encontramos el camino de vuelta a nuestro amor. Eso es madurez y muchoooo amor. 🤝",
        emoji: "⛈️",
        gif: "gif1.gif"
    },
    {
        text: "La paciencia y la fe que tienes en nosotros, a pesar del tiempo y el sacrificio que exige una relación a distancia. 🙏",
        emoji: "⏳",
        gif: "gif3.gif"
    },

    // --- Razones de su Personalidad y Corazón ---
    {
        text: "Eres una persona tan bondadosa y maravillosa; me siento afortunado de tener un vínculo tan especial contigo. 💖",
        emoji: "🌟",
        gif: "gif1.gif"
    },
    {
        text: "Tu risa es contagiosa y tu energía ilumina cualquier lugar en el que estes. ¡Gracias por ser tú! 🥳",
        emoji: "✨",
        gif: "gif2.gif"
    },
    {
        text: "Tu corazón es tan hermoso como tu exterior. Tienes una luz interior que irradia bondad pura. ✨",
        emoji: "💡",
        gif: "gif4.gif"
    },
    {
        text: "Porque siempre estás ahí para escucharme sin juzgar. ¡Eres mi mejor confidente y apoyo incondicional! 🫂",
        emoji: "💕",
        gif: "gif1.gif"
    },
    {
        text: "Tienes una generosidad increíble: das sin esperar recibir y ayudas a quien lo necesita. Eres admirable. 🎁",
        emoji: "😇",
        gif: "gif2.gif"
    },

    // --- Razones de su Lealtad y Cualidades Protectoras ---
    {
        text: "Eres la persona más fiel que conozco. Tu lealtad y compromiso me dan una paz inmensa. 💍",
        emoji: "🔒",
        gif: "gif3.gif"
    },
    {
        text: "Adoro tu lado 'tóxico' (protector). Saber que me celas y cuidas lo 'tuyo' me hace sentir increíblemente amado y valioso. 😉",
        emoji: "😼",
        gif: "gif4.gif"
    },
    {
        text: "Tu valentía y determinación. Eres una guerrera que lucha por sus sueños y por lo nuestro. 🥊",
        emoji: "💪",
        gif: "gif1.gif"
    },

    // --- Razones Físicas y de Futuro ---
    {
        text: "No miento: eres físicamente hermosa. Cada foto o video tuyo es un regalo para mis ojos. 😍",
        emoji: "📸",
        gif: "gif2.gif"
    },
    {
        text: "Porque el 'Buenos Días' y el 'Buenas Noches' se sienten vacíos si no vienen de ti. Eres mi ritual diario. 🌅",
        emoji: "☕",
        gif: "gif3.gif"
    },
    {
        text: "Te deseo un día lleno de amor, alegría infinita y todo lo que tu corazón anhele. ¡Te amo mucho! 🎉",
        emoji: "🌸",
        gif: "gif4.gif"
    },
    {
        text: "Cada despertar y cada mensaje de 'Buenos días' que cruza océanos me recuerda que vales la pena esperar. 🌅",
        emoji: "☀️",
        gif: "gif2.gif"
    },
    {
        text: "Que, a pesar de las horas de diferencia, siempre nos hacernos sentir cerca. Es un súper poder. ✨",
        emoji: "👀",
        gif: "gif3.gif"
    },
    {
        text: "Tu capacidad para darme paz y estabilidad emocional, incluso cuando mi mundo está patas arriba. Tu tambien eres mi ancla. ⚓",
        emoji: "🧘‍♀️",
        gif: "gif4.gif"
    },

    // --- Razones de su Belleza y Personalidad ---
    {
        text: "Esa carita tuya... es mi cosa favorita en todo el mundo. Verla me recarga las baterías al instante. 😄",
        emoji: "😊",
        gif: "gif1.gif"
    },
    {
        text: "Admiro profundamente tu fuerza para enfrentar los problemas de la vida con la cabeza en alto. Eres una luchadora. 👑",
        emoji: "💪",
        gif: "gif3.gif"
    },
    {
        text: "La dulzura en tu voz, esa que me arrulla incluso a través de un micrófono. Es mi melodía favorita. 🎶",
        emoji: "🎧",
        gif: "gif4.gif"
    },
    {
        text: "Porque no sólo eres preciosa por fuera, sino que tienes un alma y un humor que me hacen reír a carcajadas. 😂",
        emoji: "🤣",
        gif: "gif1.gif"
    },

    // --- Razones de su Lado Protector/Fiel ---
    {
        text: "Me fascina que me defiendas y me protejas. Saber que soy 'tuyo' y que lo demuestras es increíble. 🛡️",
        emoji: "🦁",
        gif: "gif2.gif"
    },
    {
        text: "Tu fidelidad es inquebrantable. Confío en ti más que en nadie en este mundo. Eso no tiene precio. 💎",
        emoji: "💯",
        gif: "gif3.gif"
    },
    {
        text: "Incluso en tu 'toxicidad', lo que veo es amor puro y miedo a perderme. Me hace sentir esencial en tu vida. ❤️‍🔥",
        emoji: "🔥",
        gif: "gif4.gif"
    },

    // --- Razones Románticas y Finales ---
    {
        text: "La forma en que me amas no se compara con nada. Es un amor único, grande y apasionado. Es un privilegio. ✨",
        emoji: "💘",
        gif: "gif1.gif"
    },
    {
        text: "Cada pequeña cosa que haces para hacerme sentir especial, sin necesidad de que te lo pida. Eres atenta y detallista. 🎁",
        emoji: "💌",
        gif: "gif2.gif"
    },
    {
        text: "Eres mi hogar, mi refugio y el lugar donde siempre quiero estar, sin importar en qué país te encuentres. Eres mi TODO. 🏡",
        emoji: "♾️",
        gif: "gif3.gif"
    }
];

// --- Variables DOM y Estado ---
let currentReasonIndex = 0;
let isTransitioning = false;
let allReasonsShown = false;

const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
const endingSection = document.querySelector('.ending-section');
const teddyHug = document.querySelector('.teddy-hug');
const endingText = document.querySelector('.ending-text');


// --- 1. FUNCIÓN CREAR TARJETA ---
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';

    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `<span class="emoji">${reason.emoji}</span> ${reason.text}`;

    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Recuerdo de Amistad">`;

    card.appendChild(text);
    card.appendChild(gifOverlay);

    // Animación de entrada de la tarjeta - USAMOS FROMTO
    gsap.fromTo(card,
        // DESDE (start)
        { opacity: 0, y: 50 },
        // HACIA (end)
        {
            opacity: 1, // <--- ¡Asegura que termine en 1!
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.75)"
        }
    );

    return card;
}


// --- 2. FUNCIÓN MOSTRAR RAZÓN ---
function displayNewReason() {
    if (isTransitioning || allReasonsShown) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);

        // Actualizar contador (Traducido)
        reasonCounter.textContent = `Razón ${currentReasonIndex + 1} de muchas`;

        currentReasonIndex++;

        // Crear una lluvia de emojis
        for (let i = 0; i < 10; i++) {
            createFloatingElement();
        }

        // LÓGICA DEL FINAL
        if (currentReasonIndex === reasons.length) {
            allReasonsShown = true;

            // Animación y cambio de texto del botón (Traducido)
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent = "¡Nuestra Historia Continúa! 💫";
                    shuffleButton.classList.add('story-mode');
                }
            });

            // Muestra la sección final con animación
            gsap.to(reasonCounter, { opacity: 0, duration: 0.5, delay: 0.5 });

            endingSection.style.display = 'block';
            gsap.to(endingSection, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1 });
            gsap.to(teddyHug, { scale: 1, duration: 1, ease: 'elastic.out(1, 0.75)', delay: 1.5 });
            gsap.to(endingText, { opacity: 1, y: 0, duration: 1, delay: 1.8 });

        }

        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }
}


// --- 3. FUNCIÓN BOTÓN (CORREGIDA LA LÓGICA FINAL) ---
shuffleButton.addEventListener('click', () => {
    // Animación de clic
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });

    if (allReasonsShown) {
        // Lógica de transición a la página final
        gsap.to('body', {
            opacity: 0,
            duration: 1,
            ease: "power1.in",
            onComplete: () => {
                window.location.href = 'last.html';
            }
        });
    } else {
        // Mostrar la siguiente razón
        displayNewReason();
    }
});


// --- 4. FUNCIÓN DE EMOTICONES FLOTANTES (MEJORADA) ---
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐', '🎈'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];

    // Posición inicial cerca del botón para el "efecto explosión"
    const buttonRect = shuffleButton.getBoundingClientRect();
    element.style.left = (buttonRect.left + buttonRect.width / 2) + (Math.random() * 100 - 50) + 'px';
    element.style.top = (buttonRect.top + window.scrollY) + 'px';
    element.style.fontSize = (Math.random() * 30 + 15) + 'px';

    document.body.appendChild(element);

    // Animación de flotación y dispersión
    gsap.to(element, {
        y: (Math.random() * -300) - 100, // Vuela hacia arriba
        x: (Math.random() * 300) - 150, // Se esparce lateralmente
        rotation: Math.random() * 360,
        opacity: 0,
        scale: (Math.random() * 1) + 0.5,
        duration: Math.random() * 3 + 2,
        ease: "power1.out",
        onComplete: () => element.remove()
    });
}