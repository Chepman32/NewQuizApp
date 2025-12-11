import { Question, createAnswers } from './types';

const A = (id: string, correct: string, others: string[]) =>
  createAnswers(id, correct, others);

export const psychologyQuestions: Question[] = [
  // ===== LEVEL 1-2: Very Easy/Easy =====
  {
    id: 'psy1',
    text: 'What is psychology?',
    answers: A('psy1', 'Study of mind and behavior', [
      'Study of body',
      'Study of society',
      'Study of history',
    ]),
    level: 1,
  },
  {
    id: 'psy2',
    text: 'What is memory?',
    answers: A('psy2', 'Ability to store and recall information', [
      'Ability to see',
      'Ability to hear',
      'Ability to move',
    ]),
    level: 1,
  },
  {
    id: 'psy3',
    text: 'What is learning?',
    answers: A('psy3', 'Acquiring new knowledge or skills', [
      'Forgetting',
      'Sleeping',
      'Eating',
    ]),
    level: 1,
  },
  {
    id: 'psy4',
    text: 'What is emotion?',
    answers: A('psy4', 'Feeling like happiness or sadness', [
      'Thought',
      'Memory',
      'Perception',
    ]),
    level: 1,
  },
  {
    id: 'psy5',
    text: 'What is motivation?',
    answers: A('psy5', 'Drive to achieve goals', [
      'Lack of interest',
      'Tiredness',
      'Confusion',
    ]),
    level: 1,
  },
  {
    id: 'psy6',
    text: 'What is perception?',
    answers: A('psy6', 'Interpreting sensory information', [
      'Creating information',
      'Storing information',
      'Forgetting information',
    ]),
    level: 1,
  },
  {
    id: 'psy7',
    text: 'What is attention?',
    answers: A('psy7', 'Focusing on specific information', [
      'Ignoring everything',
      'Sleeping',
      'Forgetting',
    ]),
    level: 1,
  },
  {
    id: 'psy8',
    text: 'What is intelligence?',
    answers: A('psy8', 'Ability to learn and solve problems', [
      'Physical strength',
      'Height',
      'Weight',
    ]),
    level: 1,
  },
  {
    id: 'psy9',
    text: 'What is personality?',
    answers: A('psy9', 'Characteristic patterns of behavior', [
      'Physical appearance',
      'Intelligence',
      'Memory',
    ]),
    level: 1,
  },
  {
    id: 'psy10',
    text: 'What is stress?',
    answers: A('psy10', 'Response to challenging situations', [
      'Relaxation',
      'Sleep',
      'Happiness',
    ]),
    level: 1,
  },
  {
    id: 'psy11',
    text: 'What is anxiety?',
    answers: A('psy11', 'Feeling of worry or fear', [
      'Feeling of happiness',
      'Feeling of calm',
      'Feeling of excitement',
    ]),
    level: 1,
  },
  {
    id: 'psy12',
    text: 'What is depression?',
    answers: A('psy12', 'Persistent sadness and loss of interest', [
      'Happiness',
      'Excitement',
      'Energy',
    ]),
    level: 1,
  },
  {
    id: 'psy13',
    text: 'Who is known as the father of psychology?',
    answers: A('psy13', 'Wilhelm Wundt', [
      'Sigmund Freud',
      'B.F. Skinner',
      'Carl Jung',
    ]),
    level: 2,
  },
  {
    id: 'psy14',
    text: 'Who founded psychoanalysis?',
    answers: A('psy14', 'Sigmund Freud', [
      'Wilhelm Wundt',
      'B.F. Skinner',
      'Carl Rogers',
    ]),
    level: 2,
  },
  {
    id: 'psy15',
    text: 'What is the unconscious mind?',
    answers: A('psy15', 'Mental processes outside awareness', [
      'Conscious thoughts',
      'Dreams only',
      'Memories only',
    ]),
    level: 2,
  },
  {
    id: 'psy16',
    text: 'What is conditioning?',
    answers: A('psy16', 'Learning through association', [
      'Forgetting',
      'Sleeping',
      'Eating',
    ]),
    level: 2,
  },
  {
    id: 'psy17',
    text: 'Who conducted the famous dog experiment?',
    answers: A('psy17', 'Ivan Pavlov', [
      'B.F. Skinner',
      'John Watson',
      'Edward Thorndike',
    ]),
    level: 2,
  },
  {
    id: 'psy18',
    text: 'What is classical conditioning?',
    answers: A('psy18', 'Learning through stimulus association', [
      'Learning through rewards',
      'Learning through observation',
      'Learning through insight',
    ]),
    level: 2,
  },
  {
    id: 'psy19',
    text: 'What is operant conditioning?',
    answers: A('psy19', 'Learning through consequences', [
      'Learning through association',
      'Learning through observation',
      'Learning through insight',
    ]),
    level: 2,
  },
  {
    id: 'psy20',
    text: 'Who developed operant conditioning?',
    answers: A('psy20', 'B.F. Skinner', [
      'Ivan Pavlov',
      'John Watson',
      'Carl Rogers',
    ]),
    level: 2,
  },
  {
    id: 'psy21',
    text: 'What is reinforcement?',
    answers: A('psy21', 'Consequence that increases behavior', [
      'Consequence that decreases behavior',
      'No consequence',
      'Random consequence',
    ]),
    level: 2,
  },
  {
    id: 'psy22',
    text: 'What is punishment?',
    answers: A('psy22', 'Consequence that decreases behavior', [
      'Consequence that increases behavior',
      'No consequence',
      'Random consequence',
    ]),
    level: 2,
  },
  {
    id: 'psy23',
    text: 'What is short-term memory?',
    answers: A('psy23', 'Brief storage of information', [
      'Permanent storage',
      'No storage',
      'Unconscious storage',
    ]),
    level: 2,
  },
  {
    id: 'psy24',
    text: 'What is long-term memory?',
    answers: A('psy24', 'Permanent storage of information', [
      'Brief storage',
      'No storage',
      'Unconscious storage',
    ]),
    level: 2,
  },
  {
    id: 'psy25',
    text: 'What is IQ?',
    answers: A('psy25', 'Intelligence Quotient', [
      'Interest Quotient',
      'Imagination Quotient',
      'Intuition Quotient',
    ]),
    level: 2,
  },

  // ===== LEVEL 3-4: Intermediate/Normal =====
  {
    id: 'psy26',
    text: 'What is cognitive psychology?',
    answers: A('psy26', 'Study of mental processes', [
      'Study of behavior only',
      'Study of unconscious',
      'Study of society',
    ]),
    level: 3,
  },
  {
    id: 'psy27',
    text: 'What is behaviorism?',
    answers: A('psy27', 'Focus on observable behavior', [
      'Focus on unconscious',
      'Focus on cognition',
      'Focus on biology',
    ]),
    level: 3,
  },
  {
    id: 'psy28',
    text: 'What is humanistic psychology?',
    answers: A('psy28', 'Focus on personal growth and potential', [
      'Focus on behavior',
      'Focus on unconscious',
      'Focus on biology',
    ]),
    level: 3,
  },
  {
    id: 'psy29',
    text: 'Who developed humanistic psychology?',
    answers: A('psy29', 'Carl Rogers and Abraham Maslow', [
      'Sigmund Freud',
      'B.F. Skinner',
      'Wilhelm Wundt',
    ]),
    level: 3,
  },
  {
    id: 'psy30',
    text: "What is Maslow's hierarchy of needs?",
    answers: A('psy30', 'Theory of human motivation', [
      'Theory of learning',
      'Theory of memory',
      'Theory of perception',
    ]),
    level: 3,
  },
  {
    id: 'psy31',
    text: 'What is self-actualization?',
    answers: A('psy31', "Reaching one's full potential", [
      'Basic survival',
      'Social belonging',
      'Safety needs',
    ]),
    level: 3,
  },
  {
    id: 'psy32',
    text: 'What is the id in Freudian theory?',
    answers: A('psy32', 'Primitive, instinctual part of mind', [
      'Moral conscience',
      'Rational self',
      'Social self',
    ]),
    level: 3,
  },
  {
    id: 'psy33',
    text: 'What is the ego in Freudian theory?',
    answers: A('psy33', 'Rational, reality-oriented part', [
      'Primitive instincts',
      'Moral conscience',
      'Unconscious',
    ]),
    level: 3,
  },
  {
    id: 'psy34',
    text: 'What is the superego in Freudian theory?',
    answers: A('psy34', 'Moral conscience', [
      'Primitive instincts',
      'Rational self',
      'Unconscious',
    ]),
    level: 3,
  },
  {
    id: 'psy35',
    text: 'What is cognitive dissonance?',
    answers: A('psy35', 'Discomfort from conflicting beliefs', [
      'Harmony of beliefs',
      'Lack of beliefs',
      'Strong beliefs',
    ]),
    level: 4,
  },
  {
    id: 'psy36',
    text: 'Who developed cognitive dissonance theory?',
    answers: A('psy36', 'Leon Festinger', [
      'Sigmund Freud',
      'B.F. Skinner',
      'Carl Rogers',
    ]),
    level: 4,
  },
  {
    id: 'psy37',
    text: 'What is attribution theory?',
    answers: A('psy37', 'How people explain behavior', [
      'How people learn',
      'How people remember',
      'How people perceive',
    ]),
    level: 4,
  },
  {
    id: 'psy38',
    text: 'What is the fundamental attribution error?',
    answers: A(
      'psy38',
      'Overemphasizing personality, underemphasizing situation',
      ['Overemphasizing situation', 'Balanced attribution', 'No attribution'],
    ),
    level: 4,
  },
  {
    id: 'psy39',
    text: 'What is social psychology?',
    answers: A('psy39', 'Study of how people influence each other', [
      'Study of individual mind',
      'Study of brain',
      'Study of development',
    ]),
    level: 4,
  },
  {
    id: 'psy40',
    text: 'What is conformity?',
    answers: A('psy40', 'Changing behavior to match group', [
      'Resisting group pressure',
      'Leading group',
      'Leaving group',
    ]),
    level: 4,
  },
  {
    id: 'psy41',
    text: 'Who conducted the conformity experiments?',
    answers: A('psy41', 'Solomon Asch', [
      'Stanley Milgram',
      'Philip Zimbardo',
      'Albert Bandura',
    ]),
    level: 4,
  },
  {
    id: 'psy42',
    text: 'What is obedience?',
    answers: A('psy42', 'Following orders from authority', [
      'Resisting authority',
      'Leading others',
      'Working alone',
    ]),
    level: 4,
  },
  {
    id: 'psy43',
    text: 'Who conducted the obedience experiments?',
    answers: A('psy43', 'Stanley Milgram', [
      'Solomon Asch',
      'Philip Zimbardo',
      'Albert Bandura',
    ]),
    level: 4,
  },
  {
    id: 'psy44',
    text: 'What was the Stanford Prison Experiment?',
    answers: A('psy44', 'Study of role behavior in prison simulation', [
      'Study of memory',
      'Study of learning',
      'Study of perception',
    ]),
    level: 4,
  },
  {
    id: 'psy45',
    text: 'Who conducted the Stanford Prison Experiment?',
    answers: A('psy45', 'Philip Zimbardo', [
      'Stanley Milgram',
      'Solomon Asch',
      'Albert Bandura',
    ]),
    level: 4,
  },

  // ===== LEVEL 5-8: Hard to Professor =====
  {
    id: 'psy46',
    text: 'What is the bystander effect?',
    answers: A('psy46', 'Less likely to help when others present', [
      'More likely to help',
      'No effect',
      'Random effect',
    ]),
    level: 5,
  },
  {
    id: 'psy47',
    text: 'What is diffusion of responsibility?',
    answers: A('psy47', 'Shared responsibility reduces individual action', [
      'Increased responsibility',
      'No responsibility',
      'Random responsibility',
    ]),
    level: 5,
  },
  {
    id: 'psy48',
    text: 'What is social loafing?',
    answers: A('psy48', 'Reduced effort in groups', [
      'Increased effort in groups',
      'Same effort',
      'Random effort',
    ]),
    level: 5,
  },
  {
    id: 'psy49',
    text: 'What is groupthink?',
    answers: A('psy49', 'Desire for harmony overrides critical thinking', [
      'Critical thinking in groups',
      'Individual thinking',
      'No thinking',
    ]),
    level: 5,
  },
  {
    id: 'psy50',
    text: 'What is the halo effect?',
    answers: A('psy50', 'One positive trait influences overall impression', [
      'One negative trait',
      'No influence',
      'Random influence',
    ]),
    level: 5,
  },
  {
    id: 'psy51',
    text: 'What is confirmation bias?',
    answers: A('psy51', 'Seeking information that confirms beliefs', [
      'Seeking disconfirming information',
      'Seeking all information',
      'Seeking no information',
    ]),
    level: 6,
  },
  {
    id: 'psy52',
    text: 'What is the availability heuristic?',
    answers: A('psy52', 'Judging probability by ease of recall', [
      'Judging by statistics',
      'Judging by logic',
      'Judging by intuition',
    ]),
    level: 6,
  },
  {
    id: 'psy53',
    text: 'What is the representativeness heuristic?',
    answers: A('psy53', 'Judging probability by similarity to prototype', [
      'Judging by statistics',
      'Judging by logic',
      'Judging by intuition',
    ]),
    level: 6,
  },
  {
    id: 'psy54',
    text: 'What is anchoring bias?',
    answers: A('psy54', 'Over-reliance on first piece of information', [
      'Ignoring first information',
      'Equal weighting',
      'Random weighting',
    ]),
    level: 6,
  },
  {
    id: 'psy55',
    text: 'What is the Dunning-Kruger effect?',
    answers: A('psy55', 'Incompetent people overestimate their ability', [
      'Competent people overestimate',
      'Accurate self-assessment',
      'Underestimation by all',
    ]),
    level: 6,
  },
  {
    id: 'psy56',
    text: 'What is the mere exposure effect?',
    answers: A('psy56', 'Preference for familiar things', [
      'Preference for novel things',
      'No preference',
      'Random preference',
    ]),
    level: 7,
  },
  {
    id: 'psy57',
    text: 'What is the primacy effect?',
    answers: A('psy57', 'Better recall of first items', [
      'Better recall of last items',
      'Equal recall',
      'Random recall',
    ]),
    level: 7,
  },
  {
    id: 'psy58',
    text: 'What is the recency effect?',
    answers: A('psy58', 'Better recall of last items', [
      'Better recall of first items',
      'Equal recall',
      'Random recall',
    ]),
    level: 7,
  },
  {
    id: 'psy59',
    text: 'What is the serial position effect?',
    answers: A('psy59', 'Primacy and recency effects combined', [
      'Only primacy',
      'Only recency',
      'Neither',
    ]),
    level: 7,
  },
  {
    id: 'psy60',
    text: 'What is the spacing effect?',
    answers: A('psy60', 'Better learning with distributed practice', [
      'Better with massed practice',
      'No difference',
      'Random effect',
    ]),
    level: 7,
  },
  {
    id: 'psy61',
    text: 'What is the testing effect?',
    answers: A('psy61', 'Better retention through retrieval practice', [
      'Better through re-reading',
      'No difference',
      'Random effect',
    ]),
    level: 8,
  },
  {
    id: 'psy62',
    text: 'What is the generation effect?',
    answers: A('psy62', 'Better memory for self-generated information', [
      'Better for given information',
      'No difference',
      'Random effect',
    ]),
    level: 8,
  },
  {
    id: 'psy63',
    text: 'What is the levels of processing theory?',
    answers: A('psy63', 'Deeper processing leads to better memory', [
      'Shallow processing better',
      'No difference',
      'Random effect',
    ]),
    level: 8,
  },
  {
    id: 'psy64',
    text: 'What is the encoding specificity principle?',
    answers: A(
      'psy64',
      'Memory depends on match between encoding and retrieval',
      ['No match needed', 'Random matching', 'Opposite matching'],
    ),
    level: 8,
  },
  {
    id: 'psy65',
    text: 'What is the dual-process theory?',
    answers: A(
      'psy65',
      'Two systems of thinking: fast/intuitive and slow/deliberate',
      ['One system', 'Three systems', 'No systems'],
    ),
    level: 8,
  },
];
