// js/app.js

document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA GLOBAL (Se ejecuta en todas las páginas) ---

    // Inicializar Particles.js si el elemento existe
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#4f46e5" }, "shape": { "type": "circle" }, "opacity": { "value": 0.2, "random": true }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#a78bfa", "opacity": 0.1, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" } },
            "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false } }, "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.2 } } } },
            "retina_detect": true
        });
    }

    // Efecto de scroll en el Header
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('header-scrolled', window.scrollY > 50);
        });
    }
    
    // Animación de aparición con Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Activar animación de KPI si existe en el elemento
                const kpi = entry.target.querySelector('[data-kpi]');
                if (kpi && !kpi.dataset.animated) {
                    animateKPI(kpi);
                    kpi.dataset.animated = 'true';
                }
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Función para animar los contadores de KPIs
    function animateKPI(element) {
        const target = +element.dataset.kpi;
        let current = 0;
        const increment = target / 100;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            element.textContent = Math.ceil(current);
        }, 20);
    }
    
    // Efecto 3D en las tarjetas
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const { width, height } = rect;
            const rotateX = (y / height - 0.5) * -15;
            const rotateY = (x / width - 0.5) * 15;
            card.style.setProperty('--rotateX', `${rotateX}deg`);
            card.style.setProperty('--rotateY', `${rotateY}deg`);
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', '0deg');
            card.style.setProperty('--rotateY', '0deg');
        });
    });

    // --- LÓGICA ESPEĆIFICA DE PÁGINAS ---

    // Generar tarjetas de servicio (solo si el contenedor existe en la página actual)
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer && typeof servicesData !== 'undefined') {
        servicesData.forEach((service, index) => {
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'service-card-wrapper reveal';
            cardWrapper.style.transitionDelay = `${index * 100}ms`;
            
            cardWrapper.innerHTML = `
                <div id="service-${service.id}" class="service-card card-3d glass-effect p-8 rounded-3xl h-full flex flex-col transition-all duration-500">
                    <div class="flex-grow">
                        <h3 class="text-2xl font-bold text-white">${service.title}</h3>
                        <p class="mt-4 text-gray-300">${service.description}</p>
                    </div>
                    <div class="service-card-content">
                        <p class="text-gray-400 text-sm mb-4">${service.detailed}</p>
                        <p class="text-cyan-300 text-xs font-mono mb-4">${service.useCase}</p>
                        <div class="h-16 flex items-center justify-center">${service.visualization}</div>
                    </div>
                    <button class="service-toggle-button mt-6 text-cyan-300 font-semibold flex items-center gap-2">
                        <span>Saber más</span>
                        <svg class="arrow-icon w-4 h-4 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                </div>
            `;
            servicesContainer.appendChild(cardWrapper);
        });

        // Lógica de expansión para las tarjetas de servicio
        servicesContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.service-toggle-button');
            if (!button) return;

            const card = button.closest('.service-card');
            const content = card.querySelector('.service-card-content');
            const isActive = card.classList.contains('active');

            // Cerrar todas las otras tarjetas
            document.querySelectorAll('.service-card.active').forEach(activeCard => {
                if (activeCard !== card) {
                    activeCard.classList.remove('active');
                    activeCard.querySelector('.service-card-content').style.maxHeight = null;
                    activeCard.querySelector('.service-toggle-button span').textContent = 'Saber más';
                }
            });

            // Abrir/Cerrar la tarjeta actual
            card.classList.toggle('active');
            if (!isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
                button.querySelector('span').textContent = 'Cerrar';
            } else {
                content.style.maxHeight = null;
                button.querySelector('span').textContent = 'Saber más';
            }
        });
    }

    // Lógica del Widget de Chat
    const chatButton = document.getElementById('chat-button');
    const chatWidget = document.getElementById('chat-widget');
    const closeChatButton = document.getElementById('close-chat');

    if(chatButton && chatWidget && closeChatButton){
        chatButton.addEventListener('click', () => {
            chatWidget.classList.remove('hidden');
        });
        closeChatButton.addEventListener('click', () => {
            chatWidget.classList.add('hidden');
        });
    }
});