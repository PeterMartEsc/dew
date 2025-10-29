async function cargarDatos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Fallo en la carga');
        }
        const datos = await response.json();
        console.log(datos);
    } catch (error) {
        console.error('Error:', error);
    }
}
cargarDatos();