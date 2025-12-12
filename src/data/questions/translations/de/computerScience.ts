// German translations for Computer Science questions
import type { CategoryTranslations } from '../index';

export const computerScience: CategoryTranslations = {
  cs1: {
    text: 'Wofür steht CPU?',
    correct: 'Zentrale Verarbeitungseinheit',
    wrong: [
      'Code-Verarbeitungseinheit',
      'Zentrale Programmeinheit',
      'Berechnungsprozesseinheit',
    ],
  },
  cs2: {
    text: 'Wofür steht RAM?',
    correct: 'Arbeitsspeicher',
    wrong: [
      'Schneller Zugriffsspeicher',
      'Zufälliges Zugriffsmodul',
      'Lesespeicher',
    ],
  },
  cs3: {
    text: 'Was ist ein Algorithmus?',
    correct: 'Schritt-für-Schritt-Anleitung',
    wrong: ['Programmiersprache', 'Computertyp', 'Hardwarekomponente'],
  },
  cs4: {
    text: 'Was ist das Binärsystem?',
    correct: 'Zahlensystem zur Basis 2',
    wrong: [
      'Zahlensystem zur Basis 10',
      'Zahlensystem zur Basis 16',
      'Zahlensystem zur Basis 8',
    ],
  },
  cs5: {
    text: 'Was ist ein Bit?',
    correct: 'Kleinste Dateneinheit',
    wrong: ['8 Bytes', '1000 Bytes', 'Prozessortyp'],
  },
  cs6: {
    text: 'Wie viele Bits hat ein Byte?',
    correct: '8',
    wrong: ['4', '16', '32'],
  },
  cs7: {
    text: 'Was ist ein Betriebssystem?',
    correct: 'Software, die Hardware und Software verwaltet',
    wrong: ['Programmiersprache', 'Hardwarekomponente', 'Webbrowser'],
  },
  cs8: {
    text: 'Was ist ein Compiler?',
    correct: 'Programm, das Code in Maschinensprache übersetzt',
    wrong: [
      'Programm, das Code Zeile für Zeile ausführt',
      'Prozessortyp',
      'Debugging-Tool',
    ],
  },
  cs9: {
    text: 'Was ist ein Interpreter?',
    correct: 'Programm, das Code Zeile für Zeile ausführt',
    wrong: [
      'Programm, das allen Code zuerst übersetzt',
      'Speichertyp',
      'Debugging-Tool',
    ],
  },
  cs10: {
    text: 'Was ist eine Variable?',
    correct: 'Benannter Speicherplatz für Daten',
    wrong: ['Funktionstyp', 'Schleife', 'Bedingung'],
  },
  cs11: {
    text: 'Was ist eine Funktion?',
    correct: 'Wiederverwendbarer Codeblock',
    wrong: ['Variablentyp', 'Schleife', 'Bedingung'],
  },
  cs12: {
    text: 'Was ist eine Schleife?',
    correct: 'Code, der sich wiederholt',
    wrong: ['Code, der einmal ausgeführt wird', 'Variablentyp', 'Funktionstyp'],
  },
  cs13: {
    text: 'Was ist eine bedingte Anweisung?',
    correct: 'Code, der je nach Bedingung ausgeführt wird',
    wrong: ['Code, der sich wiederholt', 'Variablentyp', 'Funktionstyp'],
  },
  cs14: {
    text: 'Was ist Rekursion?',
    correct: 'Funktion, die sich selbst aufruft',
    wrong: ['Schleife', 'Variable', 'Bedingung'],
  },
  cs15: {
    text: 'Was ist ein Array?',
    correct: 'Sammlung von Elementen gleichen Typs',
    wrong: ['Einzelne Variable', 'Funktionstyp', 'Schleifentyp'],
  },
  cs16: {
    text: 'Was ist ein String?',
    correct: 'Zeichenfolge',
    wrong: ['Zahlenfolge', 'Array-Typ', 'Funktionstyp'],
  },
  cs17: {
    text: 'Was ist ein Boolean?',
    correct: 'Wahr/Falsch-Datentyp',
    wrong: ['Zahlentyp', 'Texttyp', 'Array-Typ'],
  },
  cs18: {
    text: 'Was ist eine Ganzzahl?',
    correct: 'Ganze Zahl',
    wrong: ['Dezimalzahl', 'Text', 'Wahr/Falsch'],
  },
  cs19: {
    text: 'Was ist eine Gleitkommazahl?',
    correct: 'Zahl mit Dezimalstellen',
    wrong: ['Ganze Zahl', 'Text', 'Wahr/Falsch'],
  },
  cs20: {
    text: 'Was ist objektorientierte Programmierung?',
    correct: 'Paradigma mit Objekten und Klassen',
    wrong: [
      'Programmierung nur mit Funktionen',
      'Programmierung nur mit Schleifen',
      'Programmierung ohne Variablen',
    ],
  },
  cs21: {
    text: 'Was ist eine Klasse?',
    correct: 'Vorlage zum Erstellen von Objekten',
    wrong: ['Instanz eines Objekts', 'Funktionstyp', 'Variablentyp'],
  },
  cs22: {
    text: 'Was ist ein Objekt?',
    correct: 'Instanz einer Klasse',
    wrong: [
      'Vorlage zum Erstellen von Klassen',
      'Funktionstyp',
      'Variablentyp',
    ],
  },
  cs23: {
    text: 'Was ist Vererbung?',
    correct: 'Klasse erbt Eigenschaften von einer anderen',
    wrong: [
      'Klasse erstellt Objekte',
      'Funktion ruft sich selbst auf',
      'Variable ändert sich',
    ],
  },
  cs24: {
    text: 'Was ist Kapselung?',
    correct: 'Verbergen interner Details eines Objekts',
    wrong: ['Alle Details zeigen', 'Eigenschaften erben', 'Objekte erstellen'],
  },
  cs25: {
    text: 'Was ist Polymorphismus?',
    correct: 'Objekte verschiedener Typen gleich behandeln',
    wrong: ['Objekte gleichen Typs', 'Vererbung', 'Kapselung'],
  },
  cs26: {
    text: 'Was ist eine Datenbank?',
    correct: 'Organisierte Datensammlung',
    wrong: ['Programmiersprache', 'Hardwaretyp', 'Betriebssystem'],
  },
  cs27: {
    text: 'Wofür steht SQL?',
    correct: 'Strukturierte Abfragesprache',
    wrong: [
      'Einfache Fragesprache',
      'Systemabfragelogik',
      'Standardqualitätssprache',
    ],
  },
  cs28: {
    text: 'Was ist ein Primärschlüssel?',
    correct: 'Eindeutiger Bezeichner für einen Datensatz',
    wrong: ['Erstes Feld einer Tabelle', 'Wichtigstes Feld', 'Passwort'],
  },
  cs29: {
    text: 'Was ist ein Fremdschlüssel?',
    correct:
      'Feld, das auf einen Primärschlüssel einer anderen Tabelle verweist',
    wrong: [
      'Schlüssel aus einem anderen Land',
      'Backup-Schlüssel',
      'Sekundärschlüssel',
    ],
  },
  cs30: {
    text: 'Was ist Normalisierung?',
    correct: 'Datenorganisation zur Reduzierung von Redundanz',
    wrong: ['Daten normal machen', 'Alle Daten löschen', 'Daten kopieren'],
  },
  cs31: {
    text: 'Was ist eine API?',
    correct: 'Anwendungsprogrammierschnittstelle',
    wrong: [
      'Anwendungsprogramm',
      'Programminstallation',
      'Programminformation',
    ],
  },
  cs32: {
    text: 'Wofür steht HTTP?',
    correct: 'Hypertext-Übertragungsprotokoll',
    wrong: [
      'Hypertext-Übertragungsprogramm',
      'Hypertext-Übertragungsprozess',
      'Hochtechnologie-Textprotokoll',
    ],
  },
  cs33: {
    text: 'Wofür steht HTML?',
    correct: 'Hypertext-Auszeichnungssprache',
    wrong: [
      'Hochtechnologie-Textsprache',
      'Hypertext-Übertragungssprache',
      'Hypertext-Linksprache',
    ],
  },
  cs34: {
    text: 'Wofür steht CSS?',
    correct: 'Cascading Style Sheets',
    wrong: ['Computer-Stilsystem', 'Kreativer Code-Stil', 'Code-Stilblätter'],
  },
  cs35: {
    text: 'Was ist JavaScript?',
    correct: 'Programmiersprache für das Web',
    wrong: ['Java-Version', 'Auszeichnungssprache', 'Stilsprache'],
  },
  cs36: {
    text: 'Was ist das DOM?',
    correct: 'Dokumentobjektmodell',
    wrong: [
      'Datenobjektmodul',
      'Dokumentobjektmethode',
      'Direktes Objektmodell',
    ],
  },
  cs37: {
    text: 'Was ist ein Server?',
    correct: 'Computer, der Dienste für andere bereitstellt',
    wrong: ['Personalcomputer', 'Softwaretyp', 'Hardwarekomponente'],
  },
  cs38: {
    text: 'Was ist ein Client?',
    correct: 'Computer, der Dienste anfordert',
    wrong: ['Computer, der Dienste bereitstellt', 'Servertyp', 'Netzwerktyp'],
  },
  cs39: {
    text: 'Was ist Cloud Computing?',
    correct: 'Computerdienste über das Internet',
    wrong: ['Rechnen in Wolken', 'Hardwaretyp', 'Betriebssystem'],
  },
  cs40: {
    text: 'Was ist Virtualisierung?',
    correct: 'Erstellung virtueller Versionen von Ressourcen',
    wrong: [
      'Erstellung physischer Ressourcen',
      'Programmiertyp',
      'Netzwerktyp',
    ],
  },
  cs41: {
    text: 'Was ist eine virtuelle Maschine?',
    correct: 'Software-Emulation eines Computers',
    wrong: ['Physischer Computer', 'Prozessortyp', 'Speichertyp'],
  },
  cs42: {
    text: 'Was ist Docker?',
    correct: 'Container-Plattform',
    wrong: ['Programmiersprache', 'Betriebssystem', 'Datenbanktyp'],
  },
  cs43: {
    text: 'Was ist Git?',
    correct: 'Versionskontrollsystem',
    wrong: ['Programmiersprache', 'Datenbank', 'Betriebssystem'],
  },
  cs44: {
    text: 'Was ist ein Commit in Git?',
    correct: 'Aufzeichnung von Änderungen',
    wrong: [
      'Löschen von Änderungen',
      'Erstellen eines Branches',
      'Zusammenführen von Branches',
    ],
  },
  cs45: {
    text: 'Was ist ein Branch in Git?',
    correct: 'Unabhängige Entwicklungslinie',
    wrong: ['Kopie des Repositorys', 'Commit-Typ', 'Merge-Typ'],
  },
  cs46: {
    text: 'Was ist Debugging?',
    correct: 'Prozess des Findens und Behebens von Fehlern',
    wrong: ['Code schreiben', 'Code testen', 'Code kompilieren'],
  },
  cs47: {
    text: 'Was ist ein Bug?',
    correct: 'Fehler in einem Programm',
    wrong: ['Feature', 'Variablentyp', 'Funktionstyp'],
  },
  cs48: {
    text: 'Was ist ein Unit-Test?',
    correct: 'Test einzelner Komponenten',
    wrong: ['Test des gesamten Systems', 'Schnittstellentest', 'Leistungstest'],
  },
  cs49: {
    text: 'Was ist Continuous Integration?',
    correct: 'Häufiges Zusammenführen von Code mit automatischen Tests',
    wrong: [
      'Manuelles Deployment',
      'Manuelles Testen',
      'Entwicklung ohne Tests',
    ],
  },
  cs50: {
    text: 'Was ist Continuous Deployment?',
    correct: 'Automatisches Deployment nach Tests',
    wrong: [
      'Manuelles Deployment',
      'Kontinuierliches Testen',
      'Continuous Integration',
    ],
  },
  cs51: {
    text: 'Was ist Agile?',
    correct: 'Iterative Entwicklungsmethodik',
    wrong: ['Programmiersprache', 'Testtyp', 'Deployment-Tool'],
  },
  cs52: {
    text: 'Was ist Scrum?',
    correct: 'Agiles Framework mit Sprints',
    wrong: ['Programmiersprache', 'Datenbanktyp', 'Test-Tool'],
  },
  cs53: {
    text: 'Was ist ein Sprint?',
    correct: 'Feste Arbeitsperiode in Scrum',
    wrong: ['Testtyp', 'Deployment-Typ', 'Code-Typ'],
  },
  cs54: {
    text: 'Was ist DevOps?',
    correct: 'Praktiken, die Entwicklung und Betrieb verbinden',
    wrong: ['Programmiersprache', 'Datenbanktyp', 'Betriebssystem'],
  },
  cs55: {
    text: 'Was ist Verschlüsselung?',
    correct: 'Umwandlung von Daten in Geheimcode',
    wrong: ['Datenkompression', 'Datenlöschung', 'Datenkopie'],
  },
  cs56: {
    text: 'Was ist Hashing?',
    correct: 'Umwandlung von Daten in festen Wert',
    wrong: ['Umkehrbare Verschlüsselung', 'Kompression', 'Kopie'],
  },
  cs57: {
    text: 'Was ist SSL/TLS?',
    correct: 'Sicherheitsprotokolle für das Internet',
    wrong: ['Programmiersprachen', 'Datenbanktypen', 'Betriebssysteme'],
  },
  cs58: {
    text: 'Was ist eine Firewall?',
    correct: 'Netzwerksicherheitssystem',
    wrong: ['Virustyp', 'Programmiersprache', 'Hardwaretyp'],
  },
  cs59: {
    text: 'Was ist Malware?',
    correct: 'Schädliche Software',
    wrong: ['Sicherheitssoftware', 'Hardwaretyp', 'Betriebssystem'],
  },
  cs60: {
    text: 'Was ist Phishing?',
    correct: 'Betrügerischer Versuch, Informationen zu erhalten',
    wrong: ['Virustyp', 'Programmiermethode', 'Netzwerktyp'],
  },
  cs61: {
    text: 'Was ist Zwei-Faktor-Authentifizierung?',
    correct: 'Verifizierung mit zwei verschiedenen Methoden',
    wrong: ['Zwei Passwörter', 'Zwei Benutzernamen', 'Zwei Computer'],
  },
  cs62: {
    text: 'Was ist eine IP-Adresse?',
    correct: 'Numerischer Bezeichner eines Geräts im Netzwerk',
    wrong: ['Physische Adresse', 'E-Mail-Adresse', 'Webadresse'],
  },
  cs63: {
    text: 'Was ist DNS?',
    correct: 'System, das Domainnamen in IP übersetzt',
    wrong: ['Netzwerktyp', 'Programmiersprache', 'Servertyp'],
  },
  cs64: {
    text: 'Was ist ein Router?',
    correct: 'Gerät, das Netzwerkverkehr leitet',
    wrong: ['Kabeltyp', 'Servertyp', 'Softwaretyp'],
  },
  cs65: {
    text: 'Was ist TCP/IP?',
    correct: 'Internet-Kommunikationsprotokolle',
    wrong: ['Programmiersprachen', 'Hardwaretypen', 'Betriebssysteme'],
  },
  cs66: {
    text: 'Was ist Wi-Fi?',
    correct: 'Drahtlose Netzwerktechnologie',
    wrong: ['Kabeltyp', 'Programmiersprache', 'Servertyp'],
  },
  cs67: {
    text: 'Was ist Bluetooth?',
    correct: 'Drahtlose Kurzstreckentechnologie',
    wrong: ['Wi-Fi-Typ', 'Programmiersprache', 'Kabeltyp'],
  },
  cs68: {
    text: 'Was ist IoT?',
    correct: 'Internet der Dinge',
    wrong: ['Netzwerktyp', 'Programmiersprache', 'Servertyp'],
  },
  cs69: {
    text: 'Was ist künstliche Intelligenz?',
    correct: 'Simulation menschlicher Intelligenz durch Maschinen',
    wrong: ['Robotertyp', 'Programmiersprache', 'Hardwaretyp'],
  },
  cs70: {
    text: 'Was ist maschinelles Lernen?',
    correct: 'Systeme, die aus Daten lernen',
    wrong: ['Manuelle Programmierung', 'Datenbanktyp', 'Netzwerktyp'],
  },
  cs71: {
    text: 'Was ist Deep Learning?',
    correct: 'Maschinelles Lernen mit neuronalen Netzen',
    wrong: ['Oberflächliches Lernen', 'Datenbanktyp', 'Netzwerktyp'],
  },
  cs72: {
    text: 'Was ist ein neuronales Netz?',
    correct: 'Vom menschlichen Gehirn inspiriertes Modell',
    wrong: ['Computernetzwerktyp', 'Datenbanktyp', 'Servertyp'],
  },
  cs73: {
    text: 'Was ist Big Data?',
    correct: 'Sehr große Datensätze',
    wrong: ['Datenbanktyp', 'Programmiersprache', 'Servertyp'],
  },
  cs74: {
    text: 'Was ist Blockchain?',
    correct: 'Verteiltes, unveränderliches Register',
    wrong: ['Datenbanktyp', 'Programmiersprache', 'Netzwerktyp'],
  },
  cs75: {
    text: 'Was ist eine Kryptowährung?',
    correct: 'Digitale Währung mit Kryptographie',
    wrong: ['Datenbanktyp', 'Programmiersprache', 'Netzwerktyp'],
  },
  cs76: {
    text: 'Was ist Virtual Reality?',
    correct: 'Computersimulierte Umgebung',
    wrong: ['Videospieltyp', 'Netzwerktyp', 'Hardwaretyp'],
  },
  cs77: {
    text: 'Was ist Augmented Reality?',
    correct: 'Überlagerung virtueller Elemente auf die Realität',
    wrong: ['Virtual Reality', 'Videospieltyp', 'Netzwerktyp'],
  },
  cs78: {
    text: 'Was ist Responsive Design?',
    correct: 'Design, das sich an verschiedene Bildschirme anpasst',
    wrong: ['Festes Design', 'Programmiertyp', 'Datenbanktyp'],
  },
  cs79: {
    text: 'Was ist UX?',
    correct: 'Benutzererfahrung',
    wrong: ['Benutzeroberfläche', 'Designtyp', 'Programmiertyp'],
  },
  cs80: {
    text: 'Was ist UI?',
    correct: 'Benutzeroberfläche',
    wrong: ['Benutzererfahrung', 'Designtyp', 'Programmiertyp'],
  },
  cs81: {
    text: 'Was ist ein Framework?',
    correct: 'Grundstruktur für Entwicklung',
    wrong: ['Programmiersprache', 'Datenbanktyp', 'Servertyp'],
  },
  cs82: {
    text: 'Was ist eine Bibliothek?',
    correct: 'Sammlung wiederverwendbaren Codes',
    wrong: ['Framework', 'Programmiersprache', 'Datenbanktyp'],
  },
  cs83: {
    text: 'Was ist der Unterschied zwischen Framework und Bibliothek?',
    correct: 'Framework kontrolliert den Ablauf, Bibliothek wird aufgerufen',
    wrong: [
      'Kein Unterschied',
      'Bibliothek ist größer',
      'Framework ist kleiner',
    ],
  },
  cs84: {
    text: 'Was ist Node.js?',
    correct: 'JavaScript-Laufzeitumgebung auf dem Server',
    wrong: ['Programmiersprache', 'Datenbank', 'Frontend-Framework'],
  },
  cs85: {
    text: 'Was ist React?',
    correct: 'JavaScript-Bibliothek für Benutzeroberflächen',
    wrong: ['Programmiersprache', 'Datenbank', 'Webserver'],
  },
  cs86: {
    text: 'Was ist Python?',
    correct: 'Vielseitige Programmiersprache',
    wrong: ['Schlangenart', 'Datenbank', 'Betriebssystem'],
  },
  cs87: {
    text: 'Was ist Java?',
    correct: 'Objektorientierte Programmiersprache',
    wrong: ['JavaScript', 'Datenbank', 'Betriebssystem'],
  },
  cs88: {
    text: 'Was ist der Unterschied zwischen Java und JavaScript?',
    correct: 'Verschiedene Sprachen trotz ähnlichem Namen',
    wrong: [
      'JavaScript ist eine Java-Version',
      'Java ist eine JavaScript-Version',
      'Kein Unterschied',
    ],
  },
  cs89: {
    text: 'Was ist C++?',
    correct: 'Systemnahe Programmiersprache',
    wrong: ['C-Version', 'Datenbank', 'Betriebssystem'],
  },
  cs90: {
    text: 'Was ist Open-Source-Code?',
    correct: 'Code, der für alle zugänglich und änderbar ist',
    wrong: ['Geheimer Code', 'Bezahlter Code', 'Kompilierter Code'],
  },
  cs91: {
    text: 'Was ist Linux?',
    correct: 'Open-Source-Betriebssystem',
    wrong: ['Programmiersprache', 'Datenbank', 'Webbrowser'],
  },
  cs92: {
    text: 'Was ist das Terminal?',
    correct: 'Befehlszeilenschnittstelle',
    wrong: ['Grafische Oberfläche', 'Hardwaretyp', 'Netzwerktyp'],
  },
  cs93: {
    text: 'Was ist eine IDE?',
    correct: 'Integrierte Entwicklungsumgebung',
    wrong: ['Programmiersprache', 'Datenbanktyp', 'Servertyp'],
  },
  cs94: {
    text: 'Was ist Refactoring?',
    correct: 'Umstrukturierung von Code ohne Verhaltensänderung',
    wrong: [
      'Komplette Neuschreibung',
      'Hinzufügen von Features',
      'Löschen von Code',
    ],
  },
  cs95: {
    text: 'Was ist technische Schuld?',
    correct: 'Zukünftige Kosten von Entwicklungsabkürzungen',
    wrong: ['Geschuldetes Geld', 'Bug-Typ', 'Testtyp'],
  },
  cs96: {
    text: 'Was ist Pair Programming?',
    correct: 'Zwei Entwickler arbeiten zusammen',
    wrong: ['Solo-Entwicklung', 'Testtyp', 'Deployment-Typ'],
  },
  cs97: {
    text: 'Was ist Code Review?',
    correct: 'Überprüfung von Code durch andere Entwickler',
    wrong: ['Automatischer Test', 'Deployment', 'Dokumentation'],
  },
  cs98: {
    text: 'Was ist Dokumentation?',
    correct: 'Schriftliche Erklärung von Code und Systemen',
    wrong: ['Testtyp', 'Deployment-Typ', 'Code-Typ'],
  },
  cs99: {
    text: 'Was ist eine README?',
    correct: 'Einführungsdatei eines Projekts',
    wrong: ['Code-Typ', 'Testtyp', 'Deployment-Typ'],
  },
  cs100: {
    text: 'Was ist semantische Versionierung?',
    correct: 'Versionsnummernsystem (MAJOR.MINOR.PATCH)',
    wrong: [
      'Zufällige Nummerierung',
      'Datumsversionierung',
      'Namensversionierung',
    ],
  },
};

export default computerScience;
