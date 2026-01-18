<template>
  <Navbar />

  <div class="min-h-screen bg-sh-950 text-white">
    <div class="max-w-4xl mx-auto px-6 py-10">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Desarrollador de Software</h2>
        <h2 class="text-xl mb-4"> L-Università ta' Malta – Xewkija, Malta</h2>
        <h4 class="text-md mb-4">[ 10/03/2025 – 16/05/2025 ]</h4>

        <div class="rounded-xl bg-sh-800 p-5">
          <p class="mb-2">
            Practicas de <b>ERASMUS</b> como <b>Desarrollador de Software</b> para el ciclo de <b>DAM</b>
          </p>

          <p class="mb-2">
            Proyecto de una <b>web/app</b> de gestión para el servicio de emergencias local <b>Emergency Response and
              Rescue Corps (ERRC)</b>
          </p>

          <p class="mb-2">
            <b>Supervisor:</b> Prof. Matthew Montebello
            <br>
            <b>Puesto:</b> Desarrollador de Frontend
          </p>

          <p class="text-justify">
            Desarrollo dividido en partes, de la web de gestión para el <b>equipo de emergencias</b>. Un equipo se
            centró en el
            <b>Backend</b>, realizando la <b>API</b> en el framework de Python <b>Django</b>, y otro en el
            <b>Frontend</b> que consumiese la <b>API</b>, realizado
            en el framework <b>React</b> con Typescript.
          </p>
        </div>

        <!-- <h4 class="mt-6 text-mb font-semibold">Herramientas empleadas:</h4>

        <ul class="ml-5 mb-6 mt-4">
          <li>React</li>
          <li>Typescript</li>
          <li>VS Code</li>
          <li>
            GitHub Repositories, Issues & Projects
          </li>
          <li>Figma</li>
        </ul> -->

        <h4 class="mt-6 text-md font-semibold mb-4">Procedimiento</h4>

        <div class="rounded-xl bg-sh-800 p-5">
          <p class="text-justify">
            El trabajo se realizó durante los dos meses y medio que duró las prácticas aproximadamente. Trabajamos
            independientemente durante la semana y todos los viernes se realizaba una reunión de seguimiento con el
            supervisor para comprobar como íbamos. El trabajo realizado consta de el prototipo en Figma y la creación de
            los
            componentes iniciales del front. Luego acabamos las prácticas y entregamos lo realizado al supervisor para que
            pudiesen sequir desarrollandolo.
          </p>
        </div>

      </div>

      <div
        class="h-0.5 self-stretch bg-sh-300 mt-12">
      </div>
    </div>
  </div>

  <Footer />

</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';


</script>

<style scoped></style>