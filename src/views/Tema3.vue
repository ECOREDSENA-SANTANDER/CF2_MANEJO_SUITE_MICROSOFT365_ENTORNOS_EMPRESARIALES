<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 SharePoint 

    .bloque-texto-g.bg-5.br-1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Es una herramienta del ecosistema Microsoft 365 que permite crear intranets corporativas y espacios colaborativos en entornos seguros, los cuales pueden ser accedidos desde cualquier dispositivo, facilitando con ello la gestión de contenidos, archivos y permisos; así mismo la integración con diversas aplicaciones de Microsoft 365, ayudando en la optimización de la productividad y la comunicación empresarial, además de mantener centralizada la información y de promover el trabajo en equipo (Marchi, 2022).
    
    p.mb-4 Es una plataforma empresarial que ha sido diseñada para facilitar la colaboración, la gestión documental y la comunicación organizacional interna, teniendo como objetivo brindar un entorno digital centralizado, donde los empleados de una empresa puedan compartir información relevante, trabajar en los proyectos y tener acceso a los recursos corporativos, en una forma segura y eficiente.

    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .bg-1.tarjeta.p-4.h-100
          p.mb-0 Con el uso de SharePoint, las empresas pueden crear intranets personalizadas, sitios de trabajo de acuerdo con un proyecto o departamento en común, además de almacenar documentos en la nube llevando trazabilidad y control de versiones. También pueden sincronizar archivos con OneDrive, así como editar en Word, Excel o PowerPoint directamente desde el navegador. Otra de sus ventajas es la integración que tiene con Teams, lo cual permite el acceso a bibliotecas de documentos o listas desde los canales de comunicación. De igual manera, SharePoint brinda recursos para la creación de listas inteligentes, paneles de control, aplicaciones personalizadas y formularios, lo cual también mejora la trazabilidad y el control en los procesos organizacionales. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/2.svg', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-1.col-md-2.col-3.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/3.svg', alt='')
      .col-lg-11.col-md-10(data-aos="fade-left")
        p Por todo esto, SharePoint hoy en día está posicionada como una herramienta que sostiene y apoya la transformación digital, promoviendo con ello la colaboración, la seguridad de la información y la eficiencia en la gestión del conocimiento dentro de las organizaciones.


    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Propósito

    p.mb-4 Uno de sus propósitos es proporcionar en las organizaciones plataformas colaborativas integrales que transformen la gestión documental, la comunicación interna y todos los procesos que conlleve el negocio en una experiencia digital unificada, siendo accesible desde cualquier dispositivo informático y respaldado por un buen control de acceso, la movilidad y el análisis de información (Nunsys, 2018).

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.br-2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 SharePoint está posicionado como un eje central de colaboración que permite a los equipos distribuidos dentro de las organizaciones editar y compartir documentos simultáneamente, sin importar su ubicación, lo que favorece la continuidad del trabajo en entornos híbridos y globales; además asegura el acceso a la información por medio de permisos y creación de sitios personalizados por departamentos o proyectos, también impulsa la productividad, la organización de contenidos y garantiza la gobernanza del conocimiento, convirtiéndose en una infraestructura digital que soporta y fortalece el trabajo en equipo en la era moderna (Einig, 2022). 

    p.mb-4.mb-lg-5 En conclusión, el propósito de SharePoint es la consolidación de un entorno digital inteligente, integrando personas, procesos y contenidos en un mismo espacio en el que todo se trabaja de forma colaborativa. Sus valores estratégicos no solo se limitan al almacenamiento o a la gestión documental; sino que, por el contrario, reside en la capacidad de potencializar y robustecer la eficiencia en las organizaciones, facilitando la toma de decisiones en torno a información centralizada y fortaleciendo la cultura digital.

    .bg-color-acento-contenido.tarjeta
      .row.justify-content-around.align-items-center
        .col-lg-8.col-md-11.col-11.p-4
            p.text-white.mb-0 En una era, donde la transformación digital es exigente, SharePoint es una herramienta clave para garantizar la continuidad, la seguridad y la escalabilidad de las operaciones en los entornos empresariales, lo que promueve un modelo de trabajo más ágil, transparente e hiperconectado.
        .col-lg-3.col-md-5.col-7
          img.img-neg(src='@/assets/curso/temas/t3/5.png', alt='')


    Separador  
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Diferencias con OneDrive

    p.mb-4 Aunque OneDrive y SharePoint pertenecen a Microsoft 365 y comparten el mismo objetivo, al facilitar la gestión documental y la colaboración, tienen propósitos diferentes dentro de la organización:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-4.col-md-6.col-lg-5
                img(src='@/assets/curso/temas/t3/tarj-1.svg', alt='')
            h2.text-center OneDrive
            p Está orientado principalmente al almacenamiento personal en la nube, brindando a cada usuario un espacio privado para almacenar, trabajar, sincronizar y compartir archivos de forma segura. Esta herramienta es propicia para guardar documentos personales o de trabajo que no necesitan estar compartidos con la organización o los diferentes equipos o departamentos de la misma; por lo tanto su seguridad es responsabilidad propia del usuario.
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-4.col-md-6.col-lg-5
                img(src='@/assets/curso/temas/t3/tarj-2.svg', alt='')
            h2.text-center SharePoint 
            p Está centrado en la colaboración corporativa y el trabajo en equipo dentro de las organizaciones o empresas, permitiendo crear sitios compartidos, flujos de trabajo y bibliotecas documentales en donde una multiplicidad de usuarios pueden coeditar los archivos, asignar permisos, establecer niveles de acceso, versionar documentos, dejar comentarios en tiempo real, automatizar flujos de aprobación, y mantener un historial de cambios que garanticen la trazabilidad y la transparencia en la gestión de la información.

    .tarjeta.color-primario.p-3.mb-4
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta1.svg")
        .col
          p.mb-3 Diríjase al siguiente enlace, en donde se explica cuando usar OneDrive y cuando usar SharePoint:
          .row.justify-content-between.align-items-center.mb-2
            .col.mb-3.mb-sm-0
              p.mb-0 OneDrive y SharePoint ¿Qué diferencias hay?  ¿Cuál usar? Microsoft 365
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Introducción_a_SharePoint_y_organización_de_archivos_Video_CF02.mp4')" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video
    
    .row.justify-content-center.align-items-center
      .col-lg-9(data-aos="fade-right")
        p.mb-4 En ese orden de ideas, SharePoint funciona como un repositorio organizacional, manteniendo una estructura jerárquica que refleja los proyectos, los departamentos o las diferentes áreas que conforman la empresa, asegurando así la gobernanza de la información y la continuidad operativa. Esto lo diferencia de OneDrive, cuya naturaleza es individual, pues la información allí almacenada solo puede ser consultada si el usuario propietario concede los permisos de acceso, lo que limita su uso para la colaboración institucional y la gestión compartida de contenidos.
        .bg-color-adicional-1.p-4
          .row.justify-content-center
            .col-lg-2.col-md-2.col-3.mb-3.mb-lg-0
              img.px-lg-3(src='@/assets/curso/temas/t3/6.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 Esto demuestra que mientras que OneDrive es usado para gestionar archivos de forma individual o personal, SharePoint se utiliza en las organizaciones para centralizar la información organizacional y fomentar la colaboración estructurada entre los diferentes equipos de trabajo. En todo esto cabe anotar que estas dos herramientas si se complementan, ya que los documentos personales almacenados en OneDrive pueden ser publicados o compartidos en los espacios colaborativos de SharePoint cuando estos evolucionan a proyectos colectivos. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/7.png', alt='')


    Separador  
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Organización de archivos en espacios compartidos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.col-11.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/8.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Con la organización de archivos en espacios compartidos en SharePoint las empresas pueden crear sitios colaborativos, donde los documentos se agrupan en bibliotecas y carpetas estructuradas de acuerdo con proyectos, departamentos o procesos específicos. Esta arquitectura permite que los usuarios gestionen la información de forma ordenada y colaborativa, reduciendo la duplicidad de archivos y mejorando la productividad.
        .row.justify-content-center
            .col-lg-2.col-md-2.col-3.mb-3.mb-lg-0
              img.px-lg-3(src='@/assets/curso/temas/t3/9.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 SharePoint brinda funciones avanzadas como el uso de metadatos, el control de versiones, la búsqueda inteligente y la asignación de permisos personalizados, lo que facilita tanto la localización rápida de documentos como la protección de la información confidencial. Estas características garantizan un flujo de trabajo transparente, donde cada usuario puede acceder, editar o revisar contenidos conforme a su rol dentro de la organización.

    .div(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 9.
        span Ejemplos de organización de archivos en SharePoint
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla presenta diferentes tipos de espacios compartidos en SharePoint y su utilidad para organizar documentos dentro de una organización. Explica cómo los sitios de proyectos, departamentos, capacitación o repositorios institucionales permiten estructurar la información mediante carpetas y bibliotecas, favoreciendo el acceso ordenado, la colaboración y el control documental.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th.w-25 Tipo de espacio compartido
              th Descripción del uso
              th Ejemplo de organización de archivos
          tbody
            tr
              td Sitio de proyecto
              td Espacio destinado a centralizar toda la información de un proyecto específico.
              td #[b Carpetas por fases del proyecto:] planeación, Ejecución, Evaluación. Subcarpetas para documentos, actas y cronogramas.
            tr
              td Sitio de departamento
              td Área que agrupa documentos internos de un departamento (finanzas, RRHH, tecnología, etc.).
              td #[b Carpetas por año y tipo de documento:] presupuestos 2025, Informes mensuales, Políticas internas.
            tr
              td Elélicieca de documentos compartidos
              td Espacio común donde varios equipos coeditan y actualizan archivos.
              td Archivos de Word, Excel o PowerPoint con control de versiones y permisos diferenciados por rol.
            tr
              td Sitio de capacitación o educación
              td Espacio para docentes o capacitadores que comparten materiales y evaluaciones.
              td #[b Carpetas por curso o módulo:] metodología de la investigación I, Seminario de Tesis II, Evaluaciones y recursos.
            tr
              td Repositorio de políticas y procedimientos
              td Espacio destinado a documentos normativos o institucionales de acceso general.
              td #[b Carpetas:] manual de calidad, Protocolos de seguridad, Reglamentos internos.


    Separador  
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Acceso y permisos de usuarios  

    .bloque-texto-g.bg-5.br-1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La gestión de accesos y permisos es una de las fortalezas de la seguridad y la gobernanza de la información y esto SharePoint lo tiene claro y lo cumple al pie de la letra, al ser un sistema que controla quién puede ver, editar o administrar los contenidos dentro de los sitios, bibliotecas o carpetas compartidas, garantizando con ello que la información de la organización se mantenga segura, disponible para los usuarios autorizados y trazable.

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .bg-1.tarjeta.p-4.h-100
          p Maneja los permisos basados en niveles jerárquicos y roles de usuario, facilitando que el acceso se pueda dar según las funciones dentro de la organización. En las organizaciones, los administradores pueden asignar permisos a nivel de sitio, carpeta o archivo individual, brindando control detallado sobre la visibilidad y acciones permitidas; preservando así la confidencialidad de la información sensible y evitando que sean modificadas o eliminadas por error.
          p.mb-0 Los niveles de permisos son usados para indicar cuales son las acciones que un usuario o un grupo podría realizar al interior de un sitio, una biblioteca, una carpeta, una lista, un elemento, entre otros recursos al interior de SharePoint (Marshall, 2025). 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/11.svg', alt='')

    p.mb-4 A continuación, se comparte una tabla con los niveles de permisos predeterminados en SharePoint Online:

    .div.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 10.
        span Niveles de permisos en SharePoint
      .tabla-a.color-acento-contenido.text-start
        table(alt="La tabla expone los distintos niveles de permisos disponibles en SharePoint y sus funciones principales dentro de la gestión de sitios. Cada nivel define el grado de control sobre la creación, edición, consulta o administración de contenidos, desde el acceso total de los administradores hasta los permisos limitados para usuarios que solo requieren lectura o aprobación de documentos.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-2
              th.w-25 Nivel de permiso
              th Descripción breve o función principal
          tbody
            tr
              td Control total
              td Permite administrar todo el sitio: crear, modificar o eliminar listas, bibliotecas y páginas, además de gestionar permisos y configuraciones. Ideal para administradores de TI o gestores del sitio.
            tr
              td Diseño
              td Autoriza la creación y edición de contenido, listas y bibliotecas, así como la personalización del diseño del sitio. No incluye gestión de seguridad. Recomendado para diseñadores o arquitectos de sitio.
            tr
              td Editar
              td Permite agregar, modificar y eliminar contenido del sitio, listas y bibliotecas. No puede cambiar configuraciones ni permisos. Usado por creadores de contenido o miembros de proyecto.
            tr
              td Contribuir
              td Autoriza subir, actualizar y eliminar documentos, pero sin modificar la estructura del sitio. Indicado para colaboradores que gestionan información sin privilegios administrativos.
            tr
              td Leer
              td Permite visualizar páginas, listas y documentos, sin posibilidad de modificarlos. Ideal para usuarios que solo necesitan acceso informativo.
            tr
              td Lectura restringida
              td De acceso solo a las versiones actuales de documentos, sin permitir ver versiones anteriores. Útil para usuarios externos o presentes.
            tr
              td Solo lectura
              td Permite ver páginas y versiones anteriores de documentos, sin editar ni descargar. Pensado para usuarios con acceso de consulta únicamente.
            tr
              td Aprobar
              td Permite revisar, aprobar o rechazar contenido generado por otros usuarios. Dirigido a supervisores o responsables de control de calidad.
            tr
              td Administrar jerarquía
              td Autoriza crear y editar sitios, páginas y subestructuras, además de manejar herencia de permisos. Recomendado para administradores de contenido o webmasters.

    p.mb-4 En SharePoint también se maneja la herencia de permisos, esto quiere decir que cuando hay elementos (carpetas, archivos, entre otros) que estén contenidos dentro de otros, por ejemplo, al interior de un sitio, ellos conservan los permisos del sitio o de el que lo contenga; por ejemplo, una carpeta hereda los permisos a las subcarpetas que están dentro de ella.


</template>

<script>
export default {
  name: 'Tema3',
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
