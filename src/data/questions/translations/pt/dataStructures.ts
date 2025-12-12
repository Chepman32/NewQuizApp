// Portuguese translations for Data Structures
import type { CategoryTranslations } from '../index';

export const dataStructures: CategoryTranslations = {
  ds1: {
    text: 'O que é uma estrutura de dados?',
    correct: 'Forma de organizar dados',
    wrong: [
      'Uma linguagem de programação',
      'Um algoritmo',
      'Um sistema operacional',
    ],
  },
  ds2: {
    text: 'O que é um array?',
    correct: 'Coleção de elementos em posições contíguas',
    wrong: ['Lista encadeada', 'Árvore', 'Grafo'],
  },
  ds3: {
    text: 'O que é uma lista encadeada?',
    correct: 'Elementos conectados por ponteiros',
    wrong: ['Array', 'Pilha', 'Fila'],
  },
  ds4: {
    text: 'O que é uma pilha?',
    correct: 'Estrutura LIFO',
    wrong: ['Estrutura FIFO', 'Array', 'Árvore'],
  },
  ds5: {
    text: 'O que significa LIFO?',
    correct: 'Último a Entrar, Primeiro a Sair',
    wrong: [
      'Primeiro a Entrar, Primeiro a Sair',
      'Último a Entrar, Último a Sair',
      'Primeiro a Entrar, Último a Sair',
    ],
  },
  ds6: {
    text: 'O que é uma fila?',
    correct: 'Estrutura FIFO',
    wrong: ['Estrutura LIFO', 'Array', 'Árvore'],
  },
  ds7: {
    text: 'O que significa FIFO?',
    correct: 'Primeiro a Entrar, Primeiro a Sair',
    wrong: [
      'Último a Entrar, Primeiro a Sair',
      'Último a Entrar, Último a Sair',
      'Primeiro a Entrar, Último a Sair',
    ],
  },
  ds8: {
    text: 'O que é uma árvore binária?',
    correct: 'Árvore com no máximo 2 filhos por nó',
    wrong: ['Árvore com qualquer número de filhos', 'Lista encadeada', 'Grafo'],
  },
  ds9: {
    text: 'O que é a raiz de uma árvore?',
    correct: 'Nó superior',
    wrong: ['Nó inferior', 'Nó do meio', 'Qualquer nó'],
  },
  ds10: {
    text: 'O que é uma folha em uma árvore?',
    correct: 'Nó sem filhos',
    wrong: ['Nó com filhos', 'Nó raiz', 'Nó do meio'],
  },
  ds11: {
    text: 'O que é uma árvore binária de busca?',
    correct: 'Árvore ordenada para busca eficiente',
    wrong: ['Árvore não ordenada', 'Lista encadeada', 'Pilha'],
  },
  ds12: {
    text: 'O que é um heap?',
    correct: 'Árvore binária completa com propriedade de heap',
    wrong: ['Lista encadeada', 'Pilha', 'Fila'],
  },
  ds13: {
    text: 'O que é um grafo?',
    correct: 'Conjunto de vértices e arestas',
    wrong: ['Árvore', 'Lista encadeada', 'Array'],
  },
  ds14: {
    text: 'O que é um vértice em um grafo?',
    correct: 'Um nó',
    wrong: ['Uma conexão', 'Um caminho', 'Um ciclo'],
  },
  ds15: {
    text: 'O que é uma aresta em um grafo?',
    correct: 'Conexão entre vértices',
    wrong: ['Um nó', 'Um caminho', 'Um ciclo'],
  },
  ds16: {
    text: 'O que é uma tabela hash?',
    correct: 'Estrutura com acesso por chave',
    wrong: ['Array', 'Lista encadeada', 'Árvore'],
  },
  ds17: {
    text: 'O que é uma função hash?',
    correct: 'Mapeia dados para índices',
    wrong: ['Ordena dados', 'Busca dados', 'Remove dados'],
  },
  ds18: {
    text: 'O que é colisão em hash?',
    correct: 'Duas chaves mapeiam para o mesmo índice',
    wrong: ['Chave não encontrada', 'Tabela cheia', 'Índice inválido'],
  },
  ds19: {
    text: 'O que é uma fila de prioridade?',
    correct: 'Fila onde elementos têm prioridades',
    wrong: ['Fila normal', 'Pilha', 'Lista encadeada'],
  },
  ds20: {
    text: 'O que é um trie?',
    correct: 'Árvore para armazenar strings',
    wrong: ['Árvore binária', 'Heap', 'Grafo'],
  },
  ds21: {
    text: 'Qual é a complexidade de acesso em array?',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds22: {
    text: 'Qual é a complexidade de busca em lista encadeada?',
    correct: 'O(n)',
    wrong: ['O(1)', 'O(log n)', 'O(n²)'],
  },
  ds23: {
    text: 'Qual é a complexidade de busca em árvore binária de busca balanceada?',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  ds24: {
    text: 'Qual é a complexidade de inserção em heap?',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  ds25: {
    text: 'Qual é a complexidade média de acesso em tabela hash?',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds26: {
    text: 'O que é uma lista duplamente encadeada?',
    correct: 'Lista com ponteiros para frente e trás',
    wrong: ['Lista com um ponteiro', 'Array', 'Pilha'],
  },
  ds27: {
    text: 'O que é uma lista circular?',
    correct: 'Lista onde o último aponta para o primeiro',
    wrong: ['Lista linear', 'Array', 'Pilha'],
  },
  ds28: {
    text: 'O que é uma deque?',
    correct: 'Fila de duas pontas',
    wrong: ['Fila simples', 'Pilha', 'Lista'],
  },
  ds29: {
    text: 'O que é uma árvore AVL?',
    correct: 'Árvore binária de busca auto-balanceada',
    wrong: ['Árvore não balanceada', 'Heap', 'Trie'],
  },
  ds30: {
    text: 'O que é uma árvore rubro-negra?',
    correct: 'Árvore binária de busca balanceada com cores',
    wrong: ['Árvore não balanceada', 'Heap', 'Trie'],
  },
  ds31: {
    text: 'O que é uma árvore B?',
    correct: 'Árvore balanceada para armazenamento',
    wrong: ['Árvore binária', 'Heap', 'Trie'],
  },
  ds32: {
    text: 'O que é um grafo direcionado?',
    correct: 'Grafo com arestas com direção',
    wrong: ['Grafo sem direção', 'Árvore', 'Lista'],
  },
  ds33: {
    text: 'O que é um grafo não direcionado?',
    correct: 'Grafo com arestas bidirecionais',
    wrong: ['Grafo com direção', 'Árvore', 'Lista'],
  },
  ds34: {
    text: 'O que é um grafo ponderado?',
    correct: 'Grafo com pesos nas arestas',
    wrong: ['Grafo sem pesos', 'Árvore', 'Lista'],
  },
  ds35: {
    text: 'O que é um ciclo em um grafo?',
    correct: 'Caminho que retorna ao início',
    wrong: ['Caminho linear', 'Aresta', 'Vértice'],
  },
  ds36: {
    text: 'O que é um grafo acíclico?',
    correct: 'Grafo sem ciclos',
    wrong: ['Grafo com ciclos', 'Árvore', 'Lista'],
  },
  ds37: {
    text: 'O que é DAG?',
    correct: 'Grafo Acíclico Direcionado',
    wrong: ['Grafo com ciclos', 'Grafo não direcionado', 'Árvore'],
  },
  ds38: {
    text: 'O que é matriz de adjacência?',
    correct: 'Representação de grafo com matriz',
    wrong: ['Lista de adjacência', 'Árvore', 'Heap'],
  },
  ds39: {
    text: 'O que é lista de adjacência?',
    correct: 'Representação de grafo com listas',
    wrong: ['Matriz de adjacência', 'Árvore', 'Heap'],
  },
  ds40: {
    text: 'O que é um heap máximo?',
    correct: 'Heap onde pai é maior que filhos',
    wrong: ['Heap onde pai é menor', 'Árvore binária', 'Lista'],
  },
  ds41: {
    text: 'O que é um heap mínimo?',
    correct: 'Heap onde pai é menor que filhos',
    wrong: ['Heap onde pai é maior', 'Árvore binária', 'Lista'],
  },
  ds42: {
    text: 'O que é heapify?',
    correct: 'Converter array em heap',
    wrong: ['Ordenar array', 'Buscar em heap', 'Remover de heap'],
  },
  ds43: {
    text: 'O que é encadeamento em hash?',
    correct: 'Resolver colisões com listas',
    wrong: ['Resolver com sondagem', 'Evitar colisões', 'Ignorar colisões'],
  },
  ds44: {
    text: 'O que é sondagem linear?',
    correct: 'Resolver colisões buscando próximo slot',
    wrong: ['Usar listas', 'Evitar colisões', 'Ignorar colisões'],
  },
  ds45: {
    text: 'O que é fator de carga em hash?',
    correct: 'Razão de elementos para tamanho',
    wrong: ['Número de colisões', 'Tamanho da tabela', 'Número de elementos'],
  },
  ds46: {
    text: 'O que é rehashing?',
    correct: 'Redimensionar tabela hash',
    wrong: ['Mudar função hash', 'Remover elementos', 'Adicionar elementos'],
  },
  ds47: {
    text: 'O que é um conjunto?',
    correct: 'Coleção de elementos únicos',
    wrong: ['Coleção com duplicatas', 'Array', 'Lista'],
  },
  ds48: {
    text: 'O que é um mapa?',
    correct: 'Coleção de pares chave-valor',
    wrong: ['Array', 'Lista', 'Conjunto'],
  },
  ds49: {
    text: 'O que é uma árvore de segmentos?',
    correct: 'Árvore para consultas de intervalo',
    wrong: ['Árvore binária simples', 'Heap', 'Trie'],
  },
  ds50: {
    text: 'O que é uma árvore de Fenwick?',
    correct: 'Árvore para somas de prefixo',
    wrong: ['Árvore binária simples', 'Heap', 'Trie'],
  },
  ds51: {
    text: 'O que é Union-Find?',
    correct: 'Estrutura para conjuntos disjuntos',
    wrong: ['Árvore binária', 'Heap', 'Trie'],
  },
  ds52: {
    text: 'O que é compressão de caminho?',
    correct: 'Otimização em Union-Find',
    wrong: ['Compressão de dados', 'Ordenação', 'Busca'],
  },
  ds53: {
    text: 'O que é união por rank?',
    correct: 'Otimização em Union-Find',
    wrong: ['Ordenação', 'Busca', 'Inserção'],
  },
  ds54: {
    text: 'O que é uma skip list?',
    correct: 'Lista com múltiplos níveis de ponteiros',
    wrong: ['Lista simples', 'Array', 'Árvore'],
  },
  ds55: {
    text: 'O que é uma bloom filter?',
    correct: 'Estrutura probabilística para pertinência',
    wrong: ['Filtro de dados', 'Ordenação', 'Busca'],
  },
  ds56: {
    text: 'O que é uma árvore de sufixos?',
    correct: 'Árvore com todos os sufixos de uma string',
    wrong: ['Árvore binária', 'Heap', 'Trie simples'],
  },
  ds57: {
    text: 'O que é um array de sufixos?',
    correct: 'Array ordenado de sufixos',
    wrong: ['Array simples', 'Lista', 'Árvore'],
  },
  ds58: {
    text: 'O que é LCP array?',
    correct: 'Array de prefixos comuns mais longos',
    wrong: ['Array de sufixos', 'Array simples', 'Lista'],
  },
  ds59: {
    text: 'O que é uma árvore de intervalos?',
    correct: 'Árvore para consultas de sobreposição',
    wrong: ['Árvore binária simples', 'Heap', 'Trie'],
  },
  ds60: {
    text: 'O que é uma árvore KD?',
    correct: 'Árvore para pontos em k dimensões',
    wrong: ['Árvore binária simples', 'Heap', 'Trie'],
  },
  ds61: {
    text: 'O que é uma quadtree?',
    correct: 'Árvore para partição de espaço 2D',
    wrong: ['Árvore binária', 'Heap', 'Trie'],
  },
  ds62: {
    text: 'O que é uma octree?',
    correct: 'Árvore para partição de espaço 3D',
    wrong: ['Quadtree', 'Árvore binária', 'Heap'],
  },
  ds63: {
    text: 'O que é uma árvore de Merkle?',
    correct: 'Árvore com hashes para verificação',
    wrong: ['Árvore binária simples', 'Heap', 'Trie'],
  },
  ds64: {
    text: 'O que é uma fila circular?',
    correct: 'Fila implementada em array circular',
    wrong: ['Fila linear', 'Pilha', 'Lista'],
  },
  ds65: {
    text: 'O que é uma pilha com mínimo?',
    correct: 'Pilha que rastreia o mínimo',
    wrong: ['Pilha simples', 'Fila', 'Heap'],
  },
  ds66: {
    text: 'O que é uma fila monotônica?',
    correct: 'Fila com elementos em ordem',
    wrong: ['Fila simples', 'Pilha', 'Heap'],
  },
  ds67: {
    text: 'O que é uma pilha monotônica?',
    correct: 'Pilha com elementos em ordem',
    wrong: ['Pilha simples', 'Fila', 'Heap'],
  },
  ds68: {
    text: 'O que é sparse table?',
    correct: 'Tabela para consultas de intervalo',
    wrong: ['Tabela hash', 'Array', 'Lista'],
  },
  ds69: {
    text: 'O que é decomposição em raiz quadrada?',
    correct: 'Dividir array em blocos de √n',
    wrong: ['Dividir ao meio', 'Não dividir', 'Dividir em n partes'],
  },
  ds70: {
    text: 'O que é heavy-light decomposition?',
    correct: 'Decomposição de árvore em cadeias',
    wrong: ['Decomposição de array', 'Ordenação', 'Busca'],
  },
  ds71: {
    text: 'O que é centroid decomposition?',
    correct: 'Decomposição de árvore por centróides',
    wrong: ['Decomposição de array', 'Ordenação', 'Busca'],
  },
  ds72: {
    text: 'O que é uma árvore de Euler tour?',
    correct: 'Representação de árvore como sequência',
    wrong: ['Árvore binária', 'Heap', 'Trie'],
  },
  ds73: {
    text: 'O que é LCA?',
    correct: 'Ancestral Comum Mais Baixo',
    wrong: ['Descendente comum', 'Irmão comum', 'Raiz'],
  },
  ds74: {
    text: 'O que é binary lifting?',
    correct: 'Técnica para consultas de ancestrais',
    wrong: ['Ordenação', 'Busca', 'Inserção'],
  },
  ds75: {
    text: 'O que é uma árvore persistente?',
    correct: 'Árvore que mantém versões anteriores',
    wrong: ['Árvore que deleta versões', 'Árvore simples', 'Heap'],
  },
  ds76: {
    text: 'O que é uma estrutura de dados persistente?',
    correct: 'Estrutura que preserva versões',
    wrong: ['Estrutura que modifica in-place', 'Array', 'Lista'],
  },
  ds77: {
    text: 'O que é uma rope?',
    correct: 'Estrutura para strings longas',
    wrong: ['String simples', 'Array', 'Lista'],
  },
  ds78: {
    text: 'O que é uma treap?',
    correct: 'Combinação de árvore e heap',
    wrong: ['Árvore simples', 'Heap simples', 'Lista'],
  },
  ds79: {
    text: 'O que é uma splay tree?',
    correct: 'Árvore que move acessos para raiz',
    wrong: ['Árvore AVL', 'Árvore rubro-negra', 'Heap'],
  },
  ds80: {
    text: 'O que é uma árvore de van Emde Boas?',
    correct: 'Árvore para inteiros em universo limitado',
    wrong: ['Árvore binária', 'Heap', 'Trie'],
  },
  ds81: {
    text: 'O que é uma árvore de fusão?',
    correct: 'Árvore para inteiros com operações rápidas',
    wrong: ['Árvore binária', 'Heap', 'Trie'],
  },
  ds82: {
    text: 'O que é uma árvore de busca ternária?',
    correct: 'Árvore com três filhos para strings',
    wrong: ['Árvore binária', 'Trie', 'Heap'],
  },
  ds83: {
    text: 'O que é um radix tree?',
    correct: 'Trie compactada',
    wrong: ['Trie simples', 'Árvore binária', 'Heap'],
  },
  ds84: {
    text: 'O que é uma patricia trie?',
    correct: 'Trie com compressão de caminhos',
    wrong: ['Trie simples', 'Árvore binária', 'Heap'],
  },
  ds85: {
    text: 'O que é uma árvore de Aho-Corasick?',
    correct: 'Autômato para múltiplos padrões',
    wrong: ['Árvore binária', 'Heap', 'Trie simples'],
  },
  ds86: {
    text: 'O que é um grafo bipartido?',
    correct: 'Grafo com vértices em dois conjuntos',
    wrong: ['Grafo completo', 'Árvore', 'Lista'],
  },
  ds87: {
    text: 'O que é um grafo completo?',
    correct: 'Grafo onde todos os vértices estão conectados',
    wrong: ['Grafo bipartido', 'Árvore', 'Lista'],
  },
  ds88: {
    text: 'O que é uma árvore geradora?',
    correct: 'Subgrafo que conecta todos os vértices',
    wrong: ['Grafo completo', 'Ciclo', 'Caminho'],
  },
  ds89: {
    text: 'O que é uma árvore geradora mínima?',
    correct: 'Árvore geradora com peso mínimo',
    wrong: ['Árvore geradora máxima', 'Grafo completo', 'Ciclo'],
  },
  ds90: {
    text: 'O que é um caminho euleriano?',
    correct: 'Caminho que visita cada aresta uma vez',
    wrong: ['Caminho que visita cada vértice', 'Ciclo', 'Árvore'],
  },
  ds91: {
    text: 'O que é um caminho hamiltoniano?',
    correct: 'Caminho que visita cada vértice uma vez',
    wrong: ['Caminho que visita cada aresta', 'Ciclo', 'Árvore'],
  },
  ds92: {
    text: 'O que é um componente fortemente conectado?',
    correct: 'Subgrafo onde todos alcançam todos',
    wrong: ['Subgrafo desconectado', 'Árvore', 'Ciclo'],
  },
  ds93: {
    text: 'O que é um ponto de articulação?',
    correct: 'Vértice cuja remoção desconecta o grafo',
    wrong: ['Vértice qualquer', 'Aresta', 'Ciclo'],
  },
  ds94: {
    text: 'O que é uma ponte em um grafo?',
    correct: 'Aresta cuja remoção desconecta o grafo',
    wrong: ['Aresta qualquer', 'Vértice', 'Ciclo'],
  },
  ds95: {
    text: 'O que é ordenação topológica?',
    correct: 'Ordenação linear de vértices em DAG',
    wrong: ['Ordenação de array', 'Busca em grafo', 'Ciclo'],
  },
  ds96: {
    text: 'O que é uma fila de prioridade indexada?',
    correct: 'Fila de prioridade com acesso por índice',
    wrong: ['Fila simples', 'Pilha', 'Lista'],
  },
  ds97: {
    text: 'O que é um multiset?',
    correct: 'Conjunto que permite duplicatas',
    wrong: ['Conjunto sem duplicatas', 'Array', 'Lista'],
  },
  ds98: {
    text: 'O que é um multimap?',
    correct: 'Mapa que permite chaves duplicadas',
    wrong: ['Mapa sem duplicatas', 'Array', 'Lista'],
  },
  ds99: {
    text: 'O que é uma lista de adjacência ponderada?',
    correct: 'Lista de adjacência com pesos',
    wrong: ['Lista simples', 'Matriz', 'Array'],
  },
  ds100: {
    text: 'O que é uma matriz de incidência?',
    correct: 'Matriz de vértices por arestas',
    wrong: ['Matriz de adjacência', 'Lista', 'Array'],
  },
};

export default dataStructures;
