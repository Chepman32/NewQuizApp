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
export type Question = { id: string; text: string; answers: Answer[]; level?: number };

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

// English banks with difficulty levels (1=easiest, 8=hardest)
const BANK_EN: Record<string, Question[]> = {
  math: [
    // Level 1-2: Very Easy / Easy
    { id: 'm1', text: '2 + 2 = ?', answers: A('m1', '4', ['3', '5', '6']), level: 1 },
    { id: 'm2', text: '9 − 4 = ?', answers: A('m2', '5', ['6', '4', '3']), level: 1 },
    { id: 'm3', text: '3 × 5 = ?', answers: A('m3', '15', ['8', '10', '20']), level: 1 },
    { id: 'm4', text: '12 ÷ 3 = ?', answers: A('m4', '4', ['3', '2', '6']), level: 2 },
    { id: 'm5', text: '7 + 8 = ?', answers: A('m5', '15', ['14', '16', '13']), level: 1 },
    // Level 3-4: Intermediate / Normal
    { id: 'm6', text: 'Prime number:', answers: A('m6', '17', ['12', '21', '20']), level: 3 },
    { id: 'm7', text: '√144 = ?', answers: A('m7', '12', ['14', '11', '13']), level: 3 },
    { id: 'm8', text: '15% of 200 = ?', answers: A('m8', '30', ['25', '35', '20']), level: 4 },
    { id: 'm9', text: '2³ = ?', answers: A('m9', '8', ['6', '9', '12']), level: 3 },
    { id: 'm10', text: 'GCD of 12 and 18?', answers: A('m10', '6', ['3', '9', '12']), level: 4 },
    // Level 5-6: Hard / Very Hard
    { id: 'm11', text: 'log₁₀(1000) = ?', answers: A('m11', '3', ['2', '4', '10']), level: 5 },
    { id: 'm12', text: 'sin(90°) = ?', answers: A('m12', '1', ['0', '0.5', '−1']), level: 5 },
    { id: 'm13', text: '∫x dx = ?', answers: A('m13', 'x²/2 + C', ['x + C', '2x + C', 'x²']), level: 6 },
    { id: 'm14', text: 'lim(x→0) sin(x)/x = ?', answers: A('m14', '1', ['0', '∞', 'undefined']), level: 6 },
    { id: 'm15', text: 'd/dx(eˣ) = ?', answers: A('m15', 'eˣ', ['xeˣ⁻¹', 'ln(x)', '1']), level: 5 },
    // Level 7-8: Legendary / Professor
    { id: 'm16', text: '∫eˣsin(x)dx uses which method?', answers: A('m16', 'Integration by parts', ['Substitution', 'Partial fractions', 'L\'Hôpital']), level: 7 },
    { id: 'm17', text: 'Euler\'s identity: eⁱᵖ + 1 = ?', answers: A('m17', '0', ['1', '−1', 'i']), level: 7 },
    { id: 'm18', text: 'The Riemann zeta function ζ(2) = ?', answers: A('m18', 'π²/6', ['π/2', 'π²/4', '1']), level: 8 },
    { id: 'm19', text: 'Gödel\'s incompleteness theorem applies to:', answers: A('m19', 'Sufficiently powerful formal systems', ['All logical systems', 'Only arithmetic', 'Set theory only']), level: 8 },
    { id: 'm20', text: 'The cardinality of ℝ is:', answers: A('m20', '2^ℵ₀', ['ℵ₀', 'ℵ₁', '∞']), level: 8 },
  ],
  physics: [
    // Level 1-2
    { id: 'p1', text: 'SI unit of force?', answers: A('p1', 'Newton', ['Joule', 'Pascal', 'Watt']), level: 1 },
    { id: 'p2', text: 'Speed = distance / …', answers: A('p2', 'time', ['mass', 'force', 'energy']), level: 1 },
    { id: 'p3', text: 'SI unit of energy?', answers: A('p3', 'Joule', ['Newton', 'Ampere', 'Volt']), level: 2 },
    { id: 'p4', text: 'Water boils at (sea level)?', answers: A('p4', '100°C', ['90°C', '110°C', '80°C']), level: 1 },
    { id: 'p5', text: 'Light travels faster than sound?', answers: A('p5', 'True', ['False', 'Equal', 'Depends']), level: 1 },
    // Level 3-4
    { id: 'p6', text: 'Acceleration due to gravity ≈ ?', answers: A('p6', '9.8 m/s²', ['10.8 m/s²', '8.8 m/s²', '6.67 m/s²']), level: 3 },
    { id: 'p7', text: 'Work = force × …', answers: A('p7', 'displacement', ['time', 'mass', 'power']), level: 3 },
    { id: 'p8', text: 'Ohm\'s law: V = ?', answers: A('p8', 'IR', ['I/R', 'R/I', 'I+R']), level: 4 },
    { id: 'p9', text: 'Power = Work / ?', answers: A('p9', 'time', ['force', 'distance', 'mass']), level: 3 },
    { id: 'p10', text: 'Frequency unit is?', answers: A('p10', 'Hertz', ['Watt', 'Joule', 'Ampere']), level: 4 },
    // Level 5-6
    { id: 'p11', text: 'E = mc² describes?', answers: A('p11', 'Mass-energy equivalence', ['Kinetic energy', 'Potential energy', 'Thermal energy']), level: 5 },
    { id: 'p12', text: 'Planck\'s constant h ≈ ?', answers: A('p12', '6.63×10⁻³⁴ J·s', ['6.67×10⁻¹¹', '3×10⁸', '1.6×10⁻¹⁹']), level: 6 },
    { id: 'p13', text: 'Heisenberg uncertainty principle limits:', answers: A('p13', 'Position & momentum precision', ['Energy only', 'Time only', 'Speed only']), level: 6 },
    { id: 'p14', text: 'Black body radiation peak (Wien\'s law) depends on:', answers: A('p14', 'Temperature', ['Mass', 'Volume', 'Pressure']), level: 5 },
    { id: 'p15', text: 'Photoelectric effect proves light is:', answers: A('p15', 'Quantized', ['Continuous', 'A wave only', 'Massless']), level: 5 },
    // Level 7-8
    { id: 'p16', text: 'The fine-structure constant α ≈ ?', answers: A('p16', '1/137', ['1/100', '1/10', '1/1000']), level: 7 },
    { id: 'p17', text: 'Hawking radiation is emitted by:', answers: A('p17', 'Black holes', ['White dwarfs', 'Neutron stars', 'Quasars']), level: 7 },
    { id: 'p18', text: 'The Chandrasekhar limit is about:', answers: A('p18', '1.4 solar masses', ['3 solar masses', '0.5 solar masses', '10 solar masses']), level: 8 },
    { id: 'p19', text: 'CPT symmetry involves:', answers: A('p19', 'Charge, Parity, Time', ['Color, Phase, Temp', 'Current, Power, Time', 'Charge, Photon, Tachyon']), level: 8 },
    { id: 'p20', text: 'Gravitational waves were first detected in:', answers: A('p20', '2015', ['2010', '2005', '2020']), level: 7 },
  ],
  chemistry: [
    // Level 1-2
    { id: 'c1', text: 'Chemical symbol for Sodium?', answers: A('c1', 'Na', ['So', 'S', 'Sn']), level: 1 },
    { id: 'c2', text: 'H₂O is …', answers: A('c2', 'Water', ['Hydrogen Peroxide', 'Hydrogen', 'Oxygen']), level: 1 },
    { id: 'c3', text: 'Symbol for Potassium?', answers: A('c3', 'K', ['P', 'Po', 'Pt']), level: 2 },
    { id: 'c4', text: 'NaCl commonly known as …', answers: A('c4', 'Salt', ['Soda', 'Lime', 'Chalk']), level: 1 },
    { id: 'c5', text: 'CO₂ is …', answers: A('c5', 'Carbon dioxide', ['Carbon monoxide', 'Oxygen', 'Methane']), level: 1 },
    // Level 3-4
    { id: 'c6', text: 'Atomic number of Carbon?', answers: A('c6', '6', ['8', '12', '14']), level: 3 },
    { id: 'c7', text: 'pH of neutral solution?', answers: A('c7', '7', ['0', '14', '1']), level: 3 },
    { id: 'c8', text: 'Noble gases are in group:', answers: A('c8', '18', ['1', '8', '17']), level: 4 },
    { id: 'c9', text: 'Avogadro\'s number ≈ ?', answers: A('c9', '6.02×10²³', ['3.14×10²³', '6.67×10²³', '1.6×10¹⁹']), level: 4 },
    { id: 'c10', text: 'Covalent bonds share:', answers: A('c10', 'Electrons', ['Protons', 'Neutrons', 'Ions']), level: 3 },
    // Level 5-6
    { id: 'c11', text: 'Oxidation state of O in H₂O?', answers: A('c11', '-2', ['+2', '0', '-1']), level: 5 },
    { id: 'c12', text: 'Le Chatelier\'s principle applies to:', answers: A('c12', 'Equilibrium systems', ['Kinetics only', 'Thermodynamics only', 'Nuclear reactions']), level: 5 },
    { id: 'c13', text: 'sp³ hybridization gives what geometry?', answers: A('c13', 'Tetrahedral', ['Linear', 'Trigonal planar', 'Octahedral']), level: 6 },
    { id: 'c14', text: 'ΔG < 0 means the reaction is:', answers: A('c14', 'Spontaneous', ['Non-spontaneous', 'At equilibrium', 'Impossible']), level: 6 },
    { id: 'c15', text: 'Hund\'s rule describes:', answers: A('c15', 'Electron filling order', ['Nuclear decay', 'Bond angles', 'Reaction rates']), level: 5 },
    // Level 7-8
    { id: 'c16', text: 'The Diels-Alder reaction is a:', answers: A('c16', '[4+2] cycloaddition', ['[2+2] cycloaddition', 'Elimination', 'Substitution']), level: 7 },
    { id: 'c17', text: 'Chirality requires:', answers: A('c17', 'Non-superimposable mirror images', ['Symmetry', 'Double bonds', 'Ionic bonds']), level: 7 },
    { id: 'c18', text: 'The Born-Oppenheimer approximation assumes:', answers: A('c18', 'Nuclei are stationary', ['Electrons are stationary', 'No interaction', 'Classical mechanics']), level: 8 },
    { id: 'c19', text: 'Marcus theory describes:', answers: A('c19', 'Electron transfer rates', ['Proton transfer', 'Nuclear reactions', 'Diffusion']), level: 8 },
    { id: 'c20', text: 'Woodward-Hoffmann rules predict:', answers: A('c20', 'Pericyclic reaction outcomes', ['Acid-base equilibria', 'Redox potentials', 'Solubility']), level: 8 },
  ],
  javascript: [
    // Level 1-2
    { id: 'j1', text: 'typeof "hello" is …', answers: A('j1', 'string', ['text', 'String', 'char']), level: 1 },
    { id: 'j2', text: 'Array.isArray([]) returns …', answers: A('j2', 'true', ['false', '[]', 'undefined']), level: 2 },
    { id: 'j3', text: 'Strict equality operator is …', answers: A('j3', '===', ['==', '=>', '!==']), level: 2 },
    { id: 'j4', text: 'console.log outputs to:', answers: A('j4', 'Console', ['Screen', 'File', 'Network']), level: 1 },
    { id: 'j5', text: 'let vs var: let is:', answers: A('j5', 'Block-scoped', ['Function-scoped', 'Global', 'Constant']), level: 2 },
    // Level 3-4
    { id: 'j6', text: 'typeof null is …', answers: A('j6', 'object', ['null', 'undefined', 'string']), level: 3 },
    { id: 'j7', text: 'NaN === NaN evaluates to …', answers: A('j7', 'false', ['true', 'TypeError', '0']), level: 4 },
    { id: 'j8', text: '"use strict" enables:', answers: A('j8', 'Strict mode', ['ES6', 'TypeScript', 'Debugging']), level: 3 },
    { id: 'j9', text: 'Promise.all resolves when:', answers: A('j9', 'All promises resolve', ['First resolves', 'Any resolves', 'Last resolves']), level: 4 },
    { id: 'j10', text: 'Arrow functions don\'t have their own:', answers: A('j10', 'this', ['return', 'arguments only', 'scope']), level: 4 },
    // Level 5-6
    { id: 'j11', text: 'Event loop processes:', answers: A('j11', 'Callback queue after stack empties', ['Stack first always', 'Queue first always', 'Randomly']), level: 5 },
    { id: 'j12', text: 'WeakMap keys must be:', answers: A('j12', 'Objects', ['Strings', 'Numbers', 'Any type']), level: 5 },
    { id: 'j13', text: 'Proxy can intercept:', answers: A('j13', 'Object operations', ['Only get/set', 'Only functions', 'Primitives']), level: 6 },
    { id: 'j14', text: 'Symbol.iterator is used for:', answers: A('j14', 'Custom iteration', ['Symbol creation', 'Type checking', 'Comparison']), level: 6 },
    { id: 'j15', text: 'Generator functions use:', answers: A('j15', 'yield keyword', ['return only', 'async only', 'await only']), level: 5 },
    // Level 7-8
    { id: 'j16', text: 'Tail call optimization requires:', answers: A('j16', 'Return to be the call', ['Recursion depth', 'Strict mode only', 'Arrow functions']), level: 7 },
    { id: 'j17', text: 'SharedArrayBuffer is used for:', answers: A('j17', 'Shared memory between workers', ['File sharing', 'Network buffers', 'DOM manipulation']), level: 7 },
    { id: 'j18', text: 'Reflect.construct vs new:', answers: A('j18', 'Can specify newTarget', ['Identical', 'Faster', 'For classes only']), level: 8 },
    { id: 'j19', text: 'FinalizationRegistry is for:', answers: A('j19', 'Cleanup after GC', ['Memory allocation', 'Promise handling', 'Event cleanup']), level: 8 },
    { id: 'j20', text: 'Atomics.wait is used for:', answers: A('j20', 'Thread synchronization', ['Async waiting', 'Promise chaining', 'Event handling']), level: 8 },
  ],
  geography: [
    // Level 1-2
    { id: 'g1', text: 'Capital of France is …', answers: A('g1', 'Paris', ['Lyon', 'Marseille', 'Nice']), level: 1 },
    { id: 'g2', text: 'Largest ocean is …', answers: A('g2', 'Pacific', ['Atlantic', 'Indian', 'Arctic']), level: 1 },
    { id: 'g3', text: 'The Sahara is a …', answers: A('g3', 'desert', ['river', 'lake', 'plateau']), level: 1 },
    { id: 'g4', text: 'How many continents?', answers: A('g4', '7', ['5', '6', '8']), level: 1 },
    { id: 'g5', text: 'Longest river in the world?', answers: A('g5', 'Nile', ['Amazon', 'Yangtze', 'Mississippi']), level: 2 },
    // Level 3-4
    { id: 'g6', text: 'The Nile flows into which sea?', answers: A('g6', 'Mediterranean', ['Black Sea', 'Red Sea', 'Arabian Sea']), level: 3 },
    { id: 'g7', text: 'Mount Everest lies in …', answers: A('g7', 'Himalayas', ['Andes', 'Alps', 'Rockies']), level: 3 },
    { id: 'g8', text: 'Capital of Australia?', answers: A('g8', 'Canberra', ['Sydney', 'Melbourne', 'Brisbane']), level: 4 },
    { id: 'g9', text: 'Smallest country by area?', answers: A('g9', 'Vatican City', ['Monaco', 'San Marino', 'Liechtenstein']), level: 4 },
    { id: 'g10', text: 'The Amazon rainforest is mostly in:', answers: A('g10', 'Brazil', ['Peru', 'Colombia', 'Venezuela']), level: 3 },
    // Level 5-6
    { id: 'g11', text: 'Deepest ocean trench?', answers: A('g11', 'Mariana Trench', ['Java Trench', 'Puerto Rico Trench', 'Philippine Trench']), level: 5 },
    { id: 'g12', text: 'The Tigris and Euphrates are in:', answers: A('g12', 'Mesopotamia/Iraq', ['Egypt', 'India', 'China']), level: 5 },
    { id: 'g13', text: 'The Ring of Fire is:', answers: A('g13', 'Pacific volcanic belt', ['Atlantic ridge', 'Arctic circle', 'Saharan region']), level: 6 },
    { id: 'g14', text: 'Pangaea was:', answers: A('g14', 'A supercontinent', ['An ocean', 'A mountain range', 'A desert']), level: 5 },
    { id: 'g15', text: 'The Coriolis effect causes:', answers: A('g15', 'Wind deflection', ['Tides', 'Earthquakes', 'Volcanic eruptions']), level: 6 },
    // Level 7-8
    { id: 'g16', text: 'The Laurentide Ice Sheet covered:', answers: A('g16', 'North America', ['Europe', 'Asia', 'Antarctica']), level: 7 },
    { id: 'g17', text: 'Isostatic rebound occurs after:', answers: A('g17', 'Ice sheet melting', ['Earthquakes', 'Volcanic eruptions', 'Tsunamis']), level: 7 },
    { id: 'g18', text: 'The Hadley cell extends to about:', answers: A('g18', '30° latitude', ['60° latitude', '90° latitude', '15° latitude']), level: 8 },
    { id: 'g19', text: 'Milankovitch cycles affect:', answers: A('g19', 'Earth\'s climate via orbital variations', ['Tides', 'Magnetic field', 'Plate tectonics']), level: 8 },
    { id: 'g20', text: 'The ITCZ is:', answers: A('g20', 'Intertropical Convergence Zone', ['A tectonic plate', 'An ocean current', 'A mountain belt']), level: 7 },
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
    level: q.level,
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

// Difficulty to question level mapping
const DIFFICULTY_LEVEL_RANGE: Record<Difficulty, { min: number; max: number }> = {
  'very easy': { min: 1, max: 2 },
  'easy': { min: 1, max: 3 },
  'intermediate': { min: 2, max: 4 },
  'normal': { min: 3, max: 5 },
  'hard': { min: 4, max: 6 },
  'very hard': { min: 5, max: 7 },
  'legendary': { min: 6, max: 8 },
  'professor': { min: 7, max: 8 },
};

// Question count per difficulty
const DIFFICULTY_QUESTION_COUNT: Record<Difficulty, number> = {
  'very easy': 10,
  'easy': 20,
  'intermediate': 30,
  'normal': 40,
  'hard': 50,
  'very hard': 60,
  'legendary': 70,
  'professor': 100,
};

// Get questions filtered by difficulty level
export function getQuestionsForDifficulty(
  categoryId: string,
  difficulty: Difficulty,
  l: Locale = lang(),
): Question[] {
  const range = DIFFICULTY_LEVEL_RANGE[difficulty];
  const count = DIFFICULTY_QUESTION_COUNT[difficulty];
  const allQuestions = bankFor(categoryId, l);

  // Filter questions by level range
  const filtered = allQuestions.filter(q => {
    const level = q.level ?? 1;
    return level >= range.min && level <= range.max;
  });

  // Shuffle and take required count (or all if not enough)
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  // If we don't have enough questions, repeat them to fill the count
  const result: Question[] = [];
  while (result.length < count) {
    const remaining = count - result.length;
    const batch = shuffled.slice(0, Math.min(remaining, shuffled.length));
    result.push(...batch.map((q, i) => ({
      ...q,
      id: `${q.id}-${result.length + i}`,
    })));
    if (batch.length === 0) break; // Safety: prevent infinite loop if no questions
  }

  return result;
}

export { CATEGORIES };
