// Spanish translations for Programming questions
// Traducciones al español para preguntas de Programación

import type { CategoryTranslations } from '../index';

export const programming: CategoryTranslations = {
  // ===== NIVEL 1: Muy Fácil =====
  prg1: {
    text: '¿Qué es una variable?',
    correct: 'Contenedor para almacenar datos',
    wrong: ['Tipo de función', 'Tipo de bucle', 'Tipo de clase'],
  },
  prg2: {
    text: '¿Qué es una función?',
    correct: 'Bloque de código reutilizable',
    wrong: ['Variable', 'Bucle', 'Clase'],
  },
  prg3: {
    text: '¿Qué es un bucle?',
    correct: 'Código que se repite',
    wrong: ['Código que se ejecuta una vez', 'Variable', 'Función'],
  },
  prg4: {
    text: '¿Qué es un condicional?',
    correct: 'Código que se ejecuta si se cumple una condición',
    wrong: ['Código que siempre se ejecuta', 'Bucle', 'Variable'],
  },
  prg5: {
    text: '¿Qué es un string?',
    correct: 'Cadena de texto',
    wrong: ['Número', 'Booleano', 'Array'],
  },
  prg6: {
    text: '¿Qué es un integer?',
    correct: 'Número entero',
    wrong: ['Número decimal', 'Texto', 'Booleano'],
  },
  prg7: {
    text: '¿Qué es un booleano?',
    correct: 'Valor verdadero o falso',
    wrong: ['Número', 'Texto', 'Array'],
  },
  prg8: {
    text: '¿Qué es un array?',
    correct: 'Colección ordenada de elementos',
    wrong: ['Un solo elemento', 'Función', 'Clase'],
  },
  prg9: {
    text: '¿Qué hace el operador +?',
    correct: 'Suma o concatena',
    wrong: ['Resta', 'Multiplica', 'Divide'],
  },
  prg10: {
    text: '¿Qué hace el operador ==?',
    correct: 'Compara igualdad',
    wrong: ['Asigna valor', 'Suma', 'Resta'],
  },
  prg11: {
    text: '¿Qué hace el operador =?',
    correct: 'Asigna valor',
    wrong: ['Compara igualdad', 'Suma', 'Resta'],
  },
  prg12: {
    text: '¿Qué es un comentario en código?',
    correct: 'Texto ignorado por el compilador',
    wrong: ['Código ejecutable', 'Variable', 'Función'],
  },
  prg13: {
    text: '¿Qué es un bug?',
    correct: 'Error en el código',
    wrong: ['Característica', 'Variable', 'Función'],
  },
  prg14: {
    text: '¿Qué es debugging?',
    correct: 'Proceso de encontrar y corregir errores',
    wrong: ['Escribir código', 'Ejecutar código', 'Compilar código'],
  },
  prg15: {
    text: '¿Qué es un compilador?',
    correct: 'Programa que traduce código a lenguaje máquina',
    wrong: ['Editor de texto', 'Navegador', 'Sistema operativo'],
  },
  prg16: {
    text: '¿Qué es un intérprete?',
    correct: 'Programa que ejecuta código línea por línea',
    wrong: ['Compilador', 'Editor', 'Navegador'],
  },
  prg17: {
    text: '¿Qué es Python?',
    correct: 'Lenguaje de programación',
    wrong: ['Sistema operativo', 'Navegador', 'Base de datos'],
  },
  prg18: {
    text: '¿Qué es JavaScript?',
    correct: 'Lenguaje de programación para web',
    wrong: ['Lo mismo que Java', 'Sistema operativo', 'Base de datos'],
  },
  prg19: {
    text: '¿Qué es HTML?',
    correct: 'Lenguaje de marcado para páginas web',
    wrong: ['Lenguaje de programación', 'Base de datos', 'Sistema operativo'],
  },
  prg20: {
    text: '¿Qué es CSS?',
    correct: 'Lenguaje para estilos de páginas web',
    wrong: ['Lenguaje de programación', 'Base de datos', 'Sistema operativo'],
  },
  prg21: {
    text: '¿Qué es un IDE?',
    correct: 'Entorno de desarrollo integrado',
    wrong: ['Lenguaje de programación', 'Sistema operativo', 'Navegador'],
  },
  prg22: {
    text: '¿Qué es Git?',
    correct: 'Sistema de control de versiones',
    wrong: ['Lenguaje de programación', 'Editor de texto', 'Navegador'],
  },
  prg23: {
    text: '¿Qué es GitHub?',
    correct: 'Plataforma para alojar repositorios Git',
    wrong: ['Lenguaje de programación', 'Sistema operativo', 'Editor de texto'],
  },
  prg24: {
    text: '¿Qué es un repositorio?',
    correct: 'Lugar donde se almacena código',
    wrong: ['Tipo de variable', 'Tipo de función', 'Tipo de bucle'],
  },
  prg25: {
    text: '¿Qué es un commit?',
    correct: 'Guardar cambios en el repositorio',
    wrong: ['Borrar cambios', 'Crear archivo', 'Ejecutar código'],
  },
  prg26: {
    text: '¿Qué es una clase?',
    correct: 'Plantilla para crear objetos',
    wrong: ['Instancia de objeto', 'Variable', 'Función'],
  },
  prg27: {
    text: '¿Qué es un objeto?',
    correct: 'Instancia de una clase',
    wrong: ['Plantilla', 'Variable simple', 'Función'],
  },
  prg28: {
    text: '¿Qué es la herencia?',
    correct: 'Clase que hereda de otra',
    wrong: ['Clase independiente', 'Variable', 'Función'],
  },
  prg29: {
    text: '¿Qué es un método?',
    correct: 'Función dentro de una clase',
    wrong: ['Variable de clase', 'Clase', 'Objeto'],
  },
  prg30: {
    text: '¿Qué es un atributo?',
    correct: 'Variable dentro de una clase',
    wrong: ['Función de clase', 'Clase', 'Objeto'],
  },
  prg31: {
    text: '¿Qué es null?',
    correct: 'Ausencia de valor',
    wrong: ['Valor cero', 'Valor vacío', 'Valor falso'],
  },
  prg32: {
    text: '¿Qué es undefined?',
    correct: 'Variable sin valor asignado',
    wrong: ['Valor cero', 'Valor nulo', 'Valor falso'],
  },
  prg33: {
    text: '¿Qué es un parámetro?',
    correct: 'Valor que recibe una función',
    wrong: ['Valor que retorna', 'Variable global', 'Constante'],
  },
  prg34: {
    text: '¿Qué es un argumento?',
    correct: 'Valor pasado a una función',
    wrong: ['Valor retornado', 'Variable local', 'Constante'],
  },
  prg35: {
    text: '¿Qué es return?',
    correct: 'Devuelve un valor de una función',
    wrong: ['Inicia una función', 'Termina el programa', 'Crea una variable'],
  },
  prg36: {
    text: '¿Qué es un bucle for?',
    correct: 'Bucle con contador',
    wrong: ['Bucle sin fin', 'Condicional', 'Función'],
  },
  prg37: {
    text: '¿Qué es un bucle while?',
    correct: 'Bucle que continúa mientras la condición sea verdadera',
    wrong: ['Bucle con contador fijo', 'Condicional', 'Función'],
  },
  prg38: {
    text: '¿Qué hace break?',
    correct: 'Sale del bucle',
    wrong: ['Continúa el bucle', 'Pausa el bucle', 'Reinicia el bucle'],
  },
  prg39: {
    text: '¿Qué hace continue?',
    correct: 'Salta a la siguiente iteración',
    wrong: ['Sale del bucle', 'Pausa el bucle', 'Reinicia el bucle'],
  },
  prg40: {
    text: '¿Qué es if-else?',
    correct: 'Estructura condicional',
    wrong: ['Bucle', 'Función', 'Clase'],
  },
  prg41: {
    text: '¿Qué es switch?',
    correct: 'Estructura para múltiples condiciones',
    wrong: ['Bucle', 'Función', 'Clase'],
  },
  prg42: {
    text: '¿Qué es try-catch?',
    correct: 'Manejo de excepciones',
    wrong: ['Bucle', 'Condicional', 'Función'],
  },
  prg43: {
    text: '¿Qué es una excepción?',
    correct: 'Error durante la ejecución',
    wrong: ['Error de sintaxis', 'Advertencia', 'Comentario'],
  },
  prg44: {
    text: '¿Qué es recursión?',
    correct: 'Función que se llama a sí misma',
    wrong: ['Función que llama a otra', 'Bucle', 'Condicional'],
  },
  prg45: {
    text: '¿Qué es un algoritmo?',
    correct: 'Conjunto de pasos para resolver un problema',
    wrong: ['Lenguaje de programación', 'Tipo de dato', 'Variable'],
  },
  prg46: {
    text: '¿Qué es pseudocódigo?',
    correct: 'Descripción informal de un algoritmo',
    wrong: ['Código real', 'Comentario', 'Documentación'],
  },
  prg47: {
    text: '¿Qué es una API?',
    correct: 'Interfaz de programación de aplicaciones',
    wrong: ['Lenguaje de programación', 'Base de datos', 'Sistema operativo'],
  },
  prg48: {
    text: '¿Qué es JSON?',
    correct: 'Formato de intercambio de datos',
    wrong: ['Lenguaje de programación', 'Base de datos', 'Sistema operativo'],
  },
  prg49: {
    text: '¿Qué es XML?',
    correct: 'Lenguaje de marcado extensible',
    wrong: ['Lenguaje de programación', 'Base de datos', 'Sistema operativo'],
  },
  prg50: {
    text: '¿Qué es SQL?',
    correct: 'Lenguaje para bases de datos',
    wrong: [
      'Lenguaje de programación general',
      'Sistema operativo',
      'Navegador',
    ],
  },

  // ===== NIVEL 2-4: Fácil a Normal =====
  prg51: {
    text: '¿Qué es OOP?',
    correct: 'Programación orientada a objetos',
    wrong: [
      'Programación funcional',
      'Programación procedural',
      'Programación lógica',
    ],
  },
  prg52: {
    text: '¿Qué es encapsulamiento?',
    correct: 'Ocultar detalles internos de una clase',
    wrong: ['Mostrar todos los detalles', 'Herencia', 'Polimorfismo'],
  },
  prg53: {
    text: '¿Qué es polimorfismo?',
    correct: 'Objetos de diferentes clases responden al mismo método',
    wrong: ['Una sola forma', 'Encapsulamiento', 'Herencia'],
  },
  prg54: {
    text: '¿Qué es abstracción?',
    correct: 'Simplificar complejidad mostrando solo lo esencial',
    wrong: ['Mostrar todos los detalles', 'Herencia', 'Encapsulamiento'],
  },
  prg55: {
    text: '¿Qué es una interfaz?',
    correct: 'Contrato que define métodos',
    wrong: ['Implementación completa', 'Variable', 'Constante'],
  },
  prg56: {
    text: '¿Qué es una clase abstracta?',
    correct: 'Clase que no puede ser instanciada directamente',
    wrong: ['Clase normal', 'Interfaz', 'Objeto'],
  },
  prg57: {
    text: '¿Qué es un constructor?',
    correct: 'Método que inicializa un objeto',
    wrong: ['Método que destruye un objeto', 'Variable', 'Constante'],
  },
  prg58: {
    text: '¿Qué es un destructor?',
    correct: 'Método que limpia recursos de un objeto',
    wrong: ['Método que crea un objeto', 'Variable', 'Constante'],
  },
  prg59: {
    text: '¿Qué es static?',
    correct: 'Pertenece a la clase, no a instancias',
    wrong: ['Pertenece a instancias', 'Variable local', 'Constante'],
  },
  prg60: {
    text: '¿Qué es public?',
    correct: 'Accesible desde cualquier lugar',
    wrong: [
      'Solo accesible en la clase',
      'Solo accesible en el paquete',
      'No accesible',
    ],
  },
  prg61: {
    text: '¿Qué es private?',
    correct: 'Solo accesible dentro de la clase',
    wrong: [
      'Accesible desde cualquier lugar',
      'Accesible en subclases',
      'Accesible en el paquete',
    ],
  },
  prg62: {
    text: '¿Qué es protected?',
    correct: 'Accesible en la clase y subclases',
    wrong: ['Solo en la clase', 'Desde cualquier lugar', 'No accesible'],
  },
  prg63: {
    text: '¿Qué es un getter?',
    correct: 'Método que obtiene el valor de un atributo',
    wrong: ['Método que establece valor', 'Constructor', 'Destructor'],
  },
  prg64: {
    text: '¿Qué es un setter?',
    correct: 'Método que establece el valor de un atributo',
    wrong: ['Método que obtiene valor', 'Constructor', 'Destructor'],
  },
  prg65: {
    text: '¿Qué es sobrecarga de métodos?',
    correct: 'Mismo nombre, diferentes parámetros',
    wrong: [
      'Mismo nombre, mismos parámetros',
      'Diferentes nombres',
      'Sin parámetros',
    ],
  },
  prg66: {
    text: '¿Qué es sobreescritura de métodos?',
    correct: 'Redefinir método de clase padre',
    wrong: ['Crear nuevo método', 'Eliminar método', 'Renombrar método'],
  },
  prg67: {
    text: '¿Qué es una expresión lambda?',
    correct: 'Función anónima',
    wrong: ['Función con nombre', 'Clase', 'Variable'],
  },
  prg68: {
    text: '¿Qué es un closure?',
    correct: 'Función que recuerda su entorno',
    wrong: ['Función sin entorno', 'Clase', 'Variable'],
  },
  prg69: {
    text: '¿Qué es programación funcional?',
    correct: 'Paradigma basado en funciones puras',
    wrong: [
      'Paradigma basado en objetos',
      'Paradigma basado en procedimientos',
      'Paradigma basado en lógica',
    ],
  },
  prg70: {
    text: '¿Qué es una función pura?',
    correct: 'Función sin efectos secundarios',
    wrong: [
      'Función con efectos secundarios',
      'Función vacía',
      'Función recursiva',
    ],
  },
  prg71: {
    text: '¿Qué es inmutabilidad?',
    correct: 'Datos que no pueden cambiar',
    wrong: [
      'Datos que pueden cambiar',
      'Datos temporales',
      'Datos permanentes',
    ],
  },
  prg72: {
    text: '¿Qué es map en programación funcional?',
    correct: 'Aplicar función a cada elemento',
    wrong: ['Filtrar elementos', 'Reducir a un valor', 'Ordenar elementos'],
  },
  prg73: {
    text: '¿Qué es filter?',
    correct: 'Seleccionar elementos que cumplen condición',
    wrong: [
      'Aplicar función a cada elemento',
      'Reducir a un valor',
      'Ordenar elementos',
    ],
  },
  prg74: {
    text: '¿Qué es reduce?',
    correct: 'Combinar elementos en un solo valor',
    wrong: [
      'Aplicar función a cada elemento',
      'Filtrar elementos',
      'Ordenar elementos',
    ],
  },
  prg75: {
    text: '¿Qué es async/await?',
    correct: 'Sintaxis para código asíncrono',
    wrong: ['Código síncrono', 'Bucle', 'Condicional'],
  },

  // ===== NIVEL 5-8: Difícil a Profesor =====
  prg76: {
    text: '¿Qué es una promesa?',
    correct: 'Objeto que representa valor futuro',
    wrong: ['Valor inmediato', 'Variable', 'Constante'],
  },
  prg77: {
    text: '¿Qué es callback?',
    correct: 'Función pasada como argumento',
    wrong: ['Función que retorna', 'Variable', 'Constante'],
  },
  prg78: {
    text: '¿Qué es el event loop?',
    correct: 'Mecanismo para manejar operaciones asíncronas',
    wrong: ['Bucle normal', 'Condicional', 'Función'],
  },
  prg79: {
    text: '¿Qué es un thread?',
    correct: 'Unidad de ejecución dentro de un proceso',
    wrong: ['Proceso completo', 'Variable', 'Función'],
  },
  prg80: {
    text: '¿Qué es concurrencia?',
    correct: 'Múltiples tareas progresando',
    wrong: ['Una sola tarea', 'Tareas secuenciales', 'Sin tareas'],
  },
  prg81: {
    text: '¿Qué es paralelismo?',
    correct: 'Múltiples tareas ejecutándose simultáneamente',
    wrong: ['Tareas secuenciales', 'Una sola tarea', 'Concurrencia'],
  },
  prg82: {
    text: '¿Qué es un deadlock?',
    correct: 'Bloqueo mutuo entre procesos',
    wrong: ['Ejecución normal', 'Error de sintaxis', 'Advertencia'],
  },
  prg83: {
    text: '¿Qué es race condition?',
    correct: 'Resultado depende del orden de ejecución',
    wrong: ['Resultado predecible', 'Error de sintaxis', 'Advertencia'],
  },
  prg84: {
    text: '¿Qué es un mutex?',
    correct: 'Mecanismo de exclusión mutua',
    wrong: ['Tipo de variable', 'Tipo de función', 'Tipo de clase'],
  },
  prg85: {
    text: '¿Qué es un semáforo?',
    correct: 'Mecanismo de sincronización',
    wrong: ['Tipo de variable', 'Tipo de función', 'Tipo de clase'],
  },
  prg86: {
    text: '¿Qué es garbage collection?',
    correct: 'Liberación automática de memoria',
    wrong: ['Asignación de memoria', 'Tipo de variable', 'Tipo de función'],
  },
  prg87: {
    text: '¿Qué es memory leak?',
    correct: 'Memoria no liberada',
    wrong: ['Memoria liberada', 'Memoria asignada', 'Memoria disponible'],
  },
  prg88: {
    text: '¿Qué es stack overflow?',
    correct: 'Desbordamiento de la pila',
    wrong: ['Desbordamiento del heap', 'Error de sintaxis', 'Advertencia'],
  },
  prg89: {
    text: '¿Qué es heap?',
    correct: 'Área de memoria para asignación dinámica',
    wrong: [
      'Área de memoria para variables locales',
      'Tipo de variable',
      'Tipo de función',
    ],
  },
  prg90: {
    text: '¿Qué es stack?',
    correct: 'Área de memoria para llamadas de función',
    wrong: ['Área de memoria dinámica', 'Tipo de variable', 'Tipo de función'],
  },
  prg91: {
    text: '¿Qué es un puntero?',
    correct: 'Variable que almacena dirección de memoria',
    wrong: ['Variable que almacena valor', 'Función', 'Clase'],
  },
  prg92: {
    text: '¿Qué es referencia?',
    correct: 'Alias para otra variable',
    wrong: ['Copia de variable', 'Nueva variable', 'Constante'],
  },
  prg93: {
    text: '¿Qué es paso por valor?',
    correct: 'Pasar copia del valor',
    wrong: ['Pasar dirección', 'Pasar referencia', 'No pasar nada'],
  },
  prg94: {
    text: '¿Qué es paso por referencia?',
    correct: 'Pasar dirección de la variable',
    wrong: ['Pasar copia', 'Pasar valor', 'No pasar nada'],
  },
  prg95: {
    text: '¿Qué es un patrón de diseño?',
    correct: 'Solución reutilizable a problemas comunes',
    wrong: ['Código específico', 'Librería', 'Framework'],
  },
  prg96: {
    text: '¿Qué es el patrón Singleton?',
    correct: 'Clase con una sola instancia',
    wrong: ['Clase con múltiples instancias', 'Interfaz', 'Clase abstracta'],
  },
  prg97: {
    text: '¿Qué es el patrón Factory?',
    correct: 'Crear objetos sin especificar clase exacta',
    wrong: [
      'Crear una sola instancia',
      'Destruir objetos',
      'Modificar objetos',
    ],
  },
  prg98: {
    text: '¿Qué es el patrón Observer?',
    correct: 'Notificar cambios a objetos suscritos',
    wrong: ['Crear objetos', 'Destruir objetos', 'Modificar objetos'],
  },
  prg99: {
    text: '¿Qué es SOLID?',
    correct: 'Principios de diseño orientado a objetos',
    wrong: ['Lenguaje de programación', 'Framework', 'Librería'],
  },
  prg100: {
    text: '¿Qué es el principio de responsabilidad única?',
    correct: 'Clase debe tener una sola razón para cambiar',
    wrong: [
      'Clase puede tener muchas responsabilidades',
      'Clase no debe cambiar',
      'Clase debe ser grande',
    ],
  },
};

export default programming;
