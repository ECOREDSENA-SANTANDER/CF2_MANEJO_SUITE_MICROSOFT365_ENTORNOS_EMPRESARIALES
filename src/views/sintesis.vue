<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La presente síntesis reúne los elementos esenciales que intervienen en los procesos de colaboración digital mediante Microsoft 365, abordados desde tres perspectivas complementarias: el trabajo colaborativo en entornos digitales, las funcionalidades de Teams y las capacidades organizativas de SharePoint. Este ejercicio integrador permite comprender, de manera articulada, cómo cada uno de estos componentes aporta al desarrollo de dinámicas eficientes de comunicación, gestión documental y coordinación de actividades dentro de instituciones y organizaciones modernas. Al consolidar estos aspectos, se ofrece una visión general que orienta al estudiante en la apropiación de prácticas digitales clave para el desempeño académico y profesional.

    .row.justify-content-center.mb-5
      .col-lg-9.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta cómo la colaboración digital con Microsoft 365 se articula a través de tres componentes clave: el trabajo colaborativo en entornos digitales, Teams y SharePoint. El primero destaca beneficios, edición compartida y desafíos organizacionales; el segundo aborda reuniones en línea, comunicación sincrónica, creación de equipos y su integración con aplicaciones; y el tercero explica su propósito, diferencias frente a OneDrive, organización de archivos y gestión de accesos. En conjunto, estos elementos permiten comprender cómo Microsoft 365 facilita la comunicación, la cooperación y la administración de información en contextos laborales y educativos.")
    
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
