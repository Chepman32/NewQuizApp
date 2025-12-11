import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const philosophyQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'phi1',
    text: 'What is philosophy?',
    answers: A('phi1', 'Love of wisdom', [
      'Love of science',
      'Love of art',
      'Love of history',
    ]),
    level: 1,
  },
  {
    id: 'phi2',
    text: 'Who was Socrates?',
    answers: A('phi2', 'Ancient Greek philosopher', [
      'Roman emperor',
      'Egyptian pharaoh',
      'Persian king',
    ]),
    level: 1,
  },
  {
    id: 'phi3',
    text: 'Who was Plato?',
    answers: A('phi3', 'Student of Socrates', [
      'Student of Aristotle',
      'Teacher of Socrates',
      'Roman philosopher',
    ]),
    level: 1,
  },
  {
    id: 'phi4',
    text: 'Who was Aristotle?',
    answers: A('phi4', 'Student of Plato', [
      'Student of Socrates',
      'Teacher of Plato',
      'Roman philosopher',
    ]),
    level: 1,
  },
  {
    id: 'phi5',
    text: 'What is ethics?',
    answers: A('phi5', 'Study of right and wrong', [
      'Study of knowledge',
      'Study of reality',
      'Study of beauty',
    ]),
    level: 1,
  },
  {
    id: 'phi6',
    text: 'What is logic?',
    answers: A('phi6', 'Study of valid reasoning', [
      'Study of emotions',
      'Study of history',
      'Study of art',
    ]),
    level: 1,
  },
  {
    id: 'phi7',
    text: 'What is metaphysics?',
    answers: A('phi7', 'Study of reality and existence', [
      'Study of ethics',
      'Study of logic',
      'Study of beauty',
    ]),
    level: 1,
  },
  {
    id: 'phi8',
    text: 'What is epistemology?',
    answers: A('phi8', 'Study of knowledge', [
      'Study of ethics',
      'Study of reality',
      'Study of beauty',
    ]),
    level: 1,
  },
  {
    id: 'phi9',
    text: 'What is aesthetics?',
    answers: A('phi9', 'Study of beauty and art', [
      'Study of ethics',
      'Study of knowledge',
      'Study of reality',
    ]),
    level: 1,
  },
  {
    id: 'phi10',
    text: 'What did Socrates say about wisdom?',
    answers: A('phi10', 'I know that I know nothing', [
      'I know everything',
      'Knowledge is power',
      'Wisdom is wealth',
    ]),
    level: 1,
  },
  {
    id: 'phi11',
    text: 'What is the Socratic method?',
    answers: A('phi11', 'Learning through questioning', [
      'Learning through reading',
      'Learning through memorization',
      'Learning through observation',
    ]),
    level: 2,
  },
  {
    id: 'phi12',
    text: "What is Plato's Theory of Forms?",
    answers: A('phi12', 'Perfect ideals exist beyond physical world', [
      'Only physical world exists',
      'Forms are physical',
      'No ideals exist',
    ]),
    level: 2,
  },
  {
    id: 'phi13',
    text: 'What is the Allegory of the Cave?',
    answers: A('phi13', "Plato's metaphor for enlightenment", [
      "Aristotle's logic",
      "Socrates' trial",
      'Greek mythology',
    ]),
    level: 2,
  },
  {
    id: 'phi14',
    text: 'Who said "I think, therefore I am"?',
    answers: A('phi14', 'René Descartes', ['Plato', 'Aristotle', 'Socrates']),
    level: 2,
  },
  {
    id: 'phi15',
    text: 'What is rationalism?',
    answers: A('phi15', 'Knowledge through reason', [
      'Knowledge through senses',
      'Knowledge through faith',
      'Knowledge through intuition',
    ]),
    level: 2,
  },
  {
    id: 'phi16',
    text: 'What is empiricism?',
    answers: A('phi16', 'Knowledge through experience', [
      'Knowledge through reason',
      'Knowledge through faith',
      'Knowledge through intuition',
    ]),
    level: 2,
  },
  {
    id: 'phi17',
    text: 'Who was John Locke?',
    answers: A('phi17', 'British empiricist philosopher', [
      'French rationalist',
      'German idealist',
      'Greek philosopher',
    ]),
    level: 2,
  },
  {
    id: 'phi18',
    text: 'What is the "tabula rasa"?',
    answers: A('phi18', 'Blank slate - mind at birth', [
      'Full mind at birth',
      'Innate ideas',
      'Divine knowledge',
    ]),
    level: 2,
  },
  {
    id: 'phi19',
    text: 'Who was Immanuel Kant?',
    answers: A('phi19', 'German philosopher', [
      'French philosopher',
      'British philosopher',
      'Greek philosopher',
    ]),
    level: 2,
  },
  {
    id: 'phi20',
    text: 'What is the categorical imperative?',
    answers: A('phi20', "Kant's moral principle", [
      "Plato's theory",
      "Aristotle's logic",
      "Socrates' method",
    ]),
    level: 2,
  },
  {
    id: 'phi21',
    text: 'What is utilitarianism?',
    answers: A('phi21', 'Greatest good for greatest number', [
      'Individual rights first',
      'Duty-based ethics',
      'Virtue ethics',
    ]),
    level: 2,
  },
  {
    id: 'phi22',
    text: 'Who founded utilitarianism?',
    answers: A('phi22', 'Jeremy Bentham', [
      'John Stuart Mill',
      'Immanuel Kant',
      'Aristotle',
    ]),
    level: 2,
  },
  {
    id: 'phi23',
    text: 'What is existentialism?',
    answers: A('phi23', 'Philosophy emphasizing individual existence', [
      'Focus on society',
      'Focus on logic',
      'Focus on science',
    ]),
    level: 2,
  },
  {
    id: 'phi24',
    text: 'Who said "existence precedes essence"?',
    answers: A('phi24', 'Jean-Paul Sartre', [
      'Albert Camus',
      'Friedrich Nietzsche',
      'Martin Heidegger',
    ]),
    level: 2,
  },
  {
    id: 'phi25',
    text: 'What is nihilism?',
    answers: A('phi25', 'Belief that life has no meaning', [
      'Belief in God',
      'Belief in progress',
      'Belief in reason',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'phi26',
    text: 'What is the problem of evil?',
    answers: A('phi26', 'How can evil exist if God is good?', [
      'Why is there good?',
      'What is evil?',
      'Who created evil?',
    ]),
    level: 3,
  },
  {
    id: 'phi27',
    text: 'What is determinism?',
    answers: A('phi27', 'All events are caused by prior events', [
      'Free will exists',
      'Random events occur',
      'No causation exists',
    ]),
    level: 3,
  },
  {
    id: 'phi28',
    text: 'What is free will?',
    answers: A('phi28', 'Ability to choose freely', [
      'All is determined',
      'No choices exist',
      'Random behavior',
    ]),
    level: 3,
  },
  {
    id: 'phi29',
    text: 'What is compatibilism?',
    answers: A('phi29', 'Free will and determinism can coexist', [
      'They cannot coexist',
      'Only free will exists',
      'Only determinism exists',
    ]),
    level: 3,
  },
  {
    id: 'phi30',
    text: 'What is the mind-body problem?',
    answers: A('phi30', 'Relationship between mind and body', [
      'Problem of evil',
      'Problem of knowledge',
      'Problem of ethics',
    ]),
    level: 3,
  },
  {
    id: 'phi31',
    text: 'What is dualism?',
    answers: A('phi31', 'Mind and body are separate substances', [
      'Mind and body are one',
      'Only body exists',
      'Only mind exists',
    ]),
    level: 3,
  },
  {
    id: 'phi32',
    text: 'What is materialism?',
    answers: A('phi32', 'Only physical matter exists', [
      'Mind is separate',
      'Spirit exists',
      'Ideas are primary',
    ]),
    level: 3,
  },
  {
    id: 'phi33',
    text: 'What is idealism?',
    answers: A('phi33', 'Reality is fundamentally mental', [
      'Reality is physical',
      'Reality is both',
      'Reality is neither',
    ]),
    level: 3,
  },
  {
    id: 'phi34',
    text: 'Who was Friedrich Nietzsche?',
    answers: A('phi34', 'German philosopher who declared "God is dead"', [
      'French existentialist',
      'British empiricist',
      'Greek philosopher',
    ]),
    level: 3,
  },
  {
    id: 'phi35',
    text: 'What is the Übermensch?',
    answers: A('phi35', "Nietzsche's ideal of self-overcoming", [
      'Greek god',
      'Roman emperor',
      'Christian saint',
    ]),
    level: 4,
  },
  {
    id: 'phi36',
    text: 'What is the will to power?',
    answers: A('phi36', "Nietzsche's concept of fundamental drive", [
      'Political power',
      'Physical strength',
      'Wealth accumulation',
    ]),
    level: 4,
  },
  {
    id: 'phi37',
    text: 'What is phenomenology?',
    answers: A('phi37', 'Study of structures of experience', [
      'Study of phenomena',
      'Study of logic',
      'Study of ethics',
    ]),
    level: 4,
  },
  {
    id: 'phi38',
    text: 'Who founded phenomenology?',
    answers: A('phi38', 'Edmund Husserl', [
      'Martin Heidegger',
      'Jean-Paul Sartre',
      'Maurice Merleau-Ponty',
    ]),
    level: 4,
  },
  {
    id: 'phi39',
    text: 'What is hermeneutics?',
    answers: A('phi39', 'Theory of interpretation', [
      'Theory of knowledge',
      'Theory of ethics',
      'Theory of logic',
    ]),
    level: 4,
  },
  {
    id: 'phi40',
    text: 'What is pragmatism?',
    answers: A('phi40', 'Truth is what works in practice', [
      'Truth is absolute',
      'Truth is relative',
      'Truth is unknowable',
    ]),
    level: 4,
  },
  {
    id: 'phi41',
    text: 'Who founded pragmatism?',
    answers: A('phi41', 'Charles Sanders Peirce', [
      'William James',
      'John Dewey',
      'Richard Rorty',
    ]),
    level: 4,
  },
  {
    id: 'phi42',
    text: 'What is logical positivism?',
    answers: A('phi42', 'Only verifiable statements are meaningful', [
      'All statements meaningful',
      'No statements meaningful',
      'Only religious statements meaningful',
    ]),
    level: 4,
  },
  {
    id: 'phi43',
    text: 'What is the verification principle?',
    answers: A('phi43', 'Meaning requires empirical verification', [
      'Meaning is innate',
      'Meaning is arbitrary',
      'Meaning is divine',
    ]),
    level: 4,
  },
  {
    id: 'phi44',
    text: 'Who was Ludwig Wittgenstein?',
    answers: A('phi44', 'Austrian-British philosopher of language', [
      'German idealist',
      'French existentialist',
      'American pragmatist',
    ]),
    level: 4,
  },
  {
    id: 'phi45',
    text: 'What are language games?',
    answers: A('phi45', "Wittgenstein's concept of language use", [
      "Children's games",
      'Word puzzles',
      'Grammar rules',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'phi46',
    text: 'What is the private language argument?',
    answers: A('phi46', 'Language requires public criteria', [
      'Language is private',
      'Language is innate',
      'Language is divine',
    ]),
    level: 5,
  },
  {
    id: 'phi47',
    text: 'What is the Gettier problem?',
    answers: A('phi47', 'Challenge to justified true belief as knowledge', [
      'Problem of evil',
      'Mind-body problem',
      'Free will problem',
    ]),
    level: 5,
  },
  {
    id: 'phi48',
    text: 'What is reliabilism?',
    answers: A('phi48', 'Knowledge requires reliable belief-forming process', [
      'Knowledge requires certainty',
      'Knowledge requires justification',
      'Knowledge requires truth',
    ]),
    level: 5,
  },
  {
    id: 'phi49',
    text: 'What is virtue epistemology?',
    answers: A('phi49', 'Knowledge requires intellectual virtues', [
      'Knowledge requires evidence',
      'Knowledge requires certainty',
      'Knowledge requires truth',
    ]),
    level: 5,
  },
  {
    id: 'phi50',
    text: 'What is the trolley problem?',
    answers: A('phi50', 'Ethical dilemma about sacrificing one to save many', [
      'Transportation problem',
      'Economic problem',
      'Political problem',
    ]),
    level: 5,
  },
  {
    id: 'phi51',
    text: 'What is deontological ethics?',
    answers: A('phi51', 'Ethics based on duty and rules', [
      'Ethics based on consequences',
      'Ethics based on virtue',
      'Ethics based on feelings',
    ]),
    level: 6,
  },
  {
    id: 'phi52',
    text: 'What is consequentialism?',
    answers: A('phi52', 'Ethics based on outcomes', [
      'Ethics based on duty',
      'Ethics based on virtue',
      'Ethics based on feelings',
    ]),
    level: 6,
  },
  {
    id: 'phi53',
    text: 'What is virtue ethics?',
    answers: A('phi53', 'Ethics based on character', [
      'Ethics based on duty',
      'Ethics based on consequences',
      'Ethics based on feelings',
    ]),
    level: 6,
  },
  {
    id: 'phi54',
    text: 'What is the veil of ignorance?',
    answers: A('phi54', "Rawls' thought experiment for justice", [
      "Plato's cave",
      "Descartes' demon",
      "Kant's imperative",
    ]),
    level: 6,
  },
  {
    id: 'phi55',
    text: 'Who wrote "A Theory of Justice"?',
    answers: A('phi55', 'John Rawls', [
      'Robert Nozick',
      'Michael Sandel',
      'Alasdair MacIntyre',
    ]),
    level: 6,
  },
  {
    id: 'phi56',
    text: 'What is the difference principle?',
    answers: A('phi56', 'Inequalities must benefit the least advantaged', [
      'Equality for all',
      'Merit-based distribution',
      'Random distribution',
    ]),
    level: 7,
  },
  {
    id: 'phi57',
    text: 'What is libertarianism in political philosophy?',
    answers: A('phi57', 'Emphasis on individual liberty and minimal state', [
      'Strong state control',
      'Collective ownership',
      'Anarchism',
    ]),
    level: 7,
  },
  {
    id: 'phi58',
    text: 'What is communitarianism?',
    answers: A('phi58', 'Emphasis on community and shared values', [
      'Individualism',
      'Libertarianism',
      'Anarchism',
    ]),
    level: 7,
  },
  {
    id: 'phi59',
    text: 'What is the fact-value distinction?',
    answers: A('phi59', 'Separation of descriptive and normative claims', [
      'Facts equal values',
      'No facts exist',
      'No values exist',
    ]),
    level: 7,
  },
  {
    id: 'phi60',
    text: 'What is the naturalistic fallacy?',
    answers: A('phi60', 'Deriving ought from is', [
      'Deriving is from ought',
      'No fallacy',
      'Logical fallacy',
    ]),
    level: 7,
  },
  {
    id: 'phi61',
    text: 'What is the open question argument?',
    answers: A('phi61', "Moore's argument against naturalism in ethics", [
      'Argument for naturalism',
      'Argument about logic',
      'Argument about knowledge',
    ]),
    level: 8,
  },
  {
    id: 'phi62',
    text: 'What is moral realism?',
    answers: A('phi62', 'Moral facts exist independently', [
      'Morals are subjective',
      'Morals are relative',
      "Morals don't exist",
    ]),
    level: 8,
  },
  {
    id: 'phi63',
    text: 'What is moral anti-realism?',
    answers: A('phi63', 'Denial of objective moral facts', [
      'Moral facts exist',
      'Morals are absolute',
      'Morals are divine',
    ]),
    level: 8,
  },
  {
    id: 'phi64',
    text: 'What is expressivism?',
    answers: A('phi64', 'Moral statements express attitudes', [
      'Moral statements describe facts',
      'Moral statements are commands',
      'Moral statements are meaningless',
    ]),
    level: 8,
  },
  {
    id: 'phi65',
    text: 'What is the hard problem of consciousness?',
    answers: A('phi65', 'Explaining subjective experience', [
      'Explaining behavior',
      'Explaining brain function',
      'Explaining evolution',
    ]),
    level: 8,
  },

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'phi66',
    text: 'What is philosophy?',
    answers: A('phi66', 'Study of fundamental questions', [
      'Study of history',
      'Study of science',
      'Study of art',
    ]),
    level: 1,
  },
  {
    id: 'phi67',
    text: 'What is a question?',
    answers: A('phi67', 'Request for information', [
      'Statement',
      'Command',
      'Exclamation',
    ]),
    level: 1,
  },
  {
    id: 'phi68',
    text: 'What is thinking?',
    answers: A('phi68', 'Mental activity', [
      'Physical activity',
      'No activity',
      'Random activity',
    ]),
    level: 1,
  },
  {
    id: 'phi69',
    text: 'What is truth?',
    answers: A('phi69', 'What corresponds to reality', [
      'What is false',
      'What is unknown',
      'What is random',
    ]),
    level: 1,
  },
  {
    id: 'phi70',
    text: 'What is a lie?',
    answers: A('phi70', 'Intentionally false statement', [
      'True statement',
      'Question',
      'Command',
    ]),
    level: 1,
  },
  {
    id: 'phi71',
    text: 'What is right and wrong?',
    answers: A('phi71', 'Moral categories', [
      'Color categories',
      'Size categories',
      'Shape categories',
    ]),
    level: 1,
  },
  {
    id: 'phi72',
    text: 'What is fairness?',
    answers: A('phi72', 'Treating people equally', [
      'Treating people unequally',
      'Ignoring people',
      'Random treatment',
    ]),
    level: 1,
  },
  {
    id: 'phi73',
    text: 'What is happiness?',
    answers: A('phi73', 'State of well-being', [
      'State of suffering',
      'No state',
      'Random state',
    ]),
    level: 1,
  },
  {
    id: 'phi74',
    text: 'What is wisdom?',
    answers: A('phi74', 'Good judgment from experience', [
      'Ignorance',
      'Youth',
      'Speed',
    ]),
    level: 1,
  },
  {
    id: 'phi75',
    text: 'What is knowledge?',
    answers: A('phi75', 'Justified true belief', [
      'Random belief',
      'False belief',
      'No belief',
    ]),
    level: 1,
  },
  {
    id: 'phi76',
    text: 'What is ethics?',
    answers: A('phi76', 'Study of right and wrong', [
      'Study of beauty',
      'Study of truth',
      'Study of existence',
    ]),
    level: 2,
  },
  {
    id: 'phi77',
    text: 'What is logic?',
    answers: A('phi77', 'Study of valid reasoning', [
      'Study of emotions',
      'Study of art',
      'Study of history',
    ]),
    level: 2,
  },
  {
    id: 'phi78',
    text: 'What is metaphysics?',
    answers: A('phi78', 'Study of reality and existence', [
      'Study of ethics',
      'Study of logic',
      'Study of beauty',
    ]),
    level: 2,
  },
  {
    id: 'phi79',
    text: 'What is epistemology?',
    answers: A('phi79', 'Study of knowledge', [
      'Study of ethics',
      'Study of beauty',
      'Study of existence',
    ]),
    level: 2,
  },
  {
    id: 'phi80',
    text: 'What is aesthetics?',
    answers: A('phi80', 'Study of beauty and art', [
      'Study of ethics',
      'Study of logic',
      'Study of knowledge',
    ]),
    level: 2,
  },
  {
    id: 'phi81',
    text: 'What is an argument?',
    answers: A('phi81', 'Reasons supporting a conclusion', [
      'Random statements',
      'Questions',
      'Commands',
    ]),
    level: 2,
  },
  {
    id: 'phi82',
    text: 'What is a premise?',
    answers: A('phi82', 'Statement supporting conclusion', [
      'Conclusion itself',
      'Question',
      'Command',
    ]),
    level: 2,
  },
  {
    id: 'phi83',
    text: 'What is a conclusion?',
    answers: A('phi83', 'Statement supported by premises', [
      'Premise itself',
      'Question',
      'Command',
    ]),
    level: 2,
  },
  {
    id: 'phi84',
    text: 'What is a valid argument?',
    answers: A('phi84', 'Conclusion follows from premises', [
      'Random conclusion',
      'No conclusion',
      'Opposite conclusion',
    ]),
    level: 2,
  },
  {
    id: 'phi85',
    text: 'What is a fallacy?',
    answers: A('phi85', 'Error in reasoning', [
      'Correct reasoning',
      'No reasoning',
      'Random reasoning',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'phi86',
    text: 'What is utilitarianism?',
    answers: A('phi86', 'Greatest good for greatest number', [
      'Individual good only',
      'No good',
      'Random good',
    ]),
    level: 3,
  },
  {
    id: 'phi87',
    text: 'What is deontology?',
    answers: A('phi87', 'Ethics based on duty and rules', [
      'Ethics based on consequences',
      'No ethics',
      'Random ethics',
    ]),
    level: 3,
  },
  {
    id: 'phi88',
    text: 'What is virtue ethics?',
    answers: A('phi88', 'Ethics based on character', [
      'Ethics based on rules',
      'Ethics based on consequences',
      'No ethics',
    ]),
    level: 3,
  },
  {
    id: 'phi89',
    text: 'What is the categorical imperative?',
    answers: A('phi89', 'Kant universal moral law', [
      'Hypothetical rule',
      'No rule',
      'Random rule',
    ]),
    level: 3,
  },
  {
    id: 'phi90',
    text: 'What is free will?',
    answers: A('phi90', 'Ability to choose freely', [
      'No choice',
      'Determined choice',
      'Random choice',
    ]),
    level: 3,
  },
  {
    id: 'phi91',
    text: 'What is determinism?',
    answers: A('phi91', 'All events are caused', [
      'No events caused',
      'Random events',
      'Free events',
    ]),
    level: 3,
  },
  {
    id: 'phi92',
    text: 'What is dualism?',
    answers: A('phi92', 'Mind and body are separate', [
      'Mind and body are one',
      'Only body exists',
      'Only mind exists',
    ]),
    level: 3,
  },
  {
    id: 'phi93',
    text: 'What is materialism?',
    answers: A('phi93', 'Only physical matter exists', [
      'Only mind exists',
      'Both exist separately',
      'Neither exists',
    ]),
    level: 3,
  },
  {
    id: 'phi94',
    text: 'What is idealism?',
    answers: A('phi94', 'Reality is mental', [
      'Reality is physical',
      'No reality',
      'Random reality',
    ]),
    level: 3,
  },
  {
    id: 'phi95',
    text: 'What is empiricism?',
    answers: A('phi95', 'Knowledge from experience', [
      'Knowledge from reason alone',
      'No knowledge',
      'Random knowledge',
    ]),
    level: 3,
  },
  {
    id: 'phi96',
    text: 'What is rationalism?',
    answers: A('phi96', 'Knowledge from reason', [
      'Knowledge from experience only',
      'No knowledge',
      'Random knowledge',
    ]),
    level: 4,
  },
  {
    id: 'phi97',
    text: 'What is skepticism?',
    answers: A('phi97', 'Doubting knowledge claims', [
      'Accepting all claims',
      'No claims',
      'Random claims',
    ]),
    level: 4,
  },
  {
    id: 'phi98',
    text: 'What is relativism?',
    answers: A('phi98', 'Truth depends on perspective', [
      'Absolute truth',
      'No truth',
      'Random truth',
    ]),
    level: 4,
  },
  {
    id: 'phi99',
    text: 'What is absolutism?',
    answers: A('phi99', 'Universal unchanging truths', [
      'Relative truths',
      'No truths',
      'Random truths',
    ]),
    level: 4,
  },
  {
    id: 'phi100',
    text: 'What is existentialism?',
    answers: A('phi100', 'Existence precedes essence', [
      'Essence precedes existence',
      'No existence',
      'No essence',
    ]),
    level: 4,
  },
  {
    id: 'phi101',
    text: 'What is nihilism?',
    answers: A('phi101', 'Life has no inherent meaning', [
      'Life has meaning',
      'Random meaning',
      'No concept',
    ]),
    level: 4,
  },
  {
    id: 'phi102',
    text: 'What is pragmatism?',
    answers: A('phi102', 'Truth is what works', [
      'Truth is absolute',
      'No truth',
      'Random truth',
    ]),
    level: 4,
  },
  {
    id: 'phi103',
    text: 'What is phenomenology?',
    answers: A('phi103', 'Study of conscious experience', [
      'Study of behavior',
      'Study of brain',
      'Study of society',
    ]),
    level: 4,
  },
  {
    id: 'phi104',
    text: 'What is hermeneutics?',
    answers: A('phi104', 'Theory of interpretation', [
      'Theory of truth',
      'Theory of ethics',
      'Theory of beauty',
    ]),
    level: 4,
  },
  {
    id: 'phi105',
    text: 'What is the problem of evil?',
    answers: A('phi105', 'Why evil exists if God is good', [
      'Why good exists',
      'No problem',
      'Random problem',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'phi106',
    text: 'What is the Trolley Problem?',
    answers: A('phi106', 'Ethical dilemma about sacrificing one to save many', [
      'Math problem',
      'Logic puzzle',
      'Science experiment',
    ]),
    level: 5,
  },
  {
    id: 'phi107',
    text: 'What is the veil of ignorance?',
    answers: A('phi107', 'Rawls thought experiment for justice', [
      'Actual blindness',
      'Ignorance of facts',
      'No concept',
    ]),
    level: 5,
  },
  {
    id: 'phi108',
    text: 'What is the social contract?',
    answers: A('phi108', 'Agreement forming society', [
      'Business contract',
      'Marriage contract',
      'No contract',
    ]),
    level: 5,
  },
  {
    id: 'phi109',
    text: 'What is the state of nature?',
    answers: A('phi109', 'Hypothetical pre-society condition', [
      'Actual nature',
      'Current society',
      'No concept',
    ]),
    level: 5,
  },
  {
    id: 'phi110',
    text: 'What is the Gettier problem?',
    answers: A('phi110', 'Challenge to justified true belief', [
      'Math problem',
      'Logic problem',
      'No problem',
    ]),
    level: 5,
  },
  {
    id: 'phi111',
    text: 'What is the Chinese Room argument?',
    answers: A('phi111', 'Searle argument against strong AI', [
      'Argument for AI',
      'No argument',
      'Random argument',
    ]),
    level: 6,
  },
  {
    id: 'phi112',
    text: 'What is the Ship of Theseus?',
    answers: A('phi112', 'Puzzle about identity over time', [
      'Actual ship',
      'No puzzle',
      'Random puzzle',
    ]),
    level: 6,
  },
  {
    id: 'phi113',
    text: 'What is the problem of induction?',
    answers: A('phi113', 'Justifying generalizations from experience', [
      'Math problem',
      'No problem',
      'Random problem',
    ]),
    level: 6,
  },
  {
    id: 'phi114',
    text: 'What is the is-ought problem?',
    answers: A('phi114', 'Deriving values from facts', [
      'Math problem',
      'No problem',
      'Random problem',
    ]),
    level: 6,
  },
  {
    id: 'phi115',
    text: 'What is the mind-body problem?',
    answers: A('phi115', 'How mind relates to body', [
      'Physical problem',
      'No problem',
      'Random problem',
    ]),
    level: 6,
  },
  {
    id: 'phi116',
    text: 'What is qualia?',
    answers: A('phi116', 'Subjective conscious experiences', [
      'Objective facts',
      'No experiences',
      'Random experiences',
    ]),
    level: 7,
  },
  {
    id: 'phi117',
    text: 'What is intentionality?',
    answers: A('phi117', 'Aboutness of mental states', [
      'Physical property',
      'No property',
      'Random property',
    ]),
    level: 7,
  },
  {
    id: 'phi118',
    text: 'What is supervenience?',
    answers: A('phi118', 'Dependence relation between properties', [
      'Independence',
      'No relation',
      'Random relation',
    ]),
    level: 7,
  },
  {
    id: 'phi119',
    text: 'What is functionalism?',
    answers: A('phi119', 'Mental states defined by function', [
      'Mental states defined by substance',
      'No mental states',
      'Random states',
    ]),
    level: 7,
  },
  {
    id: 'phi120',
    text: 'What is eliminative materialism?',
    answers: A('phi120', 'Folk psychology is false', [
      'Folk psychology is true',
      'No psychology',
      'Random psychology',
    ]),
    level: 7,
  },
  {
    id: 'phi121',
    text: 'What is the knowledge argument?',
    answers: A('phi121', 'Mary room argument against physicalism', [
      'Argument for physicalism',
      'No argument',
      'Random argument',
    ]),
    level: 8,
  },
  {
    id: 'phi122',
    text: 'What is the zombie argument?',
    answers: A('phi122', 'Conceivability argument against physicalism', [
      'Argument for physicalism',
      'No argument',
      'Random argument',
    ]),
    level: 8,
  },
  {
    id: 'phi123',
    text: 'What is modal realism?',
    answers: A('phi123', 'Possible worlds are real', [
      'Only actual world real',
      'No worlds real',
      'Random worlds',
    ]),
    level: 8,
  },
  {
    id: 'phi124',
    text: 'What is mereological nihilism?',
    answers: A('phi124', 'No composite objects exist', [
      'All composites exist',
      'Some composites',
      'Random composites',
    ]),
    level: 8,
  },
  {
    id: 'phi125',
    text: 'What is four-dimensionalism?',
    answers: A('phi125', 'Objects extend through time', [
      'Objects only in present',
      'No objects',
      'Random objects',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'phi126',
    text: 'What is philosophy?',
    answers: A('phi126', 'Study of fundamental questions', [
      'Study of numbers',
      'Study of animals',
      'Study of weather',
    ]),
    level: 1,
  },
  {
    id: 'phi127',
    text: 'What is a philosopher?',
    answers: A('phi127', 'Person who studies philosophy', [
      'Person who studies math',
      'Person who studies science',
      'Person who studies history',
    ]),
    level: 1,
  },
  {
    id: 'phi128',
    text: 'What is a question?',
    answers: A('phi128', 'Request for information', [
      'Statement',
      'Command',
      'Exclamation',
    ]),
    level: 1,
  },
  {
    id: 'phi129',
    text: 'What is an answer?',
    answers: A('phi129', 'Response to a question', [
      'Another question',
      'Silence',
      'Command',
    ]),
    level: 1,
  },
  {
    id: 'phi130',
    text: 'What is thinking?',
    answers: A('phi130', 'Using the mind to consider', [
      'Physical activity',
      'Sleeping',
      'Eating',
    ]),
    level: 1,
  },
  {
    id: 'phi131',
    text: 'What is an idea?',
    answers: A('phi131', 'Thought or concept', [
      'Physical object',
      'Sound',
      'Taste',
    ]),
    level: 1,
  },
  {
    id: 'phi132',
    text: 'What is truth?',
    answers: A('phi132', 'What is actually the case', [
      'What is false',
      'Opinion',
      'Guess',
    ]),
    level: 1,
  },
  {
    id: 'phi133',
    text: 'What is a lie?',
    answers: A('phi133', 'Statement known to be false', [
      'Truth',
      'Question',
      'Fact',
    ]),
    level: 1,
  },
  {
    id: 'phi134',
    text: 'What is right?',
    answers: A('phi134', 'Morally correct', [
      'Morally wrong',
      'Neutral',
      'Unknown',
    ]),
    level: 1,
  },
  {
    id: 'phi135',
    text: 'What is wrong?',
    answers: A('phi135', 'Morally incorrect', [
      'Morally correct',
      'Neutral',
      'Unknown',
    ]),
    level: 1,
  },
  {
    id: 'phi136',
    text: 'What is good?',
    answers: A('phi136', 'Positive or beneficial', [
      'Negative',
      'Neutral',
      'Unknown',
    ]),
    level: 1,
  },
  {
    id: 'phi137',
    text: 'What is bad?',
    answers: A('phi137', 'Negative or harmful', [
      'Positive',
      'Neutral',
      'Unknown',
    ]),
    level: 1,
  },
  {
    id: 'phi138',
    text: 'What is fair?',
    answers: A('phi138', 'Just and equal treatment', [
      'Unfair',
      'Random',
      'Unknown',
    ]),
    level: 1,
  },
  {
    id: 'phi139',
    text: 'What is unfair?',
    answers: A('phi139', 'Unjust treatment', ['Fair', 'Equal', 'Just']),
    level: 1,
  },
  {
    id: 'phi140',
    text: 'What is wisdom?',
    answers: A('phi140', 'Good judgment from experience', [
      'Foolishness',
      'Ignorance',
      'Youth',
    ]),
    level: 1,
  },
  {
    id: 'phi141',
    text: 'What is knowledge?',
    answers: A('phi141', 'Information and understanding', [
      'Ignorance',
      'Confusion',
      'Doubt',
    ]),
    level: 1,
  },
  {
    id: 'phi142',
    text: 'What is belief?',
    answers: A('phi142', 'Accepting something as true', [
      'Doubt',
      'Denial',
      'Rejection',
    ]),
    level: 1,
  },
  {
    id: 'phi143',
    text: 'What is doubt?',
    answers: A('phi143', 'Uncertainty about something', [
      'Certainty',
      'Knowledge',
      'Belief',
    ]),
    level: 1,
  },
  {
    id: 'phi144',
    text: 'What is reason?',
    answers: A('phi144', 'Logical thinking', ['Emotion', 'Instinct', 'Guess']),
    level: 1,
  },
  {
    id: 'phi145',
    text: 'What is logic?',
    answers: A('phi145', 'Rules of correct reasoning', [
      'Random thinking',
      'Emotional thinking',
      'No thinking',
    ]),
    level: 1,
  },
  {
    id: 'phi146',
    text: 'What is an argument?',
    answers: A('phi146', 'Reasons supporting a conclusion', [
      'Fight',
      'Question',
      'Statement only',
    ]),
    level: 1,
  },
  {
    id: 'phi147',
    text: 'What is a conclusion?',
    answers: A('phi147', 'End result of reasoning', [
      'Beginning',
      'Middle',
      'Question',
    ]),
    level: 1,
  },
  {
    id: 'phi148',
    text: 'What is a fact?',
    answers: A('phi148', 'Something known to be true', [
      'Opinion',
      'Guess',
      'Lie',
    ]),
    level: 1,
  },
  {
    id: 'phi149',
    text: 'What is an opinion?',
    answers: A('phi149', 'Personal view or judgment', ['Fact', 'Truth', 'Law']),
    level: 1,
  },
  {
    id: 'phi150',
    text: 'What is freedom?',
    answers: A('phi150', 'Ability to act without constraint', [
      'Imprisonment',
      'Slavery',
      'Control',
    ]),
    level: 1,
  },
  {
    id: 'phi151',
    text: 'What is justice?',
    answers: A('phi151', 'Fair treatment and behavior', [
      'Injustice',
      'Unfairness',
      'Bias',
    ]),
    level: 1,
  },
  {
    id: 'phi152',
    text: 'What is virtue?',
    answers: A('phi152', 'Good moral quality', ['Vice', 'Sin', 'Fault']),
    level: 1,
  },
  {
    id: 'phi153',
    text: 'What is vice?',
    answers: A('phi153', 'Bad moral quality', [
      'Virtue',
      'Goodness',
      'Excellence',
    ]),
    level: 1,
  },
  {
    id: 'phi154',
    text: 'What is happiness?',
    answers: A('phi154', 'State of well-being', [
      'Sadness',
      'Misery',
      'Suffering',
    ]),
    level: 1,
  },
  {
    id: 'phi155',
    text: 'What is suffering?',
    answers: A('phi155', 'Experience of pain or distress', [
      'Happiness',
      'Joy',
      'Pleasure',
    ]),
    level: 1,
  },
  {
    id: 'phi156',
    text: 'What is meaning?',
    answers: A('phi156', 'Purpose or significance', [
      'Meaninglessness',
      'Randomness',
      'Chaos',
    ]),
    level: 1,
  },
  {
    id: 'phi157',
    text: 'What is purpose?',
    answers: A('phi157', 'Reason for existence', [
      'No reason',
      'Accident',
      'Chance',
    ]),
    level: 1,
  },
  {
    id: 'phi158',
    text: 'What is existence?',
    answers: A('phi158', 'State of being', [
      'Non-existence',
      'Nothing',
      'Void',
    ]),
    level: 1,
  },
  {
    id: 'phi159',
    text: 'What is reality?',
    answers: A('phi159', 'What actually exists', [
      'Illusion',
      'Dream',
      'Fantasy',
    ]),
    level: 1,
  },
  {
    id: 'phi160',
    text: 'What is an illusion?',
    answers: A('phi160', 'False perception', ['Reality', 'Truth', 'Fact']),
    level: 1,
  },
  {
    id: 'phi161',
    text: 'What is consciousness?',
    answers: A('phi161', 'Awareness of self and surroundings', [
      'Unconsciousness',
      'Sleep',
      'Death',
    ]),
    level: 1,
  },
  {
    id: 'phi162',
    text: 'What is the mind?',
    answers: A('phi162', 'Part that thinks and feels', [
      'Body only',
      'Brain only',
      'Nothing',
    ]),
    level: 1,
  },
  {
    id: 'phi163',
    text: 'What is the soul?',
    answers: A('phi163', 'Non-physical essence of person', [
      'Body',
      'Brain',
      'Bones',
    ]),
    level: 1,
  },
  {
    id: 'phi164',
    text: 'What is morality?',
    answers: A('phi164', 'Principles of right and wrong', [
      'Immorality',
      'Amorality',
      'Legality',
    ]),
    level: 1,
  },
  {
    id: 'phi165',
    text: 'What is ethics?',
    answers: A('phi165', 'Study of right and wrong', [
      'Study of law',
      'Study of science',
      'Study of math',
    ]),
    level: 1,
  },
  {
    id: 'phi166',
    text: 'What is a value?',
    answers: A('phi166', 'Principle considered important', [
      'Unimportant thing',
      'Random thing',
      'Nothing',
    ]),
    level: 1,
  },
  {
    id: 'phi167',
    text: 'What is a principle?',
    answers: A('phi167', 'Fundamental rule or belief', [
      'Exception',
      'Random rule',
      'No rule',
    ]),
    level: 1,
  },
  {
    id: 'phi168',
    text: 'What is a rule?',
    answers: A('phi168', 'Guideline for behavior', [
      'No guideline',
      'Random action',
      'Chaos',
    ]),
    level: 1,
  },
  {
    id: 'phi169',
    text: 'What is a law?',
    answers: A('phi169', 'Official rule of society', [
      'Suggestion',
      'Opinion',
      'Wish',
    ]),
    level: 1,
  },
  {
    id: 'phi170',
    text: 'What is society?',
    answers: A('phi170', 'Group of people living together', [
      'Individual',
      'Isolation',
      'Solitude',
    ]),
    level: 1,
  },
  {
    id: 'phi171',
    text: 'What is culture?',
    answers: A('phi171', 'Shared beliefs and practices', [
      'Individual belief',
      'Random practice',
      'No practice',
    ]),
    level: 1,
  },
  {
    id: 'phi172',
    text: 'What is tradition?',
    answers: A('phi172', 'Custom passed down', [
      'New invention',
      'Random act',
      'No custom',
    ]),
    level: 1,
  },
  {
    id: 'phi173',
    text: 'What is change?',
    answers: A('phi173', 'Becoming different', [
      'Staying same',
      'Permanence',
      'Stability',
    ]),
    level: 1,
  },
  {
    id: 'phi174',
    text: 'What is time?',
    answers: A('phi174', 'Progression of events', [
      'No progression',
      'Stillness',
      'Eternity',
    ]),
    level: 1,
  },
  {
    id: 'phi175',
    text: 'What is space?',
    answers: A('phi175', 'Area in which things exist', [
      'No area',
      'Nothing',
      'Void',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'phi176',
    text: 'Who was Socrates?',
    answers: A('phi176', 'Ancient Greek philosopher', [
      'Roman emperor',
      'Egyptian pharaoh',
      'Chinese emperor',
    ]),
    level: 2,
  },
  {
    id: 'phi177',
    text: 'Who was Plato?',
    answers: A('phi177', 'Student of Socrates', [
      'Student of Aristotle',
      'Roman philosopher',
      'Chinese philosopher',
    ]),
    level: 2,
  },
  {
    id: 'phi178',
    text: 'Who was Aristotle?',
    answers: A('phi178', 'Student of Plato', [
      'Student of Socrates',
      'Roman philosopher',
      'Chinese philosopher',
    ]),
    level: 2,
  },
  {
    id: 'phi179',
    text: 'What is the Socratic method?',
    answers: A('phi179', 'Learning through questioning', [
      'Learning through reading',
      'Learning through memorizing',
      'Learning through watching',
    ]),
    level: 2,
  },
  {
    id: 'phi180',
    text: 'What is metaphysics?',
    answers: A('phi180', 'Study of reality and existence', [
      'Study of physics',
      'Study of chemistry',
      'Study of biology',
    ]),
    level: 2,
  },
  {
    id: 'phi181',
    text: 'What is epistemology?',
    answers: A('phi181', 'Study of knowledge', [
      'Study of ethics',
      'Study of logic',
      'Study of beauty',
    ]),
    level: 2,
  },
  {
    id: 'phi182',
    text: 'What is aesthetics?',
    answers: A('phi182', 'Study of beauty and art', [
      'Study of knowledge',
      'Study of ethics',
      'Study of logic',
    ]),
    level: 2,
  },
  {
    id: 'phi183',
    text: 'What is political philosophy?',
    answers: A('phi183', 'Study of government and society', [
      'Study of art',
      'Study of science',
      'Study of math',
    ]),
    level: 2,
  },
  {
    id: 'phi184',
    text: 'What is free will?',
    answers: A('phi184', 'Ability to choose freely', [
      'No choice',
      'Predetermined choice',
      'Random choice',
    ]),
    level: 2,
  },
  {
    id: 'phi185',
    text: 'What is determinism?',
    answers: A('phi185', 'All events are caused', [
      'All events are random',
      'No events',
      'Free choice',
    ]),
    level: 2,
  },
  {
    id: 'phi186',
    text: 'What is materialism?',
    answers: A('phi186', 'Only physical matter exists', [
      'Only mind exists',
      'Both exist',
      'Neither exists',
    ]),
    level: 2,
  },
  {
    id: 'phi187',
    text: 'What is idealism?',
    answers: A('phi187', 'Reality is mental', [
      'Reality is physical',
      'Reality is both',
      'Reality is neither',
    ]),
    level: 2,
  },
  {
    id: 'phi188',
    text: 'What is dualism?',
    answers: A('phi188', 'Mind and body are separate', [
      'Mind and body are one',
      'Only mind exists',
      'Only body exists',
    ]),
    level: 2,
  },
  {
    id: 'phi189',
    text: 'What is monism?',
    answers: A('phi189', 'Reality is one substance', [
      'Reality is two substances',
      'Reality is many substances',
      'No substance',
    ]),
    level: 2,
  },
  {
    id: 'phi190',
    text: 'What is empiricism?',
    answers: A('phi190', 'Knowledge from experience', [
      'Knowledge from reason alone',
      'No knowledge',
      'Random knowledge',
    ]),
    level: 2,
  },
  {
    id: 'phi191',
    text: 'What is rationalism?',
    answers: A('phi191', 'Knowledge from reason', [
      'Knowledge from experience only',
      'No knowledge',
      'Random knowledge',
    ]),
    level: 2,
  },
  {
    id: 'phi192',
    text: 'What is skepticism?',
    answers: A('phi192', 'Doubting claims to knowledge', [
      'Accepting all claims',
      'No doubt',
      'Certainty',
    ]),
    level: 2,
  },
  {
    id: 'phi193',
    text: 'What is relativism?',
    answers: A('phi193', 'Truth varies by perspective', [
      'One absolute truth',
      'No truth',
      'Random truth',
    ]),
    level: 2,
  },
  {
    id: 'phi194',
    text: 'What is absolutism?',
    answers: A('phi194', 'Some truths are universal', [
      'All truths are relative',
      'No truths',
      'Random truths',
    ]),
    level: 2,
  },
  {
    id: 'phi195',
    text: 'What is utilitarianism?',
    answers: A('phi195', 'Greatest good for greatest number', [
      'Individual good only',
      'No good',
      'Random good',
    ]),
    level: 2,
  },
  {
    id: 'phi196',
    text: 'What is deontology?',
    answers: A('phi196', 'Ethics based on duty', [
      'Ethics based on consequences',
      'No ethics',
      'Random ethics',
    ]),
    level: 2,
  },
  {
    id: 'phi197',
    text: 'What is virtue ethics?',
    answers: A('phi197', 'Ethics based on character', [
      'Ethics based on rules',
      'Ethics based on consequences',
      'No ethics',
    ]),
    level: 2,
  },
  {
    id: 'phi198',
    text: 'What is hedonism?',
    answers: A('phi198', 'Pleasure is highest good', [
      'Pain is highest good',
      'No good',
      'Random good',
    ]),
    level: 2,
  },
  {
    id: 'phi199',
    text: 'What is stoicism?',
    answers: A('phi199', 'Accepting what cannot be changed', [
      'Fighting everything',
      'No acceptance',
      'Random response',
    ]),
    level: 2,
  },
  {
    id: 'phi200',
    text: 'What is nihilism?',
    answers: A('phi200', 'Life has no meaning', [
      'Life has meaning',
      'Life has purpose',
      'Life has value',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-4: More Intermediate Questions =====
  {
    id: 'phi201',
    text: 'What is existentialism?',
    answers: A('phi201', 'Existence precedes essence', [
      'Essence precedes existence',
      'No existence',
      'No essence',
    ]),
    level: 3,
  },
  {
    id: 'phi202',
    text: 'What is phenomenology?',
    answers: A('phi202', 'Study of conscious experience', [
      'Study of unconscious',
      'Study of behavior',
      'Study of brain',
    ]),
    level: 3,
  },
  {
    id: 'phi203',
    text: 'What is pragmatism?',
    answers: A('phi203', 'Truth is what works', [
      'Truth is absolute',
      'No truth',
      'Random truth',
    ]),
    level: 3,
  },
  {
    id: 'phi204',
    text: 'What is logical positivism?',
    answers: A('phi204', 'Meaningful statements are verifiable', [
      'All statements meaningful',
      'No statements meaningful',
      'Random meaning',
    ]),
    level: 3,
  },
  {
    id: 'phi205',
    text: 'What is the categorical imperative?',
    answers: A('phi205', 'Act only by universalizable rules', [
      'Act by any rule',
      'No rules',
      'Random rules',
    ]),
    level: 3,
  },
  {
    id: 'phi206',
    text: 'What is the social contract?',
    answers: A('phi206', 'Agreement to form society', [
      'No agreement',
      'Natural state',
      'Random formation',
    ]),
    level: 3,
  },
  {
    id: 'phi207',
    text: 'What is the state of nature?',
    answers: A('phi207', 'Condition before society', [
      'Condition in society',
      'No condition',
      'Random condition',
    ]),
    level: 3,
  },
  {
    id: 'phi208',
    text: 'What is natural law?',
    answers: A('phi208', 'Moral law from nature or reason', [
      'Human-made law',
      'No law',
      'Random law',
    ]),
    level: 3,
  },
  {
    id: 'phi209',
    text: 'What is positive law?',
    answers: A('phi209', 'Human-made law', [
      'Natural law',
      'Divine law',
      'No law',
    ]),
    level: 3,
  },
  {
    id: 'phi210',
    text: 'What is the problem of evil?',
    answers: A('phi210', 'Why evil exists if God is good', [
      'Why good exists',
      'No problem',
      'Random problem',
    ]),
    level: 3,
  },
  {
    id: 'phi211',
    text: 'What is theodicy?',
    answers: A('phi211', 'Defense of God despite evil', [
      'Attack on God',
      'No defense',
      'Random defense',
    ]),
    level: 3,
  },
  {
    id: 'phi212',
    text: 'What is the cosmological argument?',
    answers: A('phi212', 'God as first cause', [
      'God as last effect',
      'No God',
      'Random cause',
    ]),
    level: 3,
  },
  {
    id: 'phi213',
    text: 'What is the ontological argument?',
    answers: A('phi213', 'God exists by definition', [
      'God exists by evidence',
      'No God',
      'Random existence',
    ]),
    level: 3,
  },
  {
    id: 'phi214',
    text: 'What is the teleological argument?',
    answers: A('phi214', 'God from design in nature', [
      'God from chaos',
      'No God',
      'Random design',
    ]),
    level: 3,
  },
  {
    id: 'phi215',
    text: 'What is the mind-body problem?',
    answers: A('phi215', 'How mind and body relate', [
      'No relation',
      'Same thing',
      'Random relation',
    ]),
    level: 4,
  },
  {
    id: 'phi216',
    text: 'What is personal identity?',
    answers: A('phi216', 'What makes you the same person', [
      'What makes you different',
      'No identity',
      'Random identity',
    ]),
    level: 4,
  },
  {
    id: 'phi217',
    text: 'What is the problem of other minds?',
    answers: A('phi217', 'How we know others have minds', [
      'We know directly',
      'No other minds',
      'Random knowledge',
    ]),
    level: 4,
  },
  {
    id: 'phi218',
    text: 'What is the Gettier problem?',
    answers: A('phi218', 'Challenge to justified true belief', [
      'Support for JTB',
      'No problem',
      'Random challenge',
    ]),
    level: 4,
  },
  {
    id: 'phi219',
    text: 'What is the trolley problem?',
    answers: A('phi219', 'Ethical dilemma about saving lives', [
      'No dilemma',
      'Easy choice',
      'Random problem',
    ]),
    level: 4,
  },
  {
    id: 'phi220',
    text: 'What is the ship of Theseus?',
    answers: A('phi220', 'Puzzle about identity through change', [
      'No puzzle',
      'Easy answer',
      'Random puzzle',
    ]),
    level: 4,
  },
  {
    id: 'phi221',
    text: 'What is Occams razor?',
    answers: A('phi221', 'Simpler explanations preferred', [
      'Complex explanations preferred',
      'No preference',
      'Random preference',
    ]),
    level: 4,
  },
  {
    id: 'phi222',
    text: 'What is the veil of ignorance?',
    answers: A('phi222', 'Choosing principles without knowing position', [
      'Knowing position',
      'No veil',
      'Random choice',
    ]),
    level: 4,
  },
  {
    id: 'phi223',
    text: 'What is the original position?',
    answers: A('phi223', 'Hypothetical state for choosing justice', [
      'Actual state',
      'No position',
      'Random position',
    ]),
    level: 4,
  },
  {
    id: 'phi224',
    text: 'What is the harm principle?',
    answers: A('phi224', 'Liberty limited only to prevent harm', [
      'No limits',
      'All limits',
      'Random limits',
    ]),
    level: 4,
  },
  {
    id: 'phi225',
    text: 'What is moral luck?',
    answers: A('phi225', 'Luck affecting moral judgment', [
      'No luck in morality',
      'All luck',
      'Random luck',
    ]),
    level: 4,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'phi226',
    text: 'What is compatibilism?',
    answers: A('phi226', 'Free will compatible with determinism', [
      'Incompatible',
      'No free will',
      'No determinism',
    ]),
    level: 5,
  },
  {
    id: 'phi227',
    text: 'What is libertarianism in metaphysics?',
    answers: A('phi227', 'Free will requires indeterminism', [
      'Determinism allows free will',
      'No free will',
      'Random will',
    ]),
    level: 5,
  },
  {
    id: 'phi228',
    text: 'What is hard determinism?',
    answers: A('phi228', 'No free will due to determinism', [
      'Free will exists',
      'Partial free will',
      'Random will',
    ]),
    level: 5,
  },
  {
    id: 'phi229',
    text: 'What is epiphenomenalism?',
    answers: A('phi229', 'Mind caused by but cannot cause physical', [
      'Mind causes physical',
      'No mind',
      'Random causation',
    ]),
    level: 6,
  },
  {
    id: 'phi230',
    text: 'What is functionalism?',
    answers: A('phi230', 'Mental states defined by function', [
      'Defined by substance',
      'No mental states',
      'Random definition',
    ]),
    level: 5,
  },
  {
    id: 'phi231',
    text: 'What is eliminative materialism?',
    answers: A('phi231', 'Folk psychology is false', [
      'Folk psychology is true',
      'No psychology',
      'Random psychology',
    ]),
    level: 6,
  },
  {
    id: 'phi232',
    text: 'What is property dualism?',
    answers: A('phi232', 'Mental properties are non-physical', [
      'All properties physical',
      'No properties',
      'Random properties',
    ]),
    level: 6,
  },
  {
    id: 'phi233',
    text: 'What is the Chinese room argument?',
    answers: A('phi233', 'Syntax insufficient for semantics', [
      'Syntax sufficient',
      'No argument',
      'Random argument',
    ]),
    level: 6,
  },
  {
    id: 'phi234',
    text: 'What is the knowledge argument?',
    answers: A('phi234', 'Qualia cannot be learned from physical facts', [
      'Can be learned',
      'No qualia',
      'Random learning',
    ]),
    level: 6,
  },
  {
    id: 'phi235',
    text: 'What is the zombie argument?',
    answers: A('phi235', 'Consciousness not reducible to physical', [
      'Reducible',
      'No consciousness',
      'Random reduction',
    ]),
    level: 7,
  },
  {
    id: 'phi236',
    text: 'What is the hard problem of consciousness?',
    answers: A('phi236', 'Explaining subjective experience', [
      'Explaining behavior',
      'No problem',
      'Easy problem',
    ]),
    level: 6,
  },
  {
    id: 'phi237',
    text: 'What is the easy problem of consciousness?',
    answers: A('phi237', 'Explaining cognitive functions', [
      'Explaining qualia',
      'No problem',
      'Hard problem',
    ]),
    level: 6,
  },
  {
    id: 'phi238',
    text: 'What is panpsychism?',
    answers: A('phi238', 'Consciousness is fundamental', [
      'Consciousness is emergent',
      'No consciousness',
      'Random consciousness',
    ]),
    level: 7,
  },
  {
    id: 'phi239',
    text: 'What is emergentism?',
    answers: A('phi239', 'Higher properties emerge from lower', [
      'No emergence',
      'Reduction only',
      'Random emergence',
    ]),
    level: 7,
  },
  {
    id: 'phi240',
    text: 'What is supervenience?',
    answers: A('phi240', 'Higher depends on lower without reduction', [
      'Full reduction',
      'No dependence',
      'Random dependence',
    ]),
    level: 7,
  },
  {
    id: 'phi241',
    text: 'What is the principle of sufficient reason?',
    answers: A('phi241', 'Everything has an explanation', [
      'Some things unexplained',
      'Nothing explained',
      'Random explanation',
    ]),
    level: 6,
  },
  {
    id: 'phi242',
    text: 'What is modal realism?',
    answers: A('phi242', 'Possible worlds are real', [
      'Only actual world real',
      'No worlds real',
      'Random reality',
    ]),
    level: 7,
  },
  {
    id: 'phi243',
    text: 'What is actualism?',
    answers: A('phi243', 'Only actual world exists', [
      'Possible worlds exist',
      'No worlds exist',
      'Random existence',
    ]),
    level: 7,
  },
  {
    id: 'phi244',
    text: 'What is presentism?',
    answers: A('phi244', 'Only present exists', [
      'Past and future exist',
      'Nothing exists',
      'Random existence',
    ]),
    level: 7,
  },
  {
    id: 'phi245',
    text: 'What is eternalism?',
    answers: A('phi245', 'Past, present, future all exist', [
      'Only present exists',
      'Nothing exists',
      'Random existence',
    ]),
    level: 7,
  },
  {
    id: 'phi246',
    text: 'What is the growing block theory?',
    answers: A('phi246', 'Past and present exist, future does not', [
      'All times exist',
      'Only present',
      'Random existence',
    ]),
    level: 8,
  },
  {
    id: 'phi247',
    text: 'What is endurantism?',
    answers: A('phi247', 'Objects wholly present at each time', [
      'Objects have temporal parts',
      'No objects',
      'Random presence',
    ]),
    level: 8,
  },
  {
    id: 'phi248',
    text: 'What is perdurantism?',
    answers: A('phi248', 'Objects have temporal parts', [
      'Objects wholly present',
      'No objects',
      'Random parts',
    ]),
    level: 8,
  },
  {
    id: 'phi249',
    text: 'What is the principle of explosion?',
    answers: A('phi249', 'Contradiction implies anything', [
      'Contradiction implies nothing',
      'No principle',
      'Random implication',
    ]),
    level: 8,
  },
  {
    id: 'phi250',
    text: 'What is paraconsistent logic?',
    answers: A('phi250', 'Logic tolerating contradictions', [
      'Classical logic',
      'No logic',
      'Random logic',
    ]),
    level: 8,
  },
];
