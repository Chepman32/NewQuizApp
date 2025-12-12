// Spanish translations for Algorithms questions
// Traducciones al español para preguntas de Algoritmos

import type { CategoryTranslations } from '../index';

export const algorithms: CategoryTranslations = {
  // ===== NIVEL 1-2: Muy Fácil/Fácil =====
  alg1: {
    text: '¿Qué es un algoritmo?',
    correct: 'Procedimiento paso a paso para resolver un problema',
    wrong: [
      'Lenguaje de programación',
      'Estructura de datos',
      'Hardware de computadora',
    ],
  },
  alg2: {
    text: '¿Qué es ordenamiento?',
    correct: 'Organizar elementos en orden',
    wrong: ['Buscar elementos', 'Eliminar elementos', 'Agregar elementos'],
  },
  alg3: {
    text: '¿Qué es búsqueda?',
    correct: 'Encontrar un elemento',
    wrong: ['Ordenar elementos', 'Eliminar elementos', 'Agregar elementos'],
  },
  alg4: {
    text: '¿Qué es la búsqueda lineal?',
    correct: 'Revisar cada elemento uno por uno',
    wrong: ['Búsqueda binaria', 'Búsqueda hash', 'Búsqueda en árbol'],
  },
  alg5: {
    text: '¿Cuál es la complejidad temporal de la búsqueda lineal?',
    correct: 'O(n)',
    wrong: ['O(1)', 'O(log n)', 'O(n²)'],
  },
  alg6: {
    text: '¿Qué es la búsqueda binaria?',
    correct: 'Dividir el arreglo ordenado a la mitad',
    wrong: ['Búsqueda lineal', 'Búsqueda hash', 'Búsqueda en árbol'],
  },
  alg7: {
    text: '¿Cuál es la complejidad temporal de la búsqueda binaria?',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg8: {
    text: '¿Qué se requiere para la búsqueda binaria?',
    correct: 'Arreglo ordenado',
    wrong: ['Arreglo desordenado', 'Lista enlazada', 'Árbol'],
  },
  alg9: {
    text: '¿Qué es el ordenamiento burbuja?',
    correct: 'Intercambiar repetidamente elementos adyacentes',
    wrong: ['Dividir y conquistar', 'Usar montículo', 'Usar pivote'],
  },
  alg10: {
    text: '¿Cuál es la complejidad temporal del ordenamiento burbuja?',
    correct: 'O(n²)',
    wrong: ['O(n)', 'O(log n)', 'O(n log n)'],
  },
  alg11: {
    text: '¿Qué es el ordenamiento por selección?',
    correct: 'Encontrar el mínimo y colocarlo al inicio',
    wrong: ['Intercambiar adyacentes', 'Dividir arreglo', 'Usar montículo'],
  },
  alg12: {
    text: '¿Qué es el ordenamiento por inserción?',
    correct: 'Insertar elementos en la porción ordenada',
    wrong: ['Intercambiar adyacentes', 'Encontrar mínimo', 'Usar pivote'],
  },
  alg13: {
    text: '¿Cuál es el mejor caso para ordenamiento por inserción?',
    correct: 'O(n) - ya ordenado',
    wrong: ['O(n²)', 'O(log n)', 'O(n log n)'],
  },
  alg14: {
    text: '¿Qué es el ordenamiento por mezcla (merge sort)?',
    correct: 'Dividir, ordenar y mezclar',
    wrong: ['Intercambiar adyacentes', 'Encontrar mínimo', 'Usar pivote'],
  },
  alg15: {
    text: '¿Cuál es la complejidad temporal del ordenamiento por mezcla?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg16: {
    text: '¿Qué es el ordenamiento rápido (quick sort)?',
    correct: 'Particionar alrededor de un pivote',
    wrong: ['Dividir y mezclar', 'Intercambiar adyacentes', 'Encontrar mínimo'],
  },
  alg17: {
    text: '¿Cuál es la complejidad temporal promedio del ordenamiento rápido?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg18: {
    text: '¿Cuál es el peor caso para el ordenamiento rápido?',
    correct: 'O(n²) - ya ordenado con mal pivote',
    wrong: ['O(n log n)', 'O(n)', 'O(log n)'],
  },
  alg19: {
    text: '¿Qué es el ordenamiento por montículo (heap sort)?',
    correct: 'Usar estructura de datos montículo',
    wrong: ['Usar pivote', 'Mezclar', 'Intercambiar adyacentes'],
  },
  alg20: {
    text: '¿Cuál es la complejidad temporal del ordenamiento por montículo?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg21: {
    text: '¿Qué es un algoritmo de ordenamiento estable?',
    correct: 'Preserva el orden de elementos iguales',
    wrong: ['Algoritmo más rápido', 'Usa menos memoria', 'Algoritmo in situ'],
  },
  alg22: {
    text: '¿Es estable el ordenamiento por mezcla?',
    correct: 'Sí',
    wrong: ['No', 'A veces', 'Depende de la implementación'],
  },
  alg23: {
    text: '¿Es estable el ordenamiento rápido?',
    correct: 'No (típicamente)',
    wrong: ['Sí', 'Siempre', 'Nunca'],
  },
  alg24: {
    text: '¿Qué es ordenamiento in situ?',
    correct: 'Ordenar con O(1) espacio extra',
    wrong: [
      'Ordenar con O(n) espacio',
      'Ordenamiento estable',
      'Ordenamiento rápido',
    ],
  },
  alg25: {
    text: '¿Es el ordenamiento por mezcla in situ?',
    correct: 'No - necesita O(n) espacio extra',
    wrong: ['Sí', 'A veces', 'Depende'],
  },

  // ===== NIVEL 3-4: Intermedio/Normal =====
  alg26: {
    text: '¿Qué es el ordenamiento por conteo?',
    correct: 'Contar ocurrencias de cada elemento',
    wrong: [
      'Ordenamiento por comparación',
      'Dividir y conquistar',
      'Usar montículo',
    ],
  },
  alg27: {
    text: '¿Cuál es la complejidad temporal del ordenamiento por conteo?',
    correct: 'O(n + k) donde k es el rango',
    wrong: ['O(n log n)', 'O(n²)', 'O(log n)'],
  },
  alg28: {
    text: '¿Qué es el ordenamiento radix?',
    correct: 'Ordenar por dígitos',
    wrong: [
      'Ordenamiento por comparación',
      'Dividir y conquistar',
      'Usar montículo',
    ],
  },
  alg29: {
    text: '¿Qué es el ordenamiento por cubetas?',
    correct: 'Distribuir elementos en cubetas',
    wrong: [
      'Ordenamiento por comparación',
      'Dividir y conquistar',
      'Usar montículo',
    ],
  },
  alg30: {
    text: '¿Cuál es el límite inferior para ordenamiento por comparación?',
    correct: 'O(n log n)',
    wrong: ['O(n)', 'O(n²)', 'O(log n)'],
  },
  alg31: {
    text: '¿Qué es la búsqueda en profundidad (DFS)?',
    correct: 'Explorar lo más lejos posible antes de retroceder',
    wrong: [
      'Explorar nivel por nivel',
      'Exploración aleatoria',
      'Camino más corto',
    ],
  },
  alg32: {
    text: '¿Qué es la búsqueda en anchura (BFS)?',
    correct: 'Explorar nivel por nivel',
    wrong: [
      'Explorar en profundidad primero',
      'Exploración aleatoria',
      'Camino más largo',
    ],
  },
  alg33: {
    text: '¿Qué estructura de datos usa típicamente DFS?',
    correct: 'Pila',
    wrong: ['Cola', 'Montículo', 'Arreglo'],
  },
  alg34: {
    text: '¿Qué estructura de datos usa típicamente BFS?',
    correct: 'Cola',
    wrong: ['Pila', 'Montículo', 'Arreglo'],
  },
  alg35: {
    text: '¿Cuál es la complejidad temporal de DFS?',
    correct: 'O(V + E)',
    wrong: ['O(V)', 'O(E)', 'O(V × E)'],
  },
  alg36: {
    text: '¿Cuál es la complejidad temporal de BFS?',
    correct: 'O(V + E)',
    wrong: ['O(V)', 'O(E)', 'O(V × E)'],
  },
  alg37: {
    text: '¿Qué es el algoritmo de Dijkstra?',
    correct: 'Encontrar el camino más corto desde una fuente',
    wrong: [
      'Encontrar árbol de expansión mínima',
      'Ordenar grafo',
      'Detectar ciclos',
    ],
  },
  alg38: {
    text: '¿Qué es el algoritmo de Bellman-Ford?',
    correct: 'Camino más corto con aristas negativas',
    wrong: [
      'Solo aristas positivas',
      'Árbol de expansión mínima',
      'Ordenamiento topológico',
    ],
  },
  alg39: {
    text: '¿Qué es el algoritmo de Floyd-Warshall?',
    correct: 'Caminos más cortos entre todos los pares',
    wrong: [
      'Camino más corto desde una fuente',
      'Árbol de expansión mínima',
      'Detección de ciclos',
    ],
  },
  alg40: {
    text: '¿Qué es el algoritmo de Kruskal?',
    correct: 'Árbol de expansión mínima usando aristas ordenadas',
    wrong: [
      'Camino más corto',
      'Ordenamiento topológico',
      'Detección de ciclos',
    ],
  },
  alg41: {
    text: '¿Qué es el algoritmo de Prim?',
    correct: 'Árbol de expansión mínima creciendo desde un vértice',
    wrong: [
      'Camino más corto',
      'Ordenamiento topológico',
      'Detección de ciclos',
    ],
  },
  alg42: {
    text: '¿Qué es el ordenamiento topológico?',
    correct: 'Ordenar vértices en grafo acíclico dirigido',
    wrong: ['Ordenar aristas', 'Encontrar ciclos', 'Camino más corto'],
  },
  alg43: {
    text: '¿Qué es la programación dinámica?',
    correct: 'Resolver subproblemas superpuestos',
    wrong: ['Dividir y conquistar', 'Algoritmo voraz', 'Fuerza bruta'],
  },
  alg44: {
    text: '¿Qué es memoización?',
    correct: 'Almacenar resultados de subproblemas',
    wrong: ['Recalcular siempre', 'Usar recursión', 'Usar iteración'],
  },
  alg45: {
    text: '¿Qué es tabulación en programación dinámica?',
    correct: 'Enfoque de abajo hacia arriba',
    wrong: ['Enfoque de arriba hacia abajo', 'Recursión', 'Fuerza bruta'],
  },
  alg46: {
    text: '¿Qué es un algoritmo voraz?',
    correct: 'Elegir el óptimo local en cada paso',
    wrong: [
      'Considerar todas las opciones',
      'Usar programación dinámica',
      'Usar fuerza bruta',
    ],
  },
  alg47: {
    text: '¿Qué es dividir y conquistar?',
    correct: 'Dividir problema, resolver partes, combinar',
    wrong: [
      'Resolver secuencialmente',
      'Usar programación dinámica',
      'Algoritmo voraz',
    ],
  },
  alg48: {
    text: '¿Qué es backtracking?',
    correct: 'Probar soluciones y retroceder si fallan',
    wrong: ['Nunca retroceder', 'Algoritmo voraz', 'Programación dinámica'],
  },
  alg49: {
    text: '¿Qué es el problema de la mochila?',
    correct: 'Maximizar valor con capacidad limitada',
    wrong: ['Minimizar peso', 'Ordenar elementos', 'Buscar elemento'],
  },
  alg50: {
    text: '¿Qué es la subsecuencia común más larga (LCS)?',
    correct: 'Encontrar subsecuencia común más larga',
    wrong: ['Encontrar subcadena', 'Ordenar cadenas', 'Buscar patrón'],
  },

  // ===== NIVEL 5-6: Difícil/Muy Difícil =====
  alg51: {
    text: '¿Qué es el problema de la distancia de edición?',
    correct: 'Mínimas operaciones para transformar cadenas',
    wrong: ['Máximas operaciones', 'Ordenar cadenas', 'Buscar patrón'],
  },
  alg52: {
    text: '¿Qué es la secuencia de Fibonacci?',
    correct: 'Cada número es suma de los dos anteriores',
    wrong: ['Cada número es producto', 'Números primos', 'Números pares'],
  },
  alg53: {
    text: '¿Cuál es la complejidad de Fibonacci recursivo ingenuo?',
    correct: 'O(2^n)',
    wrong: ['O(n)', 'O(n²)', 'O(log n)'],
  },
  alg54: {
    text: '¿Cuál es la complejidad de Fibonacci con programación dinámica?',
    correct: 'O(n)',
    wrong: ['O(2^n)', 'O(n²)', 'O(log n)'],
  },
  alg55: {
    text: '¿Qué es el algoritmo de Kadane?',
    correct: 'Encontrar subarreglo de suma máxima',
    wrong: ['Ordenar arreglo', 'Buscar elemento', 'Encontrar mínimo'],
  },
  alg56: {
    text: '¿Qué es el problema de cambio de monedas?',
    correct: 'Mínimas monedas para dar cambio',
    wrong: ['Máximas monedas', 'Ordenar monedas', 'Contar monedas'],
  },
  alg57: {
    text: '¿Qué es el problema del viajante (TSP)?',
    correct: 'Ruta más corta visitando todas las ciudades',
    wrong: ['Ruta más larga', 'Visitar una ciudad', 'Ordenar ciudades'],
  },
  alg58: {
    text: '¿Cuál es la complejidad del TSP por fuerza bruta?',
    correct: 'O(n!)',
    wrong: ['O(n)', 'O(n²)', 'O(2^n)'],
  },
  alg59: {
    text: '¿Qué es el problema de las N reinas?',
    correct: 'Colocar N reinas sin que se ataquen',
    wrong: ['Mover reinas', 'Contar reinas', 'Ordenar reinas'],
  },
  alg60: {
    text: '¿Qué es el problema del sudoku?',
    correct: 'Llenar cuadrícula con restricciones',
    wrong: ['Vaciar cuadrícula', 'Ordenar números', 'Sumar números'],
  },
  alg61: {
    text: '¿Qué es un árbol de segmentos?',
    correct: 'Estructura para consultas de rango',
    wrong: ['Árbol binario simple', 'Lista enlazada', 'Tabla hash'],
  },
  alg62: {
    text: '¿Qué es un árbol de Fenwick (BIT)?',
    correct: 'Estructura para sumas de prefijos',
    wrong: ['Árbol binario de búsqueda', 'Montículo', 'Grafo'],
  },
  alg63: {
    text: '¿Qué es un trie?',
    correct: 'Árbol para almacenar cadenas',
    wrong: ['Árbol binario', 'Montículo', 'Grafo'],
  },
  alg64: {
    text: '¿Qué es el algoritmo KMP?',
    correct: 'Búsqueda de patrones eficiente',
    wrong: ['Ordenamiento', 'Búsqueda binaria', 'Recorrido de grafo'],
  },
  alg65: {
    text: '¿Qué es el algoritmo de Rabin-Karp?',
    correct: 'Búsqueda de patrones con hashing',
    wrong: ['Ordenamiento', 'Búsqueda binaria', 'Recorrido de grafo'],
  },
  alg66: {
    text: '¿Qué es Union-Find?',
    correct: 'Estructura para conjuntos disjuntos',
    wrong: ['Árbol binario', 'Tabla hash', 'Cola de prioridad'],
  },
  alg67: {
    text: '¿Qué es compresión de caminos en Union-Find?',
    correct: 'Aplanar árbol durante búsqueda',
    wrong: ['Hacer árbol más profundo', 'Eliminar nodos', 'Agregar nodos'],
  },
  alg68: {
    text: '¿Qué es unión por rango?',
    correct: 'Unir árbol más pequeño al más grande',
    wrong: [
      'Unir aleatoriamente',
      'Siempre unir a la izquierda',
      'Siempre unir a la derecha',
    ],
  },
  alg69: {
    text: '¿Qué es el algoritmo A*?',
    correct: 'Búsqueda de camino con heurística',
    wrong: ['Búsqueda sin heurística', 'Ordenamiento', 'Búsqueda binaria'],
  },
  alg70: {
    text: '¿Qué es una heurística admisible?',
    correct: 'Nunca sobreestima el costo real',
    wrong: ['Siempre sobreestima', 'Costo exacto', 'Costo aleatorio'],
  },
  alg71: {
    text: '¿Qué es el algoritmo de flujo máximo?',
    correct: 'Encontrar flujo máximo en red',
    wrong: ['Encontrar flujo mínimo', 'Ordenar flujos', 'Eliminar flujos'],
  },
  alg72: {
    text: '¿Qué es el algoritmo de Ford-Fulkerson?',
    correct: 'Encontrar flujo máximo con caminos aumentantes',
    wrong: [
      'Encontrar camino más corto',
      'Árbol de expansión mínima',
      'Ordenamiento topológico',
    ],
  },
  alg73: {
    text: '¿Qué es el teorema de corte mínimo-flujo máximo?',
    correct: 'Flujo máximo igual a corte mínimo',
    wrong: [
      'Flujo máximo mayor que corte mínimo',
      'No hay relación',
      'Flujo mínimo igual a corte máximo',
    ],
  },
  alg74: {
    text: '¿Qué es el emparejamiento bipartito?',
    correct: 'Emparejar vértices de dos conjuntos',
    wrong: [
      'Emparejar cualquier vértice',
      'Ordenar vértices',
      'Eliminar vértices',
    ],
  },
  alg75: {
    text: '¿Qué es el algoritmo húngaro?',
    correct: 'Emparejamiento de costo mínimo',
    wrong: ['Emparejamiento de costo máximo', 'Ordenamiento', 'Búsqueda'],
  },

  // ===== NIVEL 7-8: Legendario/Profesor =====
  alg76: {
    text: '¿Qué es la complejidad amortizada?',
    correct: 'Costo promedio por operación en secuencia',
    wrong: ['Peor caso siempre', 'Mejor caso siempre', 'Caso aleatorio'],
  },
  alg77: {
    text: '¿Qué es el análisis competitivo?',
    correct: 'Comparar algoritmo en línea con óptimo fuera de línea',
    wrong: [
      'Comparar dos algoritmos en línea',
      'Análisis de complejidad',
      'Análisis de espacio',
    ],
  },
  alg78: {
    text: '¿Qué es un algoritmo aleatorizado?',
    correct: 'Usa decisiones aleatorias',
    wrong: [
      'Siempre determinista',
      'Nunca usa aleatoriedad',
      'Solo para ordenamiento',
    ],
  },
  alg79: {
    text: '¿Qué es Las Vegas vs Monte Carlo?',
    correct: 'Siempre correcto vs probablemente correcto',
    wrong: [
      'Ambos siempre correctos',
      'Ambos probablemente correctos',
      'No hay diferencia',
    ],
  },
  alg80: {
    text: '¿Qué es el algoritmo de selección rápida?',
    correct: 'Encontrar k-ésimo elemento en tiempo esperado O(n)',
    wrong: ['Ordenar todo el arreglo', 'Búsqueda binaria', 'Encontrar máximo'],
  },
  alg81: {
    text: '¿Qué es el problema de la mediana de medianas?',
    correct: 'Selección en tiempo O(n) garantizado',
    wrong: ['Selección en O(n log n)', 'Ordenamiento', 'Búsqueda'],
  },
  alg82: {
    text: '¿Qué es un árbol de sufijos?',
    correct: 'Estructura para todos los sufijos de una cadena',
    wrong: ['Árbol binario', 'Trie simple', 'Grafo'],
  },
  alg83: {
    text: '¿Qué es el algoritmo de Ukkonen?',
    correct: 'Construir árbol de sufijos en tiempo lineal',
    wrong: [
      'Construir en tiempo cuadrático',
      'Búsqueda de patrones',
      'Ordenamiento',
    ],
  },
  alg84: {
    text: '¿Qué es el arreglo de sufijos?',
    correct: 'Arreglo ordenado de sufijos',
    wrong: ['Arreglo de prefijos', 'Árbol de sufijos', 'Tabla hash'],
  },
  alg85: {
    text: '¿Qué es el arreglo LCP?',
    correct: 'Prefijo común más largo entre sufijos adyacentes',
    wrong: [
      'Sufijo común más largo',
      'Subcadena más larga',
      'Subsecuencia más larga',
    ],
  },
  alg86: {
    text: '¿Qué es el algoritmo de Manacher?',
    correct: 'Encontrar todos los palíndromos en tiempo lineal',
    wrong: [
      'Encontrar en tiempo cuadrático',
      'Ordenar palíndromos',
      'Contar palíndromos',
    ],
  },
  alg87: {
    text: '¿Qué es el algoritmo Z?',
    correct: 'Calcular arreglo Z para coincidencia de patrones',
    wrong: ['Ordenamiento', 'Búsqueda binaria', 'Recorrido de grafo'],
  },
  alg88: {
    text: '¿Qué es el algoritmo de Aho-Corasick?',
    correct: 'Búsqueda de múltiples patrones',
    wrong: ['Búsqueda de un patrón', 'Ordenamiento', 'Recorrido de grafo'],
  },
  alg89: {
    text: '¿Qué es la descomposición de raíz cuadrada?',
    correct: 'Dividir en bloques de tamaño √n',
    wrong: ['Dividir en mitades', 'No dividir', 'Dividir en n partes'],
  },
  alg90: {
    text: '¿Qué es el algoritmo de Mo?',
    correct: 'Responder consultas de rango fuera de línea',
    wrong: ['Consultas en línea', 'Ordenamiento', 'Búsqueda'],
  },
  alg91: {
    text: '¿Qué es la descomposición pesada-ligera?',
    correct: 'Descomponer árbol en cadenas',
    wrong: ['Descomponer en nodos', 'No descomponer', 'Descomponer en hojas'],
  },
  alg92: {
    text: '¿Qué es el centroide de un árbol?',
    correct: 'Nodo que minimiza el subárbol máximo',
    wrong: ['Raíz del árbol', 'Hoja del árbol', 'Nodo aleatorio'],
  },
  alg93: {
    text: '¿Qué es la descomposición de centroide?',
    correct: 'Dividir árbol recursivamente por centroides',
    wrong: ['Dividir por raíz', 'No dividir', 'Dividir por hojas'],
  },
  alg94: {
    text: '¿Qué es el ancestro común más bajo (LCA)?',
    correct: 'Ancestro compartido más profundo',
    wrong: ['Ancestro más alto', 'Descendiente común', 'Hermano común'],
  },
  alg95: {
    text: '¿Qué es el levantamiento binario para LCA?',
    correct: 'Preprocesar ancestros en potencias de 2',
    wrong: ['Buscar linealmente', 'Usar BFS', 'Usar DFS simple'],
  },
  alg96: {
    text: '¿Qué es el algoritmo de Tarjan para LCA?',
    correct: 'LCA fuera de línea con Union-Find',
    wrong: ['LCA en línea', 'Ordenamiento', 'Búsqueda'],
  },
  alg97: {
    text: '¿Qué son los componentes fuertemente conexos?',
    correct: 'Subgrafos donde todo par es alcanzable',
    wrong: ['Subgrafos desconectados', 'Árboles', 'Ciclos simples'],
  },
  alg98: {
    text: '¿Qué es el algoritmo de Kosaraju?',
    correct: 'Encontrar componentes fuertemente conexos',
    wrong: [
      'Encontrar camino más corto',
      'Ordenamiento topológico',
      'Árbol de expansión',
    ],
  },
  alg99: {
    text: '¿Qué es el algoritmo de Tarjan para SCC?',
    correct: 'SCC en una pasada de DFS',
    wrong: ['SCC en dos pasadas', 'Usando BFS', 'Usando ordenamiento'],
  },
  alg100: {
    text: '¿Qué son los puntos de articulación?',
    correct: 'Vértices cuya eliminación desconecta el grafo',
    wrong: ['Vértices que conectan', 'Aristas importantes', 'Ciclos'],
  },
};

export default algorithms;
