import { store } from '../state/store';

export type Difficulty =
  | 'very easy'
  | 'easy'
  | 'intermediate'
  | 'normal'
  | 'hard'
  | 'very hard'
  | 'legendary'
  | 'professor';

export type Locale =
  | 'en'
  | 'ru'
  | 'de'
  | 'ko'
  | 'pt'
  | 'es'
  | 'fr'
  | 'zh'
  | 'ja'
  | 'tr'
  | 'it'
  | 'nl'
  | 'ar'
  | 'th'
  | 'vi'
  | 'id'
  | 'pl'
  | 'uk'
  | 'hi'
  | 'he'
  | 'sv'
  | 'no'
  | 'da'
  | 'fi'
  | 'cs'
  | 'hu'
  | 'ro'
  | 'el'
  | 'ms'
  | 'fil';

export type Category = {
  id: string;
  name: string;
  description?: string;
  iconName?: string;
};

export type QuizTheme = { id: string; title: string; description: string };

export type Answer = { id: string; text: string; isCorrect: boolean };
export type Question = { id: string; text: string; answers: Answer[] };

export type Quiz = {
  id: string;
  title: string;
  categoryId: string;
  difficulty: Difficulty;
  description: string;
  requirements: string[];
  actions: string[];
  themes: QuizTheme[];
  estimatedTimeMin: number;
  questions: Question[];
};

const CATEGORY_DEFS: { id: string; name: string; description: string }[] = [
  { id: 'math', name: 'Math', description: 'Arithmetic, algebra and geometry' },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Mechanics, units and laws of nature',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Elements, compounds and reactions',
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Cells, genetics and life systems',
  },
  {
    id: 'astronomy',
    name: 'Astronomy',
    description: 'Planets, stars and the cosmos',
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Earth, maps and countries',
  },
  {
    id: 'history',
    name: 'History',
    description: 'Events, eras and key figures',
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Authors, works and genres',
  },
  { id: 'art', name: 'Art', description: 'Movements, techniques and artists' },
  { id: 'music', name: 'Music', description: 'Theory, genres and instruments' },
  {
    id: 'computer-science',
    name: 'Computer Science',
    description: 'Theory, data and computation',
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Concepts, patterns and paradigms',
  },
  {
    id: 'algorithms',
    name: 'Algorithms',
    description: 'Sorting, graph and optimization',
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    description: 'Arrays, trees, maps and graphs',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Language basics and runtime APIs',
  },
  {
    id: 'economics',
    name: 'Economics',
    description: 'Markets, micro and macro',
  },
  {
    id: 'psychology',
    name: 'Psychology',
    description: 'Behavior, cognition and theories',
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    description: 'Ideas, logic and ethics',
  },
  {
    id: 'anatomy',
    name: 'Anatomy',
    description: 'Human body systems and organs',
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Rules, records and great moments',
  },
];

// Runtime language
function lang(): Locale {
  try {
    return (store.getState() as any).app.language as Locale;
  } catch {
    return 'en';
  }
}

// Translations for category names/descriptions (subset; fallback to en)
const CAT_NAME_T: Record<string, Partial<Record<Locale, string>>> = {
  math: {
    ru: 'Математика',
    de: 'Mathematik',
    ko: '수학',
    pt: 'Matemática',
    es: 'Matemáticas',
    fr: 'Mathématiques',
    zh: '数学',
    tr: 'Matematik',
    ja: '数学',
    it: 'Matematica',
    nl: 'Wiskunde',
    ar: 'الرياضيات',
    th: 'คณิตศาสตร์',
    vi: 'Toán học',
    id: 'Matematika',
    pl: 'Matematyka',
    uk: 'Математика',
    hi: 'गणित',
    he: 'מתמטיקה',
    sv: 'Matematik',
    no: 'Matematikk',
    da: 'Matematik',
    fi: 'Matematiikka',
    cs: 'Matematika',
    hu: 'Matematika',
    ro: 'Matematică',
    el: 'Μαθηματικά',
    ms: 'Matematik',
    fil: 'Matematika',
  },
  physics: {
    ru: 'Физика',
    de: 'Physik',
    ko: '물리학',
    pt: 'Física',
    es: 'Física',
    fr: 'Physique',
    zh: '物理',
    tr: 'Fizik',
    ja: '物理学',
    it: 'Fisica',
    nl: 'Fysica',
    ar: 'الفيزياء',
    th: 'ฟิสิกส์',
    vi: 'Vật lý',
    id: 'Fisika',
    pl: 'Fizyka',
    uk: 'Фізика',
    hi: 'भौतिकी',
    he: 'פיזיקה',
    sv: 'Fysik',
    no: 'Fysikk',
    da: 'Fysik',
    fi: 'Fysiikka',
    cs: 'Fyzika',
    hu: 'Fizika',
    ro: 'Fizică',
    el: 'Φυσική',
    ms: 'Fizik',
    fil: 'Pisika',
  },
  chemistry: {
    ru: 'Химия',
    de: 'Chemie',
    ko: '화학',
    pt: 'Química',
    es: 'Química',
    fr: 'Chimie',
    zh: '化学',
    tr: 'Kimya',
    ja: '化学',
    it: 'Chimica',
    nl: 'Scheikunde',
    ar: 'الكيمياء',
    th: 'เคมี',
    vi: 'Hóa học',
    id: 'Kimia',
    pl: 'Chemia',
    uk: 'Хімія',
    hi: 'रसायन विज्ञान',
    he: 'כימיה',
    sv: 'Kemi',
    no: 'Kjemi',
    da: 'Kemi',
    fi: 'Kemia',
    cs: 'Chemie',
    hu: 'Kémia',
    ro: 'Chimie',
    el: 'Χημεία',
    ms: 'Kimia',
    fil: 'Kimika',
  },
  biology: {
    ru: 'Биология',
    de: 'Biologie',
    ko: '생물학',
    pt: 'Biologia',
    es: 'Biología',
    fr: 'Biologie',
    zh: '生物学',
    tr: 'Biyoloji',
    ja: '生物学',
    it: 'Biologia',
    nl: 'Biologie',
    ar: 'علم الأحياء',
    th: 'ชีววิทยา',
    vi: 'Sinh học',
    id: 'Biologi',
    pl: 'Biologia',
    uk: 'Біологія',
    hi: 'जीव विज्ञान',
    he: 'ביולוגיה',
    sv: 'Biologi',
    no: 'Biologi',
    da: 'Biologi',
    fi: 'Biologia',
    cs: 'Biologie',
    hu: 'Biológia',
    ro: 'Biologie',
    el: 'Βιολογία',
    ms: 'Biologi',
    fil: 'Biyolohiya',
  },
  astronomy: {
    ru: 'Астрономия',
    de: 'Astronomie',
    ko: '천문학',
    pt: 'Astronomia',
    es: 'Astronomía',
    fr: 'Astronomie',
    zh: '天文学',
    tr: 'Astronomi',
    ja: '天文学',
    it: 'Astronomia',
    nl: 'Astronomie',
    ar: 'علم الفلك',
    th: 'ดาราศาสตร์',
    vi: 'Thiên văn học',
    id: 'Astronomi',
    pl: 'Astronomia',
    uk: 'Астрономія',
    hi: 'खगोल विज्ञान',
    he: 'אסטרונומיה',
    sv: 'Astronomi',
    no: 'Astronomi',
    da: 'Astronomi',
    fi: 'Tähtitiede',
    cs: 'Astronomie',
    hu: 'Csillagászat',
    ro: 'Astronomie',
    el: 'Αστρονομία',
    ms: 'Astronomi',
    fil: 'Astronomiya',
  },
  geography: {
    ru: 'География',
    de: 'Geografie',
    ko: '지리',
    pt: 'Geografia',
    es: 'Geografía',
    fr: 'Géographie',
    zh: '地理',
    tr: 'Coğrafya',
    ja: '地理',
    it: 'Geografia',
    nl: 'Aardrijkskunde',
    ar: 'الجغرافيا',
    th: 'ภูมิศาสตร์',
    vi: 'Địa lý',
    id: 'Geografi',
    pl: 'Geografia',
    uk: 'Географія',
    hi: 'भूगोल',
    he: 'גאוגרפיה',
    sv: 'Geografi',
    no: 'Geografi',
    da: 'Geografi',
    fi: 'Maantiede',
    cs: 'Zeměpis',
    hu: 'Földrajz',
    ro: 'Geografie',
    el: 'Γεωγραφία',
    ms: 'Geografi',
    fil: 'Heograpiya',
  },
  history: {
    ru: 'История',
    de: 'Geschichte',
    ko: '역사',
    pt: 'História',
    es: 'Historia',
    fr: 'Histoire',
    zh: '历史',
    tr: 'Tarih',
    ja: '歴史',
    it: 'Storia',
    nl: 'Geschiedenis',
    ar: 'التاريخ',
    th: 'ประวัติศาสตร์',
    vi: 'Lịch sử',
    id: 'Sejarah',
    pl: 'Historia',
    uk: 'Історія',
    hi: 'इतिहास',
    he: 'היסטוריה',
    sv: 'Historia',
    no: 'Historie',
    da: 'Historie',
    fi: 'Historia',
    cs: 'Dějepis',
    hu: 'Történelem',
    ro: 'Istorie',
    el: 'Ιστορία',
    ms: 'Sejarah',
    fil: 'Kasaysayan',
  },
  literature: {
    ru: 'Литература',
    de: 'Literatur',
    ko: '문학',
    pt: 'Literatura',
    es: 'Literatura',
    fr: 'Littérature',
    zh: '文学',
    tr: 'Edebiyat',
    ja: '文学',
    it: 'Letteratura',
    nl: 'Literatuur',
    ar: 'الأدب',
    th: 'วรรณกรรม',
    vi: 'Văn học',
    id: 'Sastra',
    pl: 'Literatura',
    uk: 'Література',
    hi: 'साहित्य',
    he: 'ספרות',
    sv: 'Litteratur',
    no: 'Litteratur',
    da: 'Litteratur',
    fi: 'Kirjallisuus',
    cs: 'Literatura',
    hu: 'Irodalom',
    ro: 'Literatură',
    el: 'Λογοτεχνία',
    ms: 'Sastera',
    fil: 'Panitikan',
  },
  art: {
    ru: 'Искусство',
    de: 'Kunst',
    ko: '미술',
    pt: 'Arte',
    es: 'Arte',
    fr: 'Art',
    zh: '艺术',
    tr: 'Sanat',
    ja: '美術',
    it: 'Arte',
    nl: 'Kunst',
    ar: 'الفن',
    th: 'ศิลปะ',
    vi: 'Nghệ thuật',
    id: 'Seni',
    pl: 'Sztuka',
    uk: 'Мистецтво',
    hi: 'कला',
    he: 'אמנות',
    sv: 'Konst',
    no: 'Kunst',
    da: 'Kunst',
    fi: 'Taide',
    cs: 'Umění',
    hu: 'Művészet',
    ro: 'Artă',
    el: 'Τέχνη',
    ms: 'Seni',
    fil: 'Sining',
  },
  music: {
    ru: 'Музыка',
    de: 'Musik',
    ko: '음악',
    pt: 'Música',
    es: 'Música',
    fr: 'Musique',
    zh: '音乐',
    tr: 'Müzik',
    ja: '音楽',
    it: 'Musica',
    nl: 'Muziek',
    ar: 'الموسيقى',
    th: 'ดนตรี',
    vi: 'Âm nhạc',
    id: 'Musik',
    pl: 'Muzyka',
    uk: 'Музика',
    hi: 'संगीत',
    he: 'מוזיקה',
    sv: 'Musik',
    no: 'Musikk',
    da: 'Musik',
    fi: 'Musiikki',
    cs: 'Hudba',
    hu: 'Zene',
    ro: 'Muzică',
    el: 'Μουσική',
    ms: 'Muzik',
    fil: 'Musika',
  },
  'computer-science': {
    ru: 'Информатика',
    de: 'Informatik',
    ko: '컴퓨터 과학',
    pt: 'Ciência da Computação',
    es: 'Ciencias de la computación',
    fr: 'Informatique',
    zh: '计算机科学',
    tr: 'Bilgisayar Bilimi',
    ja: 'コンピュータサイエンス',
    it: 'Informatica',
    nl: 'Informatica',
    ar: 'علوم الحاسوب',
    th: 'วิทยาการคอมพิวเตอร์',
    vi: 'Khoa học máy tính',
    id: 'Ilmu Komputer',
    pl: 'Informatyka',
    uk: 'Інформатика',
    hi: 'कंप्यूटर विज्ञान',
    he: 'מדעי המחשב',
    sv: 'Datavetenskap',
    no: 'Datavitenskap',
    da: 'Datalogi',
    fi: 'Tietojenkäsittelytiede',
    cs: 'Informatika',
    hu: 'Számítástechnika',
    ro: 'Informatică',
    el: 'Επιστήμη Υπολογιστών',
    ms: 'Sains Komputer',
    fil: 'Agham Pangkompyuter',
  },
  programming: {
    ru: 'Программирование',
    de: 'Programmierung',
    ko: '프로그래밍',
    pt: 'Programação',
    es: 'Programación',
    fr: 'Programmation',
    zh: '编程',
    tr: 'Programlama',
    ja: 'プログラミング',
    it: 'Programmazione',
    nl: 'Programmeren',
    ar: 'البرمجة',
    th: 'การเขียนโปรแกรม',
    vi: 'Lập trình',
    id: 'Pemrograman',
    pl: 'Programowanie',
    uk: 'Програмування',
    hi: 'प्रोग्रामिंग',
    he: 'תכנות',
    sv: 'Programmering',
    no: 'Programmering',
    da: 'Programmering',
    fi: 'Ohjelmointi',
    cs: 'Programování',
    hu: 'Programozás',
    ro: 'Programare',
    el: 'Προγραμματισμός',
    ms: 'Pengaturcaraan',
    fil: 'Programming',
  },
  algorithms: {
    ru: 'Алгоритмы',
    de: 'Algorithmen',
    ko: '알고리즘',
    pt: 'Algoritmos',
    es: 'Algoritmos',
    fr: 'Algorithmes',
    zh: '算法',
    tr: 'Algoritmalar',
    ja: 'アルゴリズム',
    it: 'Algoritmi',
    nl: 'Algoritmen',
    ar: 'الخوارزميات',
    th: 'อัลกอริทึม',
    vi: 'Thuật toán',
    id: 'Algoritma',
    pl: 'Algorytmy',
    uk: 'Алгоритми',
    hi: 'एल्गोरिदम',
    he: 'אלגוריתמים',
    sv: 'Algoritmer',
    no: 'Algoritmer',
    da: 'Algoritmer',
    fi: 'Algoritmit',
    cs: 'Algoritmy',
    hu: 'Algoritmusok',
    ro: 'Algoritmi',
    el: 'Αλγόριθμοι',
    ms: 'Algoritma',
    fil: 'Mga Algorithm',
  },
  'data-structures': {
    ru: 'Структуры данных',
    de: 'Datenstrukturen',
    ko: '자료구조',
    pt: 'Estruturas de Dados',
    es: 'Estructuras de datos',
    fr: 'Structures de données',
    zh: '数据结构',
    tr: 'Veri Yapıları',
    ja: 'データ構造',
    it: 'Strutture dati',
    nl: 'Datastructuren',
    ar: 'هياكل البيانات',
    th: 'โครงสร้างข้อมูล',
    vi: 'Cấu trúc dữ liệu',
    id: 'Struktur Data',
    pl: 'Struktury danych',
    uk: 'Структури даних',
    hi: 'डेटा संरचनाएं',
    he: 'מבני נתונים',
    sv: 'Datastrukturer',
    no: 'Datastrukturer',
    da: 'Datastrukturer',
    fi: 'Tietorakenteet',
    cs: 'Datové struktury',
    hu: 'Adatszerkezetek',
    ro: 'Structuri de date',
    el: 'Δομές Δεδομένων',
    ms: 'Struktur Data',
    fil: 'Mga Istruktura ng Data',
  },
  javascript: {
    ru: 'JavaScript',
    de: 'JavaScript',
    ko: '자바스크립트',
    pt: 'JavaScript',
    es: 'JavaScript',
    fr: 'JavaScript',
    zh: 'JavaScript',
    tr: 'JavaScript',
    ja: 'JavaScript',
  },
  economics: {
    ru: 'Экономика',
    de: 'Wirtschaft',
    ko: '경제학',
    pt: 'Economia',
    es: 'Economía',
    fr: 'Économie',
    zh: '经济学',
    tr: 'Ekonomi',
    ja: '経済学',
    it: 'Economia',
    nl: 'Economie',
    ar: 'الاقتصاد',
    th: 'เศรษฐศาสตร์',
    vi: 'Kinh tế học',
    id: 'Ekonomi',
    pl: 'Ekonomia',
    uk: 'Економіка',
    hi: 'अर्थशास्त्र',
    he: 'כלכלה',
    sv: 'Ekonomi',
    no: 'Økonomi',
    da: 'Økonomi',
    fi: 'Taloustiede',
    cs: 'Ekonomie',
    hu: 'Közgazdaságtan',
    ro: 'Economie',
    el: 'Οικονομικά',
    ms: 'Ekonomi',
    fil: 'Ekonomiya',
  },
  psychology: {
    ru: 'Психология',
    de: 'Psychologie',
    ko: '심리학',
    pt: 'Psicologia',
    es: 'Psicología',
    fr: 'Psychologie',
    zh: '心理学',
    tr: 'Psikoloji',
    ja: '心理学',
    it: 'Psicologia',
    nl: 'Psychologie',
    ar: 'علم النفس',
    th: 'จิตวิทยา',
    vi: 'Tâm lý học',
    id: 'Psikologi',
    pl: 'Psychologia',
    uk: 'Психологія',
    hi: 'मनोविज्ञान',
    he: 'פסיכולוגיה',
    sv: 'Psykologi',
    no: 'Psykologi',
    da: 'Psykologi',
    fi: 'Psykologia',
    cs: 'Psychologie',
    hu: 'Pszichológia',
    ro: 'Psihologie',
    el: 'Ψυχολογία',
    ms: 'Psikologi',
    fil: 'Sikolohiya',
  },
  philosophy: {
    ru: 'Философия',
    de: 'Philosophie',
    ko: '철학',
    pt: 'Filosofia',
    es: 'Filosofía',
    fr: 'Philosophie',
    zh: '哲学',
    tr: 'Felsefe',
    ja: '哲学',
    it: 'Filosofia',
    nl: 'Filosofie',
    ar: 'الفلسفة',
    th: 'ปรัชญา',
    vi: 'Triết học',
    id: 'Filsafat',
    pl: 'Filozofia',
    uk: 'Філософія',
    hi: 'दर्शनशास्त्र',
    he: 'פילוסופיה',
    sv: 'Filosofi',
    no: 'Filosofi',
    da: 'Filosofi',
    fi: 'Filosofia',
    cs: 'Filozofie',
    hu: 'Filozófia',
    ro: 'Filosofie',
    el: 'Φιλοσοφία',
    ms: 'Falsafah',
    fil: 'Pilosopiya',
  },
  anatomy: {
    ru: 'Анатомия',
    de: 'Anatomie',
    ko: '해부학',
    pt: 'Anatomia',
    es: 'Anatomía',
    fr: 'Anatomie',
    zh: '解剖学',
    tr: 'Anatomi',
    ja: '解剖学',
    it: 'Anatomia',
    nl: 'Anatomie',
    ar: 'علم التشريح',
    th: 'กายวิภาคศาสตร์',
    vi: 'Giải phẫu học',
    id: 'Anatomi',
    pl: 'Anatomia',
    uk: 'Анатомія',
    hi: 'शरीर रचना विज्ञान',
    he: 'אנטומיה',
    sv: 'Anatomi',
    no: 'Anatomi',
    da: 'Anatomi',
    fi: 'Anatomia',
    cs: 'Anatomie',
    hu: 'Anatómia',
    ro: 'Anatomie',
    el: 'Ανατομία',
    ms: 'Anatomi',
    fil: 'Anatomiya',
  },
  sports: {
    ru: 'Спорт',
    de: 'Sport',
    ko: '스포츠',
    pt: 'Esportes',
    es: 'Deportes',
    fr: 'Sport',
    zh: '体育',
    tr: 'Spor',
    ja: 'スポーツ',
    it: 'Sport',
    nl: 'Sport',
    ar: 'الرياضة',
    th: 'กีฬา',
    vi: 'Thể thao',
    id: 'Olahraga',
    pl: 'Sport',
    uk: 'Спорт',
    hi: 'खेल',
    he: 'ספורט',
    sv: 'Sport',
    no: 'Sport',
    da: 'Sport',
    fi: 'Urheilu',
    cs: 'Sport',
    hu: 'Sport',
    ro: 'Sport',
    el: 'Αθλητισμός',
    ms: 'Sukan',
    fil: 'Palakasan',
  },
};

const CAT_DESC_T: Record<string, Partial<Record<Locale, string>>> = {
  math: {
    ru: 'Арифметика, алгебра и геометрия',
    de: 'Arithmetik, Algebra und Geometrie',
    zh: '算术、代数与几何',
  },
  physics: {
    ru: 'Механика, единицы и законы природы',
    de: 'Mechanik, Einheiten und Naturgesetze',
    zh: '力学、单位与自然规律',
  },
  chemistry: {
    ru: 'Элементы, соединения и реакции',
    de: 'Elemente, Verbindungen und Reaktionen',
    zh: '元素、化合物与反应',
  },
  biology: {
    ru: 'Клетки, генетика и системы жизни',
    de: 'Zellen, Genetik und Lebenssysteme',
    zh: '细胞、遗传与生命系统',
  },
  astronomy: {
    ru: 'Планеты, звезды и космос',
    de: 'Planeten, Sterne und das Universum',
    zh: '行星、恒星与宇宙',
  },
  geography: {
    ru: 'Земля, карты и страны',
    de: 'Erde, Karten und Länder',
    zh: '地球、地图与国家',
  },
  history: {
    ru: 'События, эпохи и личности',
    de: 'Ereignisse, Epochen und Persönlichkeiten',
    zh: '事件、时代与人物',
  },
  literature: {
    ru: 'Авторы, произведения и жанры',
    de: 'Autoren, Werke und Gattungen',
    zh: '作家、作品与体裁',
  },
  art: {
    ru: 'Направления, техники и художники',
    de: 'Strömungen, Techniken und Künstler',
    zh: '流派、技法与艺术家',
  },
  music: {
    ru: 'Теория, жанры и инструменты',
    de: 'Theorie, Genres und Instrumente',
    zh: '理论、流派与乐器',
  },
  'computer-science': {
    ru: 'Теория, данные и вычисления',
    de: 'Theorie, Daten und Berechnung',
    zh: '理论、数据与计算',
  },
  programming: {
    ru: 'Концепции, паттерны и парадигмы',
    de: 'Konzepte, Muster und Paradigmen',
    zh: '概念、模式与范式',
  },
  algorithms: {
    ru: 'Сортировки, графы и оптимизация',
    de: 'Sortierung, Graphen und Optimierung',
    zh: '排序、图与优化',
  },
  'data-structures': {
    ru: 'Массивы, деревья, карты и графы',
    de: 'Arrays, Bäume, Maps und Graphen',
    zh: '数组、树、映射与图',
  },
  javascript: {
    ru: 'Язык и основные API среды',
    de: 'Sprache und grundlegende Laufzeit-APIs',
    zh: '语言基础与运行时 API',
  },
  economics: {
    ru: 'Рынки, микро- и макроэкономика',
    de: 'Märkte, Mikro- und Makroökonomie',
    zh: '市场、微观与宏观经济',
  },
  psychology: {
    ru: 'Поведение, мышление и теории',
    de: 'Verhalten, Kognition und Theorien',
    zh: '行为、认知与理论',
  },
  philosophy: {
    ru: 'Идеи, логика и этика',
    de: 'Ideen, Logik und Ethik',
    zh: '思想、逻辑与伦理',
  },
  anatomy: {
    ru: 'Системы и органы человека',
    de: 'Körpersysteme und Organe',
    zh: '人体系统与器官',
  },
  sports: {
    ru: 'Правила, рекорды и великие моменты',
    de: 'Regeln, Rekorde und große Momente',
    zh: '规则、纪录与高光时刻',
  },
};

const SUBTOPICS_EN = [
  'Foundations',
  'Core Concepts',
  'Key Terms',
  'Problem Solving',
  'Real‑World Applications',
  'Famous Figures',
  'History & Origins',
  'Modern Topics',
  'Common Mistakes',
  'Quick Review',
  'Advanced Basics',
  'Practice Set A',
  'Practice Set B',
  'Patterns & Tricks',
  'Exam Essentials',
  'Everyday Examples',
  'Myths & Facts',
  'Data & Measures',
  'Systems Overview',
  'Challenge Set',
];

const SUBTOPICS_T: Partial<Record<Locale, string[]>> = {
  ru: [
    'Основы',
    'Ключевые концепции',
    'Термины',
    'Решение задач',
    'Практика',
    'Знаковые личности',
    'История',
    'Современные темы',
    'Типичные ошибки',
    'Быстрый обзор',
    'Продвинутые основы',
    'Практика A',
    'Практика B',
    'Шаблоны и приёмы',
    'Экзамен',
    'Повседневные примеры',
    'Мифы и факты',
    'Данные и измерения',
    'Обзор систем',
    'Испытание',
  ],
  de: [
    'Grundlagen',
    'Kernkonzepte',
    'Begriffe',
    'Problemlösen',
    'Praxis',
    'Berühmte Persönlichkeiten',
    'Geschichte',
    'Moderne Themen',
    'Häufige Fehler',
    'Kurzüberblick',
    'Erweiterte Grundlagen',
    'Übung A',
    'Übung B',
    'Muster & Tricks',
    'Prüfung',
    'Alltägliche Beispiele',
    'Mythen & Fakten',
    'Daten & Maße',
    'Systemüberblick',
    'Herausforderung',
  ],
  ko: [
    '기초',
    '핵심 개념',
    '용어',
    '문제 해결',
    '실생활 응용',
    '인물',
    '역사',
    '현대 주제',
    '자주 하는 실수',
    '빠른 복습',
    '확장 기초',
    '연습 A',
    '연습 B',
    '패턴과 팁',
    '시험 필수',
    '일상 예시',
    '오해와 사실',
    '데이터와 측정',
    '시스템 개요',
    '도전',
  ],
  pt: [
    'Fundamentos',
    'Conceitos-chave',
    'Termos',
    'Resolução de problemas',
    'Aplicações reais',
    'Figuras famosas',
    'História',
    'Tópicos modernos',
    'Erros comuns',
    'Revisão rápida',
    'Básico avançado',
    'Prática A',
    'Prática B',
    'Padrões e truques',
    'Essenciais de prova',
    'Exemplos do dia a dia',
    'Mitos e fatos',
    'Dados e medidas',
    'Visão de sistemas',
    'Desafio',
  ],
  es: [
    'Fundamentos',
    'Conceptos clave',
    'Términos',
    'Resolución de problemas',
    'Aplicaciones reales',
    'Figuras famosas',
    'Historia',
    'Temas modernos',
    'Errores comunes',
    'Revisión rápida',
    'Básico avanzado',
    'Práctica A',
    'Práctica B',
    'Patrones y trucos',
    'Esenciales de examen',
    'Ejemplos cotidianos',
    'Mitos y hechos',
    'Datos y medidas',
    'Visión de sistemas',
    'Desafío',
  ],
  fr: [
    'Fondamentaux',
    'Concepts clés',
    'Termes',
    'Résolution de problèmes',
    'Applications réelles',
    'Figures célèbres',
    'Histoire',
    'Sujets modernes',
    'Erreurs courantes',
    'Revue rapide',
    'Bases avancées',
    'Pratique A',
    'Pratique B',
    'Modèles & astuces',
    'Essentiels d’examen',
    'Exemples du quotidien',
    'Mythes & faits',
    'Données & mesures',
    'Vue d’ensemble des systèmes',
    'Défi',
  ],
  zh: [
    '基础',
    '核心概念',
    '术语',
    '问题求解',
    '实际应用',
    '知名人物',
    '历史起源',
    '现代主题',
    '常见错误',
    '快速回顾',
    '进阶基础',
    '练习A',
    '练习B',
    '模式与技巧',
    '考试要点',
    '日常示例',
    '谣言与事实',
    '数据与度量',
    '系统概览',
    '挑战题',
  ],
  tr: [
    'Temeller',
    'Temel Kavramlar',
    'Anahtar Terimler',
    'Problem Çözme',
    'Gerçek Dünya Uygulamaları',
    'Ünlü İsimler',
    'Tarih ve Kökenler',
    'Modern Konular',
    'Yaygın Hatalar',
    'Hızlı İnceleme',
    'İleri Temel',
    'Pratik Set A',
    'Pratik Set B',
    'Kalıplar ve İpuçları',
    'Sınav Temelleri',
    'Günlük Örnekler',
    'Mitler ve Gerçekler',
    'Veri ve Ölçümler',
    'Sistem Genel Bakış',
    'Meydan Okuma Seti',
  ],
  ja: [
    '基礎',
    '核心概念',
    '重要用語',
    '問題解決',
    '実世界の応用',
    '有名人物',
    '歴史と起源',
    '現代のトピック',
    'よくある間違い',
    'クイックレビュー',
    '上級基礎',
    '練習セットA',
    '練習セットB',
    'パターンとコツ',
    '試験の要点',
    '日常の例',
    '神話と事実',
    'データと測定',
    'システム概要',
    'チャレンジセット',
  ],
};

const CATEGORIES: Category[] = CATEGORY_DEFS.map(c => ({
  id: c.id,
  name: c.name,
  description: c.description,
}));
export function getCategories(l: Locale = lang()): Category[] {
  return CATEGORY_DEFS.map(c => ({
    id: c.id,
    name: CAT_NAME_T[c.id]?.[l] || c.name,
    description: CAT_DESC_T[c.id]?.[l] || c.description,
  }));
}

const A = (id: string, correct: string, others: string[]): Answer[] => {
  const all = [
    { id: `${id}-a1`, text: correct, isCorrect: true },
    ...others.map((t, i) => ({
      id: `${id}-a${i + 2}`,
      text: t,
      isCorrect: false,
    })),
  ];
  return all.sort(() => Math.random() - 0.5);
};

// English banks
const BANK_EN: Record<string, Question[]> = {
  math: [
    { id: 'm1', text: '2 + 2 = ?', answers: A('m1', '4', ['3', '5', '6']) },
    { id: 'm2', text: '9 − 4 = ?', answers: A('m2', '5', ['6', '4', '3']) },
    { id: 'm3', text: '3 × 5 = ?', answers: A('m3', '15', ['8', '10', '20']) },
    { id: 'm4', text: '12 ÷ 3 = ?', answers: A('m4', '4', ['3', '2', '6']) },
    {
      id: 'm5',
      text: 'Prime number:',
      answers: A('m5', '17', ['12', '21', '20']),
    },
  ],
  physics: [
    {
      id: 'p1',
      text: 'SI unit of force?',
      answers: A('p1', 'Newton', ['Joule', 'Pascal', 'Watt']),
    },
    {
      id: 'p2',
      text: 'Speed = distance / …',
      answers: A('p2', 'time', ['mass', 'force', 'energy']),
    },
    {
      id: 'p3',
      text: 'Acceleration due to gravity near Earth (approx)?',
      answers: A('p3', '9.8 m/s²', ['1 g', '98 m/s', '6.67×10⁻¹¹']),
    },
    {
      id: 'p4',
      text: 'Work = force × …',
      answers: A('p4', 'displacement', ['time', 'mass', 'power']),
    },
    {
      id: 'p5',
      text: 'SI unit of energy?',
      answers: A('p5', 'Joule', ['Newton', 'Ampere', 'Volt']),
    },
  ],
  chemistry: [
    {
      id: 'c1',
      text: 'Chemical symbol for Sodium?',
      answers: A('c1', 'Na', ['So', 'S', 'Sn']),
    },
    {
      id: 'c2',
      text: 'H₂O is …',
      answers: A('c2', 'Water', ['Hydrogen Peroxide', 'Hydrogen', 'Oxygen']),
    },
    {
      id: 'c3',
      text: 'Atomic number of Carbon?',
      answers: A('c3', '6', ['8', '12', '14']),
    },
    {
      id: 'c4',
      text: 'Symbol for Potassium?',
      answers: A('c4', 'K', ['P', 'Po', 'Pt']),
    },
    {
      id: 'c5',
      text: 'NaCl commonly known as …',
      answers: A('c5', 'Salt', ['Soda', 'Lime', 'Chalk']),
    },
  ],
  javascript: [
    {
      id: 'j1',
      text: 'typeof null is …',
      answers: A('j1', 'object', ['null', 'undefined', 'string']),
    },
    {
      id: 'j2',
      text: 'Array.isArray([]) returns …',
      answers: A('j2', 'true', ['false', '[]', 'undefined']),
    },
    {
      id: 'j3',
      text: 'Strict equality operator is …',
      answers: A('j3', '===', ['==', '=>', '!==']),
    },
    {
      id: 'j4',
      text: 'JSON.parse(""hi"") returns …',
      answers: A('j4', '"hi"', ['hi', 'null', 'undefined']),
    },
    {
      id: 'j5',
      text: 'NaN === NaN evaluates to …',
      answers: A('j5', 'false', ['true', 'TypeError', '0']),
    },
  ],
  geography: [
    {
      id: 'g1',
      text: 'Capital of France is …',
      answers: A('g1', 'Paris', ['Lyon', 'Marseille', 'Nice']),
    },
    {
      id: 'g2',
      text: 'The Nile flows into which sea?',
      answers: A('g2', 'Mediterranean', [
        'Black Sea',
        'Red Sea',
        'Arabian Sea',
      ]),
    },
    {
      id: 'g3',
      text: 'Mount Everest lies in …',
      answers: A('g3', 'Himalayas', ['Andes', 'Alps', 'Rockies']),
    },
    {
      id: 'g4',
      text: 'The Sahara is a …',
      answers: A('g4', 'desert', ['river', 'lake', 'plateau']),
    },
    {
      id: 'g5',
      text: 'Largest ocean is …',
      answers: A('g5', 'Pacific', ['Atlantic', 'Indian', 'Arctic']),
    },
  ],
};

// Minimal translations for question texts/answers (for demo; fallback en)
const Q_T: Partial<Record<Locale, Record<string, string>>> = {
  de: {
    '2 + 2 = ?': '2 + 2 = ?',
    '9 − 4 = ?': '9 − 4 = ?',
    '3 × 5 = ?': '3 × 5 = ?',
    '12 ÷ 3 = ?': '12 ÷ 3 = ?',
    'Prime number:': 'Primzahl:',
    'SI unit of force?': 'SI-Einheit der Kraft?',
    'Speed = distance / …': 'Geschwindigkeit = Strecke / …',
    'Acceleration due to gravity near Earth (approx)?':
      'Erdbeschleunigung (ca.)?',
    'Work = force × …': 'Arbeit = Kraft × …',
    'SI unit of energy?': 'SI-Einheit der Energie?',
    'Chemical symbol for Sodium?': 'Chemisches Symbol für Natrium?',
    'H₂O is …': 'H₂O ist …',
    'Atomic number of Carbon?': 'Ordnungszahl von Kohlenstoff?',
    'Symbol for Potassium?': 'Symbol für Kalium?',
    'NaCl commonly known as …': 'NaCl ist bekannt als …',
    'typeof null is …': 'typeof null ist …',
    'Array.isArray([]) returns …': 'Array.isArray([]) ergibt …',
    'Strict equality operator is …': 'Strikter Gleichheitsoperator ist …',
    'JSON.parse(""hi"") returns …': 'JSON.parse(""hi"") ergibt …',
    'NaN === NaN evaluates to …': 'NaN === NaN ergibt …',
    'Capital of France is …': 'Hauptstadt von Frankreich ist …',
    'The Nile flows into which sea?': 'In welches Meer mündet der Nil?',
    'Mount Everest lies in …': 'Der Mount Everest liegt …',
    'The Sahara is a …': 'Die Sahara ist eine …',
    'Largest ocean is …': 'Größter Ozean ist …',
    Water: 'Wasser',
    Salt: 'Salz',
    desert: 'Wüste',
    Pacific: 'Pazifik',
    Paris: 'Paris',
    Joule: 'Joule',
    Newton: 'Newton',
    time: 'Zeit',
    displacement: 'Weg',
  },
  zh: {
    '2 + 2 = ?': '2 + 2 = ?',
    '9 − 4 = ?': '9 − 4 = ?',
    '3 × 5 = ?': '3 × 5 = ?',
    '12 ÷ 3 = ?': '12 ÷ 3 = ?',
    'Prime number:': '质数：',
    'SI unit of force?': '力的国际单位？',
    'Speed = distance / …': '速度 = 距离 / …',
    'Acceleration due to gravity near Earth (approx)?':
      '地球表面重力加速度约为？',
    'Work = force × …': '功 = 力 × …',
    'SI unit of energy?': '能量的国际单位？',
    'Chemical symbol for Sodium?': '钠的化学符号？',
    'H₂O is …': 'H₂O 是 …',
    'Atomic number of Carbon?': '碳的原子序数？',
    'Symbol for Potassium?': '钾的符号？',
    'NaCl commonly known as …': 'NaCl 通常称为 …',
    'typeof null is …': 'typeof null 的结果是 …',
    'Array.isArray([]) returns …': 'Array.isArray([]) 返回 …',
    'Strict equality operator is …': '严格相等运算符是 …',
    'JSON.parse(""hi"") returns …': 'JSON.parse(""hi"") 返回 …',
    'NaN === NaN evaluates to …': 'NaN === NaN 的结果是 …',
    'Capital of France is …': '法国首都是 …',
    'The Nile flows into which sea?': '尼罗河注入哪个海？',
    'Mount Everest lies in …': '珠穆朗玛峰位于 …',
    'The Sahara is a …': '撒哈拉是一个 …',
    'Largest ocean is …': '最大的海洋是 …',
    Water: '水',
    Salt: '盐',
    desert: '沙漠',
    Pacific: '太平洋',
    Paris: '巴黎',
    Joule: '焦耳',
    Newton: '牛顿',
    time: '时间',
    displacement: '位移',
  },
};

function translate(s: string, l: Locale): string {
  const map = Q_T[l];
  return (map && map[s]) || s;
}

function bankFor(categoryId: string, l: Locale): Question[] {
  const src = BANK_EN[categoryId] || BANK_EN.math;
  return src.map((q, i) => ({
    id: q.id,
    text: translate(q.text, l),
    answers: q.answers.map(a => ({ ...a, text: translate(a.text, l) })),
  }));
}

function subtopics(l: Locale): string[] {
  return SUBTOPICS_T[l] || SUBTOPICS_EN;
}

function buildThemes(categoryName: string, l: Locale): QuizTheme[] {
  const THEME_T: Partial<
    Record<
      Locale,
      {
        basics: string;
        basics_desc: string;
        pitfalls: string;
        pitfalls_desc: string;
      }
    >
  > = {
    zh: {
      basics: '基础',
      basics_desc: '基本概念概述',
      pitfalls: '常见陷阱',
      pitfalls_desc: '典型错误及避免方法',
    },
    ja: {
      basics: '基礎',
      basics_desc: '基本的な概念の概要',
      pitfalls: 'よくある落とし穴',
      pitfalls_desc: '典型的な間違いと回避方法',
    },
    ru: {
      basics: 'Основы',
      basics_desc: 'Обзор фундаментальных идей',
      pitfalls: 'Типичные ошибки',
      pitfalls_desc: 'Как избежать распространённых ошибок',
    },
    de: {
      basics: 'Grundlagen',
      basics_desc: 'Überblick über grundlegende Ideen',
      pitfalls: 'Häufige Fehler',
      pitfalls_desc: 'Typische Fehler und wie man sie vermeidet',
    },
    ko: {
      basics: '기초',
      basics_desc: '기본 개념 개요',
      pitfalls: '흔한 실수',
      pitfalls_desc: '일반적인 실수와 피하는 방법',
    },
    pt: {
      basics: 'Fundamentos',
      basics_desc: 'Visão geral das ideias fundamentais',
      pitfalls: 'Erros comuns',
      pitfalls_desc: 'Erros típicos e como evitá-los',
    },
    es: {
      basics: 'Fundamentos',
      basics_desc: 'Resumen de ideas fundamentales',
      pitfalls: 'Errores comunes',
      pitfalls_desc: 'Errores típicos y cómo evitarlos',
    },
    fr: {
      basics: 'Bases',
      basics_desc: 'Aperçu des idées fondamentales',
      pitfalls: 'Pièges courants',
      pitfalls_desc: 'Erreurs typiques et comment les éviter',
    },
  };
  const tt = THEME_T[l] || {
    basics: 'basics',
    basics_desc: 'Overview of fundamental ideas',
    pitfalls: 'Common pitfalls',
    pitfalls_desc: 'Typical mistakes and how to avoid them',
  };
  return [
    {
      id: 't1',
      title: `${categoryName} ${tt.basics}`,
      description: tt.basics_desc,
    },
    { id: 't2', title: tt.pitfalls, description: tt.pitfalls_desc },
  ];
}

function makeQuiz(
  categoryId: string,
  categoryName: string,
  subtopic: string,
  index: number,
  l: Locale,
): Quiz {
  const qid = `${categoryId}-${index + 1}`;
  const baseQs = bankFor(categoryId, l);

  const REQ_T: Partial<Record<Locale, { score: string; time: string }>> = {
    zh: { score: '得分70%+', time: '在规定时间内完成' },
    ru: { score: 'Наберите 70%+', time: 'Уложитесь в отведённое время' },
    de: {
      score: 'Punktzahl 70%+',
      time: 'Innerhalb der geschätzten Zeit abschließen',
    },
    ko: { score: '70% 이상 득점', time: '예상 시간 내 완료' },
    pt: { score: 'Pontuação 70%+', time: 'Terminar dentro do tempo estimado' },
    es: {
      score: 'Puntuación 70%+',
      time: 'Terminar dentro del tiempo estimado',
    },
    fr: { score: 'Score 70%+', time: 'Terminer dans le temps imparti' },
    ja: { score: 'スコア70%以上', time: '制限時間内に完了' },
  };
  const DESC_T: Partial<Record<Locale, string>> = {
    zh: `专注于${categoryName}中的${subtopic.toLowerCase()}。`,
    ru: `Сфокусированный набор по теме ${subtopic.toLowerCase()} в ${categoryName}.`,
    de: `Ein fokussiertes Set zu ${subtopic.toLowerCase()} in ${categoryName}.`,
    ko: `${categoryName}의 ${subtopic.toLowerCase()}에 집중한 세트입니다.`,
    pt: `Um conjunto focado em ${subtopic.toLowerCase()} dentro de ${categoryName}.`,
    es: `Un conjunto enfocado en ${subtopic.toLowerCase()} dentro de ${categoryName}.`,
    fr: `Un ensemble ciblé sur ${subtopic.toLowerCase()} dans ${categoryName}.`,
    ja: `${categoryName}の${subtopic.toLowerCase()}に焦点を当てたセットです。`,
  };
  const ACTION_T: Partial<Record<Locale, string>> = {
    zh: '单选题',
    ru: 'Выбор одного варианта',
    de: 'Einzelauswahl-Fragen',
    ko: '단일 선택 문제',
    pt: 'Questões de escolha única',
    es: 'Preguntas de opción única',
    fr: 'Questions à choix unique',
    ja: '単一選択問題',
  };

  const req = REQ_T[l] || {
    score: 'Score 70%+',
    time: 'Finish within estimated time',
  };
  const desc =
    DESC_T[l] ||
    `A focused set on ${subtopic.toLowerCase()} within ${categoryName}.`;
  const action = ACTION_T[l] || 'Single-choice questions';

  return {
    id: qid,
    title: `${categoryName}: ${subtopic}`,
    categoryId,
    difficulty: 'very easy',
    description: desc,
    requirements: [req.score, req.time],
    actions: [action],
    themes: buildThemes(categoryName, l),
    estimatedTimeMin: 10 + Math.round(Math.random() * 8),
    questions: baseQs.map((q, i) => ({
      ...q,
      id: `${qid}-q${i + 1}`,
      answers: q.answers.map((a, j) => ({
        ...a,
        id: `${qid}-q${i + 1}-a${j + 1}`,
      })),
    })),
  };
}

export function getQuizzesForCategory(categoryId: string): Quiz[] {
  // default (English) for legacy callers
  const l: Locale = 'en';
  return subtopics(l)
    .slice(0, 20)
    .map((sub, i) =>
      makeQuiz(
        categoryId,
        CATEGORY_DEFS.find(c => c.id === categoryId)?.name || categoryId,
        sub,
        i,
        l,
      ),
    );
}

export function getQuizzesForCategoryLocalized(
  categoryId: string,
  l: Locale = lang(),
): Quiz[] {
  const name =
    CAT_NAME_T[categoryId]?.[l] ||
    CATEGORY_DEFS.find(c => c.id === categoryId)?.name ||
    categoryId;
  return subtopics(l)
    .slice(0, 20)
    .map((sub, i) => makeQuiz(categoryId, name, sub, i, l));
}

export function getQuizById(id?: string): Quiz | undefined {
  if (!id) return undefined;
  // fallback English lookup from generated list below
  return QUIZZES.find(q => q.id === id);
}

export function getQuizByIdLocalized(
  id?: string,
  l: Locale = lang(),
): Quiz | undefined {
  if (!id) return undefined;
  const found = QUIZZES.find(q => q.id === id);
  if (!found) return undefined;
  // Rebuild with localized content
  const name =
    CAT_NAME_T[found.categoryId]?.[l] ||
    CATEGORY_DEFS.find(c => c.id === found.categoryId)?.name ||
    found.categoryId;
  // Get the index from the quiz id to find the correct localized subtopic
  const index = parseInt(found.id.split('-').pop() || '1') - 1;
  const localizedSubtopics = subtopics(l);
  const sub = localizedSubtopics[index] || 'Foundations';
  return makeQuiz(found.categoryId, name, sub, index, l);
}

// Prebuilt English quizzes for stable ids (used for navigation); localized getters reconstruct content
export const QUIZZES: Quiz[] = CATEGORY_DEFS.flatMap(cat =>
  SUBTOPICS_EN.slice(0, 20).map((sub, i) =>
    makeQuiz(cat.id, cat.name, sub, i, 'en'),
  ),
);

export { CATEGORIES };
