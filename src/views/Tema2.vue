<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Teams

    .bloque-texto-g.bg-5.br-1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es una plataforma de comunicación desarrollada con la finalidad de integrar en un único espacio las funciones necesarias para poder trabajar en equipo, entre las que se pueden nombrar mensajería instantánea, videollamadas, gestión de archivos, planificación de tareas, reuniones virtuales, entre otras. Esto permite que las organizaciones y su personal cuenten con herramientas que les brinden una experiencia fluida y centralizada, eliminando la dispersión de recursos y mejorando la coordinación entre los diferentes miembros que hacen parte de la organización. 

    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .bg-1.tarjeta.p-4.h-100
          p Además, al estar conectada al ecosistema de Microsoft 365, Teams permite la integración e interconexión inmediata con aplicaciones como Word, Excel, PowerPoint, OneNote y SharePoint, entre otras, logrando con ello el fortalecimiento y optimización de la productividad y comunicación organizacional (GoDaddy, 2025).
          p.mb-0 En los tiempos actuales, en donde las organizaciones buscan digitalizar su trabajo y estimular la colaboración a distancia, Microsoft Teams se ha logrado posicionar como una de las herramientas más completas y versátiles dentro del entorno empresarial, lo que la convierte en una columna fundamental para aumentar la productividad organizacional.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/2.svg', alt='')
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-3.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p Esta herramienta ha tomado gran relevancia, sobre todo en el contexto colombiano, donde las empresas están optando progresivamente por la transformación digital, para no quedarse relegadas; es por ello que Teams les está aportando estratégicamente en:

    .row.justify-content-center.mb-5
      .col-lg-6
        ImagenInfografica.color-acento-botones(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/infog.png', alt='')
          .tarjeta.bg-4.p-3(x="5%" y="9%" numero="+")
            p.mb-0 Fortalecer la coordinación entre equipos multidisciplinarios y remotos.
          .tarjeta.bg-4.p-3(x="95.5%" y="9%" numero="+")
            p.mb-0 Reducir la fragmentación de tareas y la pérdida de información.
          .tarjeta.bg-4.p-3(x="22%" y="90%" numero="+")
            p.mb-0 Promover la productividad y la eficiencia mediante la colaboración en tiempo real.
          .tarjeta.bg-4.p-3(x="91%" y="82%" numero="+")
            p.mb-0 Facilitar la gestión del conocimiento, al mantener toda la información institucional organizada y disponible.

    p.mb-4 Microsoft Teams se ha consolidado como una de las principales herramientas para el trabajo colaborativo en las empresas, aportando una serie de funcionalidades que optimizan la comunicación, la gestión de tareas y la productividad organizacional (Clickup, 2024). A continuación, se presentan algunas de estas funcionalidades:

    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 4.
        span Funcionalidades de Teams
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla resume las principales funcionalidades de Microsoft Teams orientadas a optimizar la comunicación, colaboración y gestión del trabajo en entornos digitales. Incluye herramientas como chat, videollamadas, canales y gestión de archivos, además de funciones avanzadas de planificación, integración con Outlook y protección de datos. También destaca la sincronización entre dispositivos, la integración con plataformas externas y las medidas de seguridad para garantizar un entorno colaborativo seguro y eficiente.")
          caption Nota. Tomado de Clickup, (2024)
          thead
            tr.bg-2
              th.w-25 Funcionalidad
              th Descripción breve
          tbody
            tr
              td Chat
              td Herramienta de mensajería instantánea que permite conversaciones individuales o grupales en tiempo real, con opciones para destacar mensajes, usar #[em emojis] y compartir archivos. 
            tr
              td Videollamadas
              td Facilita reuniones virtuales con audio y video de alta calidad, uso compartido de pantalla y fondos personalizados para experiencias colaborativas más humanas.
            tr
              td Llamadas de voz
              td Permite realizar llamadas directas desde Teams, con funciones como buzón de voz, desvío y transferencia de llamadas, ideal para comunicaciones rápidas y efectivas.
            tr
              td Canales
              td Espacios organizados por temas, departamentos o proyectos que centralizan conversaciones, archivos y reuniones, fomentando la colaboración estructurada.
            tr
              td Archivos
              td Repositorio central integrado con SharePoint y OneDrive que permite almacenar, compartir y editar documentos en tiempo real con control de versiones.
            tr
              td Pestañas
              td Permiten integrar aplicaciones, documentos o herramientas externas (como Excel, Trello o GitHub) dentro de los canales, personalizando el entorno de trabajo.
            tr
              td Tareas y planificadores
              td Función que organiza el trabajo mediante herramientas como Planner y To Do, permitiendo asignar responsabilidades, establecer plazas y hacer seguimiento de avances.
            tr
              td Integración con el calendario
              td Sincroniza automáticamente con Outlook, permitiendo programar, visualizar y unirse a reuniones desde Teams, con recordatorios integrados.
            tr
              td Recapitulaciones de reuniones
              td Genera automáticamente grabaciones, transcripciones, archivos compartidos y resúmenes de reuniones, facilitando el seguimiento y la rendición de cuentas.
            tr
              td Protección de datos y privacidad
              td Asegura la confidencialidad de la información mediante cifrado de datos, cumplimiento normativo (ISO, HIPAA, GDPR) y herramientas de auditoría.
            tr
              td Control y gestión del acceso
              td Implementa políticas de acceso condicional y autenticación multifactor (MFA) para proteger cuentas y restringir el acceso según ubicación o dispositivo.
            tr
              td Protección avanzada frente a amenazas
              td Utiliza tecnologías #[em antimalware] y #[em antiphishing], y permite colaboración segura con invitados externos mediante permisos definidos.
            tr
              td Aplicación móvil (Teams Mobile App)
              td Ofrece todas los funciones esenciales de mensajería, videollamadas y colaboración desde dispositivos móviles, garantizando conectividad en movimiento.
            tr
              td Sincronización entre dispositivos
              td Permite continuar las tareas sin interrupciones al cambiar entre equipos de escritorio, tabletas o móviles, manteniendo notificaciones y contexto.
            tr
              td Integración de plataformas
              td Conecta Teams con servicios de Microsoft (Outlook, OneDrive, SharePoint) y aplicaciones externas, asegurando coherencia y continuidad en el entorno digital.


    Separador  
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Reuniones en línea 

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.br-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Microsoft Teams, las reuniones en línea son sesiones virtuales que combinan audio, video, chat, pantalla compartida y colaboración en tiempo real, para conectar personas o equipos sin importar su ubicación geográfica. Esta herramienta en las sesiones virtuales permite realizar videollamadas, compartir pantalla, grabar sesiones e integrar otras aplicaciones, fomentando de esta forma una comunicación sincrónica, fluida y productiva. En el plano organizacional, especialmente en espacios laborales o educativos, donde más se utilizan, permite optimizar la coordinación de proyectos, compartir información, reducir costos logísticos y barreras físicas, fortalecer la toma de decisiones, aumentar los espacios de interacción, entre muchas otras; garantizando la continuidad del trabajo y la cohesión de los equipos en entornos híbridos y remotos, reduciendo tiempos y costos.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      h3.mb-0 Buenas prácticas antes, durante y después

    .tarjeta--container.row.mb-4(data-aos="fade")
      .col-md.tarjeta.color-primario.p-5
        h4.text-center Antes
        p.mb-0 Compartir agenda y materiales, designar roles, probar audio y conexión.
      .col-md.tarjeta.color-secundario.p-5
        h4.text-center Durante
        p.mb-0 Usar la función levantar la mano, moderar preguntas por chat, grabar solo si todos están informados y usar subtítulos cuando haya barreras de idioma o audición.
      .col-md.tarjeta.color-acento-contenido.p-5
        h4.text-center Después
        p.mb-0 Revisar el #[em recap] generado (grabación, transcripción y registro del chat), convertir los compromisos en tareas concretas para seguimiento y archivar los recursos utilizados, garantizando trazabilidad y disponibilidad futura.
    
    p.mb-4 A continuación, se presentan ejemplos prácticos que ilustran cómo esta plataforma potencia la comunicación, la coordinación y el aprendizaje colaborativo:

    .div.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 5.
        span Ejemplos de reuniones virtuales con Microsoft Teams en contextos empresariales
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla describe distintos tipos de reuniones virtuales realizadas con Microsoft Teams en contextos empresariales. Expone ejemplos de planificación estratégica, capacitaciones corporativas y reuniones con clientes, destacando beneficios como la reducción de costos, la formación continua, la mejora en la comunicación y la optimización de la toma de decisiones mediante herramientas integradas y registros automáticos.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th Tipo de reunión
              th Ejemplo práctico
              th Beneficios principales
          tbody
            tr
              td #[b Planificación estratégica:] directivos y gerentes se conectan por Teams para definir objetivos, revisar resultados y coordinar tareas. Se utilizan canales dedicados por departamentos y se comparten documentos en SharePoint.
              td La empresa Tecnozone lleva a cabo cada lunes una reunión por Teams para planificar las metas semanales con líderes de diferentes sedes. 
              td Reducción de costos logísticos, toma de decisiones más ágiles, registro automático de acuerdos y grabación para seguimiento. 
            tr
              td #[b Capacitación corporativa:] el área de talento humano programa sesiones formativas mediante Teams. Se integran presentaciones en PowerPoint y cuestionarios con Microsoft Forms.
              td Una empresa del sector financiero dicta talleres virtuales de ciberseguridad usando Teams, donde los empleados participan y completan evaluaciones en línea.
              td Facilita la formación continua, permite interacción en tiempo real y registro automático de asistencia. 
            tr
              td #[b Reuniones con clientes o socios:] los equipos comerciales usan Teams para videoconferencias con clientes, compartiendo propuestas o presentaciones desde OneDrive.
              td Un asesor comercial realiza una demostración de producto a un cliente extranjero mediante Teams, usando la función de compartir pantalla.
              td Mejora la atención al cliente, elimina barreras geográficas y permite acuerdos inmediatos con respaldo grabado.

    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 6.
        span Ejemplos de reuniones virtuales con Microsoft Teams en contextos educativos
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla presenta distintos usos de Microsoft Teams en entornos educativos, aplicados a clases sincrónicas, tutorías académicas y reuniones institucionales. Destaca cómo esta herramienta favorece la interacción en tiempo real, el acompañamiento docente, la gestión eficiente de actividades académicas y la reducción de tiempos mediante la integración de recursos digitales colaborativos.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th Tipo de reunión
              th Ejemplo práctico
              th Beneficios principales
          tbody
            tr
              td #[b Clase virtual sincrónica:] el docente utiliza Teams para dictar clases en vivo, compartir materiales, usar pizarra digital y grabar sesiones.
              td En la asignatura Metodología de la investigación, el profesor realiza sesiones por Teams donde los estudiantes presentan sus avances de tesis.
              td Promueve la participación activa, acceso a clases grabadas y aprendizaje colaborativo en tiempo real.
            tr
              td #[b Tutorías o asesorías académicas:] los tutores programan reuniones por Teams para revisar avances de trabajos, compartir observaciones y corregir documentos en OneDrive.
              td Un tutor de posgrado se reúne cada quince días por Teams con sus estudiantes para discutir avances de investigación y aplicar correcciones.
              td Fomenta el acompañamiento personalizado, ahorro de tiempo y comunicación fluida entre docente y estudiante.
            tr
              td #[b Reuniones institucionales o de coordinación docente:] los coordinadores de programas o decanos convocan reuniones por Teams para planificar actividades académicas y elaborar actas digitales.
              td El consejo académico de una universidad se reúne por Teams para revisar proyectos de investigación y acordar criterios de evaluación.
              td Facilita la coordinación interinstitucional, mejora la participación y reduce tiempos administrativos.



    Separador  
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Chat y videollamadas

    p.mb-4 Constituyen dos de los recursos más importantes en la colaboración digital moderna, facilitando la comunicación inmediata, la coordinación de actividades y la interacción humana en entornos laborales, académicos, de entretenimiento, entre otros.

    .bloque-texto-g.bg-5.br-1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El chat es un espacio de mensajería instantánea por medio del cual se pueden organizar, entablar y mantener conversaciones sin hacer uso del correo electrónico. Por medio de este tipo de recursos, los usuarios pueden intercambiar ideas, compartir archivos, mencionar a otros usuarios, reaccionar con #[em emojis] o #[em GIFs], fijar mensajes importantes, generando un ambiente para una comunicación más dinámica y cercana. Estos sistemas también ofrecen la posibilidad de crear chats privados o grupales, optimizando la organización de la información para espacios productivos y aprovechando los equipos de trabajo. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        p.mb-4 En el caso de las videollamadas, estas amplían el alcance comunicativo al incorporar componentes visuales y auditivos, fortaleciendo con ello la conexión humana y la comprensión del mensaje, además de acortar distancias que afloran las emociones. El sistema permite la realización de videollamadas individuales o grupales, apoyándose en funciones como el uso de pantalla compartida, fondos personalizados, subtítulos en tiempo real, grabación de las reuniones, entre otras. Estas características mejoran la accesibilidad, la inclusión y la productividad.
        .bg-color-adicional-1.p-4
          .row.justify-content-center
            .col-lg-2.col-md-2.col-3.mb-3.mb-lg-0
              img.px-lg-3(src='@/assets/curso/temas/t2/6.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 En las organizaciones, estos recursos transforman la interacción de los equipos, reduciendo costos logísticos relacionados con desplazamientos, infraestructura física y energética, promoviendo la productividad colaborativa en tiempo real. En otros escenarios, como el educativo, se fomenta la participación activa, el aprendizaje sincrónico, tutorías personalizadas, entre otros, promoviendo la continuidad académica, venciendo principalmente las barreras físicas y temporales.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/7.png', alt='')
    

    Separador  
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Creación de equipos y canales 
    
    p.mb-4 La creación de equipos y canales en Teams constituye la base para el desarrollo del trabajo colaborativo digital, al permitir que se organice la comunicación, los recursos y las tareas dentro de un entorno estructurado.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-4.col-md-6.col-lg-5
                img(src='@/assets/curso/temas/t2/tarj-1.svg', alt='')
            h2.text-center Equipos
            p Representan grupos de trabajo creados según áreas, proyectos o cursos. Permiten centralizar la comunicación, asignar tareas y compartir recursos entre los miembros, fortaleciendo la colaboración y el sentido de pertenencia.
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-4.col-md-6.col-lg-5
                img(src='@/assets/curso/temas/t2/tarj-2.svg', alt='')
            h2.text-center Canales
            p Son espacios temáticos dentro de cada equipo donde se desarrollan actividades específicas, se comparten archivos y se registran conversaciones. Facilitan la organización del trabajo, mejoran la trazabilidad de la información y reducen la dependencia del correo electrónico.

    p.mb-4 A continuación, se presentan algunos ejemplos que ilustran cómo las organizaciones y entornos educativos pueden aprovechar estas funciones para optimizar la comunicación y la gestión de proyectos:

    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 7.
        span Ejemplos prácticos de creación de equipos y canales en Microsoft Teams
      .tabla-a.color-acento-contenido.text-start.lista-minus
        table(alt="La tabla presenta ejemplos de equipos y canales creados en Microsoft Teams para distintos contextos organizacionales y académicos. Expone cómo esta estructura facilita la coordinación de proyectos, la gestión de campañas, la organización de contenidos educativos y la colaboración entre grupos de investigación mediante espacios temáticos y funcionales.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th Ejemplo de equipo
              th Ejemplo de canales
              th Finalidad principal
          tbody
            tr
              td Gestión de proyectos TI.
              td 
                ul.lista-ul.l-circle.mb-0
                  li
                    i.fas.fa-circle
                    span.mb-0 Planeación
                  li
                    i.fas.fa-circle
                    span.mb-0 Desarrollo
                  li
                    i.fas.fa-circle
                    span.mb-0 Pruebas
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Implementación
              td Coordinar todas las fases del proyecto tecnológico y mantener comunicación entre los desarrolladores.
            tr
              td #[em Marketing] digital.
              td 
                ul.lista-ul.l-circle.mb-0
                  li
                    i.fas.fa-circle
                    span.mb-0 Campañas activas
                  li
                    i.fas.fa-circle
                    span.mb-0 Análisis de métricas
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Contenido multimedia
              td Centralizar la gestión de campañas y el análisis de resultados.
            tr
              td Curso Metodología de la Investigación.
              td
                ul.lista-ul.l-circle.mb-0
                  li
                    i.fas.fa-circle
                    span.mb-0 Lecturas
                  li
                    i.fas.fa-circle
                    span.mb-0 Actividades prácticas 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Informes
              td Organizar el contenido académico y fomentar la colaboración entre estudiantes.
            tr
              td Grupo de investigación AITICE.
              td
                ul.lista-ul.l-circle.mb-0
                  li
                    i.fas.fa-circle
                    span.mb-0 Proyectos activos
                  li
                    i.fas.fa-circle
                    span.mb-0 Publicaciones
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Convocatorias
              td Facilitar el seguimiento de los proyectos y la comunicación entre investigadores.


    Separador  
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Integración con otras aplicaciones

    p.mb-4 Teams tiene la ventaja de que permite la integración con un sinnúmero de herramientas digitales o aplicaciones, lo que la potencializa, convirtiéndola en un centro de productividad. Entre las aplicaciones más conocidas que pueden integrarse, se pueden nombrar:

    .row.justify-content-around.mb-4(data-aos="fade")
      .col-lg-5.mb-4.mb-lg-0
        .bg-color-acento-contenido.rounded.p-2.mb-4
          h5.text-white.text-center.mb-0 Aplicaciones internas
        .row
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 Word
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 Excel
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 PowerPoint
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 OneNote
        .row
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 SharePoint
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 Planner
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 Outlook
          .col-md-3
            .bg-1.rounded.p-2.mb-2
              p.text-center.mb-0 Otras
      .col-lg-5
        .bg-color-secundario.rounded.p-2.mb-4
          h5.text-white.text-center.mb-0 Aplicaciones externas
        .row
          .col-md-3
            .bg-4.rounded.p-2.mb-2
              p.text-center.mb-0 Trello
          .col-md-3
            .bg-4.rounded.p-2.mb-2
              p.text-center.mb-0 Asana
          .col-md-3
            .bg-4.rounded.p-2.mb-2
              p.text-center.mb-0 Zoom
          .col-md-3
            .bg-4.rounded.p-2.mb-2
              p.text-center.mb-0 GitHub
        .row
          .col-md-3
            .bg-4.rounded.p-2.mb-2
              p.text-center.mb-0 Canva
          .col-md-3
            .bg-4.rounded.p-2.px-0.mb-2
              p.text-center.mb-0 Google Drive
          .col-md-3
            .bg-4.rounded.p-2.mb-2
              p.text-center.mb-0 Otras

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/8.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg-6.mb-4.p-4
          p.mb-0 Cabe aclarar que, aunque se muestre este número limitado de aplicaciones, son muchas las que logran integrarse; por lo tanto, no es descabellado averiguar si las herramientas que usualmente utilizan en internet permiten la integración con Teams, para un mayor aprovechamiento y optimización del trabajo habitual. 
        p A continuación, se presentan algunos ejemplos de aplicaciones que pueden integrarse con Microsoft Teams para optimizar la comunicación, la colaboración y la gestión de tareas dentro de los equipos de trabajo; y cómo podrían usarse:

    .div.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 8.
        span Ejemplos aplicaciones integradas en Teams
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla presenta diversas aplicaciones integradas en Microsoft Teams que amplían sus funcionalidades colaborativas. Destaca cómo herramientas como Planner, Power BI, SharePoint o Forms optimizan la gestión de proyectos, el análisis de datos, el almacenamiento seguro y la evaluación en entornos académicos y empresariales, fortaleciendo la productividad y la participación activa.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th.w-25 Aplicación Integrada
              th Uso dentro de Teams
              th Beneficio principal
          tbody
            tr
              td Planner
              td Seguimiento de tareas y asignación de responsabilidades dentro del canal del proyecto.
              td Facilita la gestión de proyectos y el control del avance en tiempo real.
            tr
              td Power BI
              td Inserción de paneles con métricas e indicadores de desempeño en un canal de equipo.
              td Permite tomar decisiones basadas en datos actualizados.
            tr
              td SharePoint
              td Almacenamiento centralizado de documentos del equipo con control de versiones.
              td Mejora la organización y acceso seguro a la información corporativa.
            tr
              td Outlook Calendar
              td Sincronización de reuniones y recordatorios directamente en Teams.
              td Aumenta la eficiencia en la programación y reduce la duplicidad de agendas.
            tr
              td Trello o Asena
              td Gestión de flujos de trabajo e integración visual de tableros #[em Kanban].
              td Mejora la coordinación y priorización de tareas colaborativas.
            tr
              td Forms
              td Creación de encuestas, evaluaciones y formularios dentro del aula virtual.
              td Facilita la recolección inmediata de respuestas y evaluaciones. 
            tr
              td OneNote
              td Espacio compartido para notas, apuntes y material de clase.
              td Favorece la colaboración y el aprendizaje activo entre estudiantes.
            tr
              td Kahoot
              td Integración de actividades gamificadas en sesiones en vivo de Teams.
              td Aumenta la motivación y el compromiso del estudiante.

    .tarjeta.color-primario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta1.svg")
        .col
          p.mb-3 Para mayor comprensión, en los siguientes videotutoriales, puede ampliar la información sobre el funcionamiento de Teams:
          .row.justify-content-between.align-items-center.mb-2
            .col.mb-3.mb-sm-0
              p.mb-0 Introducción a Teams y programación de reuniones. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=GoJoE9raTNI')" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Equipos y canales en Teams.
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=ZGxFPoGeXyw')" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video



</template>

<script>
export default {
  name: 'Tema2',
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
