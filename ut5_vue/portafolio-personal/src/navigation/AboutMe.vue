<template>
  <Navbar />

  <div class="min-h-screen bg-sh-950 text-white">
    <!-- CONTENEDOR CENTRAL -->
    <div class="max-w-4xl mx-auto px-6 py-10">

      <!-- CABECERA -->
      <section class="mb-16 flex items-center justify-between">
        <div>
          <h1 class="text-4xl font-bold">Pedro Martín Escuela</h1>
          <p class="mt-2 text-white/70">
            Software developer · Frontend · Backend
          </p>
        </div>

        <div class="text-sm text-white/70">
          petermartesc@gmail.com
        </div>
      </section>

      <section class="mb-16 flex justify-center">
          <div class="w-xs border-6 border-sh-700 rounded-full ">
            <img class="rounded-full" src="../assets/pfp.png" alt="pfp pedro">
          </div>
      </section>

      <!-- SECCIÓN SOBRE MÍ -->
      <h2 class="mb-4 text-2xl font-semibold text-sh-100">Sobre mí</h2>
      <div id="sobre-mi" class="mb-10 rounded-xl bg-sh-700 p-5">
        <p class="my-2 text-justify ">
          Técnico en Desarrollo de Aplicaciones Multiplataformas y estudiante de Desarrollo de Aplicaciones Web 🧑‍💻. Disfruto creando y aprendiendo cada día.
          Mi pasión son los videojuegos 🎮, la música 🎵, el cine 🎥 y los libros 📚.
        </p>
      </div>

      <div class="flex justify-center">
        <button
          @click="descargarPDF"
          class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 hover:cursor-pointer">
          Descargar mi Currículum
        </button>
      </div>

    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import MiCV from '@/assets/CV_PedroMartinEscuela_15122025.pdf';

  function descargarPDF() {
    const link = document.createElement('a');
    link.href = MiCV;
    link.download = 'cv_PedroMartinEscuela.pdf'; // Nombre con el que se descargará
    link.click();
  }
</script>

<style scoped></style>