<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Colaboración digital con Microsoft 365',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la apropiación de los conceptos y principios del trabajo colaborativo en entornos digitales, reconociendo el uso de herramientas como Microsoft Teams y SharePoint para fortalecer la comunicación, la productividad y la gestión compartida de la información en las organizaciones.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El trabajo colaborativo en entornos digitales requiere que los participantes compartan el mismo espacio físico para poder comunicarse eficazmente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'Herramientas como Microsoft Teams, SharePoint y OneDrive facilitan la comunicación, gestión documental y trabajo colaborativo en tiempo real. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'Microsoft Teams es una herramienta que combina mensajería, videollamadas, almacenamiento y planificación en una misma plataforma. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'Las reuniones virtuales en Teams solo permiten la participación por audio, sin video ni chat. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'SharePoint es una herramienta orientada al almacenamiento personal de documentos sin enfoque organizacional. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'OneDrive y SharePoint cumplen exactamente la misma función dentro de Microsoft 365. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'Organizar archivos en espacios compartidos dentro de SharePoint ayuda a reducir la duplicidad de documentos y mejorar la productividad. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'La integración de SharePoint con Teams y OneDrive fortalece la continuidad del trabajo y la gobernanza de la información. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'En SharePoint, los usuarios sin permisos de edición pueden eliminar archivos compartidos en bibliotecas documentales. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'Microsoft Teams permite integrar aplicaciones externas como Trello, Power BI o Planner para optimizar el trabajo colaborativo. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia comprensión sobre el uso de herramientas colaborativas como Teams y SharePoint, aplicando los principios del trabajo en equipo digital y la gestión eficiente de la información organizacional. ¡Excelente progreso en su formación digital! ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        'Ha demostrado comprensión profunda de las funcionalidades de Microsoft 365 y su importancia en la transformación digital de las organizaciones. Su rendimiento evidencia autonomía, responsabilidad y capacidad para aplicar herramientas tecnológicas en procesos colaborativos. ¡Felicitaciones por su compromiso con el aprendizaje! ',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
