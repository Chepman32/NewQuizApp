// German translations for Algorithms questions
// Deutsche Übersetzungen für Algorithmus-Fragen

import type { CategoryTranslations } from '../index';

export const algorithms: CategoryTranslations = {
  alg1: {
    text: 'Was ist ein Algorithmus?',
    correct: 'Schritt-für-Schritt-Anleitung zur Problemlösung',
    wrong: ['Programmiersprache', 'Datenstruktur', 'Computerkomponente'],
  },
  alg2: {
    text: 'Was ist die Zeitkomplexität?',
    correct: 'Maß für die Laufzeit eines Algorithmus',
    wrong: ['Speicherverbrauch', 'Codezeilen', 'Anzahl der Variablen'],
  },
  alg3: {
    text: 'Was bedeutet O(1)?',
    correct: 'Konstante Zeit',
    wrong: ['Lineare Zeit', 'Quadratische Zeit', 'Logarithmische Zeit'],
  },
  alg4: {
    text: 'Was bedeutet O(n)?',
    correct: 'Lineare Zeit',
    wrong: ['Konstante Zeit', 'Quadratische Zeit', 'Logarithmische Zeit'],
  },
  alg5: {
    text: 'Was bedeutet O(n²)?',
    correct: 'Quadratische Zeit',
    wrong: ['Lineare Zeit', 'Konstante Zeit', 'Logarithmische Zeit'],
  },
  alg6: {
    text: 'Was bedeutet O(log n)?',
    correct: 'Logarithmische Zeit',
    wrong: ['Lineare Zeit', 'Konstante Zeit', 'Quadratische Zeit'],
  },
  alg7: {
    text: 'Was ist die binäre Suche?',
    correct: 'Suchalgorithmus, der das Array halbiert',
    wrong: ['Lineare Suche', 'Tiefensuche', 'Breitensuche'],
  },
  alg8: {
    text: 'Was ist die Zeitkomplexität der binären Suche?',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg9: {
    text: 'Was ist Bubble Sort?',
    correct: 'Sortieralgorithmus durch Vergleich benachbarter Elemente',
    wrong: ['Suchalgorithmus', 'Graphalgorithmus', 'Hashalgorithmus'],
  },
  alg10: {
    text: 'Was ist die Zeitkomplexität von Bubble Sort?',
    correct: 'O(n²)',
    wrong: ['O(n)', 'O(log n)', 'O(n log n)'],
  },
  alg11: {
    text: 'Was ist Quick Sort?',
    correct: 'Teile-und-Herrsche-Sortieralgorithmus',
    wrong: ['Lineare Sortierung', 'Einfache Sortierung', 'Stapelsortierung'],
  },
  alg12: {
    text: 'Was ist die durchschnittliche Zeitkomplexität von Quick Sort?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg13: {
    text: 'Was ist Merge Sort?',
    correct: 'Teile-und-Herrsche-Sortierung durch Zusammenführen',
    wrong: ['Einfügungssortierung', 'Auswahlsortierung', 'Blasensortierung'],
  },
  alg14: {
    text: 'Was ist die Zeitkomplexität von Merge Sort?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg15: {
    text: 'Was ist Rekursion?',
    correct: 'Funktion, die sich selbst aufruft',
    wrong: ['Schleife', 'Bedingung', 'Variable'],
  },
  alg16: {
    text: 'Was ist der Basisfall in der Rekursion?',
    correct: 'Bedingung zum Beenden der Rekursion',
    wrong: ['Erster Aufruf', 'Letzter Aufruf', 'Mittlerer Aufruf'],
  },
  alg17: {
    text: 'Was ist dynamische Programmierung?',
    correct: 'Optimierung durch Speichern von Teilergebnissen',
    wrong: ['Rekursion', 'Iteration', 'Sortierung'],
  },
  alg18: {
    text: 'Was ist Memoization?',
    correct: 'Zwischenspeichern von Funktionsergebnissen',
    wrong: ['Speicherverwaltung', 'Datenspeicherung', 'Caching'],
  },
  alg19: {
    text: 'Was ist der Greedy-Algorithmus?',
    correct: 'Algorithmus, der lokal optimale Entscheidungen trifft',
    wrong: ['Globale Optimierung', 'Vollständige Suche', 'Zufällige Auswahl'],
  },
  alg20: {
    text: 'Was ist Teile und Herrsche?',
    correct: 'Problem in kleinere Teilprobleme aufteilen',
    wrong: ['Alles auf einmal lösen', 'Zufällig lösen', 'Iterativ lösen'],
  },
  alg21: {
    text: 'Was ist die Tiefensuche (DFS)?',
    correct: 'Graphdurchlauf so tief wie möglich',
    wrong: [
      'Ebene für Ebene durchlaufen',
      'Zufälliger Durchlauf',
      'Sortierter Durchlauf',
    ],
  },
  alg22: {
    text: 'Was ist die Breitensuche (BFS)?',
    correct: 'Graphdurchlauf Ebene für Ebene',
    wrong: [
      'So tief wie möglich',
      'Zufälliger Durchlauf',
      'Sortierter Durchlauf',
    ],
  },
  alg23: {
    text: 'Welche Datenstruktur verwendet BFS?',
    correct: 'Warteschlange',
    wrong: ['Stapel', 'Heap', 'Baum'],
  },
  alg24: {
    text: 'Welche Datenstruktur verwendet DFS?',
    correct: 'Stapel',
    wrong: ['Warteschlange', 'Heap', 'Baum'],
  },
  alg25: {
    text: 'Was ist der Dijkstra-Algorithmus?',
    correct: 'Kürzester-Pfad-Algorithmus',
    wrong: ['Sortieralgorithmus', 'Suchalgorithmus', 'Hashalgorithmus'],
  },
  alg26: {
    text: 'Was ist der A*-Algorithmus?',
    correct: 'Heuristischer Pfadfindungsalgorithmus',
    wrong: ['Sortieralgorithmus', 'Suchalgorithmus', 'Hashalgorithmus'],
  },
  alg27: {
    text: 'Was ist eine Heuristik?',
    correct: 'Schätzung zur Problemlösung',
    wrong: ['Exakte Lösung', 'Zufällige Lösung', 'Keine Lösung'],
  },
  alg28: {
    text: 'Was ist der Bellman-Ford-Algorithmus?',
    correct: 'Kürzester Pfad mit negativen Kanten',
    wrong: ['Nur positive Kanten', 'Sortierung', 'Suche'],
  },
  alg29: {
    text: 'Was ist der Floyd-Warshall-Algorithmus?',
    correct: 'Alle kürzesten Pfade zwischen allen Paaren',
    wrong: ['Ein kürzester Pfad', 'Sortierung', 'Suche'],
  },
  alg30: {
    text: 'Was ist ein minimaler Spannbaum?',
    correct: 'Baum mit minimaler Kantengewichtssumme',
    wrong: ['Maximaler Baum', 'Vollständiger Graph', 'Zyklischer Graph'],
  },
  alg31: {
    text: 'Was ist der Kruskal-Algorithmus?',
    correct: 'Minimaler Spannbaum durch Kantensortierung',
    wrong: ['Kürzester Pfad', 'Sortierung', 'Suche'],
  },
  alg32: {
    text: 'Was ist der Prim-Algorithmus?',
    correct: 'Minimaler Spannbaum durch Knotenerweiterung',
    wrong: ['Kürzester Pfad', 'Sortierung', 'Suche'],
  },
  alg33: {
    text: 'Was ist topologische Sortierung?',
    correct: 'Lineare Ordnung von DAG-Knoten',
    wrong: ['Normale Sortierung', 'Graphsuche', 'Baumtraversierung'],
  },
  alg34: {
    text: 'Was ist ein DAG?',
    correct: 'Gerichteter azyklischer Graph',
    wrong: ['Zyklischer Graph', 'Ungerichteter Graph', 'Vollständiger Graph'],
  },
  alg35: {
    text: 'Was ist Backtracking?',
    correct: 'Systematisches Ausprobieren mit Rücknahme',
    wrong: ['Vorwärtssuche', 'Zufällige Suche', 'Lineare Suche'],
  },
  alg36: {
    text: 'Was ist das N-Damen-Problem?',
    correct: 'N Damen auf Schachbrett ohne Bedrohung',
    wrong: ['Schachspiel', 'Sortierung', 'Suche'],
  },
  alg37: {
    text: 'Was ist das Rucksackproblem?',
    correct: 'Maximaler Wert bei begrenzter Kapazität',
    wrong: ['Sortierung', 'Suche', 'Graphproblem'],
  },
  alg38: {
    text: 'Was ist das Problem des Handlungsreisenden?',
    correct: 'Kürzeste Route durch alle Städte',
    wrong: ['Kürzester Pfad', 'Sortierung', 'Suche'],
  },
  alg39: {
    text: 'Was ist NP-schwer?',
    correct: 'Mindestens so schwer wie NP-Probleme',
    wrong: ['Einfaches Problem', 'Polynomiales Problem', 'Lineares Problem'],
  },
  alg40: {
    text: 'Was ist NP-vollständig?',
    correct: 'NP und NP-schwer',
    wrong: ['Nur NP', 'Nur NP-schwer', 'Polynomiales Problem'],
  },
  alg41: {
    text: 'Was ist Heap Sort?',
    correct: 'Sortierung mit Heap-Datenstruktur',
    wrong: ['Stapelsortierung', 'Warteschlangensortierung', 'Baumsortierung'],
  },
  alg42: {
    text: 'Was ist die Zeitkomplexität von Heap Sort?',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg43: {
    text: 'Was ist Counting Sort?',
    correct: 'Sortierung durch Zählen',
    wrong: [
      'Vergleichssortierung',
      'Austauschsortierung',
      'Einfügungssortierung',
    ],
  },
  alg44: {
    text: 'Was ist die Zeitkomplexität von Counting Sort?',
    correct: 'O(n + k)',
    wrong: ['O(n²)', 'O(n log n)', 'O(log n)'],
  },
  alg45: {
    text: 'Was ist Radix Sort?',
    correct: 'Sortierung nach Ziffern',
    wrong: [
      'Vergleichssortierung',
      'Austauschsortierung',
      'Einfügungssortierung',
    ],
  },
  alg46: {
    text: 'Was ist Bucket Sort?',
    correct: 'Sortierung durch Verteilung in Eimer',
    wrong: [
      'Vergleichssortierung',
      'Austauschsortierung',
      'Einfügungssortierung',
    ],
  },
  alg47: {
    text: 'Was ist Selection Sort?',
    correct: 'Sortierung durch Auswahl des Minimums',
    wrong: ['Einfügungssortierung', 'Blasensortierung', 'Schnellsortierung'],
  },
  alg48: {
    text: 'Was ist Insertion Sort?',
    correct: 'Sortierung durch Einfügen an richtiger Stelle',
    wrong: ['Auswahlsortierung', 'Blasensortierung', 'Schnellsortierung'],
  },
  alg49: {
    text: 'Was ist die beste Zeitkomplexität von Insertion Sort?',
    correct: 'O(n)',
    wrong: ['O(n²)', 'O(n log n)', 'O(log n)'],
  },
  alg50: {
    text: 'Was ist ein stabiler Sortieralgorithmus?',
    correct: 'Erhält relative Reihenfolge gleicher Elemente',
    wrong: [
      'Schneller Algorithmus',
      'Speichereffizienter Algorithmus',
      'Einfacher Algorithmus',
    ],
  },

  alg51: {
    text: 'Ist Merge Sort stabil?',
    correct: 'Ja',
    wrong: ['Nein', 'Manchmal', 'Hängt von der Implementierung ab'],
  },
  alg52: {
    text: 'Ist Quick Sort stabil?',
    correct: 'Nein',
    wrong: ['Ja', 'Manchmal', 'Hängt von der Implementierung ab'],
  },
  alg53: {
    text: 'Was ist die Raumkomplexität?',
    correct: 'Speicherverbrauch eines Algorithmus',
    wrong: ['Zeitverbrauch', 'Codezeilen', 'Variablenanzahl'],
  },
  alg54: {
    text: 'Was ist die Raumkomplexität von Merge Sort?',
    correct: 'O(n)',
    wrong: ['O(1)', 'O(log n)', 'O(n²)'],
  },
  alg55: {
    text: 'Was ist In-Place-Sortierung?',
    correct: 'Sortierung mit konstantem Zusatzspeicher',
    wrong: [
      'Sortierung mit viel Speicher',
      'Externe Sortierung',
      'Parallele Sortierung',
    ],
  },
  alg56: {
    text: 'Ist Quick Sort In-Place?',
    correct: 'Ja',
    wrong: ['Nein', 'Manchmal', 'Hängt von der Implementierung ab'],
  },
  alg57: {
    text: 'Was ist der Worst Case von Quick Sort?',
    correct: 'O(n²)',
    wrong: ['O(n log n)', 'O(n)', 'O(log n)'],
  },
  alg58: {
    text: 'Was ist das Zwei-Zeiger-Verfahren?',
    correct: 'Technik mit zwei Zeigern im Array',
    wrong: ['Zwei Arrays', 'Zwei Schleifen', 'Zwei Funktionen'],
  },
  alg59: {
    text: 'Was ist das Sliding-Window-Verfahren?',
    correct: 'Technik mit beweglichem Fenster',
    wrong: ['Feste Fenstergröße', 'Zwei Fenster', 'Kein Fenster'],
  },
  alg60: {
    text: 'Was ist der KMP-Algorithmus?',
    correct: 'Effizienter String-Matching-Algorithmus',
    wrong: ['Sortieralgorithmus', 'Graphalgorithmus', 'Suchalgorithmus'],
  },
  alg61: {
    text: 'Was ist der Rabin-Karp-Algorithmus?',
    correct: 'String-Matching mit Hashing',
    wrong: ['Sortierung', 'Graphsuche', 'Baumtraversierung'],
  },
  alg62: {
    text: 'Was ist der Boyer-Moore-Algorithmus?',
    correct: 'Effizienter String-Matching-Algorithmus',
    wrong: ['Sortieralgorithmus', 'Graphalgorithmus', 'Hashalgorithmus'],
  },
  alg63: {
    text: 'Was ist die längste gemeinsame Teilfolge?',
    correct: 'Längste Folge in beiden Strings',
    wrong: ['Längster Teilstring', 'Kürzeste Folge', 'Erste Folge'],
  },
  alg64: {
    text: 'Was ist die längste aufsteigende Teilfolge?',
    correct: 'Längste streng aufsteigende Folge',
    wrong: ['Längste absteigende Folge', 'Kürzeste Folge', 'Erste Folge'],
  },
  alg65: {
    text: 'Was ist die Edit-Distanz?',
    correct: 'Minimale Operationen zur Umwandlung',
    wrong: [
      'Maximale Operationen',
      'Durchschnittliche Operationen',
      'Keine Operationen',
    ],
  },
  alg66: {
    text: 'Was ist der Levenshtein-Algorithmus?',
    correct: 'Berechnung der Edit-Distanz',
    wrong: ['Sortierung', 'Suche', 'Graphtraversierung'],
  },
  alg67: {
    text: 'Was ist Bit-Manipulation?',
    correct: 'Operationen auf Bit-Ebene',
    wrong: ['Byte-Operationen', 'String-Operationen', 'Array-Operationen'],
  },
  alg68: {
    text: 'Was macht XOR mit gleichen Zahlen?',
    correct: 'Ergibt 0',
    wrong: ['Ergibt 1', 'Ergibt die Zahl', 'Ergibt Fehler'],
  },
  alg69: {
    text: 'Was ist ein Bloom-Filter?',
    correct: 'Probabilistische Datenstruktur für Mitgliedschaft',
    wrong: ['Sortieralgorithmus', 'Suchalgorithmus', 'Graphalgorithmus'],
  },
  alg70: {
    text: 'Was ist Reservoir Sampling?',
    correct: 'Zufällige Auswahl aus Datenstrom',
    wrong: ['Sortierung', 'Suche', 'Filterung'],
  },
  alg71: {
    text: 'Was ist der Fisher-Yates-Shuffle?',
    correct: 'Algorithmus zum zufälligen Mischen',
    wrong: ['Sortieralgorithmus', 'Suchalgorithmus', 'Graphalgorithmus'],
  },
  alg72: {
    text: 'Was ist der Euklid-Algorithmus?',
    correct: 'Berechnung des größten gemeinsamen Teilers',
    wrong: ['Primzahlberechnung', 'Sortierung', 'Suche'],
  },
  alg73: {
    text: 'Was ist das Sieb des Eratosthenes?',
    correct: 'Algorithmus zum Finden von Primzahlen',
    wrong: ['Sortieralgorithmus', 'Suchalgorithmus', 'Graphalgorithmus'],
  },
  alg74: {
    text: 'Was ist modulare Arithmetik?',
    correct: 'Rechnen mit Resten',
    wrong: ['Normale Arithmetik', 'Gleitkommaarithmetik', 'Vektorarithmetik'],
  },
  alg75: {
    text: 'Was ist schnelle Exponentiation?',
    correct: 'Effiziente Potenzberechnung',
    wrong: ['Langsame Berechnung', 'Normale Berechnung', 'Keine Berechnung'],
  },
  alg76: {
    text: 'Was ist der Union-Find-Algorithmus?',
    correct: 'Verwaltung disjunkter Mengen',
    wrong: ['Sortierung', 'Suche', 'Graphtraversierung'],
  },
  alg77: {
    text: 'Was ist Pfadkompression?',
    correct: 'Optimierung von Union-Find',
    wrong: ['Datenkompression', 'Bildkompression', 'Textkompression'],
  },
  alg78: {
    text: 'Was ist Union by Rank?',
    correct: 'Optimierung von Union-Find',
    wrong: ['Sortierung', 'Suche', 'Filterung'],
  },
  alg79: {
    text: 'Was ist ein Segment Tree?',
    correct: 'Baum für Bereichsabfragen',
    wrong: ['Binärer Suchbaum', 'AVL-Baum', 'Rot-Schwarz-Baum'],
  },
  alg80: {
    text: 'Was ist ein Fenwick Tree?',
    correct: 'Baum für Präfixsummen',
    wrong: ['Binärer Suchbaum', 'AVL-Baum', 'Rot-Schwarz-Baum'],
  },
  alg81: {
    text: 'Was ist Lazy Propagation?',
    correct: 'Verzögerte Aktualisierung im Segment Tree',
    wrong: [
      'Sofortige Aktualisierung',
      'Keine Aktualisierung',
      'Zufällige Aktualisierung',
    ],
  },
  alg82: {
    text: 'Was ist der Kadane-Algorithmus?',
    correct: 'Maximale Teilarray-Summe',
    wrong: ['Minimale Summe', 'Durchschnittliche Summe', 'Keine Summe'],
  },
  alg83: {
    text: 'Was ist die Zeitkomplexität des Kadane-Algorithmus?',
    correct: 'O(n)',
    wrong: ['O(n²)', 'O(n log n)', 'O(log n)'],
  },
  alg84: {
    text: 'Was ist das Majoritätselement-Problem?',
    correct: 'Element mit mehr als n/2 Vorkommen',
    wrong: ['Häufigstes Element', 'Seltenstes Element', 'Mittleres Element'],
  },
  alg85: {
    text: 'Was ist der Boyer-Moore-Voting-Algorithmus?',
    correct: 'Finden des Majoritätselements',
    wrong: ['Sortierung', 'Suche', 'Filterung'],
  },
  alg86: {
    text: 'Was ist das Dutch National Flag Problem?',
    correct: 'Drei-Wege-Partitionierung',
    wrong: ['Zwei-Wege-Partitionierung', 'Keine Partitionierung', 'Sortierung'],
  },
  alg87: {
    text: 'Was ist der Tortoise-and-Hare-Algorithmus?',
    correct: 'Zykluserkennung mit zwei Zeigern',
    wrong: ['Sortierung', 'Suche', 'Filterung'],
  },
  alg88: {
    text: 'Was ist der Floyd-Algorithmus für Zyklen?',
    correct: 'Zykluserkennung in verketteten Listen',
    wrong: ['Kürzester Pfad', 'Sortierung', 'Suche'],
  },
  alg89: {
    text: 'Was ist Amortisierte Analyse?',
    correct: 'Durchschnittliche Kosten über Operationen',
    wrong: ['Worst-Case-Analyse', 'Best-Case-Analyse', 'Keine Analyse'],
  },
  alg90: {
    text: 'Was ist das Master-Theorem?',
    correct: 'Methode zur Lösung von Rekurrenzen',
    wrong: ['Sortieralgorithmus', 'Suchalgorithmus', 'Graphalgorithmus'],
  },
  alg91: {
    text: 'Was ist Branch and Bound?',
    correct: 'Optimierungstechnik mit Beschneidung',
    wrong: ['Sortierung', 'Suche', 'Filterung'],
  },
  alg92: {
    text: 'Was ist ein Approximationsalgorithmus?',
    correct: 'Algorithmus mit garantierter Näherung',
    wrong: [
      'Exakter Algorithmus',
      'Zufälliger Algorithmus',
      'Kein Algorithmus',
    ],
  },
  alg93: {
    text: 'Was ist ein randomisierter Algorithmus?',
    correct: 'Algorithmus mit Zufallsentscheidungen',
    wrong: [
      'Deterministischer Algorithmus',
      'Exakter Algorithmus',
      'Kein Algorithmus',
    ],
  },
  alg94: {
    text: 'Was ist Monte-Carlo-Algorithmus?',
    correct: 'Randomisiert mit möglichem Fehler',
    wrong: ['Immer korrekt', 'Immer falsch', 'Deterministisch'],
  },
  alg95: {
    text: 'Was ist Las-Vegas-Algorithmus?',
    correct: 'Randomisiert, immer korrekt',
    wrong: ['Möglicher Fehler', 'Immer falsch', 'Deterministisch'],
  },
  alg96: {
    text: 'Was ist Online-Algorithmus?',
    correct: 'Verarbeitet Eingabe sequentiell',
    wrong: [
      'Braucht alle Eingaben',
      'Offline-Verarbeitung',
      'Keine Verarbeitung',
    ],
  },
  alg97: {
    text: 'Was ist ein Streaming-Algorithmus?',
    correct: 'Verarbeitet Daten mit begrenztem Speicher',
    wrong: [
      'Unbegrenzter Speicher',
      'Keine Verarbeitung',
      'Offline-Verarbeitung',
    ],
  },
  alg98: {
    text: 'Was ist parallele Programmierung?',
    correct: 'Gleichzeitige Ausführung von Aufgaben',
    wrong: [
      'Sequentielle Ausführung',
      'Keine Ausführung',
      'Langsame Ausführung',
    ],
  },
  alg99: {
    text: 'Was ist MapReduce?',
    correct: 'Paradigma für verteilte Verarbeitung',
    wrong: ['Sortieralgorithmus', 'Suchalgorithmus', 'Graphalgorithmus'],
  },
  alg100: {
    text: 'Was ist Cache-Effizienz?',
    correct: 'Optimierung für Speicherzugriffsmuster',
    wrong: ['Zeiteffizienz', 'Raumeffizienz', 'Codeeffizienz'],
  },
};

export default algorithms;
