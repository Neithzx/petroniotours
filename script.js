document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para la navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Quitar clase 'active' de todos los enlaces y añadir al actual
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            // Asegurarse de que el ID es un selector válido (ej. #hero)
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Función para mostrar información de paquete de prueba en "Mi Cuenta"
    const showAccountInfoBtn = document.getElementById('show-account-info');
    const userPackageDetails = document.getElementById('user-package-details');
    const userNameSpan = document.getElementById('user-name');
    const packageNameSpan = document.getElementById('package-name');
    const packageBenefitsList = document.getElementById('package-benefits-list');
    const packageSchedule = document.getElementById('package-schedule');
    const packagePrograms = document.getElementById('package-programs');

    if (showAccountInfoBtn) { // Asegurarse de que el botón existe
        showAccountInfoBtn.addEventListener('click', function() {
            if (userPackageDetails.classList.contains('hidden-content')) {
                // Mostrar contenido de prueba (simulando que el usuario "tiene" un paquete)
                userNameSpan.textContent = 'Viajero del Pacífico'; // Nombre de usuario de prueba
                packageNameSpan.textContent = 'Paquete Esencia Pacífico';
                
                // Limpiar beneficios previos y añadir los nuevos
                packageBenefitsList.innerHTML = ''; 
                const benefits = [
                    'Transporte Aeropuerto - Hotel - Aeropuerto',
                    '3 Noches de Alojamiento en Hotel Seleccionado',
                    'Desayuno Diario Incluido',
                    'Transporte Hotel - Festival - Hotel (diario)',
                    '1 Noche de Integración Cultural'
                ];
                benefits.forEach(benefit => {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    packageBenefitsList.appendChild(li);
                });

                packageSchedule.textContent = 'Agosto 14-18, 2025 (Fechas del Festival)'; // Ejemplo de fechas
                packagePrograms.textContent = 'Consulta la programación oficial del festival directamente en la página del evento (ej. escenario principal, tarima de cocinas, etc.).'; // Ejemplo de programas
                
                userPackageDetails.classList.remove('hidden-content');
                this.textContent = 'Ocultar Información de Prueba'; // Cambiar texto del botón
            } else {
                // Ocultar contenido
                userPackageDetails.classList.add('hidden-content');
                this.textContent = 'Mostrar Información de Prueba'; // Restaurar texto del botón
            }
        });
    }

    // Validación básica del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir el envío real del formulario por ahora

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (nombre === '' || email === '' || mensaje === '') {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }

            // Validación de email básica
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            alert('¡Gracias por tu mensaje, ' + nombre + '! Nos pondremos en contacto contigo pronto.');
            contactForm.reset(); // Limpiar el formulario después del envío (simulado)
        });
    }
});