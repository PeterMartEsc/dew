# UD01UT01 Arquitecturas y Lenguajes de Programación en Clientes Web

## Actividad 1

1. __¿En qué se diferencian esencialmente ambos modelos en términos de dónde se ejecuta el código y quién tiene acceso a los resultados?__

    Las dierencias entre la ejecución en entorno __servidor__ y __cliente__, comienzan en que, el codigo que se ejecuta en entorno del __cliente__, ocurre en el __navegador__ del usuario que interactúa con él, mientras que el código en el lado del __servidor__ se ejecuta en un __servidor remoto__ para gestionar datos, lógica de negocio y la generación de contenido antes de __enviarlo al cliente__. Por esto mismo, el codigo ejecutado en entorno del __cliente__, __puede ser accedido por el usuario__, mientras que el que se ejecuta en entorno de __servidor__, es procesado por este, así que __no es accesible__.

2. __Desde la consola del navegador (F12 → Console), ejecuta el siguiente código JavaScript: console.log('Hola desde el cliente'). Luego, intenta imaginar y explicar por qué no sería posible ejecutar un código PHP directamente en esa misma consola__

    No sería posible por que el codigo de __php se ejecuta en entorno de servidor__ y no es accesible por el usuario, al contrario que el de __JavaScript__, que como acabamos de comprobar, __se ejecuta en el cliente__.

3. __Reflexión: Basándote en lo anterior, enumera al menos una ventaja y una desventaja clave de la programación en el cliente (JavaScript) frente a la programación tradicional en el servidor.__

    Una __desventaja__ de la ejecución en servidor respecto al cliente, es su __alto coste de mantenimiento__ y la __dependencia__ de todos los usuarios de este. Aun que por otro lado, una ventaja que tiene, es la __centralización de datos__, lo que implica __más seguridad__ y __evita la inconsistencia de datos__.