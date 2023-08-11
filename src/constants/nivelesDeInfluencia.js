export const NIVELES_INFLUENCIA = [
    {
        id: 'comunicacion-datos',
        title: 'Comunicación de datos',
        grados: [
            {
                grado: 0,
                description: 'Programa que trabaja solo o en una computadora sin conexión.'
            },
            {
                grado: 1,
                description: 'Programa por lotes que acepta datos de manera remota o imprime a distancia.'
            },
            {
                grado: 2,
                description: 'Programa por lotes que acepta datos y también imprime a distancia.'
            },
            {
                grado: 3,
                description: 'Aplicación que toma datos en línea, como videos, a través de una entrada de video o un componente inicial, para alimentar tareas por lotes o sistemas de búsqueda.'
            },
            {
                grado: 4,
                description: 'Aplicación más allá de solo entrada en línea, compatible con un único método de comunicación.'
            },
            {
                grado: 5,
                description: 'Una red social que permite a los usuarios compartir fotos y videos no solo a través de mensajes, sino también por mensajes de voz y videollamadas.'
            },
        ] 
    },
    {
        id: 'procesamiento-distribuido',
        title: 'Procesamiento distribuido',
        grados: [
            {
                grado: 0,
                description: 'La aplicación no ayuda a mover ni compartir datos entre las computadoras de la empresa.'
            },     
            {
                grado: 1,
                description: 'La aplicación ordena información para que otra computadora en la empresa la utilice.'
            },     
            {
                grado: 2,
                description: 'La aplicación organiza y envía datos a otra parte para su procesamiento, no por el usuario final.'
            },     
            {
                grado: 3,
                description: 'Varias computadoras trabajan juntas en el procesamiento y la transferencia de datos va en una dirección.'
            },     
            {
                grado: 4,
                description: 'Varias computadoras trabajan juntas en el procesamiento y la transferencia de datos va en ambas direcciones.'
            },     
            {
                grado: 5,
                description: 'Las tareas se realizan en la mejor computadora disponible según la necesidad.'
            },     
        ],
    },
    {
        id: 'objetivos-rendimiento',
        title: 'Objetivos de rendimiento',
        grados: [
            {
                grado: 0,
                description: 'El usuario no pidió necesidades especiales de velocidad.'
            }, 
            {
                grado: 1,
                description: 'Se establecieron requisitos de velocidad y diseño, pero no se necesitó tomar acciones especiales.'
            }, 
            {
                grado: 2,
                description: 'Durante las horas de mayor trabajo, la velocidad de respuesta y la cantidad de datos son importantes. No se especificaron ajustes especiales para el procesador. La ventana de tiempo para tener el procesamiento listo es hasta el siguiente día laborable.'
            }, 
            {
                grado: 3,
                description: 'Tanto el tiempo de respuesta como la cantidad de procesamiento son críticos durante todo el horario laboral. No se establecieron ajustes especiales para el procesador. El tiempo necesario para comunicarse con otros sistemas también es importante.'
            }, 
            {
                grado: 4,
                description: 'Los requisitos de velocidad necesitan análisis detallado en las etapas de análisis y diseño de la aplicación.'
            }, 
            {
                grado: 5,
                description: 'Además de lo anterior, se usaron herramientas de análisis de velocidad en las etapas de diseño, desarrollo e implementación para cumplir con los requisitos de velocidad del usuario.'
            }, 
        ],
    },
    {
        id: 'configuracion-equipamiento',
        title: 'Configuracion del equipamiento',
        description: 'Cómo debemos diseñar los sistemas para evitar sobrecargar la configuración del hardware.',
        grados: [
            {
                grado: 0,
                description: 'Sin restricciones evidentes ni implícitas en la operación del equipo.'
            }, 
            {
                grado: 1,
                description: 'Hay algunas restricciones operacionales de baja intensidad. Resolver estas restricciones no requiere esfuerzo excepcional.'
            }, 
            {
                grado: 2,
                description: 'Se requieren consideraciones para ajustar el rendimiento y mejorar la seguridad.'
            }, 
            {
                grado: 3,
                description: 'Es necesario especificar un procesador especial para un módulo específico de la aplicación.'
            }, 
            {
                grado: 4,
                description: 'Las restricciones operacionales demandan cuidados particulares en el procesador principal o en uno especializado.'
            }, 
            {
                grado: 5,
                description: 'Además de lo anterior, existen consideraciones singulares en la distribución del sistema y sus componentes'
            }, 
        ]
    },
    {
        id: 'tasa-transacciones',
        title: 'Tasa de transacciones',
        description: 'Cómo medir cuantas transacciones puede manejar el software sin problemas.',
        grados: [
            {
                grado: 0,
                description: 'No se anticipan periodos de aumento en el volumen de transacciones.'
            }, 
            {
                grado: 1,
                description: 'Se esperan aumentos en las transacciones mensualmente, trimestralmente, anualmente o en algún periodo específico del año.'
            }, 
            {
                grado: 2,
                description: 'Se esperan aumentos semanales en las transacciones.'
            }, 
            {
                grado: 3,
                description: 'Se esperan aumentos diarios en las transacciones.'
            }, 
            {
                grado: 4,
                description: 'El usuario ha establecido un alto nivel de transacciones. El tiempo de respuesta requerido es alto o suficiente como para necesitar análisis de rendimiento y diseño.'
            }, 
            {
                grado: 5,
                description: 'Además de lo mencionado en el punto anterior, es necesario usar herramientas de análisis de rendimiento durante las fases de diseño, desarrollo e implementación.'
            }, 
        ],
    },
    {
        id: 'entrada-datos-linea',
        title: 'Entrada de datos en línea',
        description: 'Entrada de datos on-line provista por la aplicación',
        grados: [
            {
                grado: 0,
                description: 'Todas las transacciones son procesadas en modo batch'
            },
            {
                grado: 1,
                description: 'De 1% al 7% de las transacciones son entradas de datos on-line'
            },
            {
                grado: 2,
                description: 'De 8% al 15% de las transacciones son entradas de datos on-line'
            },
            {
                grado: 3,
                description: 'De 16% al 23% de las transacciones son entradas de datos on-line'
            },
            {
                grado: 4,
                description: 'De 24% al 30% de las transacciones son entradas de datos on-line'
            },
            {
                grado: 5,
                description: 'Más del 30% de las transacciones son entradas de datos on-line'
            },
        ]
    },
    {
        id: 'actualizacion-linea',
        title: 'Actualización en línea',
        description: 'La aplicación posibilita la actualización on-line de los archivos lógicos internos, buscando aumentar la eficiencia del usuario final.',
        grados: [
            {
                grado: 0,
                description: 'Ninguna.'
            },
            {
                grado: 1,
                description: 'Actualización en línea de uno a tres archivos internos importantes.'
            },
            {
                grado: 2,
                description: 'Actualización en línea de más de tres archivos internos importantes.'
            },
            {
                grado: 3,
                description: 'Actualización en línea de la mayoría de los archivos internos importantes.'
            },
            {
                grado: 4,
                description: 'Además de lo mencionado anteriormente, es esencial proteger contra la pérdida de datos, y se ha diseñado y codificado específicamente en el sistema.'
            },
            {
                grado: 5,
                description: 'Además de lo mencionado anteriormente, cuando hay grandes cantidades de actualizaciones, se considera el costo en el proceso de recuperación. Se han incluido procesos automáticos para la recuperación, minimizando la intervención del operador.'
            },
        ]
    },
    {
        id: 'reusabilidad-codigo',
        title: 'Reusabilidad del código',
        description: 'La aplicación y su código serán o fueron proyectados, desarrollados y mantenidos para ser utilizados en otras aplicaciones',
        grados: [
            {
                grado: 0,
                description: 'No hay código reutilizable.'
            },
            {
                grado: 1,
                description: 'Se usó código reutilizado solo dentro de la misma aplicación.'
            },
            {
                grado: 2,
                description: 'Menos del 10% de la aplicación se diseñó considerando la reutilización en otra aplicación.'
            },
            {
                grado: 3,
                description: '10% o más de la aplicación se diseñó pensando en reutilización en otra aplicación.'
            },
            {
                grado: 4,
                description: 'La aplicación se diseñó y/o documentó específicamente para que su código pueda reutilizarse fácilmente en otra aplicación, y el usuario configura cosas en el código fuente.'
            },
            {
                grado: 5,
                description: 'La aplicación se diseñó y/o documentó específicamente para que su código pueda reutilizarse fácilmente en otra aplicación, y la configuración se hace a través de parámetros que el usuario puede cambiar.'
            },
        ]
    },
    {
        id: 'facilidad-implementacion',
        title: 'Facilidad de implementación',
        description: 'La facilidad de implementación y conversión de datos son características de la aplicación. Un plan de conversión e implementación y/o herramientas de conversión fueron provistas y probadas durante la fase de prueba de la aplicación ',
        grados: [
            {
                grado: 0,
                description: 'No se establecieron consideraciones especiales por parte del usuario y no se requirió ningún procedimiento especial en la implementación.'
            },
            {
                grado: 1,
                description: 'No se establecieron consideraciones especiales por parte del usuario, pero se necesitan procedimientos especiales en la implementación.'
            },
            {
                grado: 2,
                description: 'El usuario estableció requisitos de conversión e implementación, se proporcionaron y probaron rutinas de conversión e implementación. El impacto de la conversión en el proyecto no se considera importante.'
            },
            {
                grado: 3,
                description: 'El usuario estableció requisitos de conversión e implementación, se proporcionaron y probaron rutinas de conversión e implementación. El impacto de la conversión en el proyecto se considera importante.'
            },
            {
                grado: 4,
                description: 'Además del punto 2, se proporcionaron y probaron herramientas de conversión automática e implementación.'
            },
            {
                grado: 5,
                description: 'Además del punto 3, se proporcionaron y probaron herramientas de conversión automática e implementación., y la configuración se hace a través de parámetros que el usuario puede cambiar.'
            },
        ]
    },
    {
        id: 'facilidad-operacion',
        title: 'Facilidad de operación',
        description: 'La facilidad de operación es una característica del sistema. Se proporcionaron y probaron procedimientos de inicialización, respaldo y recuperación durante la fase de prueba del sistema. La aplicación se esfuerza por reducir la necesidad de actividades manuales, como el manejo de cintas magnéticas, papel y la intervención del operador.',
        grados: [
            {
                grado: 0,
                description: 'No se requieren consideraciones especiales de operación, aparte del proceso normal de respaldo establecido por el usuario.'
            },
            {
                grado: 3,
                description: 'Verificar cuántas de las siguientes afirmaciones se aplican en la aplicación. Cada ítem cuenta como un punto, excepto cuando se especifique lo contrario'
            },
            {
                grado: 5,
                description: 'La aplicación fue diseñada para funcionar sin la necesidad de un operador; ninguna intervención del operador es necesaria para operar, excepto para iniciar y cerrar la aplicación. La aplicación tiene rutinas automáticas de recuperación en caso de errores., pero se necesitan procedimientos especiales en la implementación.'
            },
        ]
    },
    {
        id: 'instalaciones-multiples',
        title: 'Instalaciones múltiples',
        description: 'La aplicación fue diseñada específicamente para ser instalada en varios lugares de una organización o en diferentes organizaciones.',
        grados: [
            {
                grado: 0,
                description: 'Los requerimientos del usuario no consideran la necesidad de instalación en más de un lugar.'
            },
            {
                grado: 1,
                description: 'La necesidad de múltiples lugares fue considerada en el proyecto y la aplicación fue diseñada para funcionar solo en el mismo entorno de hardware y software.'
            },
            {
                grado: 2,
                description: 'La necesidad de múltiples lugares fue considerada en el proyecto y la aplicación fue diseñada para funcionar en entornos similares de software y hardware.'
            },
            {
                grado: 3,
                description: 'La necesidad de múltiples lugares fue considerada en el proyecto y la aplicación está diseñada para trabajar en diferentes entornos de hardware y/o software.'
            },
            {
                grado: 4,
                description: 'Se proporcionó y probó un plan de mantenimiento y documentación para respaldar la aplicación en múltiples lugares, además de las características de los ítems 1 y 2.'
            },
            {
                grado: 5,
                description: 'Se proporcionó y probó un plan de documentación y mantenimiento para respaldar la aplicación en múltiples lugares, y además la característica del ítem 3.'
            },
        ]
    },
    {
        id: 'procesamiento-complejo',
        title: 'Procesamiento complejo',
        description: 'El procesamiento complejo es una de las características de la aplicación, los siguientes componentes están presentes',
        options: [
            'Procesamiento especial de auditoria y/o procesamiento especial de seguridad',
            'Procesamiento lógico extensivo',
            'Procesamiento matemático extensivo',
            'Gran cantidad de procesamiento de excepciones, resultando en transacciones incompletas que deber ser procesadas nuevamente. Por ejemplo, transacciones de datos incompletas interrumpidas por problemas de comunicación o con datos incompletos',
            'Procesamiento complejo para manipular múltiples posibilidades de entrada/salida. Ejemplo: multimedia',
        ],
        grados: [
            {
                grado: 0,
                description: 'Ninguno de los items descritos.'
            },
            {
                grado: 1,
                description: 'Apenas uno de los items descritos.'
            },
            {
                grado: 2,
                description: 'Dos de los items descritos.'
            },
            {
                grado: 3,
                description: 'Tres de los items descritos.'
            },
            {
                grado: 4,
                description: 'Cuatro de los items descritos.'
            },
            {
                grado: 5,
                description: 'Todos los items descritos.'
            },
        ]
    },
    {
        id: 'interfase-usuario',
        title: 'Interfase con el usuario',
        options: [
            'Ayuda para la navegación (teclas de función, accesos directos y menús dinámicos)',
            'Menús',
            'Documentación y ayuda on-line',
            'Movimiento automático del cursor',
            'Scrolling vertical y horizontal',
            'Impresión remota (a través de transacciones on-line)',
            'Teclas de función preestablecidas',
            'Ejecución de procesos batch a partir de transacciones on-line',
            'Selección de datos vía movimiento del cursor en la pantalla',
            'Utilización intensa de campos en video reverso, intensificados, subrayados, coloridos y otros indicadores',
            'Impresión de la documentación de las transacciones on-line por medio de hard copy',
            'Utilización del mouse',
            'Menús pop-up',
            'El menor número de pantallas posibles para ejecutar las funciones del negocio',
            'Soporte bilingüe (el soporte de dos idiomas, cuente como cuatro items)',
            'Soporte multilingüe (el soporte de más de dos idiomas, cuente como seis items)',
        ],
        description: 'Las funciones on-line del sistema hacen énfasis en la amigabilidad del sistema y su facilidad de uso, buscando aumentar la eficiencia del usuario final.',
        grados: [
            {
                grado: 0,
                description: 'Ninguna de las características mencionadas.'
            },
            {
                grado: 1,
                description: 'De una a tres de las características mencionadas.'
            },
            {
                grado: 2,
                description: 'De cuatro a cinco de las características mencionadas.'
            },
            {
                grado: 3,
                description: 'Más de cinco de las características mencionadas, sin requerimientos específicos de amigabilidad por parte del usuario.'
            },
            {
                grado: 4,
                description: 'Más de cinco de las características mencionadas y requerimientos específicos de amigabilidad suficientes para generar actividades específicas, como reducir la cantidad de escritura.'
            },
            {
                grado: 5,
                description: 'Más de cinco de las características mencionadas y requerimientos de amigabilidad suficientes para usar herramientas y procesos especiales.'
            },
        ]
    },
    {
        id: 'facilidad-cambios',
        title: 'Facilidad de cambios',
        description: 'La aplicación fue diseñada específicamente para hacer el mantenimiento más fácil. Tiene características como consultas e informes flexibles para atender diferentes necesidades',
        options: [
            'Están disponibles facilidades como consultas e informes flexibles para atender necesidades simples (contar 1 ítem)',
            'Están disponibles facilidades como consultas e informes flexibles para atender necesidades de complejidad media (contar 2 items)',
            'Están disponibles facilidades como consultas e informes flexibles para atender necesidades complejas (contar 3 items)',
            'Datos de control son almacenados en tablas que son mantenidas por el usuario a través de procesos on-line, pero los cambios se hacen efectivos solamente al día siguiente',
            'Datos de control son almacenados en tablas que son mantenidas por el usuario a través de procesos on-line, pero los cambios se hacen efectivos inmediatamente (contar 2 items) , pero los cambios se hacen efectivos solamente al día siguiente',
        ],
        grados: [
            {
                grado: 0,
                description: 'Ninguno de los items descritos.'
            },
            {
                grado: 1,
                description: 'Apenas uno de los items descritos.'
            },
            {
                grado: 2,
                description: 'Dos de los items descritos.'
            },
            {
                grado: 3,
                description: 'Tres de los items descritos.'
            },
            {
                grado: 4,
                description: 'Cuatro de los items descritos.'
            },
            {
                grado: 5,
                description: 'Todos los items descritos.'
            },
        ]
    },
]