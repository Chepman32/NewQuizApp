// Portuguese translations for Algorithms
import type { CategoryTranslations } from '../index';

export const algorithms: CategoryTranslations = {
  alg1: {
    text: 'O que é um algoritmo?',
    correct: 'Procedimento passo a passo para resolver um problema',
    wrong: [
      'Linguagem de programação',
      'Estrutura de dados',
      'Hardware de computador',
    ],
  },
  alg2: {
    text: 'O que é ordenação?',
    correct: 'Organizar elementos em ordem',
    wrong: ['Buscar elementos', 'Deletar elementos', 'Adicionar elementos'],
  },
  alg3: {
    text: 'O que é busca?',
    correct: 'Encontrar um elemento',
    wrong: ['Ordenar elementos', 'Deletar elementos', 'Adicionar elementos'],
  },
  alg4: {
    text: 'O que é busca linear?',
    correct: 'Verificar cada elemento um por um',
    wrong: ['Busca binária', 'Busca hash', 'Busca em árvore'],
  },
  alg5: {
    text: 'Qual é a complexidade de tempo da busca linear?',
    correct: 'O(n)',
    wrong: ['O(1)', 'O(log n)', 'O(n²)'],
  },
  alg6: {
    text: 'O que é busca binária?',
    correct: 'Dividir array ordenado ao meio',
    wrong: ['Busca linear', 'Busca hash', 'Busca em árvore'],
  },
  alg7: {
    text: 'Qual é a complexidade de tempo da busca binária?',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg8: {
    text: 'O que é necessário para busca binária?',
    correct: 'Array ordenado',
    wrong: ['Array desordenado', 'Lista encadeada', 'Árvore'],
  },
  alg9: {
    text: 'O que é bubble sort?',
    correct: 'Trocar repetidamente elementos adjacentes',
    wrong: ['Dividir e conquistar', 'Usar heap', 'Usar pivô'],
  },
  alg10: {
    text: 'Qual é a complexidade de tempo do bubble sort?',
    correct: 'O(n²)',
    wrong: ['O(n)', 'O(log n)', 'O(n log n)'],
  },
  alg11: {
    text: 'O que é selection sort?',
    correct: 'Encontrar mínimo e colocar no início',
    wrong: ['Trocar adjacentes', 'Dividir array', 'Usar heap'],
  },
  alg12: {
    text: 'O que é insertion sort?',
    correct: 'Inserir elementos na porção ordenada',
    wrong: ['Trocar adjacentes', 'Encontrar mínimo', 'Usar pivô'],
  },
  alg13: {
    text: 'Qual é o melhor caso do insertion sort?',
    correct: 'O(n) - já ordenado',
    wrong: ['O(n²)', 'O(log n)', 'O(n log n)'],
  },
  alg14: {
    text: 'O que é merge sort?',
    correct: 'Dividir, ordenar e mesclar',
    wrong: ['Trocar adjacentes', 'Encontrar mínimo', 'Usar pivô'],
  },
  alg15: {
    text: 'Qual é a complexidade de tempo do merge sort?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg16: {
    text: 'O que é quick sort?',
    correct: 'Particionar em torno de um pivô',
    wrong: ['Dividir e mesclar', 'Trocar adjacentes', 'Encontrar mínimo'],
  },
  alg17: {
    text: 'Qual é a complexidade média do quick sort?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg18: {
    text: 'Qual é o pior caso do quick sort?',
    correct: 'O(n²) - pivô ruim',
    wrong: ['O(n log n)', 'O(n)', 'O(log n)'],
  },
  alg19: {
    text: 'O que é heap sort?',
    correct: 'Usar estrutura de dados heap',
    wrong: ['Usar pivô', 'Mesclar', 'Trocar adjacentes'],
  },
  alg20: {
    text: 'Qual é a complexidade de tempo do heap sort?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg21: {
    text: 'O que é um algoritmo de ordenação estável?',
    correct: 'Preserva ordem de elementos iguais',
    wrong: ['Algoritmo mais rápido', 'Usa menos memória', 'Algoritmo in-place'],
  },
  alg22: {
    text: 'O merge sort é estável?',
    correct: 'Sim',
    wrong: ['Não', 'Às vezes', 'Depende da implementação'],
  },
  alg23: {
    text: 'O quick sort é estável?',
    correct: 'Não (tipicamente)',
    wrong: ['Sim', 'Sempre', 'Nunca'],
  },
  alg24: {
    text: 'O que é ordenação in-place?',
    correct: 'Ordenar com O(1) espaço extra',
    wrong: ['Ordenar com O(n) espaço', 'Ordenação estável', 'Ordenação rápida'],
  },
  alg25: {
    text: 'O merge sort é in-place?',
    correct: 'Não - precisa O(n) espaço extra',
    wrong: ['Sim', 'Às vezes', 'Depende'],
  },
  alg26: {
    text: 'O que é counting sort?',
    correct: 'Contar ocorrências de cada elemento',
    wrong: ['Ordenação por comparação', 'Dividir e conquistar', 'Usar heap'],
  },
  alg27: {
    text: 'Qual é a complexidade do counting sort?',
    correct: 'O(n + k) onde k é o intervalo',
    wrong: ['O(n log n)', 'O(n²)', 'O(log n)'],
  },
  alg28: {
    text: 'O que é radix sort?',
    correct: 'Ordenar por dígitos',
    wrong: ['Ordenação por comparação', 'Dividir e conquistar', 'Usar heap'],
  },
  alg29: {
    text: 'O que é bucket sort?',
    correct: 'Distribuir elementos em baldes',
    wrong: ['Ordenação por comparação', 'Dividir e conquistar', 'Usar heap'],
  },
  alg30: {
    text: 'Qual é o limite inferior para ordenação por comparação?',
    correct: 'O(n log n)',
    wrong: ['O(n)', 'O(n²)', 'O(log n)'],
  },
  alg31: {
    text: 'O que é DFS?',
    correct: 'Explorar o mais longe possível antes de retroceder',
    wrong: [
      'Explorar nível por nível',
      'Exploração aleatória',
      'Caminho mais curto',
    ],
  },
  alg32: {
    text: 'O que é BFS?',
    correct: 'Explorar nível por nível',
    wrong: [
      'Explorar em profundidade primeiro',
      'Exploração aleatória',
      'Caminho mais longo',
    ],
  },
  alg33: {
    text: 'Qual estrutura de dados o DFS usa?',
    correct: 'Pilha',
    wrong: ['Fila', 'Heap', 'Array'],
  },
  alg34: {
    text: 'Qual estrutura de dados o BFS usa?',
    correct: 'Fila',
    wrong: ['Pilha', 'Heap', 'Array'],
  },
  alg35: {
    text: 'Qual é a complexidade de tempo do DFS?',
    correct: 'O(V + E)',
    wrong: ['O(V)', 'O(E)', 'O(V × E)'],
  },
  alg36: {
    text: 'Qual é a complexidade de tempo do BFS?',
    correct: 'O(V + E)',
    wrong: ['O(V)', 'O(E)', 'O(V × E)'],
  },
  alg37: {
    text: 'O que é o algoritmo de Dijkstra?',
    correct: 'Encontrar caminho mais curto de uma fonte',
    wrong: [
      'Encontrar árvore geradora mínima',
      'Ordenar grafo',
      'Detectar ciclos',
    ],
  },
  alg38: {
    text: 'O que é o algoritmo de Bellman-Ford?',
    correct: 'Caminho mais curto com arestas negativas',
    wrong: [
      'Apenas arestas positivas',
      'Árvore geradora mínima',
      'Ordenação topológica',
    ],
  },
  alg39: {
    text: 'O que é o algoritmo de Floyd-Warshall?',
    correct: 'Caminhos mais curtos entre todos os pares',
    wrong: [
      'Caminho mais curto de uma fonte',
      'Árvore geradora mínima',
      'Detecção de ciclos',
    ],
  },
  alg40: {
    text: 'O que é o algoritmo de Kruskal?',
    correct: 'Árvore geradora mínima usando arestas ordenadas',
    wrong: ['Caminho mais curto', 'Ordenação topológica', 'Detecção de ciclos'],
  },
  alg41: {
    text: 'O que é o algoritmo de Prim?',
    correct: 'Árvore geradora mínima crescendo de um vértice',
    wrong: ['Caminho mais curto', 'Ordenação topológica', 'Detecção de ciclos'],
  },
  alg42: {
    text: 'O que é ordenação topológica?',
    correct: 'Ordenar vértices em DAG',
    wrong: ['Ordenar arestas', 'Encontrar ciclos', 'Caminho mais curto'],
  },
  alg43: {
    text: 'O que é programação dinâmica?',
    correct: 'Resolver subproblemas sobrepostos',
    wrong: ['Dividir e conquistar', 'Algoritmo guloso', 'Força bruta'],
  },
  alg44: {
    text: 'O que é memoização?',
    correct: 'Armazenar resultados de subproblemas',
    wrong: ['Recalcular sempre', 'Usar recursão', 'Usar iteração'],
  },
  alg45: {
    text: 'O que é tabulação em PD?',
    correct: 'Abordagem bottom-up',
    wrong: ['Abordagem top-down', 'Recursão', 'Força bruta'],
  },
  alg46: {
    text: 'O que é um algoritmo guloso?',
    correct: 'Escolher ótimo local em cada passo',
    wrong: ['Considerar todas opções', 'Usar PD', 'Usar força bruta'],
  },
  alg47: {
    text: 'O que é dividir e conquistar?',
    correct: 'Dividir problema, resolver partes, combinar',
    wrong: ['Resolver sequencialmente', 'Usar PD', 'Algoritmo guloso'],
  },
  alg48: {
    text: 'O que é backtracking?',
    correct: 'Tentar soluções e retroceder se falhar',
    wrong: ['Nunca retroceder', 'Algoritmo guloso', 'Programação dinâmica'],
  },
  alg49: {
    text: 'O que é o problema da mochila?',
    correct: 'Maximizar valor com capacidade limitada',
    wrong: ['Minimizar peso', 'Ordenar itens', 'Buscar item'],
  },
  alg50: {
    text: 'O que é LCS?',
    correct: 'Encontrar subsequência comum mais longa',
    wrong: ['Encontrar substring', 'Ordenar strings', 'Buscar padrão'],
  },

  alg51: {
    text: 'O que é o problema da distância de edição?',
    correct: 'Mínimas operações para transformar strings',
    wrong: ['Máximas operações', 'Ordenar strings', 'Buscar padrão'],
  },
  alg52: {
    text: 'O que é a sequência de Fibonacci?',
    correct: 'Cada número é soma dos dois anteriores',
    wrong: ['Cada número é produto', 'Números primos', 'Números pares'],
  },
  alg53: {
    text: 'Qual é a complexidade do Fibonacci recursivo ingênuo?',
    correct: 'O(2^n)',
    wrong: ['O(n)', 'O(n²)', 'O(log n)'],
  },
  alg54: {
    text: 'Qual é a complexidade do Fibonacci com PD?',
    correct: 'O(n)',
    wrong: ['O(2^n)', 'O(n²)', 'O(log n)'],
  },
  alg55: {
    text: 'O que é o algoritmo de Kadane?',
    correct: 'Encontrar subarray de soma máxima',
    wrong: ['Ordenar array', 'Buscar elemento', 'Encontrar mínimo'],
  },
  alg56: {
    text: 'O que é o problema do troco?',
    correct: 'Mínimas moedas para dar troco',
    wrong: ['Máximas moedas', 'Ordenar moedas', 'Contar moedas'],
  },
  alg57: {
    text: 'O que é o problema do caixeiro viajante?',
    correct: 'Rota mais curta visitando todas cidades',
    wrong: ['Rota mais longa', 'Visitar uma cidade', 'Ordenar cidades'],
  },
  alg58: {
    text: 'Qual é a complexidade do TSP por força bruta?',
    correct: 'O(n!)',
    wrong: ['O(n)', 'O(n²)', 'O(2^n)'],
  },
  alg59: {
    text: 'O que é o problema das N rainhas?',
    correct: 'Colocar N rainhas sem se atacarem',
    wrong: ['Mover rainhas', 'Contar rainhas', 'Ordenar rainhas'],
  },
  alg60: {
    text: 'O que é o problema do Sudoku?',
    correct: 'Preencher grade com restrições',
    wrong: ['Esvaziar grade', 'Ordenar números', 'Somar números'],
  },
  alg61: {
    text: 'O que é uma árvore de segmentos?',
    correct: 'Estrutura para consultas de intervalo',
    wrong: ['Árvore binária simples', 'Lista encadeada', 'Tabela hash'],
  },
  alg62: {
    text: 'O que é uma árvore de Fenwick?',
    correct: 'Estrutura para somas de prefixo',
    wrong: ['Árvore de busca binária', 'Heap', 'Grafo'],
  },
  alg63: {
    text: 'O que é uma trie?',
    correct: 'Árvore para armazenar strings',
    wrong: ['Árvore binária', 'Heap', 'Grafo'],
  },
  alg64: {
    text: 'O que é o algoritmo KMP?',
    correct: 'Busca de padrões eficiente',
    wrong: ['Ordenação', 'Busca binária', 'Travessia de grafo'],
  },
  alg65: {
    text: 'O que é o algoritmo de Rabin-Karp?',
    correct: 'Busca de padrões com hashing',
    wrong: ['Ordenação', 'Busca binária', 'Travessia de grafo'],
  },
  alg66: {
    text: 'O que é Union-Find?',
    correct: 'Estrutura para conjuntos disjuntos',
    wrong: ['Árvore binária', 'Tabela hash', 'Fila de prioridade'],
  },
  alg67: {
    text: 'O que é compressão de caminho em Union-Find?',
    correct: 'Achatar árvore durante busca',
    wrong: ['Tornar árvore mais profunda', 'Deletar nós', 'Adicionar nós'],
  },
  alg68: {
    text: 'O que é união por rank?',
    correct: 'Unir árvore menor à maior',
    wrong: [
      'Unir aleatoriamente',
      'Sempre unir à esquerda',
      'Sempre unir à direita',
    ],
  },
  alg69: {
    text: 'O que é o algoritmo A*?',
    correct: 'Busca de caminho com heurística',
    wrong: ['Busca sem heurística', 'Ordenação', 'Busca binária'],
  },
  alg70: {
    text: 'O que é uma heurística admissível?',
    correct: 'Nunca superestima o custo real',
    wrong: ['Sempre superestima', 'Custo exato', 'Custo aleatório'],
  },
  alg71: {
    text: 'O que é o algoritmo de fluxo máximo?',
    correct: 'Encontrar fluxo máximo em rede',
    wrong: ['Encontrar fluxo mínimo', 'Ordenar fluxos', 'Eliminar fluxos'],
  },
  alg72: {
    text: 'O que é o algoritmo de Ford-Fulkerson?',
    correct: 'Encontrar fluxo máximo com caminhos aumentantes',
    wrong: [
      'Encontrar caminho mais curto',
      'Árvore geradora mínima',
      'Ordenação topológica',
    ],
  },
  alg73: {
    text: 'O que é o teorema do corte mínimo-fluxo máximo?',
    correct: 'Fluxo máximo igual ao corte mínimo',
    wrong: [
      'Fluxo máximo maior que corte mínimo',
      'Sem relação',
      'Fluxo mínimo igual ao corte máximo',
    ],
  },
  alg74: {
    text: 'O que é emparelhamento bipartido?',
    correct: 'Emparelhar vértices de dois conjuntos',
    wrong: [
      'Emparelhar qualquer vértice',
      'Ordenar vértices',
      'Eliminar vértices',
    ],
  },
  alg75: {
    text: 'O que é o algoritmo húngaro?',
    correct: 'Emparelhamento de custo mínimo',
    wrong: ['Emparelhamento de custo máximo', 'Ordenação', 'Busca'],
  },
  alg76: {
    text: 'O que é complexidade amortizada?',
    correct: 'Custo médio por operação em sequência',
    wrong: ['Pior caso sempre', 'Melhor caso sempre', 'Caso aleatório'],
  },
  alg77: {
    text: 'O que é análise competitiva?',
    correct: 'Comparar algoritmo online com ótimo offline',
    wrong: [
      'Comparar dois algoritmos online',
      'Análise de complexidade',
      'Análise de espaço',
    ],
  },
  alg78: {
    text: 'O que é um algoritmo randomizado?',
    correct: 'Usa decisões aleatórias',
    wrong: [
      'Sempre determinístico',
      'Nunca usa aleatoriedade',
      'Apenas para ordenação',
    ],
  },
  alg79: {
    text: 'O que é Las Vegas vs Monte Carlo?',
    correct: 'Sempre correto vs provavelmente correto',
    wrong: [
      'Ambos sempre corretos',
      'Ambos provavelmente corretos',
      'Sem diferença',
    ],
  },
  alg80: {
    text: 'O que é quick select?',
    correct: 'Encontrar k-ésimo elemento em tempo esperado O(n)',
    wrong: ['Ordenar todo o array', 'Busca binária', 'Encontrar máximo'],
  },
  alg81: {
    text: 'O que é mediana das medianas?',
    correct: 'Seleção em tempo O(n) garantido',
    wrong: ['Seleção em O(n log n)', 'Ordenação', 'Busca'],
  },
  alg82: {
    text: 'O que é uma árvore de sufixos?',
    correct: 'Estrutura para todos os sufixos de uma string',
    wrong: ['Árvore binária', 'Trie simples', 'Grafo'],
  },
  alg83: {
    text: 'O que é o algoritmo de Ukkonen?',
    correct: 'Construir árvore de sufixos em tempo linear',
    wrong: ['Construir em tempo quadrático', 'Busca de padrões', 'Ordenação'],
  },
  alg84: {
    text: 'O que é um array de sufixos?',
    correct: 'Array ordenado de sufixos',
    wrong: ['Array de prefixos', 'Árvore de sufixos', 'Tabela hash'],
  },
  alg85: {
    text: 'O que é o array LCP?',
    correct: 'Prefixo comum mais longo entre sufixos adjacentes',
    wrong: [
      'Sufixo comum mais longo',
      'Substring mais longa',
      'Subsequência mais longa',
    ],
  },
  alg86: {
    text: 'O que é o algoritmo de Manacher?',
    correct: 'Encontrar todos os palíndromos em tempo linear',
    wrong: [
      'Encontrar em tempo quadrático',
      'Ordenar palíndromos',
      'Contar palíndromos',
    ],
  },
  alg87: {
    text: 'O que é o algoritmo Z?',
    correct: 'Calcular array Z para correspondência de padrões',
    wrong: ['Ordenação', 'Busca binária', 'Travessia de grafo'],
  },
  alg88: {
    text: 'O que é o algoritmo de Aho-Corasick?',
    correct: 'Busca de múltiplos padrões',
    wrong: ['Busca de um padrão', 'Ordenação', 'Travessia de grafo'],
  },
  alg89: {
    text: 'O que é decomposição de raiz quadrada?',
    correct: 'Dividir em blocos de tamanho √n',
    wrong: ['Dividir ao meio', 'Não dividir', 'Dividir em n partes'],
  },
  alg90: {
    text: 'O que é o algoritmo de Mo?',
    correct: 'Responder consultas de intervalo offline',
    wrong: ['Consultas online', 'Ordenação', 'Busca'],
  },
  alg91: {
    text: 'O que é decomposição heavy-light?',
    correct: 'Decompor árvore em cadeias',
    wrong: ['Decompor em nós', 'Não decompor', 'Decompor em folhas'],
  },
  alg92: {
    text: 'O que é o centroide de uma árvore?',
    correct: 'Nó que minimiza a subárvore máxima',
    wrong: ['Raiz da árvore', 'Folha da árvore', 'Nó aleatório'],
  },
  alg93: {
    text: 'O que é decomposição de centroide?',
    correct: 'Dividir árvore recursivamente por centroides',
    wrong: ['Dividir pela raiz', 'Não dividir', 'Dividir pelas folhas'],
  },
  alg94: {
    text: 'O que é LCA?',
    correct: 'Ancestral comum mais baixo',
    wrong: ['Ancestral mais alto', 'Descendente comum', 'Irmão comum'],
  },
  alg95: {
    text: 'O que é binary lifting para LCA?',
    correct: 'Pré-processar ancestrais em potências de 2',
    wrong: ['Buscar linearmente', 'Usar BFS', 'Usar DFS simples'],
  },
  alg96: {
    text: 'O que é o algoritmo de Tarjan para LCA?',
    correct: 'LCA offline com Union-Find',
    wrong: ['LCA online', 'Ordenação', 'Busca'],
  },
  alg97: {
    text: 'O que são componentes fortemente conexos?',
    correct: 'Subgrafos onde todo par é alcançável',
    wrong: ['Subgrafos desconectados', 'Árvores', 'Ciclos simples'],
  },
  alg98: {
    text: 'O que é o algoritmo de Kosaraju?',
    correct: 'Encontrar componentes fortemente conexos',
    wrong: [
      'Encontrar caminho mais curto',
      'Ordenação topológica',
      'Árvore geradora',
    ],
  },
  alg99: {
    text: 'O que é o algoritmo de Tarjan para SCC?',
    correct: 'SCC em uma passada de DFS',
    wrong: ['SCC em duas passadas', 'Usando BFS', 'Usando ordenação'],
  },
  alg100: {
    text: 'O que são pontos de articulação?',
    correct: 'Vértices cuja remoção desconecta o grafo',
    wrong: ['Vértices que conectam', 'Arestas importantes', 'Ciclos'],
  },
};

export default algorithms;
