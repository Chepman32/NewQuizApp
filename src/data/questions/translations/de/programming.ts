// German translations for Programming questions
// Deutsche Übersetzungen für Programmierungsfragen

import type { CategoryTranslations } from '../index';

export const programming: CategoryTranslations = {
  // ===== STUFE 1: Sehr Einfach =====
  prg1: {
    text: 'Was ist eine Variable?',
    correct: 'Behälter zum Speichern von Daten',
    wrong: ['Art von Funktion', 'Art von Schleife', 'Art von Klasse'],
  },
  prg2: {
    text: 'Was ist eine Funktion?',
    correct: 'Wiederverwendbarer Codeblock',
    wrong: ['Variable', 'Schleife', 'Klasse'],
  },
  prg3: {
    text: 'Was ist eine Schleife?',
    correct: 'Code, der sich wiederholt',
    wrong: ['Code, der einmal ausgeführt wird', 'Variable', 'Funktion'],
  },
  prg4: {
    text: 'Was ist eine Bedingung?',
    correct: 'Code, der bei erfüllter Bedingung ausgeführt wird',
    wrong: ['Code, der immer ausgeführt wird', 'Schleife', 'Variable'],
  },
  prg5: {
    text: 'Was ist ein String?',
    correct: 'Zeichenkette',
    wrong: ['Zahl', 'Boolean', 'Array'],
  },
  prg6: {
    text: 'Was ist ein Integer?',
    correct: 'Ganzzahl',
    wrong: ['Dezimalzahl', 'Text', 'Boolean'],
  },
  prg7: {
    text: 'Was ist ein Boolean?',
    correct: 'Wahr oder Falsch Wert',
    wrong: ['Zahl', 'Text', 'Array'],
  },
  prg8: {
    text: 'Was ist ein Array?',
    correct: 'Geordnete Sammlung von Elementen',
    wrong: ['Einzelnes Element', 'Funktion', 'Klasse'],
  },
  prg9: {
    text: 'Was macht der Operator +?',
    correct: 'Addiert oder verkettet',
    wrong: ['Subtrahiert', 'Multipliziert', 'Dividiert'],
  },
  prg10: {
    text: 'Was macht der Operator ==?',
    correct: 'Vergleicht auf Gleichheit',
    wrong: ['Weist Wert zu', 'Addiert', 'Subtrahiert'],
  },
  prg11: {
    text: 'Was macht der Operator =?',
    correct: 'Weist Wert zu',
    wrong: ['Vergleicht auf Gleichheit', 'Addiert', 'Subtrahiert'],
  },
  prg12: {
    text: 'Was ist ein Kommentar im Code?',
    correct: 'Text, der vom Compiler ignoriert wird',
    wrong: ['Ausführbarer Code', 'Variable', 'Funktion'],
  },
  prg13: {
    text: 'Was ist ein Bug?',
    correct: 'Fehler im Code',
    wrong: ['Feature', 'Variable', 'Funktion'],
  },
  prg14: {
    text: 'Was ist Debugging?',
    correct: 'Prozess des Findens und Behebens von Fehlern',
    wrong: ['Code schreiben', 'Code ausführen', 'Code kompilieren'],
  },
  prg15: {
    text: 'Was ist ein Compiler?',
    correct: 'Programm, das Code in Maschinensprache übersetzt',
    wrong: ['Texteditor', 'Browser', 'Betriebssystem'],
  },
  prg16: {
    text: 'Was ist ein Interpreter?',
    correct: 'Programm, das Code Zeile für Zeile ausführt',
    wrong: ['Compiler', 'Editor', 'Browser'],
  },
  prg17: {
    text: 'Was ist Python?',
    correct: 'Programmiersprache',
    wrong: ['Betriebssystem', 'Browser', 'Datenbank'],
  },
  prg18: {
    text: 'Was ist JavaScript?',
    correct: 'Programmiersprache für Web',
    wrong: ['Das gleiche wie Java', 'Betriebssystem', 'Datenbank'],
  },
  prg19: {
    text: 'Was ist HTML?',
    correct: 'Auszeichnungssprache für Webseiten',
    wrong: ['Programmiersprache', 'Datenbank', 'Betriebssystem'],
  },
  prg20: {
    text: 'Was ist CSS?',
    correct: 'Sprache für Webseiten-Stile',
    wrong: ['Programmiersprache', 'Datenbank', 'Betriebssystem'],
  },
  prg21: {
    text: 'Was ist eine IDE?',
    correct: 'Integrierte Entwicklungsumgebung',
    wrong: ['Programmiersprache', 'Betriebssystem', 'Browser'],
  },
  prg22: {
    text: 'Was ist Git?',
    correct: 'Versionskontrollsystem',
    wrong: ['Programmiersprache', 'Texteditor', 'Browser'],
  },
  prg23: {
    text: 'Was ist GitHub?',
    correct: 'Plattform zum Hosten von Git-Repositories',
    wrong: ['Programmiersprache', 'Betriebssystem', 'Texteditor'],
  },
  prg24: {
    text: 'Was ist ein Repository?',
    correct: 'Ort, an dem Code gespeichert wird',
    wrong: ['Art von Variable', 'Art von Funktion', 'Art von Schleife'],
  },
  prg25: {
    text: 'Was ist ein Commit?',
    correct: 'Änderungen im Repository speichern',
    wrong: ['Änderungen löschen', 'Datei erstellen', 'Code ausführen'],
  },
  prg26: {
    text: 'Was ist eine Klasse?',
    correct: 'Vorlage zum Erstellen von Objekten',
    wrong: ['Instanz eines Objekts', 'Variable', 'Funktion'],
  },
  prg27: {
    text: 'Was ist ein Objekt?',
    correct: 'Instanz einer Klasse',
    wrong: ['Vorlage', 'Einfache Variable', 'Funktion'],
  },
  prg28: {
    text: 'Was ist Vererbung?',
    correct: 'Klasse erbt von einer anderen',
    wrong: ['Unabhängige Klasse', 'Variable', 'Funktion'],
  },
  prg29: {
    text: 'Was ist eine Methode?',
    correct: 'Funktion innerhalb einer Klasse',
    wrong: ['Klassenvariable', 'Klasse', 'Objekt'],
  },
  prg30: {
    text: 'Was ist ein Attribut?',
    correct: 'Variable innerhalb einer Klasse',
    wrong: ['Klassenfunktion', 'Klasse', 'Objekt'],
  },
  prg31: {
    text: 'Was ist null?',
    correct: 'Abwesenheit eines Wertes',
    wrong: ['Wert Null', 'Leerer Wert', 'Falscher Wert'],
  },
  prg32: {
    text: 'Was ist undefined?',
    correct: 'Variable ohne zugewiesenen Wert',
    wrong: ['Wert Null', 'Null-Wert', 'Falscher Wert'],
  },
  prg33: {
    text: 'Was ist ein Parameter?',
    correct: 'Wert, den eine Funktion empfängt',
    wrong: ['Rückgabewert', 'Globale Variable', 'Konstante'],
  },
  prg34: {
    text: 'Was ist ein Argument?',
    correct: 'Wert, der an eine Funktion übergeben wird',
    wrong: ['Rückgabewert', 'Lokale Variable', 'Konstante'],
  },
  prg35: {
    text: 'Was macht return?',
    correct: 'Gibt einen Wert aus einer Funktion zurück',
    wrong: [
      'Startet eine Funktion',
      'Beendet das Programm',
      'Erstellt eine Variable',
    ],
  },
  prg36: {
    text: 'Was ist eine for-Schleife?',
    correct: 'Schleife mit Zähler',
    wrong: ['Endlosschleife', 'Bedingung', 'Funktion'],
  },
  prg37: {
    text: 'Was ist eine while-Schleife?',
    correct: 'Schleife, die läuft solange Bedingung wahr ist',
    wrong: ['Schleife mit festem Zähler', 'Bedingung', 'Funktion'],
  },
  prg38: {
    text: 'Was macht break?',
    correct: 'Verlässt die Schleife',
    wrong: [
      'Setzt die Schleife fort',
      'Pausiert die Schleife',
      'Startet die Schleife neu',
    ],
  },
  prg39: {
    text: 'Was macht continue?',
    correct: 'Springt zur nächsten Iteration',
    wrong: [
      'Verlässt die Schleife',
      'Pausiert die Schleife',
      'Startet die Schleife neu',
    ],
  },
  prg40: {
    text: 'Was ist if-else?',
    correct: 'Bedingte Struktur',
    wrong: ['Schleife', 'Funktion', 'Klasse'],
  },
  prg41: {
    text: 'Was ist switch?',
    correct: 'Struktur für mehrere Bedingungen',
    wrong: ['Schleife', 'Funktion', 'Klasse'],
  },
  prg42: {
    text: 'Was ist try-catch?',
    correct: 'Ausnahmebehandlung',
    wrong: ['Schleife', 'Bedingung', 'Funktion'],
  },
  prg43: {
    text: 'Was ist eine Ausnahme?',
    correct: 'Fehler während der Ausführung',
    wrong: ['Syntaxfehler', 'Warnung', 'Kommentar'],
  },
  prg44: {
    text: 'Was ist Rekursion?',
    correct: 'Funktion, die sich selbst aufruft',
    wrong: ['Funktion, die eine andere aufruft', 'Schleife', 'Bedingung'],
  },
  prg45: {
    text: 'Was ist ein Algorithmus?',
    correct: 'Schritte zur Lösung eines Problems',
    wrong: ['Programmiersprache', 'Datentyp', 'Variable'],
  },
  prg46: {
    text: 'Was ist Pseudocode?',
    correct: 'Informelle Beschreibung eines Algorithmus',
    wrong: ['Echter Code', 'Kommentar', 'Dokumentation'],
  },
  prg47: {
    text: 'Was ist eine API?',
    correct: 'Programmierschnittstelle',
    wrong: ['Programmiersprache', 'Datenbank', 'Betriebssystem'],
  },
  prg48: {
    text: 'Was ist JSON?',
    correct: 'Datenaustauschformat',
    wrong: ['Programmiersprache', 'Datenbank', 'Betriebssystem'],
  },
  prg49: {
    text: 'Was ist XML?',
    correct: 'Erweiterbare Auszeichnungssprache',
    wrong: ['Programmiersprache', 'Datenbank', 'Betriebssystem'],
  },
  prg50: {
    text: 'Was ist SQL?',
    correct: 'Sprache für Datenbanken',
    wrong: ['Allgemeine Programmiersprache', 'Betriebssystem', 'Browser'],
  },

  // ===== STUFE 2-4: Leicht bis Normal =====
  prg51: {
    text: 'Was ist OOP?',
    correct: 'Objektorientierte Programmierung',
    wrong: [
      'Funktionale Programmierung',
      'Prozedurale Programmierung',
      'Logische Programmierung',
    ],
  },
  prg52: {
    text: 'Was ist Kapselung?',
    correct: 'Interne Details einer Klasse verbergen',
    wrong: ['Alle Details zeigen', 'Vererbung', 'Polymorphismus'],
  },
  prg53: {
    text: 'Was ist Polymorphismus?',
    correct: 'Objekte verschiedener Klassen reagieren auf dieselbe Methode',
    wrong: ['Eine Form', 'Kapselung', 'Vererbung'],
  },
  prg54: {
    text: 'Was ist Abstraktion?',
    correct: 'Komplexität vereinfachen, nur Wesentliches zeigen',
    wrong: ['Alle Details zeigen', 'Vererbung', 'Kapselung'],
  },
  prg55: {
    text: 'Was ist ein Interface?',
    correct: 'Vertrag, der Methoden definiert',
    wrong: ['Vollständige Implementierung', 'Variable', 'Konstante'],
  },
  prg56: {
    text: 'Was ist eine abstrakte Klasse?',
    correct: 'Klasse, die nicht direkt instanziiert werden kann',
    wrong: ['Normale Klasse', 'Interface', 'Objekt'],
  },
  prg57: {
    text: 'Was ist ein Konstruktor?',
    correct: 'Methode, die ein Objekt initialisiert',
    wrong: ['Methode, die ein Objekt zerstört', 'Variable', 'Konstante'],
  },
  prg58: {
    text: 'Was ist ein Destruktor?',
    correct: 'Methode, die Ressourcen eines Objekts bereinigt',
    wrong: ['Methode, die ein Objekt erstellt', 'Variable', 'Konstante'],
  },
  prg59: {
    text: 'Was ist static?',
    correct: 'Gehört zur Klasse, nicht zu Instanzen',
    wrong: ['Gehört zu Instanzen', 'Lokale Variable', 'Konstante'],
  },
  prg60: {
    text: 'Was ist public?',
    correct: 'Von überall zugänglich',
    wrong: [
      'Nur in der Klasse zugänglich',
      'Nur im Paket zugänglich',
      'Nicht zugänglich',
    ],
  },
  prg61: {
    text: 'Was ist private?',
    correct: 'Nur innerhalb der Klasse zugänglich',
    wrong: [
      'Von überall zugänglich',
      'In Unterklassen zugänglich',
      'Im Paket zugänglich',
    ],
  },
  prg62: {
    text: 'Was ist protected?',
    correct: 'In der Klasse und Unterklassen zugänglich',
    wrong: ['Nur in der Klasse', 'Von überall', 'Nicht zugänglich'],
  },
  prg63: {
    text: 'Was ist ein Getter?',
    correct: 'Methode, die den Wert eines Attributs abruft',
    wrong: ['Methode, die Wert setzt', 'Konstruktor', 'Destruktor'],
  },
  prg64: {
    text: 'Was ist ein Setter?',
    correct: 'Methode, die den Wert eines Attributs setzt',
    wrong: ['Methode, die Wert abruft', 'Konstruktor', 'Destruktor'],
  },
  prg65: {
    text: 'Was ist Methodenüberladung?',
    correct: 'Gleicher Name, verschiedene Parameter',
    wrong: [
      'Gleicher Name, gleiche Parameter',
      'Verschiedene Namen',
      'Ohne Parameter',
    ],
  },
  prg66: {
    text: 'Was ist Methodenüberschreibung?',
    correct: 'Methode der Elternklasse neu definieren',
    wrong: ['Neue Methode erstellen', 'Methode löschen', 'Methode umbenennen'],
  },
  prg67: {
    text: 'Was ist ein Lambda-Ausdruck?',
    correct: 'Anonyme Funktion',
    wrong: ['Funktion mit Namen', 'Klasse', 'Variable'],
  },
  prg68: {
    text: 'Was ist ein Closure?',
    correct: 'Funktion, die ihre Umgebung merkt',
    wrong: ['Funktion ohne Umgebung', 'Klasse', 'Variable'],
  },
  prg69: {
    text: 'Was ist funktionale Programmierung?',
    correct: 'Paradigma basierend auf reinen Funktionen',
    wrong: [
      'Paradigma basierend auf Objekten',
      'Paradigma basierend auf Prozeduren',
      'Paradigma basierend auf Logik',
    ],
  },
  prg70: {
    text: 'Was ist eine reine Funktion?',
    correct: 'Funktion ohne Seiteneffekte',
    wrong: [
      'Funktion mit Seiteneffekten',
      'Leere Funktion',
      'Rekursive Funktion',
    ],
  },
  prg71: {
    text: 'Was ist Unveränderlichkeit?',
    correct: 'Daten, die nicht geändert werden können',
    wrong: [
      'Daten, die geändert werden können',
      'Temporäre Daten',
      'Permanente Daten',
    ],
  },
  prg72: {
    text: 'Was ist map in funktionaler Programmierung?',
    correct: 'Funktion auf jedes Element anwenden',
    wrong: [
      'Elemente filtern',
      'Auf einen Wert reduzieren',
      'Elemente sortieren',
    ],
  },
  prg73: {
    text: 'Was ist filter?',
    correct: 'Elemente auswählen, die Bedingung erfüllen',
    wrong: [
      'Funktion auf jedes Element anwenden',
      'Auf einen Wert reduzieren',
      'Elemente sortieren',
    ],
  },
  prg74: {
    text: 'Was ist reduce?',
    correct: 'Elemente zu einem Wert kombinieren',
    wrong: [
      'Funktion auf jedes Element anwenden',
      'Elemente filtern',
      'Elemente sortieren',
    ],
  },
  prg75: {
    text: 'Was ist async/await?',
    correct: 'Syntax für asynchronen Code',
    wrong: ['Synchroner Code', 'Schleife', 'Bedingung'],
  },

  // ===== STUFE 5-8: Schwer bis Professor =====
  prg76: {
    text: 'Was ist ein Promise?',
    correct: 'Objekt, das zukünftigen Wert repräsentiert',
    wrong: ['Sofortiger Wert', 'Variable', 'Konstante'],
  },
  prg77: {
    text: 'Was ist ein Callback?',
    correct: 'Funktion, die als Argument übergeben wird',
    wrong: ['Funktion, die zurückgibt', 'Variable', 'Konstante'],
  },
  prg78: {
    text: 'Was ist die Event Loop?',
    correct: 'Mechanismus zur Handhabung asynchroner Operationen',
    wrong: ['Normale Schleife', 'Bedingung', 'Funktion'],
  },
  prg79: {
    text: 'Was ist ein Thread?',
    correct: 'Ausführungseinheit innerhalb eines Prozesses',
    wrong: ['Vollständiger Prozess', 'Variable', 'Funktion'],
  },
  prg80: {
    text: 'Was ist Nebenläufigkeit?',
    correct: 'Mehrere Aufgaben machen Fortschritt',
    wrong: ['Eine Aufgabe', 'Sequentielle Aufgaben', 'Keine Aufgaben'],
  },
  prg81: {
    text: 'Was ist Parallelität?',
    correct: 'Mehrere Aufgaben gleichzeitig ausführen',
    wrong: ['Sequentielle Aufgaben', 'Eine Aufgabe', 'Nebenläufigkeit'],
  },
  prg82: {
    text: 'Was ist ein Deadlock?',
    correct: 'Gegenseitige Blockierung zwischen Prozessen',
    wrong: ['Normale Ausführung', 'Syntaxfehler', 'Warnung'],
  },
  prg83: {
    text: 'Was ist eine Race Condition?',
    correct: 'Ergebnis hängt von Ausführungsreihenfolge ab',
    wrong: ['Vorhersagbares Ergebnis', 'Syntaxfehler', 'Warnung'],
  },
  prg84: {
    text: 'Was ist ein Mutex?',
    correct: 'Mechanismus für gegenseitigen Ausschluss',
    wrong: ['Art von Variable', 'Art von Funktion', 'Art von Klasse'],
  },
  prg85: {
    text: 'Was ist ein Semaphor?',
    correct: 'Synchronisationsmechanismus',
    wrong: ['Art von Variable', 'Art von Funktion', 'Art von Klasse'],
  },
  prg86: {
    text: 'Was ist Garbage Collection?',
    correct: 'Automatische Speicherfreigabe',
    wrong: ['Speicherzuweisung', 'Art von Variable', 'Art von Funktion'],
  },
  prg87: {
    text: 'Was ist ein Memory Leak?',
    correct: 'Nicht freigegebener Speicher',
    wrong: [
      'Freigegebener Speicher',
      'Zugewiesener Speicher',
      'Verfügbarer Speicher',
    ],
  },
  prg88: {
    text: 'Was ist ein Stack Overflow?',
    correct: 'Überlauf des Stapelspeichers',
    wrong: ['Überlauf des Heaps', 'Syntaxfehler', 'Warnung'],
  },
  prg89: {
    text: 'Was ist der Heap?',
    correct: 'Speicherbereich für dynamische Zuweisung',
    wrong: [
      'Speicherbereich für lokale Variablen',
      'Art von Variable',
      'Art von Funktion',
    ],
  },
  prg90: {
    text: 'Was ist der Stack?',
    correct: 'Speicherbereich für Funktionsaufrufe',
    wrong: [
      'Dynamischer Speicherbereich',
      'Art von Variable',
      'Art von Funktion',
    ],
  },
  prg91: {
    text: 'Was ist ein Zeiger?',
    correct: 'Variable, die Speicheradresse speichert',
    wrong: ['Variable, die Wert speichert', 'Funktion', 'Klasse'],
  },
  prg92: {
    text: 'Was ist eine Referenz?',
    correct: 'Alias für eine andere Variable',
    wrong: ['Kopie einer Variable', 'Neue Variable', 'Konstante'],
  },
  prg93: {
    text: 'Was ist Wertübergabe?',
    correct: 'Kopie des Wertes übergeben',
    wrong: ['Adresse übergeben', 'Referenz übergeben', 'Nichts übergeben'],
  },
  prg94: {
    text: 'Was ist Referenzübergabe?',
    correct: 'Adresse der Variable übergeben',
    wrong: ['Kopie übergeben', 'Wert übergeben', 'Nichts übergeben'],
  },
  prg95: {
    text: 'Was ist ein Entwurfsmuster?',
    correct: 'Wiederverwendbare Lösung für häufige Probleme',
    wrong: ['Spezifischer Code', 'Bibliothek', 'Framework'],
  },
  prg96: {
    text: 'Was ist das Singleton-Muster?',
    correct: 'Klasse mit nur einer Instanz',
    wrong: ['Klasse mit mehreren Instanzen', 'Interface', 'Abstrakte Klasse'],
  },
  prg97: {
    text: 'Was ist das Factory-Muster?',
    correct: 'Objekte erstellen ohne genaue Klasse anzugeben',
    wrong: [
      'Eine Instanz erstellen',
      'Objekte zerstören',
      'Objekte modifizieren',
    ],
  },
  prg98: {
    text: 'Was ist das Observer-Muster?',
    correct: 'Änderungen an abonnierte Objekte melden',
    wrong: ['Objekte erstellen', 'Objekte zerstören', 'Objekte modifizieren'],
  },
  prg99: {
    text: 'Was ist SOLID?',
    correct: 'Prinzipien des objektorientierten Designs',
    wrong: ['Programmiersprache', 'Framework', 'Bibliothek'],
  },
  prg100: {
    text: 'Was ist das Single-Responsibility-Prinzip?',
    correct: 'Klasse sollte nur einen Grund zur Änderung haben',
    wrong: [
      'Klasse kann viele Verantwortungen haben',
      'Klasse sollte sich nicht ändern',
      'Klasse sollte groß sein',
    ],
  },
};

export default programming;
