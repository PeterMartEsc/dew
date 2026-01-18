<template>
  <Navbar/>

  <div class="min-h-screen bg-sh-950 text-white">

    <!-- CONTENEDOR CENTRAL -->
    <div class="max-w-4xl mx-auto px-6 py-10">

      <!-- CONTACT -->
      <section id="contacto" class="mb-16">

          <h2 class="text-2xl font-semibold">Contacto</h2>

          <div class="mt-6 rounded-xl border border-white/10 bg-sh-700 p-6">
            <p class="text-white/70 max-w-prose">
              ¿Te interesa trabajar conmigo o tienes alguna pregunta?
              Escríbeme y te respondo lo antes posible.
            </p>

            <div class="mt-6 flex flex-col sm:flex-row gap-4">
              <!-- EMAIL -->
              <a href="mailto:petermartesc@gmail.com"
                class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90">
                Enviar email
              </a>

              <!-- LINKEDIN -->
              <a href="https://www.linkedin.com/in/pedro-mart%C3%ADn-escuela-6ba028331/" target="_blank" rel="noreferrer"
                class="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/25">
                LinkedIn
              </a>

              <!-- GITHUB -->
              <a href="https://github.com/PeterMartEsc" target="_blank" rel="noreferrer"
                class="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/25">
                GitHub
              </a>
            </div>
          </div>
        </section>
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