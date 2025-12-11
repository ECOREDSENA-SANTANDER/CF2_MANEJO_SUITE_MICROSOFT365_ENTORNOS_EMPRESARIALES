<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción    

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p En la actualidad, el trabajo colaborativo se ha convertido en un pilar fundamental para las organizaciones que buscan adaptarse a los entornos digitales y fortalecer su competitividad. La integración de herramientas tecnológicas basadas en la nube ha transformado la manera en que los equipos se comunican, comparten información y desarrollan proyectos, promoviendo la eficiencia, la flexibilidad y la innovación en los procesos laborales. En este escenario, la colaboración digital se consolida como una competencia clave del talento humano en la era de la transformación tecnológica.
        .row.justify-content-center
          .col-lg-2.col-md-2.col-3
            img.w-75.m-auto(src='@/assets/curso/temas/intro/2.png', alt='')
          .col-lg-10.col-md-10.col-9
            p El presente componente formativo tiene como propósito desarrollar en los aprendices las competencias necesarias para implementar estrategias de trabajo colaborativo en línea mediante el uso de herramientas de Microsoft 365, especialmente Teams y SharePoint. A través del reconocimiento de sus funcionalidades, los participantes comprenderán cómo estas aplicaciones facilitan la comunicación sincrónica y asincrónica, la gestión documental y la organización de tareas en entornos digitales seguros y dinámicos.

    .tarjeta.bg-color-acento-contenido.p-4.mb-5(data-aos="fade")
      p.text-white.mb-0 La formación se orienta desde un enfoque práctico, centrado en la exploración, configuración y aplicación de recursos colaborativos en la nube. De esta forma, los aprendices podrán integrar las herramientas de Microsoft 365 en sus contextos laborales, fortaleciendo la coordinación entre equipos, optimizando la gestión de la información y contribuyendo activamente a la construcción de entornos organizacionales más conectados, eficientes y sostenibles.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
