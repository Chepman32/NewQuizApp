import { store } from '../state/store';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';

export type Locale = 'en' | 'ru' | 'de' | 'ko' | 'pt' | 'es' | 'fr' | 'zh';

type Dict = Record<string, string>;

type Bundle = Record<Locale, Dict>;

const base: Dict = {
  home_title: 'Home',
  quizzes: 'Quizzes',
  premium: 'Premium',
  settings_tab: 'Settings',
  progress: 'Progress',

  welcome_back: 'Welcome back',
  category: 'Category',
  start_quiz: 'Start Quiz',
  start_quiz_title: 'Start Quiz',
  quiz_title: 'Quiz',
  results_title: 'Results',
  select_difficulty: 'Select difficulty',
  overview: 'Overview',
  themes: 'Themes',
  requirements_to_pass: 'Requirements to pass',
  sample_questions: 'Sample Questions',
  question_progress: 'Question %d / %d',
  use_hint: 'Use hint',
  confirm_answer: 'Confirm answer',
  your_results: 'Your Results',
  correct: 'Correct',
  incorrect: 'Incorrect',
  time: 'Time',
  play_again: 'Play Again',
  back_to_category: 'Back to Category',

  settings: 'Settings',
  preferences: 'Preferences',
  language: 'Language',
  sound_effects: 'Sound Effects',
  haptic_feedback: 'Haptic Feedback',
  require_answer_confirmation: 'Require answer confirmation',
  developer_tools: 'Developer tools',
  add_20_hints: 'Add 20 hints',
  hints: 'Hints',
  hints_balance: 'Hints balance',

  // Progress
  quizzes_completed: 'Quizzes Completed',
  questions_answered: 'Questions Answered',
  accuracy: 'Accuracy',
  time_played: 'Time Played',

  // Quiz modal
  eliminate_two: 'Eliminate 2 incorrect answers',
  reveal_correct: 'Highlight the correct answer',
  no_hints_message: 'No hints available or limit reached (2 per question).',
  premium_required_prof: 'Premium required for Professor',

  // Table headers
  question: 'Question',
  chosen_answer: 'Chosen answer',
  correct_answer: 'Correct answer',

  // Theme texts
  basics: 'Basics',
  basics_desc: 'Overview of fundamental ideas',
  pitfalls: 'Common pitfalls',
  pitfalls_desc: 'Typical mistakes and how to avoid them',
  req_score: 'Score 70%+',
  req_time: 'Finish within estimated time',
  action_single_choice: 'Single-choice questions',

  // Premium screen
  unlock_premium_title: 'Unlock Premium',
  unlock_premium_sub: 'Unlock all premium content\nand Professor difficulty.',
  unlock_premium_cta: 'Unlock Premium',
  what_you_get: 'What you get',
  premium_bullet_prof: 'Professor difficulty unlocked',
  premium_bullet_all: 'Access to all premium quizzes',
  premium_bullet_future: 'Future hint packs and perks',
};

const bundles: Bundle = {
  en: base,
  ru: {
    ...base,
    home_title: 'Главная',
    quizzes: 'Викторины',
    premium: 'Премиум',
    settings_tab: 'Настройки',
    progress: 'Прогресс',
    welcome_back: 'С возвращением',
    start_quiz: 'Начать викторину',
    start_quiz_title: 'Начать викторину',
    quiz_title: 'Викторина',
    results_title: 'Результаты',
    select_difficulty: 'Выберите сложность',
    overview: 'Обзор',
    themes: 'Темы',
    requirements_to_pass: 'Требования для прохождения',
    sample_questions: 'Пример вопросов',
    question_progress: 'Вопрос %d / %d',
    use_hint: 'Использовать подсказку',
    confirm_answer: 'Подтвердить ответ',
    your_results: 'Ваши результаты',
    correct: 'Верно',
    incorrect: 'Неверно',
    time: 'Время',
    play_again: 'Играть снова',
    back_to_category: 'Назад к категории',
    preferences: 'Предпочтения',
    language: 'Язык',
    sound_effects: 'Звуковые эффекты',
    haptic_feedback: 'Тактильная отдача',
    require_answer_confirmation: 'Требовать подтверждение ответа',
    developer_tools: 'Инструменты разработчика',
    add_20_hints: 'Добавить 20 подсказок',
    hints: 'Подсказки',
    hints_balance: 'Баланс подсказок',
    quizzes_completed: 'Завершено викторин',
    questions_answered: 'Отвечено вопросов',
    accuracy: 'Точность',
    time_played: 'Время в игре',
    eliminate_two: 'Исключить 2 неверных ответа',
    reveal_correct: 'Показать правильный ответ',
    no_hints_message: 'Нет подсказок или достигнут лимит (2 на вопрос).',
    premium_required_prof: 'Премиум требуется для уровня Профессор',
    question: 'Вопрос',
    chosen_answer: 'Выбранный ответ',
    correct_answer: 'Правильный ответ',
    basics: 'Основы',
    basics_desc: 'Обзор фундаментальных идей',
    pitfalls: 'Типичные ошибки',
    pitfalls_desc: 'Как избежать распространённых ошибок',
    req_score: 'Наберите 70%+',
    req_time: 'Уложитесь в отведённое время',
    action_single_choice: 'Выбор одного варианта',
    unlock_premium_title: 'Открыть Премиум',
    unlock_premium_sub: 'Откройте весь премиум‑контент\nи уровень «Профессор».',
    unlock_premium_cta: 'Открыть Премиум',
    what_you_get: 'Что вы получите',
    premium_bullet_prof: 'Доступ к уровню «Профессор»',
    premium_bullet_all: 'Все премиум‑викторины',
    premium_bullet_future: 'Будущие пакеты подсказок и бонусы',
  },
  de: { ...base,
    home_title: 'Startseite', quizzes: 'Quizze', premium: 'Premium', settings_tab: 'Einstellungen', progress: 'Fortschritt',
    unlock_premium_title: 'Premium freischalten', unlock_premium_sub: 'Schalte alle Premium‑Inhalte\nund die Professor‑Stufe frei.', unlock_premium_cta: 'Premium freischalten', what_you_get: 'Das bekommst du', premium_bullet_prof: 'Professor‑Schwierigkeit freigeschaltet', premium_bullet_all: 'Zugang zu allen Premium‑Quizzen', premium_bullet_future: 'Zukünftige Hinweis‑Pakete und Extras' },
  ko: { ...base, home_title: '홈', quizzes: '퀴즈', premium: '프리미엄', settings_tab: '설정', progress: '진행도', unlock_premium_title: '프리미엄 해제', unlock_premium_sub: '모든 프리미엄 콘텐츠와\n교수 난이도를 해제하세요.', unlock_premium_cta: '프리미엄 해제', what_you_get: '혜택', premium_bullet_prof: '교수 난이도 해제', premium_bullet_all: '모든 프리미엄 퀴즈 접근', premium_bullet_future: '향후 힌트 팩과 특전' },
  pt: { ...base, home_title: 'Início', quizzes: 'Questionários', premium: 'Premium', settings_tab: 'Configurações', progress: 'Progresso', unlock_premium_title: 'Desbloquear Premium', unlock_premium_sub: 'Desbloqueie todo o conteúdo premium\ne a dificuldade Professor.', unlock_premium_cta: 'Desbloquear Premium', what_you_get: 'O que você ganha', premium_bullet_prof: 'Dificuldade Professor desbloqueada', premium_bullet_all: 'Acesso a todos os quizzes premium', premium_bullet_future: 'Futuros pacotes de dicas e benefícios' },
  es: { ...base, home_title: 'Inicio', quizzes: 'Cuestionarios', premium: 'Premium', settings_tab: 'Ajustes', progress: 'Progreso', unlock_premium_title: 'Desbloquear Premium', unlock_premium_sub: 'Desbloquea todo el contenido premium\ny la dificultad Profesor.', unlock_premium_cta: 'Desbloquear Premium', what_you_get: 'Lo que obtienes', premium_bullet_prof: 'Dificultad Profesor desbloqueada', premium_bullet_all: 'Acceso a todos los cuestionarios premium', premium_bullet_future: 'Futuros paquetes de pistas y ventajas' },
  fr: { ...base, home_title: 'Accueil', quizzes: 'Quiz', premium: 'Premium', settings_tab: 'Réglages', progress: 'Progression', unlock_premium_title: 'Débloquer Premium', unlock_premium_sub: 'Débloquez tout le contenu Premium\net la difficulté Professeur.', unlock_premium_cta: 'Débloquer Premium', what_you_get: 'Ce que vous obtenez', premium_bullet_prof: 'Difficulté Professeur débloquée', premium_bullet_all: 'Accès à tous les quiz Premium', premium_bullet_future: 'Futurs packs d’indices et avantages' },
  zh: { ...base, home_title: '首页', quizzes: '测验', premium: '高级', settings_tab: '设置', progress: '进度', unlock_premium_title: '解锁高级版', unlock_premium_sub: '解锁所有高级内容\n和“教授”难度。', unlock_premium_cta: '解锁高级版', what_you_get: '你将获得', premium_bullet_prof: '解锁“教授”难度', premium_bullet_all: '访问全部高级测验', premium_bullet_future: '未来提示包和特权' },
};

export function t(key: string): string {
  const state = store.getState();
  const lang = (state as any)?.app?.language as Locale | undefined;
  const dict = (lang && bundles[lang]) || bundles.en;
  return dict[key] || bundles.en[key] || key;
}

export function useT() {
  const lang = useSelector((s: RootState) => s.app.language) as Locale;
  const dict = (lang && bundles[lang]) || bundles.en;
  return (key: string) => dict[key] || bundles.en[key] || key;
}

export function useTf() {
  const tt = useT();
  return (key: string, ...nums: (string | number)[]) => {
    let s = tt(key);
    nums.forEach((n) => {
      s = s.replace('%d', String(n));
    });
    return s;
  };
}

// Helpers to localize dynamic labels
export function tn(key: string, n: number): string {
  // naive pluralization; can be enhanced
  const label = t(key);
  return label.replace('%d', String(n));
}