<template>
    <Navbar/>
    <div class="min-h-screen bg-sh-950 text-white">

      <!-- CONTENEDOR CENTRAL -->
      <div class="max-w-4xl mx-auto px-6 py-10">

        <!-- SECCIÓN PROYECTOS -->
        <section id="proyectos" class="mb-16">
          <h2 class="text-2xl font-semibold">Proyectos</h2>

          <p class="mt-4">
            Estos son algunos de los proyectos más destacables que he hecho como desarrollador de software.
          </p>

          <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard
              v-for="project in projects"
                :key="project.id"
                :class="(project.id % 4 === 0 || project.id % 4 === 3) ? 'bg-sh-700' : 'bg-sh-600'"
                :title="project.title"
                :description="project.description"
                :tags="project.tags"
                :demo-url="project.demoUrl"
                :code-url="project.codeUrl"
            />
          </div>
        </section>
      </div>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import ProjectCard from '@/components/ProjectCard.vue';

  const projects = [
    {
      id: 0,
      title:"Arcane Form",
      tags: ['Vue', 'Tailwind', 'Vite'],
      description:"Un proyecto realizado en 2º de DAM para la asignatura de DAD. El objetivo era poner en práctica lo aprendido de Vue.",
      demoUrl: 'https://petermartesc.github.io/arcane-form/',
      codeUrl: 'https://github.com/PeterMartEsc/arcane-form'
    },
    {
      id: 1,
      title:"JSpotify",
      tags: ['Vue', 'Vite'],
      description:"Un proyecto realizado en 2º de DAW para la asignatura de DOR. El objetivo era poner en práctica lo aprendido de CSS sobre un código base.",
      // demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/PeterMartEsc/spotify-dor'
    },
    {
      id: 2,
      title:"Who's That Pokemon",
      tags: ['Vue', 'Tailwind', 'Vite'],
      description:"Un proyecto realizado en 2º de DAM para la asignatura de DAD. El objetivo era demostrar lo aprendido de Vue.",
      // demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/PeterMartEsc/whos-that-pokemon'
    },
    {
      id: 3,
      title:"Ahorcado React",
      tags: ['React', 'Typescript'],
      description:"Un proyecto realizado en 2º de DAM para la asignatura de PGL. El objetivo era aprender a desplegar con Docker en entorno de servidor.",
      demoUrl: 'http://appsiespuerto.myvnc.com:10000/',
      codeUrl: 'https://github.com/PeterMartEsc/ahorcado-react'
    },

    {
      id: 4,
      title:"Rutas AED",
      tags: ['Laravel', 'PHP', 'Bootstrap'],
      description:"Un proyecto realizado en 2º de DAM para la asignatura de AED. El objetivo era demostrar lo aprendido del framework Laravel y realizar un proyecto lo más completo posible implementando documentación del diseño previo, y Bootstrap como framework de CSS.",
      // demoUrl: 'http://appsiespuerto.myvnc.com:10000/',
      codeUrl: 'https://github.com/PeterMartEsc/ahorcado-react'
    },

    {
      id: 5,
      title:"The Witcher API",
      tags: ['Spring-boot', 'Java', 'RESTfull', 'SOAP'],
      description:"Un proyecto realizado en 2º de DAM para la asignatura de PGV. El objetivo era demostrar lo aprendido sobre el desarrollo de API's con el framework Spring-boot y desarrollar tanto una API RESTfull como una API Soap",
      // demoUrl: 'http://appsiespuerto.myvnc.com:10000/',
      codeUrl: 'https://github.com/PeterMartEsc/the-witcher-api'
    },

    {
      id: 6,
      title:"Canary Trails",
      tags: ['React Native', 'React', 'Typescript', 'Bootstrap'],
      description:"Un proyecto realizado en 2º de DAM como Proyecto Final de Ciclo. El objetivo era demostrar todo lo aprendido durante el curso para certificar la superación del mismo",
      // demoUrl: 'http://appsiespuerto.myvnc.com:10000/',
      codeUrl: 'https://github.com/PeterMartEsc/the-witcher-api'
    },
  ]
</script>

<style scoped>

</style>
