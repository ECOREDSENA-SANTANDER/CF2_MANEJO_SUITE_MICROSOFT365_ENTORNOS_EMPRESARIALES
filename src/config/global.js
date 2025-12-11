export default {
  global: {
    Name: 'Colaboración digital con Microsoft 365',
    Description:
      'En este componente formativo se aborda el trabajo colaborativo en entornos digitales como base para fortalecer la comunicación, la productividad y la gestión del conocimiento. Asimismo, promueve el uso de herramientas como Microsoft Teams y SharePoint, impulsando prácticas que favorecen la cooperación, la organización y la eficiencia en entornos laborales digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Trabajo colaborativo en entornos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Beneficios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Edición compartida de archivos en línea',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Retos en las organizaciones',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Teams',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Reuniones en línea',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Chat y videollamadas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Creación de equipos y canales ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Integración con otras aplicaciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'SharePoint',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Propósito',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diferencias con OneDrive',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Organización de archivos en espacios compartidos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Acceso y permisos de usuarios',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'SharePoint',
      referencia:
        'GoDaddy. (2025). Cómo SharePoint optimiza la colaboración en las empresas. GoDaddy Resources – LATAM. ',
      tipo: 'Sitio web',
      link:
        'https://www.godaddy.com/resources/latam/tecnologia/sharepoint-y-mejorar-la-colaboracion-empresarial',
    },
    {
      tema: 'Teams',
      referencia:
        'GoDaddy. (2025). Microsoft Teams: Qué es y cómo utilizarlo para mejorar tu productividad en el trabajo. GoDaddy Resources – LATAM.',
      tipo: 'Sitio web',
      link:
        'https://www.godaddy.com/resources/latam/digitalizacion/que-es-microsoft-teams',
    },
    {
      tema: 'Teams',
      referencia:
        'Juan & Lucía. (2025). Cómo usar Microsoft Teams | Microsoft Teams tutorial español (2025) [Video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=8TbORlEBlf4',
    },
    {
      tema: 'SharePoint',
      referencia:
        'M365 Hoy. (2024). Cómo funciona SharePoint Online: Guía completa para principiantes [Video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=Cf-BPmrQ0eI',
    },
  ],
  glosario: [
    {
      termino: 'Acceso remoto',
      significado:
        'Capacidad de ingresar y utilizar sistemas, archivos o aplicaciones desde cualquier lugar con conexión a Internet, lo que facilita la continuidad de las operaciones y el teletrabajo en entornos empresariales.',
    },
    {
      termino: 'Almacenamiento digital',
      significado:
        'Proceso de guardar información en medios electrónicos o en la nube, permitiendo conservar, organizar y acceder fácilmente a los datos sin depender de dispositivos físicos.',
    },
    {
      termino: 'Colaboración digital',
      significado:
        'Se refiere al uso de herramientas y tecnologías en línea que permiten a varios usuarios trabajar juntos, compartir información y desarrollar proyectos de forma simultánea y remota.',
    },
    {
      termino: 'Gobernanza',
      significado:
        'Hace referencia al conjunto de políticas, normas y procedimientos que garantizan el uso adecuado, seguro y eficiente de los recursos y datos dentro de una organización o plataforma tecnológica.',
    },
    {
      termino: 'Microsoft 365',
      significado:
        'Plataforma en línea de Microsoft que integra herramientas como Word, Excel, PowerPoint, Outlook y OneDrive, orientadas a la productividad, colaboración y gestión empresarial.',
    },
    {
      termino: 'Productividad organizacional',
      significado:
        'Capacidad de una empresa para optimizar sus recursos humanos y tecnológicos con el fin de alcanzar metas de manera eficiente y con resultados sostenibles.',
    },
    {
      termino: 'SharePoint',
      significado:
        'Es una herramienta de Microsoft 365 que facilita la creación de sitios web, intranets y espacios colaborativos para gestionar, compartir y proteger documentos e información de manera centralizada y segura dentro de una organización.',
    },
    {
      termino: 'Teams',
      significado:
        'Es una plataforma de comunicación y colaboración de Microsoft 365 que integra chat, videollamadas, reuniones, almacenamiento de archivos y aplicaciones, permitiendo el trabajo en equipo en tiempo real dentro de entornos empresariales y educativos.',
    },
    {
      termino: 'Trabajo colaborativo',
      significado:
        'Modalidad de organización en la que varias personas contribuyen con sus habilidades y conocimientos para alcanzar objetivos comunes, aprovechando herramientas tecnológicas compartidas.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'Es la acción coordinada de varias personas que aportan sus habilidades, conocimientos y esfuerzos para alcanzar un objetivo común, fomentando la comunicación, la confianza y la eficiencia.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Proceso mediante el cual las organizaciones integran tecnologías digitales en sus operaciones, modificando su estructura, cultura y modelos de negocio para innovar y mejorar su desempeño.',
    },
    {
      termino: 'Usuarios',
      significado:
        'Son las personas que interactúan con plataformas digitales o sistemas informáticos, accediendo a servicios, funciones o contenidos según los permisos que les sean otorgados por la organización o el administrador del sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Clickup. (2024). 15 funciones básicas de Microsoft Teams para mejorar la productividad de su equipo en 2025. Clickup.com.',
      link:
        'https://clickup.com/es-ES/blog/225679/funciones-de-microsoft-teams',
    },
    {
      referencia:
        'Crivellaro, A. (2025). Trabajo colaborativo: beneficios y herramientas. Cloudworks.',
      link: 'https://wearecloudworks.com/cloudmag/trabajo-colaborativo/',
    },
    {
      referencia:
        'Einig, M. (2022). Why SharePoint is key to greater collaboration efficiency. Rencore.com.',
      link: 'https://rencore.com/en/blog/sharepoint-collaboration-efficiency',
    },
    {
      referencia:
        'GoDaddy. (2025). Microsoft Teams: Qué es y cómo utilizarlo para mejorar tu productividad en el trabajo. GoDaddy.',
      link:
        'https://www.godaddy.com/resources/latam/digitalizacion/que-es-microsoft-teams',
    },
    {
      referencia:
        'Marchi, G. (2022). SharePoint: qué es, para qué sirve y 7 funcionalidades clave. intranet.ai.',
      link: 'https://intranet.ai/articulos/microsoft-365/sharepoint-online/ ',
    },
    {
      referencia:
        'Marshall, S. (2025). How to Manage Access/Permissions in SharePoint Online.',
      link:
        'https://www.lepide.com/blog/sharepoint-permissions-best-practices/',
    },
    {
      referencia:
        'Nunsys. (2018). Microsoft Sharepoint y las ventajas de una herramienta de trabajo integral.',
      link: 'https://www.nunsys.com/microsoft-sharepoint-ventajas/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
