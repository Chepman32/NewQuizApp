// German translations for Data Structures questions
import type { CategoryTranslations } from '../index';

export const dataStructures: CategoryTranslations = {
  ds1: {
    text: 'Was ist ein Array?',
    correct: 'Sammlung von Elementen mit Indizes',
    wrong: ['Verkettete Liste', 'Baum', 'Graph'],
  },
  ds2: {
    text: 'Was ist die Zeitkomplexität für Array-Zugriff?',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds3: {
    text: 'Was ist eine verkettete Liste?',
    correct: 'Elemente verbunden durch Zeiger',
    wrong: ['Array', 'Stapel', 'Warteschlange'],
  },
  ds4: {
    text: 'Was ist die Komplexität für Einfügen am Anfang einer verketteten Liste?',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds5: {
    text: 'Was ist ein Stapel?',
    correct: 'LIFO-Struktur (Last In, First Out)',
    wrong: ['FIFO-Struktur', 'Array', 'Baum'],
  },
  ds6: {
    text: 'Was ist eine Warteschlange?',
    correct: 'FIFO-Struktur (First In, First Out)',
    wrong: ['LIFO-Struktur', 'Array', 'Baum'],
  },
  ds7: {
    text: 'Was bedeutet LIFO?',
    correct: 'Last In, First Out',
    wrong: ['First In, First Out', 'Last In, Last Out', 'First In, Last Out'],
  },
  ds8: {
    text: 'Was bedeutet FIFO?',
    correct: 'First In, First Out',
    wrong: ['Last In, First Out', 'First In, Last Out', 'Last In, Last Out'],
  },
  ds9: {
    text: 'Was ist ein Binärbaum?',
    correct: 'Baum, bei dem jeder Knoten höchstens zwei Kinder hat',
    wrong: [
      'Baum mit zwei Knoten',
      'Liste mit zwei Elementen',
      'Graph mit zwei Knoten',
    ],
  },
  ds10: {
    text: 'Was ist ein binärer Suchbaum?',
    correct: 'Geordneter Binärbaum für Suche',
    wrong: ['Beliebiger Baum', 'Sortierte Liste', 'Sortiertes Array'],
  },
  ds11: {
    text: 'Was ist die Suchkomplexität in einem ausgeglichenen BST?',
    correct: 'O(log n)',
    wrong: ['O(1)', 'O(n)', 'O(n²)'],
  },
  ds12: {
    text: 'Was ist ein Heap?',
    correct: 'Vollständiger Binärbaum mit Heap-Eigenschaft',
    wrong: ['Stapel', 'Warteschlange', 'Verkettete Liste'],
  },
  ds13: {
    text: 'Was ist ein Max-Heap?',
    correct: 'Heap, bei dem der Elternknoten größer als die Kinder ist',
    wrong: [
      'Heap, bei dem der Elternknoten kleiner ist',
      'Heap mit maximalen Elementen',
      'Sortierter Heap',
    ],
  },
  ds14: {
    text: 'Was ist ein Min-Heap?',
    correct: 'Heap, bei dem der Elternknoten kleiner als die Kinder ist',
    wrong: [
      'Heap, bei dem der Elternknoten größer ist',
      'Heap mit minimalen Elementen',
      'Sortierter Heap',
    ],
  },
  ds15: {
    text: 'Was ist eine Hashtabelle?',
    correct: 'Struktur mit Hashfunktion',
    wrong: ['Sortiertes Array', 'Verkettete Liste', 'Baum'],
  },
  ds16: {
    text: 'Was ist die durchschnittliche Suchkomplexität in einer Hashtabelle?',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds17: {
    text: 'Was ist eine Kollision in einer Hashtabelle?',
    correct: 'Zwei Schlüssel mit gleichem Index',
    wrong: ['Programmfehler', 'Speicherüberlauf', 'Ungültiger Schlüssel'],
  },
  ds18: {
    text: 'Was ist ein Graph?',
    correct: 'Menge von Knoten und Kanten',
    wrong: ['Array', 'Nur Baum', 'Liste'],
  },
  ds19: {
    text: 'Was ist ein gerichteter Graph?',
    correct: 'Graph mit gerichteten Kanten',
    wrong: ['Graph ohne Richtung', 'Graph mit Gewichten', 'Graph ohne Zyklen'],
  },
  ds20: {
    text: 'Was ist ein ungerichteter Graph?',
    correct: 'Graph mit bidirektionalen Kanten',
    wrong: ['Graph mit Richtung', 'Graph mit Gewichten', 'Graph mit Zyklen'],
  },
  ds21: {
    text: 'Was ist ein gewichteter Graph?',
    correct: 'Graph mit Gewichten auf Kanten',
    wrong: ['Graph ohne Gewichte', 'Gerichteter Graph', 'Vollständiger Graph'],
  },
  ds22: {
    text: 'Was ist eine Adjazenzliste?',
    correct: 'Graphdarstellung mit Listen',
    wrong: ['Adjazenzmatrix', 'Verkettete Liste', 'Array'],
  },
  ds23: {
    text: 'Was ist eine Adjazenzmatrix?',
    correct: 'Graphdarstellung mit Matrix',
    wrong: ['Adjazenzliste', 'Einfaches Array', 'Baum'],
  },
  ds24: {
    text: 'Was ist ein AVL-Baum?',
    correct: 'Selbstbalancierender binärer Suchbaum',
    wrong: ['Beliebiger Baum', 'Liste', 'Graph'],
  },
  ds25: {
    text: 'Was ist ein Rot-Schwarz-Baum?',
    correct: 'Balancierter BST mit Farben',
    wrong: ['Baum mit zufälligen Farben', 'Gefärbter Graph', 'Gefärbte Liste'],
  },
  ds26: {
    text: 'Was ist ein B-Baum?',
    correct: 'Balancierter Baum für Datenbanken',
    wrong: ['Binärbaum', 'AVL-Baum', 'Rot-Schwarz-Baum'],
  },
  ds27: {
    text: 'Was ist ein Trie?',
    correct: 'Baum zum Speichern von Strings',
    wrong: ['Binärbaum', 'Graph', 'Hashtabelle'],
  },
  ds28: {
    text: 'Was ist eine Prioritätswarteschlange?',
    correct: 'Warteschlange mit Prioritäten',
    wrong: ['Normale Warteschlange', 'Stapel', 'Liste'],
  },
  ds29: {
    text: 'Welche Struktur wird oft für Prioritätswarteschlangen verwendet?',
    correct: 'Heap',
    wrong: ['Array', 'Verkettete Liste', 'Stapel'],
  },
  ds30: {
    text: 'Was ist eine doppelt verkettete Liste?',
    correct: 'Liste mit Vor- und Rückwärtszeigern',
    wrong: ['Liste mit zwei Elementen', 'Zwei Listen', 'Zirkuläre Liste'],
  },
  ds31: {
    text: 'Was ist eine zirkuläre Liste?',
    correct: 'Liste, bei der das letzte Element auf das erste zeigt',
    wrong: [
      'Kreisförmige Liste',
      'Doppelt verkettete Liste',
      'Liste mit Schleife',
    ],
  },
  ds32: {
    text: 'Was ist eine Deque?',
    correct: 'Warteschlange mit zwei Enden',
    wrong: ['Doppelter Stapel', 'Zwei Warteschlangen', 'Doppelte Liste'],
  },
  ds33: {
    text: 'Was ist ein Set?',
    correct: 'Sammlung ohne Duplikate',
    wrong: ['Sammlung mit Duplikaten', 'Geordnete Liste', 'Array'],
  },
  ds34: {
    text: 'Was ist ein Multiset?',
    correct: 'Set, das Duplikate erlaubt',
    wrong: ['Set ohne Duplikate', 'Mehrere Sets', 'Geordnetes Set'],
  },
  ds35: {
    text: 'Was ist eine Map (Dictionary)?',
    correct: 'Sammlung von Schlüssel-Wert-Paaren',
    wrong: ['Array', 'Liste', 'Set'],
  },
  ds36: {
    text: 'Was ist ein Segmentbaum?',
    correct: 'Baum für Bereichsabfragen',
    wrong: ['Einfacher Binärbaum', 'Segmentliste', 'Graph'],
  },
  ds37: {
    text: 'Was ist ein Fenwick-Baum?',
    correct: 'Struktur für Präfixsummen',
    wrong: ['Binärbaum', 'Graph', 'Liste'],
  },
  ds38: {
    text: 'Was ist Union-Find?',
    correct: 'Struktur für disjunkte Mengen',
    wrong: ['Suchoperation', 'Sortiertyp', 'Graphalgorithmus'],
  },
  ds39: {
    text: 'Was ist Pfadkompression?',
    correct: 'Optimierung von Union-Find',
    wrong: ['Datenkompression', 'Sortieralgorithmus', 'Hashtyp'],
  },
  ds40: {
    text: 'Was ist eine Skip-Liste?',
    correct: 'Verkettete Liste mit mehreren Ebenen',
    wrong: [
      'Liste, die Elemente überspringt',
      'Sortierte Liste',
      'Zirkuläre Liste',
    ],
  },
  ds41: {
    text: 'Was ist die Suchkomplexität in einer Skip-Liste?',
    correct: 'O(log n) im Durchschnitt',
    wrong: ['O(1)', 'O(n)', 'O(n²)'],
  },
  ds42: {
    text: 'Was ist ein Bloom-Filter?',
    correct: 'Probabilistische Struktur für Mitgliedschaftstest',
    wrong: ['Datenfilter', 'Sortiertyp', 'Suchalgorithmus'],
  },
  ds43: {
    text: 'Was ist ein LRU-Cache?',
    correct: 'Cache, der das am längsten nicht verwendete Element entfernt',
    wrong: ['Neuester Cache', 'Zufälliger Cache', 'FIFO-Cache'],
  },
  ds44: {
    text: 'Welche Struktur kombiniert Liste und Hashtabelle für LRU?',
    correct: 'Doppelt verkettete Liste + HashMap',
    wrong: ['Array + Stapel', 'Baum + Warteschlange', 'Graph + Set'],
  },
  ds45: {
    text: 'Was ist ein Suffixbaum?',
    correct: 'Baum mit allen Suffixen eines Strings',
    wrong: ['Präfixbaum', 'Trie', 'Binärbaum'],
  },
  ds46: {
    text: 'Was ist ein Suffix-Array?',
    correct: 'Sortiertes Array der Suffixe eines Strings',
    wrong: ['Präfix-Array', 'Sortiertes Array', 'String-Liste'],
  },
  ds47: {
    text: 'Was ist ein k-d-Baum?',
    correct: 'Baum für mehrdimensionale Daten',
    wrong: [
      'Baum mit k Kindern',
      'k-dimensionaler Baum',
      'k-dimensionaler Graph',
    ],
  },
  ds48: {
    text: 'Was ist ein Quadtree?',
    correct: 'Baum, bei dem jeder Knoten vier Kinder hat',
    wrong: ['Baum mit vier Ebenen', 'Quadratischer Graph', 'Matrix'],
  },
  ds49: {
    text: 'Was ist ein Octree?',
    correct: 'Baum, bei dem jeder Knoten acht Kinder hat',
    wrong: ['Baum mit acht Ebenen', '3D-Graph', 'Datenwürfel'],
  },
  ds50: {
    text: 'Was ist eine persistente Datenstruktur?',
    correct: 'Struktur, die frühere Versionen bewahrt',
    wrong: [
      'Auf Festplatte gespeicherte Struktur',
      'Permanente Struktur',
      'Unveränderliche Struktur',
    ],
  },
  ds51: {
    text: 'Was ist eine unveränderliche Datenstruktur?',
    correct: 'Struktur, die nicht geändert werden kann',
    wrong: ['Persistente Struktur', 'Konstante Struktur', 'Statische Struktur'],
  },
  ds52: {
    text: 'Was ist ein dynamisches Array?',
    correct: 'Array, das seine Größe ändern kann',
    wrong: ['Festes Array', 'Verkettete Liste', 'Stapel'],
  },
  ds53: {
    text: 'Wie verwaltet ArrayList die Größenänderung?',
    correct: 'Kapazität verdoppeln, wenn voll',
    wrong: [
      'Ein Element hinzufügen',
      'Neues Array erstellen',
      'Verkettete Liste verwenden',
    ],
  },
  ds54: {
    text: 'Was ist der Lastfaktor einer Hashtabelle?',
    correct: 'Verhältnis Elemente/Kapazität',
    wrong: ['Anzahl der Elemente', 'Tabellengröße', 'Anzahl der Kollisionen'],
  },
  ds55: {
    text: 'Was ist Verkettung in einer Hashtabelle?',
    correct: 'Listen für Kollisionen verwenden',
    wrong: [
      'Tabellen verbinden',
      'Schlüssel verbinden',
      'Werte zusammenführen',
    ],
  },
  ds56: {
    text: 'Was ist offene Adressierung?',
    correct: 'Anderen Platz bei Kollision finden',
    wrong: ['Neue Tabelle öffnen', 'Öffentliche Adresse', 'Direkter Zugriff'],
  },
  ds57: {
    text: 'Was ist lineares Sondieren?',
    correct: 'Nächsten freien Platz suchen',
    wrong: ['Lineare Suche', 'Lineare Sortierung', 'Lineare Komplexität'],
  },
  ds58: {
    text: 'Was ist quadratisches Sondieren?',
    correct: 'Mit quadratischen Sprüngen suchen',
    wrong: ['Quadratische Suche', 'Vier Sonden', 'Quadratische Komplexität'],
  },
  ds59: {
    text: 'Was ist doppeltes Hashing?',
    correct: 'Zwei Hashfunktionen verwenden',
    wrong: ['Zweimal hashen', 'Zwei Hashtabellen', 'Doppelte Kollision'],
  },
  ds60: {
    text: 'Was ist Tiefensuche (DFS)?',
    correct: 'So tief wie möglich erkunden, bevor zurück',
    wrong: [
      'Ebene für Ebene erkunden',
      'Zufällige Traversierung',
      'Sortierte Traversierung',
    ],
  },
  ds61: {
    text: 'Was ist Breitensuche (BFS)?',
    correct: 'Ebene für Ebene erkunden',
    wrong: [
      'In die Tiefe erkunden',
      'Zufällige Traversierung',
      'Sortierte Traversierung',
    ],
  },
  ds62: {
    text: 'Welche Struktur wird für BFS verwendet?',
    correct: 'Warteschlange',
    wrong: ['Stapel', 'Heap', 'Baum'],
  },
  ds63: {
    text: 'Welche Struktur wird für iteratives DFS verwendet?',
    correct: 'Stapel',
    wrong: ['Warteschlange', 'Heap', 'Baum'],
  },
  ds64: {
    text: 'Was ist Preorder-Traversierung?',
    correct: 'Wurzel, Links, Rechts',
    wrong: [
      'Links, Wurzel, Rechts',
      'Links, Rechts, Wurzel',
      'Rechts, Links, Wurzel',
    ],
  },
  ds65: {
    text: 'Was ist Inorder-Traversierung?',
    correct: 'Links, Wurzel, Rechts',
    wrong: [
      'Wurzel, Links, Rechts',
      'Links, Rechts, Wurzel',
      'Rechts, Links, Wurzel',
    ],
  },
  ds66: {
    text: 'Was ist Postorder-Traversierung?',
    correct: 'Links, Rechts, Wurzel',
    wrong: [
      'Wurzel, Links, Rechts',
      'Links, Wurzel, Rechts',
      'Rechts, Links, Wurzel',
    ],
  },
  ds67: {
    text: 'Welche Traversierung gibt sortierte Elemente eines BST?',
    correct: 'Inorder',
    wrong: ['Preorder', 'Postorder', 'Level-Order'],
  },
  ds68: {
    text: 'Was ist ein vollständiger Baum?',
    correct: 'Alle Ebenen gefüllt außer der letzten',
    wrong: ['Baum mit allen Knoten', 'Balancierter Baum', 'Perfekter Baum'],
  },
  ds69: {
    text: 'Was ist ein perfekter Baum?',
    correct: 'Alle Ebenen vollständig gefüllt',
    wrong: ['Vollständiger Baum', 'Balancierter Baum', 'Optimaler Baum'],
  },
  ds70: {
    text: 'Was ist ein balancierter Baum?',
    correct: 'Teilbaumhöhen unterscheiden sich um höchstens 1',
    wrong: [
      'Baum mit gleicher Knotenanzahl',
      'Symmetrischer Baum',
      'Vollständiger Baum',
    ],
  },
  ds71: {
    text: 'Was ist die Höhe eines balancierten Baums mit n Knoten?',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  ds72: {
    text: 'Was ist eine Rotation in einem AVL-Baum?',
    correct: 'Operation zum Neuausgleichen des Baums',
    wrong: ['Baum drehen', 'Baum umkehren', 'Baum sortieren'],
  },
  ds73: {
    text: 'Wie viele Rotationstypen gibt es in AVL?',
    correct: '4 (LL, RR, LR, RL)',
    wrong: ['2', '3', '6'],
  },
  ds74: {
    text: 'Was ist der Balancefaktor eines AVL-Knotens?',
    correct: 'Höhe links minus Höhe rechts',
    wrong: ['Anzahl der Kinder', 'Tiefe des Knotens', 'Anzahl der Nachkommen'],
  },
  ds75: {
    text: 'Welche Werte sind gültig für den AVL-Balancefaktor?',
    correct: '-1, 0, 1',
    wrong: ['0, 1, 2', '-2, -1, 0, 1, 2', 'Jede Ganzzahl'],
  },
  ds76: {
    text: 'Was ist ein Sentinel-Knoten?',
    correct: 'Dummy-Knoten zur Codevereinfachung',
    wrong: ['Wächterknoten', 'Wurzelknoten', 'Blattknoten'],
  },
  ds77: {
    text: 'Was ist ein degenerierter Binärbaum?',
    correct: 'Baum, bei dem jeder Knoten nur ein Kind hat',
    wrong: ['Leerer Baum', 'Baum mit Fehlern', 'Ungültiger Baum'],
  },
  ds78: {
    text: 'Was ist die Suchkomplexität in einem degenerierten Baum?',
    correct: 'O(n)',
    wrong: ['O(log n)', 'O(1)', 'O(n²)'],
  },
  ds79: {
    text: 'Was ist ein Entscheidungsbaum?',
    correct: 'Baum für Entscheidungsfindung',
    wrong: ['Binärbaum', 'Suchbaum', 'Balancierter Baum'],
  },
  ds80: {
    text: 'Was ist ein abstrakter Syntaxbaum?',
    correct: 'Baumdarstellung von Code',
    wrong: ['Dateibaum', 'Datenbaum', 'Suchbaum'],
  },
  ds81: {
    text: 'Was ist ein gerichteter azyklischer Graph (DAG)?',
    correct: 'Gerichteter Graph ohne Zyklen',
    wrong: ['Graph mit Zyklen', 'Ungerichteter Graph', 'Baum'],
  },
  ds82: {
    text: 'Was ist topologische Sortierung?',
    correct: 'Lineare Ordnung von DAG-Knoten',
    wrong: ['Graphsortierung', 'Baumsortierung', 'Listensortierung'],
  },
  ds83: {
    text: 'Was ist ein bipartiter Graph?',
    correct: 'Graph, der in zwei unabhängige Mengen teilbar ist',
    wrong: [
      'Graph mit zwei Knoten',
      'Graph mit zwei Kanten',
      'In zwei geteilter Graph',
    ],
  },
  ds84: {
    text: 'Was ist ein vollständiger Graph?',
    correct: 'Graph, bei dem alle Knoten verbunden sind',
    wrong: ['Graph mit allen Knoten', 'Graph ohne Lücken', 'Endlicher Graph'],
  },
  ds85: {
    text: 'Was ist ein Spannbaum?',
    correct: 'Teilgraph, der alle Knoten ohne Zyklus verbindet',
    wrong: ['Überspannender Baum', 'Großer Baum', 'Vollständiger Baum'],
  },
  ds86: {
    text: 'Was ist ein minimaler Spannbaum?',
    correct: 'Spannbaum mit minimalem Gesamtgewicht',
    wrong: ['Kleinster Baum', 'Baum mit weniger Knoten', 'Kürzester Baum'],
  },
  ds87: {
    text: 'Was ist ein Zyklus in einem Graphen?',
    correct: 'Pfad, der zum Ausgangspunkt zurückkehrt',
    wrong: ['Endlosschleife', 'Knotenkreis', 'Wiederholung'],
  },
  ds88: {
    text: 'Was ist ein Pfad in einem Graphen?',
    correct: 'Folge von durch Kanten verbundenen Knoten',
    wrong: ['Route', 'Richtung', 'Linie'],
  },
  ds89: {
    text: 'Was ist der Grad eines Knotens?',
    correct: 'Anzahl der mit dem Knoten verbundenen Kanten',
    wrong: [
      'Position des Knotens',
      'Wert des Knotens',
      'Wichtigkeit des Knotens',
    ],
  },
  ds90: {
    text: 'Was ist ein isolierter Knoten?',
    correct: 'Knoten ohne Kanten',
    wrong: ['Einzelner Knoten', 'Entfernter Knoten', 'Spezieller Knoten'],
  },
  ds91: {
    text: 'Was ist eine Clique in einem Graphen?',
    correct: 'Teilmenge von Knoten, die alle verbunden sind',
    wrong: ['Graphengruppe', 'Zyklustyp', 'Spezieller Pfad'],
  },
  ds92: {
    text: 'Was ist ein planarer Graph?',
    correct: 'Graph, der ohne Kantenkreuzung zeichenbar ist',
    wrong: ['2D-Graph', 'Flacher Graph', 'Einfacher Graph'],
  },
  ds93: {
    text: 'Was ist ein Multigraph?',
    correct: 'Graph mit mehreren Kanten zwischen zwei Knoten',
    wrong: ['Mehrere Graphen', 'Großer Graph', 'Komplexer Graph'],
  },
  ds94: {
    text: 'Was ist ein Hypergraph?',
    correct: 'Graph, bei dem eine Kante mehr als zwei Knoten verbinden kann',
    wrong: ['Supergraph', '3D-Graph', 'Komplexer Graph'],
  },
  ds95: {
    text: 'Was ist eine monotone Warteschlange?',
    correct: 'Warteschlange mit geordneten Elementen',
    wrong: [
      'Einfache Warteschlange',
      'Konstante Warteschlange',
      'Einzigartige Warteschlange',
    ],
  },
  ds96: {
    text: 'Was ist ein monotoner Stapel?',
    correct: 'Stapel mit geordneten Elementen',
    wrong: ['Einfacher Stapel', 'Konstanter Stapel', 'Einzigartiger Stapel'],
  },
  ds97: {
    text: 'Was ist ein Merkle-Baum?',
    correct: 'Baum aus Hashes zur Verifizierung',
    wrong: ['Datenbaum', 'Binärbaum', 'Suchbaum'],
  },
  ds98: {
    text: 'Was ist ein Rope?',
    correct: 'Struktur für lange Strings',
    wrong: ['Listentyp', 'Array-Typ', 'Graphtyp'],
  },
  ds99: {
    text: 'Was ist ein Treap?',
    correct: 'Kombination aus Baum und Heap',
    wrong: ['Sortiertyp', 'Graphtyp', 'Listentyp'],
  },
  ds100: {
    text: 'Was ist ein Splay-Baum?',
    correct: 'Baum, der zugegriffene Elemente zur Wurzel bewegt',
    wrong: ['Ausgebreiteter Baum', 'Breiter Baum', 'Flacher Baum'],
  },
};

export default dataStructures;
