// Spanish translations for Data Structures questions
// Traducciones al español para preguntas de Estructuras de Datos

import type { CategoryTranslations } from '../index';

export const dataStructures: CategoryTranslations = {
  // ===== NIVEL 1: Muy Fácil =====
  ds1: {
    text: '¿Qué es un array?',
    correct: 'Colección ordenada de elementos',
    wrong: ['Un solo elemento', 'Función', 'Clase'],
  },
  ds2: {
    text: '¿Qué es una lista enlazada?',
    correct: 'Secuencia de nodos conectados',
    wrong: ['Array', 'Árbol', 'Grafo'],
  },
  ds3: {
    text: '¿Qué es una pila (stack)?',
    correct: 'Estructura LIFO',
    wrong: ['Estructura FIFO', 'Array', 'Árbol'],
  },
  ds4: {
    text: '¿Qué significa LIFO?',
    correct: 'Último en entrar, primero en salir',
    wrong: ['Primero en entrar, primero en salir', 'Aleatorio', 'Ordenado'],
  },
  ds5: {
    text: '¿Qué es una cola (queue)?',
    correct: 'Estructura FIFO',
    wrong: ['Estructura LIFO', 'Array', 'Árbol'],
  },
  ds6: {
    text: '¿Qué significa FIFO?',
    correct: 'Primero en entrar, primero en salir',
    wrong: ['Último en entrar, primero en salir', 'Aleatorio', 'Ordenado'],
  },
  ds7: {
    text: '¿Qué es un árbol?',
    correct: 'Estructura jerárquica con nodos',
    wrong: ['Estructura lineal', 'Array', 'Lista'],
  },
  ds8: {
    text: '¿Qué es la raíz de un árbol?',
    correct: 'Nodo superior sin padre',
    wrong: ['Nodo inferior', 'Nodo del medio', 'Cualquier nodo'],
  },
  ds9: {
    text: '¿Qué es una hoja en un árbol?',
    correct: 'Nodo sin hijos',
    wrong: ['Nodo con hijos', 'Nodo raíz', 'Nodo del medio'],
  },
  ds10: {
    text: '¿Qué es un árbol binario?',
    correct: 'Árbol donde cada nodo tiene máximo 2 hijos',
    wrong: ['Árbol con cualquier número de hijos', 'Lista', 'Grafo'],
  },
  ds11: {
    text: '¿Qué es un grafo?',
    correct: 'Conjunto de nodos conectados por aristas',
    wrong: ['Árbol', 'Lista', 'Array'],
  },
  ds12: {
    text: '¿Qué es un nodo?',
    correct: 'Elemento de una estructura de datos',
    wrong: ['Conexión entre elementos', 'Tipo de dato', 'Función'],
  },
  ds13: {
    text: '¿Qué es una arista?',
    correct: 'Conexión entre nodos',
    wrong: ['Nodo', 'Tipo de dato', 'Función'],
  },
  ds14: {
    text: '¿Qué es un hash table?',
    correct: 'Estructura que mapea claves a valores',
    wrong: ['Array', 'Lista', 'Árbol'],
  },
  ds15: {
    text: '¿Qué es una función hash?',
    correct: 'Función que convierte clave en índice',
    wrong: [
      'Función de ordenamiento',
      'Función de búsqueda',
      'Función de inserción',
    ],
  },
  ds16: {
    text: '¿Qué es una colisión en hash table?',
    correct: 'Dos claves producen el mismo índice',
    wrong: ['Claves diferentes', 'Error de memoria', 'Desbordamiento'],
  },
  ds17: {
    text: '¿Qué es un heap?',
    correct: 'Árbol binario con propiedad de orden',
    wrong: ['Lista ordenada', 'Array desordenado', 'Grafo'],
  },
  ds18: {
    text: '¿Qué es un max-heap?',
    correct: 'Heap donde el padre es mayor que los hijos',
    wrong: ['Heap donde el padre es menor', 'Lista ordenada', 'Array'],
  },
  ds19: {
    text: '¿Qué es un min-heap?',
    correct: 'Heap donde el padre es menor que los hijos',
    wrong: ['Heap donde el padre es mayor', 'Lista ordenada', 'Array'],
  },
  ds20: {
    text: '¿Qué es un árbol de búsqueda binaria (BST)?',
    correct: 'Árbol binario ordenado',
    wrong: ['Árbol binario desordenado', 'Lista', 'Grafo'],
  },
  ds21: {
    text: '¿Cuál es la propiedad de un BST?',
    correct: 'Izquierda menor, derecha mayor',
    wrong: ['Izquierda mayor, derecha menor', 'Sin orden', 'Aleatorio'],
  },
  ds22: {
    text: '¿Qué es un árbol AVL?',
    correct: 'BST auto-balanceado',
    wrong: ['BST no balanceado', 'Lista', 'Grafo'],
  },
  ds23: {
    text: '¿Qué es un árbol rojo-negro?',
    correct: 'BST auto-balanceado con colores',
    wrong: ['BST no balanceado', 'Lista', 'Grafo'],
  },
  ds24: {
    text: '¿Qué es un trie?',
    correct: 'Árbol para almacenar cadenas',
    wrong: ['Árbol para números', 'Lista', 'Grafo'],
  },
  ds25: {
    text: '¿Qué es una cola de prioridad?',
    correct: 'Cola donde elementos tienen prioridad',
    wrong: ['Cola normal', 'Pila', 'Lista'],
  },
  ds26: {
    text: '¿Qué estructura se usa para implementar cola de prioridad?',
    correct: 'Heap',
    wrong: ['Array', 'Lista enlazada', 'Pila'],
  },
  ds27: {
    text: '¿Qué es una lista doblemente enlazada?',
    correct: 'Lista con enlaces hacia adelante y atrás',
    wrong: ['Lista con un solo enlace', 'Array', 'Árbol'],
  },
  ds28: {
    text: '¿Qué es una lista circular?',
    correct: 'Lista donde el último apunta al primero',
    wrong: ['Lista lineal', 'Array', 'Árbol'],
  },
  ds29: {
    text: '¿Qué es un deque?',
    correct: 'Cola de doble extremo',
    wrong: ['Cola simple', 'Pila', 'Lista'],
  },
  ds30: {
    text: '¿Qué operación añade al final de un array?',
    correct: 'Push/Append',
    wrong: ['Pop', 'Shift', 'Unshift'],
  },
  ds31: {
    text: '¿Qué operación elimina del final de un array?',
    correct: 'Pop',
    wrong: ['Push', 'Shift', 'Unshift'],
  },
  ds32: {
    text: '¿Qué operación añade al inicio de un array?',
    correct: 'Unshift',
    wrong: ['Push', 'Pop', 'Shift'],
  },
  ds33: {
    text: '¿Qué operación elimina del inicio de un array?',
    correct: 'Shift',
    wrong: ['Push', 'Pop', 'Unshift'],
  },
  ds34: {
    text: '¿Cuál es la complejidad de acceso en un array?',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds35: {
    text: '¿Cuál es la complejidad de búsqueda en lista enlazada?',
    correct: 'O(n)',
    wrong: ['O(1)', 'O(log n)', 'O(n²)'],
  },
  ds36: {
    text: '¿Cuál es la complejidad de inserción en lista enlazada?',
    correct: 'O(1) si tenemos el nodo',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds37: {
    text: '¿Cuál es la complejidad de búsqueda en BST balanceado?',
    correct: 'O(log n)',
    wrong: ['O(1)', 'O(n)', 'O(n²)'],
  },
  ds38: {
    text: '¿Cuál es la complejidad de búsqueda en hash table?',
    correct: 'O(1) promedio',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds39: {
    text: '¿Qué es un grafo dirigido?',
    correct: 'Grafo con aristas con dirección',
    wrong: ['Grafo sin dirección', 'Árbol', 'Lista'],
  },
  ds40: {
    text: '¿Qué es un grafo no dirigido?',
    correct: 'Grafo con aristas bidireccionales',
    wrong: ['Grafo con dirección', 'Árbol', 'Lista'],
  },
  ds41: {
    text: '¿Qué es un grafo ponderado?',
    correct: 'Grafo con pesos en las aristas',
    wrong: ['Grafo sin pesos', 'Árbol', 'Lista'],
  },
  ds42: {
    text: '¿Qué es un ciclo en un grafo?',
    correct: 'Camino que regresa al nodo inicial',
    wrong: ['Camino sin retorno', 'Nodo aislado', 'Arista'],
  },
  ds43: {
    text: '¿Qué es un grafo acíclico?',
    correct: 'Grafo sin ciclos',
    wrong: ['Grafo con ciclos', 'Árbol', 'Lista'],
  },
  ds44: {
    text: '¿Qué es un DAG?',
    correct: 'Grafo acíclico dirigido',
    wrong: ['Grafo cíclico', 'Grafo no dirigido', 'Árbol'],
  },
  ds45: {
    text: '¿Qué es la matriz de adyacencia?',
    correct: 'Representación de grafo con matriz',
    wrong: ['Representación con lista', 'Tipo de árbol', 'Tipo de lista'],
  },
  ds46: {
    text: '¿Qué es la lista de adyacencia?',
    correct: 'Representación de grafo con listas',
    wrong: ['Representación con matriz', 'Tipo de árbol', 'Tipo de array'],
  },
  ds47: {
    text: '¿Qué es un árbol de expansión?',
    correct: 'Subgrafo que conecta todos los nodos sin ciclos',
    wrong: ['Grafo con ciclos', 'Lista', 'Array'],
  },
  ds48: {
    text: '¿Qué es un árbol de expansión mínima?',
    correct: 'Árbol de expansión con peso mínimo',
    wrong: ['Árbol con peso máximo', 'Lista', 'Array'],
  },
  ds49: {
    text: '¿Qué es un conjunto disjunto?',
    correct: 'Estructura para conjuntos sin intersección',
    wrong: ['Conjuntos con intersección', 'Lista', 'Array'],
  },
  ds50: {
    text: '¿Qué es Union-Find?',
    correct: 'Estructura para conjuntos disjuntos',
    wrong: [
      'Algoritmo de ordenamiento',
      'Algoritmo de búsqueda',
      'Tipo de árbol',
    ],
  },

  // ===== NIVEL 3-8: Intermedio a Profesor =====
  ds51: {
    text: '¿Qué es compresión de caminos?',
    correct: 'Optimización de Union-Find',
    wrong: ['Compresión de datos', 'Tipo de árbol', 'Tipo de grafo'],
  },
  ds52: {
    text: '¿Qué es unión por rango?',
    correct: 'Optimización de Union-Find',
    wrong: ['Tipo de ordenamiento', 'Tipo de búsqueda', 'Tipo de árbol'],
  },
  ds53: {
    text: '¿Qué es un árbol de segmentos?',
    correct: 'Estructura para consultas de rango',
    wrong: ['Árbol binario simple', 'Lista', 'Grafo'],
  },
  ds54: {
    text: '¿Qué es un árbol de Fenwick?',
    correct: 'Estructura para sumas de prefijos',
    wrong: ['Árbol binario simple', 'Lista', 'Grafo'],
  },
  ds55: {
    text: '¿Qué es un B-tree?',
    correct: 'Árbol balanceado para bases de datos',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds56: {
    text: '¿Qué es un B+ tree?',
    correct: 'Variante de B-tree con datos en hojas',
    wrong: ['B-tree normal', 'Árbol binario', 'Lista'],
  },
  ds57: {
    text: '¿Qué es un skip list?',
    correct: 'Lista con múltiples niveles de enlaces',
    wrong: ['Lista simple', 'Árbol', 'Grafo'],
  },
  ds58: {
    text: '¿Qué es un bloom filter?',
    correct: 'Estructura probabilística para pertenencia',
    wrong: ['Filtro exacto', 'Tipo de árbol', 'Tipo de grafo'],
  },
  ds59: {
    text: '¿Qué es un LRU cache?',
    correct: 'Caché que elimina el menos usado recientemente',
    wrong: ['Caché que elimina el más usado', 'Tipo de árbol', 'Tipo de grafo'],
  },
  ds60: {
    text: '¿Qué estructuras se usan para LRU cache?',
    correct: 'Hash table y lista doblemente enlazada',
    wrong: ['Solo array', 'Solo árbol', 'Solo grafo'],
  },
  ds61: {
    text: '¿Qué es un árbol de sufijos?',
    correct: 'Estructura para todos los sufijos de una cadena',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds62: {
    text: '¿Qué es un arreglo de sufijos?',
    correct: 'Arreglo ordenado de sufijos',
    wrong: ['Árbol de sufijos', 'Lista', 'Grafo'],
  },
  ds63: {
    text: '¿Qué es el arreglo LCP?',
    correct: 'Prefijo común más largo entre sufijos adyacentes',
    wrong: ['Sufijo común', 'Subcadena', 'Subsecuencia'],
  },
  ds64: {
    text: '¿Qué es un treap?',
    correct: 'Combinación de árbol y heap',
    wrong: ['Solo árbol', 'Solo heap', 'Lista'],
  },
  ds65: {
    text: '¿Qué es un splay tree?',
    correct: 'BST auto-ajustable',
    wrong: ['BST estático', 'Lista', 'Grafo'],
  },
  ds66: {
    text: '¿Qué es un árbol cartesiano?',
    correct: 'Árbol binario derivado de secuencia',
    wrong: ['Árbol aleatorio', 'Lista', 'Grafo'],
  },
  ds67: {
    text: '¿Qué es un k-d tree?',
    correct: 'Árbol para puntos en k dimensiones',
    wrong: ['Árbol binario simple', 'Lista', 'Grafo'],
  },
  ds68: {
    text: '¿Qué es un quad tree?',
    correct: 'Árbol para dividir espacio 2D',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds69: {
    text: '¿Qué es un octree?',
    correct: 'Árbol para dividir espacio 3D',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds70: {
    text: '¿Qué es un R-tree?',
    correct: 'Árbol para indexar datos espaciales',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds71: {
    text: '¿Qué es una estructura de datos persistente?',
    correct: 'Estructura que preserva versiones anteriores',
    wrong: ['Estructura que borra versiones', 'Lista', 'Grafo'],
  },
  ds72: {
    text: '¿Qué es un rope?',
    correct: 'Estructura para cadenas largas',
    wrong: ['Cadena simple', 'Lista', 'Grafo'],
  },
  ds73: {
    text: '¿Qué es un finger tree?',
    correct: 'Estructura funcional para secuencias',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds74: {
    text: '¿Qué es un van Emde Boas tree?',
    correct: 'Estructura para enteros con operaciones O(log log n)',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds75: {
    text: '¿Qué es un fusion tree?',
    correct: 'Estructura para enteros con operaciones sublogarítmicas',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds76: {
    text: '¿Qué es un link-cut tree?',
    correct: 'Estructura para árboles dinámicos',
    wrong: ['Árbol estático', 'Lista', 'Grafo'],
  },
  ds77: {
    text: '¿Qué es heavy-light decomposition?',
    correct: 'Descomposición de árbol en cadenas',
    wrong: ['Descomposición en nodos', 'Lista', 'Grafo'],
  },
  ds78: {
    text: '¿Qué es centroid decomposition?',
    correct: 'Descomposición de árbol por centroides',
    wrong: ['Descomposición por raíz', 'Lista', 'Grafo'],
  },
  ds79: {
    text: '¿Qué es un wavelet tree?',
    correct: 'Estructura para consultas sobre secuencias',
    wrong: ['Árbol binario simple', 'Lista', 'Grafo'],
  },
  ds80: {
    text: '¿Qué es un merge sort tree?',
    correct: 'Árbol de segmentos con arrays ordenados',
    wrong: ['Árbol binario simple', 'Lista', 'Grafo'],
  },
  ds81: {
    text: '¿Qué es lazy propagation?',
    correct: 'Técnica para diferir actualizaciones',
    wrong: ['Actualización inmediata', 'Tipo de árbol', 'Tipo de grafo'],
  },
  ds82: {
    text: '¿Qué es un sparse table?',
    correct: 'Estructura para consultas de rango estáticas',
    wrong: ['Tabla densa', 'Lista', 'Grafo'],
  },
  ds83: {
    text: '¿Qué es el algoritmo de Mo?',
    correct: 'Técnica para consultas de rango offline',
    wrong: [
      'Algoritmo de ordenamiento',
      'Algoritmo de búsqueda',
      'Tipo de árbol',
    ],
  },
  ds84: {
    text: '¿Qué es sqrt decomposition?',
    correct: 'Dividir en bloques de tamaño √n',
    wrong: ['Dividir en mitades', 'No dividir', 'Dividir en n partes'],
  },
  ds85: {
    text: '¿Qué es un implicit treap?',
    correct: 'Treap sin claves explícitas',
    wrong: ['Treap con claves', 'Lista', 'Grafo'],
  },
  ds86: {
    text: '¿Qué es un aho-corasick automaton?',
    correct: 'Estructura para búsqueda de múltiples patrones',
    wrong: ['Búsqueda de un patrón', 'Lista', 'Grafo'],
  },
  ds87: {
    text: '¿Qué es un suffix automaton?',
    correct: 'Autómata que acepta todos los sufijos',
    wrong: ['Autómata para prefijos', 'Lista', 'Grafo'],
  },
  ds88: {
    text: '¿Qué es un palindromic tree?',
    correct: 'Estructura para palíndromos',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds89: {
    text: '¿Qué es un dancing links?',
    correct: 'Técnica para backtracking eficiente',
    wrong: ['Tipo de lista', 'Tipo de árbol', 'Tipo de grafo'],
  },
  ds90: {
    text: '¿Qué es un disjoint sparse table?',
    correct: 'Sparse table para operaciones no idempotentes',
    wrong: ['Sparse table normal', 'Lista', 'Grafo'],
  },
  ds91: {
    text: '¿Qué es un lichao tree?',
    correct: 'Árbol de segmentos para líneas',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds92: {
    text: '¿Qué es un convex hull trick?',
    correct: 'Técnica para optimizar DP con líneas',
    wrong: ['Algoritmo de geometría', 'Lista', 'Grafo'],
  },
  ds93: {
    text: '¿Qué es divide and conquer optimization?',
    correct: 'Optimización de DP con propiedad de monotonía',
    wrong: ['Dividir y conquistar normal', 'Lista', 'Grafo'],
  },
  ds94: {
    text: '¿Qué es knuth optimization?',
    correct: 'Optimización de DP cuadrática',
    wrong: ['Algoritmo de ordenamiento', 'Lista', 'Grafo'],
  },
  ds95: {
    text: '¿Qué es un 2D segment tree?',
    correct: 'Árbol de segmentos bidimensional',
    wrong: ['Árbol de segmentos 1D', 'Lista', 'Grafo'],
  },
  ds96: {
    text: '¿Qué es un persistent segment tree?',
    correct: 'Árbol de segmentos con versiones',
    wrong: ['Árbol de segmentos sin versiones', 'Lista', 'Grafo'],
  },
  ds97: {
    text: '¿Qué es un fractional cascading?',
    correct: 'Técnica para acelerar búsquedas múltiples',
    wrong: ['Tipo de árbol', 'Tipo de lista', 'Tipo de grafo'],
  },
  ds98: {
    text: '¿Qué es un range tree?',
    correct: 'Estructura para consultas de rango multidimensionales',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds99: {
    text: '¿Qué es un interval tree?',
    correct: 'Estructura para intervalos superpuestos',
    wrong: ['Árbol binario', 'Lista', 'Grafo'],
  },
  ds100: {
    text: '¿Qué es un priority search tree?',
    correct: 'Combinación de heap y BST',
    wrong: ['Solo heap', 'Solo BST', 'Lista'],
  },
};

export default dataStructures;
