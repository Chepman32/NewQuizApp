// Spanish translations for Computer Science questions
// Traducciones al español para preguntas de Ciencias de la Computación

import type { CategoryTranslations } from '../index';

export const computerScience: CategoryTranslations = {
  // ===== NIVEL 1: Muy Fácil =====
  cs1: {
    text: '¿Qué significa CPU?',
    correct: 'Unidad Central de Procesamiento',
    wrong: [
      'Unidad de Control Principal',
      'Procesador Central Único',
      'Computadora Personal Universal',
    ],
  },
  cs2: {
    text: '¿Qué es RAM?',
    correct: 'Memoria de acceso aleatorio',
    wrong: ['Memoria de solo lectura', 'Disco duro', 'Procesador'],
  },
  cs3: {
    text: '¿Qué es un bit?',
    correct: 'Unidad mínima de información (0 o 1)',
    wrong: ['8 bits', '1000 bytes', 'Tipo de cable'],
  },
  cs4: {
    text: '¿Cuántos bits hay en un byte?',
    correct: '8',
    wrong: ['4', '16', '32'],
  },
  cs5: {
    text: '¿Qué es un sistema operativo?',
    correct: 'Software que gestiona el hardware',
    wrong: ['Hardware', 'Aplicación', 'Navegador'],
  },
  cs6: {
    text: '¿Qué es Windows?',
    correct: 'Sistema operativo',
    wrong: ['Navegador', 'Procesador de texto', 'Base de datos'],
  },
  cs7: {
    text: '¿Qué es Linux?',
    correct: 'Sistema operativo de código abierto',
    wrong: ['Navegador', 'Procesador de texto', 'Base de datos'],
  },
  cs8: {
    text: '¿Qué es macOS?',
    correct: 'Sistema operativo de Apple',
    wrong: ['Navegador', 'Procesador de texto', 'Base de datos'],
  },
  cs9: {
    text: '¿Qué es un navegador web?',
    correct: 'Programa para acceder a internet',
    wrong: ['Sistema operativo', 'Procesador', 'Memoria'],
  },
  cs10: {
    text: '¿Qué es una URL?',
    correct: 'Dirección de una página web',
    wrong: ['Tipo de archivo', 'Programa', 'Hardware'],
  },
  cs11: {
    text: '¿Qué es HTTP?',
    correct: 'Protocolo de transferencia de hipertexto',
    wrong: ['Tipo de archivo', 'Lenguaje de programación', 'Sistema operativo'],
  },
  cs12: {
    text: '¿Qué es HTTPS?',
    correct: 'HTTP seguro',
    wrong: ['HTTP más rápido', 'HTTP antiguo', 'HTTP para móviles'],
  },
  cs13: {
    text: '¿Qué es una dirección IP?',
    correct: 'Identificador numérico de un dispositivo en red',
    wrong: ['Nombre de dominio', 'Tipo de cable', 'Programa'],
  },
  cs14: {
    text: '¿Qué es DNS?',
    correct: 'Sistema que traduce nombres de dominio a IPs',
    wrong: ['Tipo de conexión', 'Protocolo de seguridad', 'Tipo de servidor'],
  },
  cs15: {
    text: '¿Qué es un servidor?',
    correct: 'Computadora que proporciona servicios a otras',
    wrong: ['Computadora personal', 'Tipo de programa', 'Tipo de cable'],
  },
  cs16: {
    text: '¿Qué es un cliente?',
    correct: 'Dispositivo que solicita servicios a un servidor',
    wrong: ['Servidor', 'Tipo de programa', 'Tipo de cable'],
  },
  cs17: {
    text: '¿Qué es la nube?',
    correct: 'Servicios de computación por internet',
    wrong: ['Tipo de hardware', 'Tipo de cable', 'Sistema operativo'],
  },
  cs18: {
    text: '¿Qué es un archivo?',
    correct: 'Unidad de almacenamiento de datos',
    wrong: ['Tipo de programa', 'Tipo de hardware', 'Tipo de cable'],
  },
  cs19: {
    text: '¿Qué es una carpeta?',
    correct: 'Contenedor para organizar archivos',
    wrong: ['Tipo de archivo', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs20: {
    text: '¿Qué es un disco duro?',
    correct: 'Dispositivo de almacenamiento permanente',
    wrong: ['Memoria temporal', 'Procesador', 'Tarjeta gráfica'],
  },
  cs21: {
    text: '¿Qué es SSD?',
    correct: 'Disco de estado sólido',
    wrong: ['Disco duro tradicional', 'Memoria RAM', 'Procesador'],
  },
  cs22: {
    text: '¿Qué es USB?',
    correct: 'Bus serial universal',
    wrong: ['Tipo de disco', 'Tipo de memoria', 'Tipo de procesador'],
  },
  cs23: {
    text: '¿Qué es WiFi?',
    correct: 'Conexión inalámbrica a internet',
    wrong: ['Conexión por cable', 'Tipo de archivo', 'Tipo de programa'],
  },
  cs24: {
    text: '¿Qué es Bluetooth?',
    correct: 'Tecnología de conexión inalámbrica de corto alcance',
    wrong: ['Conexión de largo alcance', 'Tipo de cable', 'Tipo de archivo'],
  },
  cs25: {
    text: '¿Qué es un virus informático?',
    correct: 'Programa malicioso que se replica',
    wrong: ['Programa útil', 'Tipo de archivo', 'Tipo de hardware'],
  },
  cs26: {
    text: '¿Qué es un firewall?',
    correct: 'Sistema de seguridad de red',
    wrong: ['Tipo de virus', 'Tipo de archivo', 'Tipo de hardware'],
  },
  cs27: {
    text: '¿Qué es encriptación?',
    correct: 'Proceso de codificar información',
    wrong: ['Proceso de borrar', 'Proceso de copiar', 'Proceso de comprimir'],
  },
  cs28: {
    text: '¿Qué es una contraseña?',
    correct: 'Código secreto para acceder',
    wrong: ['Nombre de usuario', 'Dirección de correo', 'Número de teléfono'],
  },
  cs29: {
    text: '¿Qué es un backup?',
    correct: 'Copia de seguridad de datos',
    wrong: ['Borrado de datos', 'Compresión de datos', 'Encriptación de datos'],
  },
  cs30: {
    text: '¿Qué es un pixel?',
    correct: 'Punto más pequeño de una imagen digital',
    wrong: ['Tipo de archivo', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs31: {
    text: '¿Qué es resolución?',
    correct: 'Número de píxeles en una imagen',
    wrong: ['Tamaño del archivo', 'Color de la imagen', 'Formato de la imagen'],
  },
  cs32: {
    text: '¿Qué es un algoritmo?',
    correct: 'Conjunto de pasos para resolver un problema',
    wrong: ['Tipo de programa', 'Tipo de hardware', 'Tipo de archivo'],
  },
  cs33: {
    text: '¿Qué es código binario?',
    correct: 'Sistema de números con 0 y 1',
    wrong: ['Sistema decimal', 'Sistema hexadecimal', 'Sistema octal'],
  },
  cs34: {
    text: '¿Qué es software?',
    correct: 'Programas de computadora',
    wrong: ['Componentes físicos', 'Cables', 'Pantalla'],
  },
  cs35: {
    text: '¿Qué es hardware?',
    correct: 'Componentes físicos de una computadora',
    wrong: ['Programas', 'Datos', 'Archivos'],
  },
  cs36: {
    text: '¿Qué es un procesador?',
    correct: 'Cerebro de la computadora',
    wrong: ['Memoria', 'Disco duro', 'Tarjeta gráfica'],
  },
  cs37: {
    text: '¿Qué es una tarjeta gráfica?',
    correct: 'Componente que procesa gráficos',
    wrong: ['Procesador principal', 'Memoria RAM', 'Disco duro'],
  },
  cs38: {
    text: '¿Qué es la placa base?',
    correct: 'Circuito principal que conecta componentes',
    wrong: ['Procesador', 'Memoria', 'Disco duro'],
  },
  cs39: {
    text: '¿Qué es un monitor?',
    correct: 'Pantalla de la computadora',
    wrong: ['Procesador', 'Memoria', 'Disco duro'],
  },
  cs40: {
    text: '¿Qué es un teclado?',
    correct: 'Dispositivo de entrada con teclas',
    wrong: ['Dispositivo de salida', 'Procesador', 'Memoria'],
  },
  cs41: {
    text: '¿Qué es un ratón?',
    correct: 'Dispositivo de entrada para apuntar',
    wrong: ['Dispositivo de salida', 'Procesador', 'Memoria'],
  },
  cs42: {
    text: '¿Qué es una impresora?',
    correct: 'Dispositivo de salida que imprime',
    wrong: ['Dispositivo de entrada', 'Procesador', 'Memoria'],
  },
  cs43: {
    text: '¿Qué es un escáner?',
    correct: 'Dispositivo que digitaliza documentos',
    wrong: ['Dispositivo que imprime', 'Procesador', 'Memoria'],
  },
  cs44: {
    text: '¿Qué es un router?',
    correct: 'Dispositivo que dirige tráfico de red',
    wrong: ['Tipo de cable', 'Tipo de programa', 'Tipo de archivo'],
  },
  cs45: {
    text: '¿Qué es un módem?',
    correct: 'Dispositivo que conecta a internet',
    wrong: ['Tipo de cable', 'Tipo de programa', 'Tipo de archivo'],
  },
  cs46: {
    text: '¿Qué es un byte?',
    correct: '8 bits',
    wrong: ['1 bit', '16 bits', '32 bits'],
  },
  cs47: {
    text: '¿Qué es un kilobyte?',
    correct: '1024 bytes',
    wrong: ['100 bytes', '1000 bytes', '10000 bytes'],
  },
  cs48: {
    text: '¿Qué es un megabyte?',
    correct: '1024 kilobytes',
    wrong: ['100 kilobytes', '1000 kilobytes', '10000 kilobytes'],
  },
  cs49: {
    text: '¿Qué es un gigabyte?',
    correct: '1024 megabytes',
    wrong: ['100 megabytes', '1000 megabytes', '10000 megabytes'],
  },
  cs50: {
    text: '¿Qué es un terabyte?',
    correct: '1024 gigabytes',
    wrong: ['100 gigabytes', '1000 gigabytes', '10000 gigabytes'],
  },

  // ===== NIVEL 2-8: Fácil a Profesor =====
  cs51: {
    text: '¿Qué es la complejidad temporal?',
    correct: 'Medida de tiempo de ejecución de un algoritmo',
    wrong: ['Medida de espacio', 'Medida de calidad', 'Medida de seguridad'],
  },
  cs52: {
    text: '¿Qué significa O(n)?',
    correct: 'Complejidad lineal',
    wrong: [
      'Complejidad constante',
      'Complejidad cuadrática',
      'Complejidad logarítmica',
    ],
  },
  cs53: {
    text: '¿Qué significa O(1)?',
    correct: 'Complejidad constante',
    wrong: [
      'Complejidad lineal',
      'Complejidad cuadrática',
      'Complejidad logarítmica',
    ],
  },
  cs54: {
    text: '¿Qué significa O(n²)?',
    correct: 'Complejidad cuadrática',
    wrong: [
      'Complejidad lineal',
      'Complejidad constante',
      'Complejidad logarítmica',
    ],
  },
  cs55: {
    text: '¿Qué significa O(log n)?',
    correct: 'Complejidad logarítmica',
    wrong: [
      'Complejidad lineal',
      'Complejidad constante',
      'Complejidad cuadrática',
    ],
  },
  cs56: {
    text: '¿Qué es una base de datos?',
    correct: 'Sistema organizado para almacenar datos',
    wrong: ['Tipo de programa', 'Tipo de hardware', 'Tipo de red'],
  },
  cs57: {
    text: '¿Qué es SQL?',
    correct: 'Lenguaje para consultar bases de datos',
    wrong: [
      'Lenguaje de programación general',
      'Sistema operativo',
      'Tipo de red',
    ],
  },
  cs58: {
    text: '¿Qué es una base de datos relacional?',
    correct: 'Base de datos con tablas relacionadas',
    wrong: [
      'Base de datos sin estructura',
      'Base de datos de archivos',
      'Base de datos de imágenes',
    ],
  },
  cs59: {
    text: '¿Qué es NoSQL?',
    correct: 'Base de datos no relacional',
    wrong: [
      'Base de datos relacional',
      'Lenguaje de programación',
      'Sistema operativo',
    ],
  },
  cs60: {
    text: '¿Qué es una clave primaria?',
    correct: 'Identificador único de un registro',
    wrong: ['Contraseña', 'Nombre de tabla', 'Tipo de dato'],
  },
  cs61: {
    text: '¿Qué es una clave foránea?',
    correct: 'Referencia a clave primaria de otra tabla',
    wrong: ['Clave primaria', 'Contraseña', 'Nombre de tabla'],
  },
  cs62: {
    text: '¿Qué es normalización?',
    correct: 'Proceso de organizar datos para reducir redundancia',
    wrong: [
      'Proceso de duplicar datos',
      'Proceso de borrar datos',
      'Proceso de encriptar datos',
    ],
  },
  cs63: {
    text: '¿Qué es un índice en base de datos?',
    correct: 'Estructura para acelerar búsquedas',
    wrong: ['Tipo de tabla', 'Tipo de columna', 'Tipo de fila'],
  },
  cs64: {
    text: '¿Qué es una transacción?',
    correct: 'Conjunto de operaciones que se ejecutan como unidad',
    wrong: ['Una sola operación', 'Tipo de tabla', 'Tipo de índice'],
  },
  cs65: {
    text: '¿Qué significa ACID?',
    correct: 'Atomicidad, Consistencia, Aislamiento, Durabilidad',
    wrong: ['Tipo de base de datos', 'Tipo de lenguaje', 'Tipo de red'],
  },
  cs66: {
    text: '¿Qué es TCP/IP?',
    correct: 'Protocolo de comunicación de internet',
    wrong: ['Tipo de hardware', 'Tipo de software', 'Tipo de archivo'],
  },
  cs67: {
    text: '¿Qué es un paquete de red?',
    correct: 'Unidad de datos transmitida por red',
    wrong: ['Tipo de cable', 'Tipo de programa', 'Tipo de archivo'],
  },
  cs68: {
    text: '¿Qué es latencia?',
    correct: 'Tiempo de retraso en comunicación',
    wrong: [
      'Velocidad de transferencia',
      'Cantidad de datos',
      'Tipo de conexión',
    ],
  },
  cs69: {
    text: '¿Qué es ancho de banda?',
    correct: 'Capacidad de transferencia de datos',
    wrong: ['Tiempo de retraso', 'Tipo de conexión', 'Tipo de cable'],
  },
  cs70: {
    text: '¿Qué es virtualización?',
    correct: 'Crear versiones virtuales de recursos',
    wrong: ['Crear versiones físicas', 'Borrar recursos', 'Copiar recursos'],
  },
  cs71: {
    text: '¿Qué es una máquina virtual?',
    correct: 'Computadora simulada por software',
    wrong: ['Computadora física', 'Tipo de programa', 'Tipo de archivo'],
  },
  cs72: {
    text: '¿Qué es un contenedor?',
    correct: 'Entorno aislado para ejecutar aplicaciones',
    wrong: ['Tipo de archivo', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs73: {
    text: '¿Qué es Docker?',
    correct: 'Plataforma de contenedores',
    wrong: ['Sistema operativo', 'Lenguaje de programación', 'Base de datos'],
  },
  cs74: {
    text: '¿Qué es Kubernetes?',
    correct: 'Sistema de orquestación de contenedores',
    wrong: ['Sistema operativo', 'Lenguaje de programación', 'Base de datos'],
  },
  cs75: {
    text: '¿Qué es DevOps?',
    correct: 'Práctica de integrar desarrollo y operaciones',
    wrong: ['Tipo de programa', 'Tipo de hardware', 'Tipo de red'],
  },
  cs76: {
    text: '¿Qué es CI/CD?',
    correct: 'Integración y despliegue continuos',
    wrong: ['Tipo de programa', 'Tipo de hardware', 'Tipo de red'],
  },
  cs77: {
    text: '¿Qué es un microservicio?',
    correct: 'Servicio pequeño e independiente',
    wrong: ['Servicio grande', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs78: {
    text: '¿Qué es una API REST?',
    correct: 'Interfaz de programación basada en HTTP',
    wrong: ['Tipo de base de datos', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs79: {
    text: '¿Qué es GraphQL?',
    correct: 'Lenguaje de consulta para APIs',
    wrong: [
      'Base de datos',
      'Sistema operativo',
      'Lenguaje de programación general',
    ],
  },
  cs80: {
    text: '¿Qué es machine learning?',
    correct: 'Sistemas que aprenden de datos',
    wrong: ['Programación tradicional', 'Tipo de hardware', 'Tipo de red'],
  },
  cs81: {
    text: '¿Qué es inteligencia artificial?',
    correct: 'Sistemas que simulan inteligencia humana',
    wrong: ['Programación tradicional', 'Tipo de hardware', 'Tipo de red'],
  },
  cs82: {
    text: '¿Qué es una red neuronal?',
    correct: 'Modelo inspirado en el cerebro',
    wrong: [
      'Tipo de red de computadoras',
      'Tipo de programa',
      'Tipo de hardware',
    ],
  },
  cs83: {
    text: '¿Qué es deep learning?',
    correct: 'Aprendizaje con redes neuronales profundas',
    wrong: ['Aprendizaje superficial', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs84: {
    text: '¿Qué es criptografía?',
    correct: 'Ciencia de proteger información',
    wrong: [
      'Ciencia de destruir información',
      'Ciencia de copiar información',
      'Ciencia de comprimir información',
    ],
  },
  cs85: {
    text: '¿Qué es hash?',
    correct: 'Función que convierte datos en valor fijo',
    wrong: [
      'Función que encripta',
      'Función que comprime',
      'Función que copia',
    ],
  },
  cs86: {
    text: '¿Qué es blockchain?',
    correct: 'Cadena de bloques de datos enlazados',
    wrong: [
      'Tipo de base de datos tradicional',
      'Tipo de programa',
      'Tipo de hardware',
    ],
  },
  cs87: {
    text: '¿Qué es computación cuántica?',
    correct: 'Computación basada en mecánica cuántica',
    wrong: ['Computación tradicional', 'Tipo de programa', 'Tipo de red'],
  },
  cs88: {
    text: '¿Qué es un qubit?',
    correct: 'Bit cuántico',
    wrong: ['Bit tradicional', 'Byte', 'Kilobyte'],
  },
  cs89: {
    text: '¿Qué es el problema P vs NP?',
    correct: 'Problema sobre complejidad computacional',
    wrong: [
      'Problema de programación',
      'Problema de hardware',
      'Problema de red',
    ],
  },
  cs90: {
    text: '¿Qué es NP-completo?',
    correct: 'Clase de problemas difíciles',
    wrong: [
      'Clase de problemas fáciles',
      'Tipo de programa',
      'Tipo de hardware',
    ],
  },
  cs91: {
    text: '¿Qué es la máquina de Turing?',
    correct: 'Modelo teórico de computación',
    wrong: ['Computadora real', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs92: {
    text: '¿Qué es computabilidad?',
    correct: 'Estudio de qué puede ser computado',
    wrong: ['Estudio de velocidad', 'Estudio de memoria', 'Estudio de redes'],
  },
  cs93: {
    text: '¿Qué es el problema de la parada?',
    correct: 'Problema indecidible sobre terminación de programas',
    wrong: ['Problema de velocidad', 'Problema de memoria', 'Problema de red'],
  },
  cs94: {
    text: '¿Qué es un autómata finito?',
    correct: 'Modelo de computación con estados finitos',
    wrong: [
      'Modelo con estados infinitos',
      'Tipo de programa',
      'Tipo de hardware',
    ],
  },
  cs95: {
    text: '¿Qué es una gramática formal?',
    correct: 'Reglas para generar lenguajes',
    wrong: ['Reglas de ortografía', 'Tipo de programa', 'Tipo de hardware'],
  },
  cs96: {
    text: '¿Qué es un compilador?',
    correct: 'Programa que traduce código a lenguaje máquina',
    wrong: ['Programa que ejecuta código', 'Tipo de hardware', 'Tipo de red'],
  },
  cs97: {
    text: '¿Qué es análisis léxico?',
    correct: 'Primera fase de compilación',
    wrong: ['Última fase', 'Fase de ejecución', 'Fase de depuración'],
  },
  cs98: {
    text: '¿Qué es análisis sintáctico?',
    correct: 'Fase que verifica estructura del código',
    wrong: ['Fase que ejecuta código', 'Fase que optimiza', 'Fase que depura'],
  },
  cs99: {
    text: '¿Qué es optimización de código?',
    correct: 'Mejorar eficiencia del código generado',
    wrong: ['Empeorar código', 'Borrar código', 'Copiar código'],
  },
  cs100: {
    text: '¿Qué es generación de código?',
    correct: 'Producir código máquina desde código intermedio',
    wrong: ['Escribir código fuente', 'Borrar código', 'Copiar código'],
  },
};

export default computerScience;
