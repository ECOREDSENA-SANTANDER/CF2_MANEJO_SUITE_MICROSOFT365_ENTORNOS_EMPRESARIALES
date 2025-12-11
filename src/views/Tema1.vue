<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Trabajo colaborativo en entornos digitales 
      
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.br-1.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Es una modalidad de interacción entre las personas y/o los equipos por medio de herramientas tecnológicas, utilizadas para planificar, ejecutar y evaluar actividades de manera conjunta, sin tener que compartir espacio físico, e incluso sin tener que estar conectados al mismo tiempo. Para poder trabajar bajo esta modalidad, se necesitan plataformas en línea que permitan compartir, comunicar, editar y gestionar información en tiempo real o en diferido, lo que favorece la productividad y la innovación organizacional.
    
    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .bg-1.tarjeta.p-4.h-100
          p.mb-0 El trabajo colaborativo representa una estrategia de gestión que integra personas, procesos y tecnologías que permiten a las organizaciones alcanzar objetivos en forma eficiente. Esta modalidad de trabajo se fundamenta en la cooperación activa entre equipos de una misma área o departamento, así como entre equipos multidisciplinarios, donde cada miembro aporta sus conocimientos y habilidades a través de herramientas digitales que facilitan la comunicación, la planificación, la ejecución y el seguimiento de las tareas definidas y en desarrollo. Se puede decir que esta modalidad, gracias a los avances tecnológicos, promueve la sinergia organizacional, optimiza los recursos y fomenta una cultura de innovación orientada a resultados.
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/2.svg', alt='')

    p.mb-4 A continuación, se presenta una tabla en donde por medio de ejemplos se muestran diferentes formas y herramientas digitales que permiten a las organizaciones aprovechar el trabajo colaborativo. Cada ejemplo ilustra la aplicación práctica de la colaboración en línea en distintos contextos empresariales, promoviendo la productividad y la innovación conjunta:

    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1.
        span Ejemplos de uso de herramientas digitales para el trabajo colaborativo
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla presenta diversas herramientas digitales utilizadas en entornos organizacionales para potenciar el trabajo colaborativo. Se destacan aplicaciones como Microsoft Teams, SharePoint, Planner, OneDrive, Google Docs, Trello y Zoom, cada una orientada a distintos tipos de colaboración (sincrónica, documental, organizacional o audiovisual). En conjunto, estas herramientas optimizan la comunicación, la gestión de tareas y el acceso a la información, contribuyendo a una mayor eficiencia, productividad y participación en los equipos de trabajo.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th Herramienta digital
              th Aplicación en la organización
              th Tipo de colaboración
              th Beneficio principal
          tbody
            tr
              td Microsoft Teams
              td Coordinación de reuniones virtuales entre departamentos y seguimiento de proyectos.
              td Comunicación sincrónica y gestión de tareas.
              td Mejora la comunicación interna y reduce tiempos de respuesta.
            tr
              td SharePoint
              td Almacenamiento y gestión de documentos institucionales en espacios compartidos.
              td Colaboración documental y control de versiones.
              td Facilita el acceso a la información y garantiza trazabilidad de cambios.
            tr
              td Planner
              td Asignación y seguimiento de tareas en proyectos empresariales.
              td Colaboración organizacional basada en metas.
              td Aumenta la productividad y claridad en los roles.
            tr
              td OneDrive
              td Intercambio seguro de archivos personales o departamentales.
              td Colaboración individual y por parte.
              td Permite acceso remoto y evita pérdida de información.
            tr
              td Google iDose
              td Elaboración conjunta de informes o propuestas empresariales.
              td Edición simultánea y coautoria.
              td Promueve la participación activa y evita duplicidad de documentos.
            tr
              td Trello
              td Planificación de proyectos y seguimiento de actividades por fases.
              td Colaboración visual mediante tableros.
              td Enconoce la organización de procesos y la priorización de tareas.
            tr
              td Zoom
              td Reuniones estratégicas o capacitaciones a distancia.
              td Comunicación audiovisual y toma de decisiones.
              td Reduce costos operativos y fortalece el trabajo remoto.


    Separador  
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Beneficios

    p Implementar el trabajo colaborativo en entornos digitales aporta ventajas significativas para las organizaciones, al integrar la tecnología con la gestión del talento y la comunicación empresarial.
    p.mb-4 Entre los principales beneficios (Crivellaro, 2025) se destacan:

    SlyderF(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-1.svg' alt='')
        p #[b Fomenta la innovación y la creatividad:] Las plataformas digitales permiten compartir ideas en tiempo real, generar lluvias de ideas virtuales y construir soluciones conjuntas desde distintos lugares, impulsando la creatividad colectiva.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-2.svg' alt='')
        p #[b Facilita la resolución de problemas:] Herramientas como Teams o SharePoint permiten que los equipos analicen desafíos de forma simultánea, compartan documentos y lleguen a consensos más rápidos y efectivos.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-3.svg' alt='')
        p #[b Incrementa la motivación y el sentido de pertenencia:] La colaboración digital promueve la participación activa y el reconocimiento del aporte individual dentro del logro grupal, fortaleciendo el compromiso organizacional.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-4.svg' alt='')
        p #[b Aumenta la productividad y eficiencia:] La coordinación de tareas mediante aplicaciones como Planner o OneDrive mejora la gestión del tiempo, reduce duplicidad de esfuerzos y agiliza los flujos de trabajo.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-5.svg' alt='')
        p #[b Promueve el aprendizaje continuo:] Los entornos digitales facilitan la capacitación colaborativa, el intercambio de conocimientos y la actualización permanente del personal.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-6.svg' alt='')
        p #[b Fortalece las relaciones interpersonales:] A través de canales de comunicación virtuales, se mejora la interacción entre áreas, equipos y sedes, creando una cultura organizacional más conectada y participativa.


    Separador  
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Edición compartida de archivos en línea

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es el procedimiento que permite que varias personas al mismo tiempo o en horarios diferentes puedan trabajar en un mismo archivo o documento digital, desde diferentes ubicaciones geográficas y diferentes dispositivos tecnológicos. Esta actividad se facilita gracias al uso de herramientas como OneDrive, SharePoint, Google Drive o Teams, entre otras, las cuales permiten que los equipos de trabajo pueda trabajar colaborativamente en tiempo real o diferido, haciendo aportes, editando, corrigiendo, agregando comentarios y manteniendo versiones actualizadas sin necesidad de tener que estar enviándose los archivos por medio de correo electrónicos o cualquier otro sistema de mensajería, generando con ello una lluvia de múltiples copias.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg-color-adicional-1.mb-4.p-4
          p.mb-0 En el plano de las organizaciones, la edición compartida de archivos en línea optimiza los procesos de comunicación y gestión documental, al facilitar y garantizar que se trabaje sobre archivos unificados, lo que reduce errores y tiempos de espera, así como la duplicidad; además estimula la transparencia, el control de cambios y la trazabilidad de los aportes que cada colaborador ha hecho en los diferentes trabajos.
        p En los entornos empresariales modernos, la edición compartida de archivos se ha convertido en una práctica clave para fortalecer la colaboración y la productividad. Mediante herramientas digitales, los equipos trabajan de forma simultánea, eficiente y organizada. La siguiente tabla muestra ejemplos de cómo las organizaciones aplican esta modalidad para optimizar sus procesos y resultados:

    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2.
        span Ejemplos de aplicación de edición compartida en línea
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla sintetiza diferentes escenarios empresariales en los que se aplican herramientas digitales para la edición compartida en línea. Incluye casos como la elaboración de informes, diseño de presentaciones, consolidación de datos, revisión de políticas internas y creación de propuestas comerciales. Estas actividades se desarrollan mediante plataformas como OneDrive, SharePoint, Teams y Google Workspace, que permiten la coautoría en tiempo real, la integración de aportes entre equipos y la actualización simultánea de la información, optimizando la eficiencia, la coherencia y la colaboración organizacional.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th 



    Separador  
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Retos en las organizaciones 


    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 3.
        span 
      .tabla-a.color-acento-contenido.text-start
        table(alt="")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th 



  </template>

<script>
export default {
  name: 'Tema1',
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
