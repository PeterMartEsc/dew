<template>
    <Navbar/>

    <div class="min-h-screen bg-sh-950 text-white">
      <div class="max-w-4xl mx-auto px-6 py-10">
        <h2 class="text-2xl font-semibold">Técnicas</h2>

        <div class="mt-4 rounded-xl bg-sh-700 p-5">
          <p>
            Las habilidades técnicas engloban el conjunto de habilidades aprendidas a lo largo de los años mediante estudios. Son un conjunto
            más encaminado al conocimiento sobre lo que se trabaja.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div class="mt-6 rounded-xl bg-sh-800 p-5 flex">
            <div
              class="inline-block min-h-[1em] w-0.5 self-stretch bg-sh-300">
            </div>
            <div class="inline ml-5">
              <h2 class="text-xl font-semibold text-sh-100">Lenguajes de Programación</h2>
              <ul class="my-4 ml-5">
                <li>Java</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Python</li>
              </ul>
            </div>
          </div>

          <div class="mt-6 rounded-xl bg-sh-800 p-5 flex">
            <div
              class="inline-block min-h-[1em] w-0.5 self-stretch bg-sh-300">
            </div>
            <div class="inline ml-5">
              <h2 class="text-xl font-semibold text-sh-100">Frameworks</h2>
              <ul class="my-4 ml-5">
                <li>Spring-boot</li>
                <li>React</li>
                <li>React Native</li>
                <li>Vue</li>
                <li>Laravel</li>
                <li>Django</li>
              </ul>
            </div>
          </div>

          <div class="mt-2 rounded-xl bg-sh-800 p-5 flex ">
            <div
              class="inline-block min-h-[1em] w-0.5 self-stretch bg-sh-300">
            </div>
            <div class="inline ml-5">
              <h2 class="text-xl font-semibold text-sh-100">Instrumental</h2>
              <ul class="my-4 ml-5">
                <li>Trombonista</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 class="mt-8 text-2xl font-semibold">Sociales</h2>
        <div class="mt-4 rounded-xl bg-sh-700 p-5">
          <p>
            Las habilidades sociales engloban un conjunto de habilidades aprendidas socialmente a lo largo de los años. Este conjunto va
            más encaminado hacia la forma de actuar socialmente, el trabajo en equipo y la percepción del entorno.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div class="mt-6 rounded-xl bg-sh-800 p-5 flex">
            <div
              class="inline-block min-h-[1em] w-0.5 self-stretch bg-sh-300">
            </div>
            <div class="inline ml-5">
              <ul class="my-4 ml-5">
                <li>Coordinación</li>
                <li>Organizaciíon</li>
                <li>Trabajo en equipo</li>
                <li>Predicspocisión a aprender</li>
              </ul>
            </div>
          </div>


        </div>

      </div>

    </div>
    <Footer />

</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';


</script>

<style scoped>

</style>
