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
];
