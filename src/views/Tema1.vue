<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Trabajo colaborativo en entornos digitales 
      
    .bloque-texto-g.bg-5.br-1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Es una modalidad de interacción entre las personas y/o los equipos por medio de herramientas tecnológicas, utilizadas para planificar, ejecutar y evaluar actividades de manera conjunta, sin tener que compartir espacio físico, e incluso sin tener que estar conectados al mismo tiempo. Para poder trabajar bajo esta modalidad, se necesitan plataformas en línea que permitan compartir, comunicar, editar y gestionar información en tiempo real o en diferido, lo que favorece la productividad y la innovación organizacional.
    
    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .bg-1.tarjeta.p-4.h-100
          p.mb-0 El trabajo colaborativo representa una estrategia de gestión que integra personas, procesos y tecnologías que permiten a las organizaciones alcanzar objetivos en forma eficiente. Esta modalidad de trabajo se fundamenta en la cooperación activa entre equipos de una misma área o departamento, así como entre equipos multidisciplinarios, donde cada miembro aporta sus conocimientos y habilidades a través de herramientas digitales que facilitan la comunicación, la planificación, la ejecución y el seguimiento de las tareas definidas y en desarrollo. Se puede decir que esta modalidad, gracias a los avances tecnológicos, promueve la sinergia organizacional, optimiza los recursos y fomenta una cultura de innovación orientada a resultados.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/2.svg', alt='')

    p.mb-4 A continuación, se presenta una tabla en donde, por medio de ejemplos, se muestran diferentes formas y herramientas digitales que permiten a las organizaciones aprovechar el trabajo colaborativo. Cada ejemplo ilustra la aplicación práctica de la colaboración en línea en distintos contextos empresariales, promoviendo la productividad y la innovación conjunta:

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
              td Facilita el acceso a la información y garantiza la trazabilidad de cambios.
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
              td Google Docs
              td Elaboración conjunta de informes o propuestas empresariales.
              td Edición simultánea y coautoría.
              td Promueve la participación activa y evita duplicidad de documentos.
            tr
              td Trello
              td Planificación de proyectos y seguimiento de actividades por fases.
              td Colaboración visual mediante tableros.
              td Favorece la organización de procesos y la priorización de tareas.
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
        p #[b Fomenta la innovación y la creatividad:] las plataformas digitales permiten compartir ideas en tiempo real, generar lluvias de ideas virtuales y construir soluciones conjuntas desde distintos lugares, impulsando la creatividad colectiva.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-2.svg' alt='')
        p #[b Facilita la resolución de problemas:] herramientas como Teams o SharePoint permiten que los equipos analicen desafíos de forma simultánea, compartan documentos y lleguen a consensos más rápidos y efectivos.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-3.svg' alt='')
        p #[b Incrementa la motivación y el sentido de pertenencia:] la colaboración digital promueve la participación activa y el reconocimiento del aporte individual dentro del logro grupal, fortaleciendo el compromiso organizacional.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-4.svg' alt='')
        p #[b Aumenta la productividad y eficiencia:] la coordinación de tareas mediante aplicaciones como Planner o OneDrive mejora la gestión del tiempo, reduce duplicidad de esfuerzos y agiliza los flujos de trabajo.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-5.svg' alt='')
        p #[b Promueve el aprendizaje continuo:] los entornos digitales facilitan la capacitación colaborativa, el intercambio de conocimientos y la actualización permanente del personal.
      .tarjeta.bg-2.bg-tarj.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/tarj-6.svg' alt='')
        p #[b Fortalece las relaciones interpersonales:] a través de canales de comunicación virtuales, se mejora la interacción entre áreas, equipos y sedes, creando una cultura organizacional más conectada y participativa.


    Separador  
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Edición compartida de archivos en línea

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.br-2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es el procedimiento que permite que varias personas al mismo tiempo o en horarios diferentes puedan trabajar en un mismo archivo o documento digital, desde diferentes ubicaciones geográficas y diferentes dispositivos tecnológicos. Esta actividad se facilita gracias al uso de herramientas como #[b OneDrive, SharePoint, Google Drive o Teams], entre otras, las cuales permiten que los equipos de trabajo pueda trabajar colaborativamente en tiempo real o diferido, haciendo aportes, editando, corrigiendo, agregando comentarios y manteniendo versiones actualizadas sin necesidad de tener que estar enviándose los archivos por medio de correo electrónicos o cualquier otro sistema de mensajería, generando con ello una lluvia de múltiples copias.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg-color-adicional-1.mb-4.p-4
          p.mb-0 En el plano de las organizaciones, la edición compartida de archivos en línea optimiza los procesos de comunicación y gestión documental, al facilitar y garantizar que se trabaje sobre archivos unificados, lo que reduce errores y tiempos de espera, así como la duplicidad; además, estimula la transparencia, el control de cambios y la trazabilidad de los aportes que cada colaborador ha hecho en los diferentes trabajos.
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
              th Situación empresarial
              th Herramienta digital utilizada
              th Tipo de archivo
              th Forma de colaboración
              th Beneficio principal
          tbody
            tr
              td Elaboración de informes de avance de proyectos.
              td Microsoft Word en OneDrive o SharePoint.
              td Documento de texto.
              td Varios miembros del equipo editan, comentan y revisan simultáneamente.
              td Ahorro de tiempo y coherencia en la información.
            tr
              td Diseño de presentaciones para reuniones ejecutivas.
              td Microsoft PowerPoint o Google Slides.
              td Presentación.
              td Coautoría en tiempo real, integración de ideas y revisión colaborativa.
              td Mejora la calidad de las presentaciones.
            tr
              td Consolidación de datos financieros.
              td Excel en la nube (OneDrive o Google Sheets).
              td Hoja de cálculo.
              td Diferentes departamentos actualizan datos desde sus áreas.
              td Actualización instantánea y reducción de errores.
            tr
              td Revisión de políticas internas de la empresa.
              td SharePoint.
              td Documento compartido.
              td Empleados de distintas sedes comentan y proponen ajustes.
              td Mayor participación y alineación organizacional.
            tr
              td Creación de propuestas comerciales para clientes.
              td Teams con Word Online.
              td Documento colaborativo.
              td Redacción conjunta entre equipos de ventas y #[em marketing].
              td Agilidad en la generación de propuestas y comunicación integrada.



    Separador  
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Retos en las organizaciones 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-3.col-4.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.svg', alt='')
      .col-lg-10.col-md-9(data-aos="fade-left")
        p El trabajo colaborativo en los entornos digitales representa una gran oportunidad para las empresas que buscan aumentar su productividad y adaptarse a la transformación digital, aunque su implementación no está exenta de retos y desafíos que podrían afectar la eficiencia y cohesión de los equipos.
        p A continuación, se presentan algunos de los retos a los que se enfrentan las organizaciones en los trabajos colaborativos en entornos digitales:

    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 3.
        span Retos a los que se enfrentan las organizaciones en los entornos digitales
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla expone los principales desafíos que enfrentan las organizaciones en los entornos digitales. Entre ellos destacan la resistencia al cambio, la dependencia tecnológica, la gestión ineficaz del liderazgo virtual y la falta de cultura colaborativa. También se incluyen dificultades relacionadas con la brecha de competencias digitales, la comunicación dispersa, la sobrecarga informativa, la indefinición de roles, los riesgos de seguridad y la desconexión humana. Estos retos evidencian la necesidad de fortalecer la gestión del talento, la cultura digital y las estrategias de ciberseguridad para lograr una transformación organizacional sostenible.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th.w-25 Reto organizacional
              th Descripción
          tbody
            tr
              td Resistencia al cambio organizacional.
              td Algunos colaboradores o líderes muestran resistencia a modificar sus hábitos y adoptar nuevas herramientas digitales.
            tr
              td Dependencia tecnológica.
              td Las fallas en la conexión, los sistemas o las plataformas pueden interrumpir el flujo de trabajo y afectar los resultados.
            tr
              td Gestión ineficaz del liderazgo virtual.
              td Dirigir equipos remotos requiere habilidades de comunicación, motivación y evaluación que no siempre están desarrolladas.
            tr
              td Falta de cultura colaborativa.
              td La ausencia de valores organizacionales que promuevan la cooperación limita la efectividad del trabajo en equipo digital.
            tr
              td Brecha de competencias digitales. 
              td Existen diferencias en el nivel de dominio tecnológico entre los miembros del equipo, lo que afecta la eficiencia colaborativa.
            tr
              td Comunicación asincrónica o dispersa.
              td La interacción digital puede generar malentendidos o pérdida de información clave si no se gestionan adecuadamente los canales de comunicación. 
            tr
              td Sobrecarga informativa.
              td El exceso de correos, mensajes o documentos compartidos puede provocar distracciones y disminuir la productividad.
            tr
              td Falta de claridad en roles y responsabilidades.
              td La ausencia de una estructura definida puede ocasionar duplicación de tareas o falta de seguimiento en los proyectos.
            tr
              td Seguridad y privacidad de la información.
              td El intercambio de datos en la nube implica riesgos de ciberataques o accesos no autorizados si no se aplican medidas de protección adecuadas.
            tr
              td Desconexión humana y alejamiento laboral.
              td La falta de interacción presencial puede debilitar la cohesión del equipo y disminuir el sentido de pertenencia.



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
