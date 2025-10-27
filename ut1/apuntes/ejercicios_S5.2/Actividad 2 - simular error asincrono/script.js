document.addEventListener('DOMContentLoaded', function() {
    const loadUsersButton = document.getElementById('loadUsers');
    const simulateErrorButton = document.getElementById('simulateError');
    const retryButton = document.getElementById('retryButton');
    const usersContainer = document.getElementById('usersContainer');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const notificationElement = document.getElementById('notification');
    
    // Función para mostrar notificación
    function showNotification(message, type) {
        notificationElement.textContent = message;
        notificationElement.className = `notification ${type}`;
        notificationElement.classList.add('show');
        
        setTimeout(() => {
            notificationElement.classList.remove('show');
        }, 3000);
    }
    
    // Función para mostrar/ocultar elementos
    function toggleElement(element, show) {
        element.classList.toggle('hidden', !show);
    }
    
    // Función para cargar usuarios desde la API
    function loadUsers(shouldFail = false) {
        // Mostrar estado de carga y ocultar errores
        toggleElement(loadingElement, true);
        toggleElement(errorElement, false);
        toggleElement(usersContainer, false);
        
        // URL para la solicitud (con error si se solicita)
        const url = shouldFail 
            ? 'https://jsonplaceholder.typicode.com/users-invalid-url' 
            : 'https://jsonplaceholder.typicode.com/users';
        
        // Realizar la solicitud a la API
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(users => {
                // Ocultar estado de carga
                toggleElement(loadingElement, false);
                
                // Limpiar contenedor de usuarios
                usersContainer.innerHTML = '';
                
                // Crear elementos para cada usuario
                users.forEach(user => {
                    const userCard = document.createElement('div');
                    userCard.className = 'user-card';
                    
                    const userName = document.createElement('h2');
                    userName.className = 'user-name';
                    userName.textContent = user.name;
                    
                    const userEmail = document.createElement('p');
                    userEmail.className = 'user-email';
                    userEmail.textContent = user.email;
                    
                    userCard.appendChild(userName);
                    userCard.appendChild(userEmail);
                    
                    usersContainer.appendChild(userCard);
                });
                
                // Mostrar contenedor de usuarios
                toggleElement(usersContainer, true);
                
                // Mostrar notificación de éxito
                showNotification('Usuarios cargados correctamente', 'success');
            })
            .catch(error => {
                console.error('Error al cargar usuarios:', error);
                
                // Ocultar estado de carga y mostrar error
                toggleElement(loadingElement, false);
                toggleElement(errorElement, true);
                
                // Mostrar notificación de error
                showNotification('Error al cargar los usuarios', 'error');
            });
    }
    
    // Event listeners para los botones
    loadUsersButton.addEventListener('click', () => loadUsers(false));
    simulateErrorButton.addEventListener('click', () => loadUsers(true));
    retryButton.addEventListener('click', () => loadUsers(false));
});