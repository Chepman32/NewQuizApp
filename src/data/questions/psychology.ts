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

  // ===== Additional Level 1-2 Questions =====
  {
    id: 'psy66',
    text: 'What is psychology?',
    answers: A('psy66', 'Study of mind and behavior', [
      'Study of body',
      'Study of society',
      'Study of history',
    ]),
    level: 1,
  },
  {
    id: 'psy67',
    text: 'What is an emotion?',
    answers: A('psy67', 'Feeling like happiness or sadness', [
      'Thought',
      'Action',
      'Memory',
    ]),
    level: 1,
  },
  {
    id: 'psy68',
    text: 'What is memory?',
    answers: A('psy68', 'Ability to store and recall information', [
      'Ability to move',
      'Ability to see',
      'Ability to hear',
    ]),
    level: 1,
  },
  {
    id: 'psy69',
    text: 'What is learning?',
    answers: A('psy69', 'Acquiring new knowledge or skills', [
      'Forgetting',
      'Sleeping',
      'Eating',
    ]),
    level: 1,
  },
  {
    id: 'psy70',
    text: 'What is behavior?',
    answers: A('psy70', 'Actions and reactions', [
      'Thoughts only',
      'Feelings only',
      'Dreams only',
    ]),
    level: 1,
  },
  {
    id: 'psy71',
    text: 'What is the brain?',
    answers: A('psy71', 'Organ that controls thinking', [
      'Organ that pumps blood',
      'Organ that digests food',
      'Organ that filters blood',
    ]),
    level: 1,
  },
  {
    id: 'psy72',
    text: 'What is stress?',
    answers: A('psy72', 'Response to pressure or demands', [
      'Relaxation',
      'Sleep',
      'Happiness',
    ]),
    level: 1,
  },
  {
    id: 'psy73',
    text: 'What is happiness?',
    answers: A('psy73', 'Positive emotional state', [
      'Negative state',
      'Neutral state',
      'No state',
    ]),
    level: 1,
  },
  {
    id: 'psy74',
    text: 'What is fear?',
    answers: A('psy74', 'Response to perceived danger', [
      'Response to safety',
      'Response to boredom',
      'Response to sleep',
    ]),
    level: 1,
  },
  {
    id: 'psy75',
    text: 'What is anger?',
    answers: A('psy75', 'Strong feeling of displeasure', [
      'Feeling of pleasure',
      'Feeling of calm',
      'Feeling of sleep',
    ]),
    level: 1,
  },
  {
    id: 'psy76',
    text: 'What is motivation?',
    answers: A('psy76', 'Drive to achieve goals', [
      'Lack of drive',
      'Sleep',
      'Boredom',
    ]),
    level: 2,
  },
  {
    id: 'psy77',
    text: 'What is personality?',
    answers: A('psy77', 'Characteristic patterns of behavior', [
      'Physical appearance',
      'Intelligence only',
      'Memory only',
    ]),
    level: 2,
  },
  {
    id: 'psy78',
    text: 'What is intelligence?',
    answers: A('psy78', 'Ability to learn and solve problems', [
      'Physical strength',
      'Height',
      'Weight',
    ]),
    level: 2,
  },
  {
    id: 'psy79',
    text: 'What is perception?',
    answers: A('psy79', 'Interpreting sensory information', [
      'Creating information',
      'Ignoring information',
      'Deleting information',
    ]),
    level: 2,
  },
  {
    id: 'psy80',
    text: 'What is attention?',
    answers: A('psy80', 'Focusing on specific information', [
      'Ignoring all information',
      'Processing all information equally',
      'No processing',
    ]),
    level: 2,
  },
  {
    id: 'psy81',
    text: 'What is consciousness?',
    answers: A('psy81', 'Awareness of self and environment', [
      'Unconsciousness',
      'Sleep',
      'Coma',
    ]),
    level: 2,
  },
  {
    id: 'psy82',
    text: 'What is the unconscious?',
    answers: A('psy82', 'Mental processes outside awareness', [
      'Conscious thoughts',
      'Physical actions',
      'Visible behavior',
    ]),
    level: 2,
  },
  {
    id: 'psy83',
    text: 'What is a habit?',
    answers: A('psy83', 'Automatic behavior pattern', [
      'Conscious decision',
      'Random action',
      'One-time action',
    ]),
    level: 2,
  },
  {
    id: 'psy84',
    text: 'What is a phobia?',
    answers: A('psy84', 'Irrational fear', [
      'Rational fear',
      'No fear',
      'Courage',
    ]),
    level: 2,
  },
  {
    id: 'psy85',
    text: 'What is anxiety?',
    answers: A('psy85', 'Worry about future events', [
      'Calm about future',
      'No thoughts about future',
      'Happiness about future',
    ]),
    level: 2,
  },

  // ===== Additional Level 3-4 Questions =====
  {
    id: 'psy86',
    text: 'What is classical conditioning?',
    answers: A('psy86', 'Learning through association', [
      'Learning through rewards',
      'Learning through observation',
      'No learning',
    ]),
    level: 3,
  },
  {
    id: 'psy87',
    text: 'What is operant conditioning?',
    answers: A('psy87', 'Learning through consequences', [
      'Learning through association',
      'Learning through observation',
      'No learning',
    ]),
    level: 3,
  },
  {
    id: 'psy88',
    text: 'What is reinforcement?',
    answers: A('psy88', 'Increasing behavior through consequences', [
      'Decreasing behavior',
      'No change',
      'Random change',
    ]),
    level: 3,
  },
  {
    id: 'psy89',
    text: 'What is punishment?',
    answers: A('psy89', 'Decreasing behavior through consequences', [
      'Increasing behavior',
      'No change',
      'Random change',
    ]),
    level: 3,
  },
  {
    id: 'psy90',
    text: 'What is short-term memory?',
    answers: A('psy90', 'Brief storage of information', [
      'Permanent storage',
      'No storage',
      'Random storage',
    ]),
    level: 3,
  },
  {
    id: 'psy91',
    text: 'What is long-term memory?',
    answers: A('psy91', 'Permanent storage of information', [
      'Brief storage',
      'No storage',
      'Random storage',
    ]),
    level: 3,
  },
  {
    id: 'psy92',
    text: 'What is encoding?',
    answers: A('psy92', 'Converting information for storage', [
      'Retrieving information',
      'Deleting information',
      'Ignoring information',
    ]),
    level: 3,
  },
  {
    id: 'psy93',
    text: 'What is retrieval?',
    answers: A('psy93', 'Accessing stored information', [
      'Storing information',
      'Deleting information',
      'Creating information',
    ]),
    level: 3,
  },
  {
    id: 'psy94',
    text: 'What is forgetting?',
    answers: A('psy94', 'Inability to retrieve information', [
      'Perfect memory',
      'Enhanced memory',
      'No memory needed',
    ]),
    level: 3,
  },
  {
    id: 'psy95',
    text: 'What is the id?',
    answers: A('psy95', 'Freud primitive instincts', [
      'Freud moral conscience',
      'Freud reality principle',
      'No concept',
    ]),
    level: 3,
  },
  {
    id: 'psy96',
    text: 'What is the ego?',
    answers: A('psy96', 'Freud reality-based self', [
      'Freud instincts',
      'Freud conscience',
      'No concept',
    ]),
    level: 4,
  },
  {
    id: 'psy97',
    text: 'What is the superego?',
    answers: A('psy97', 'Freud moral conscience', [
      'Freud instincts',
      'Freud reality self',
      'No concept',
    ]),
    level: 4,
  },
  {
    id: 'psy98',
    text: 'What is cognitive dissonance?',
    answers: A('psy98', 'Discomfort from conflicting beliefs', [
      'Comfort from beliefs',
      'No beliefs',
      'Random beliefs',
    ]),
    level: 4,
  },
  {
    id: 'psy99',
    text: 'What is attribution?',
    answers: A('psy99', 'Explaining causes of behavior', [
      'Describing behavior',
      'Ignoring behavior',
      'Random explanation',
    ]),
    level: 4,
  },
  {
    id: 'psy100',
    text: 'What is conformity?',
    answers: A('psy100', 'Changing behavior to match group', [
      'Resisting group',
      'Ignoring group',
      'Leading group',
    ]),
    level: 4,
  },
  {
    id: 'psy101',
    text: 'What is obedience?',
    answers: A('psy101', 'Following authority commands', [
      'Resisting authority',
      'Ignoring authority',
      'Commanding authority',
    ]),
    level: 4,
  },
  {
    id: 'psy102',
    text: 'What is groupthink?',
    answers: A('psy102', 'Poor decisions from group conformity', [
      'Good decisions',
      'Individual decisions',
      'No decisions',
    ]),
    level: 4,
  },
  {
    id: 'psy103',
    text: 'What is social facilitation?',
    answers: A('psy103', 'Improved performance with others present', [
      'Worse performance',
      'No change',
      'Random change',
    ]),
    level: 4,
  },
  {
    id: 'psy104',
    text: 'What is social loafing?',
    answers: A('psy104', 'Reduced effort in groups', [
      'Increased effort',
      'Same effort',
      'No effort',
    ]),
    level: 4,
  },
  {
    id: 'psy105',
    text: 'What is the bystander effect?',
    answers: A('psy105', 'Less helping when others present', [
      'More helping',
      'Same helping',
      'No effect',
    ]),
    level: 4,
  },

  // ===== Additional Level 5-8 Questions =====
  {
    id: 'psy106',
    text: 'What is the fundamental attribution error?',
    answers: A('psy106', 'Overemphasizing personality in explanations', [
      'Overemphasizing situation',
      'Balanced attribution',
      'No attribution',
    ]),
    level: 5,
  },
  {
    id: 'psy107',
    text: 'What is self-serving bias?',
    answers: A(
      'psy107',
      'Taking credit for success blaming others for failure',
      ['Blaming self for all', 'Crediting others for all', 'No bias'],
    ),
    level: 5,
  },
  {
    id: 'psy108',
    text: 'What is confirmation bias?',
    answers: A('psy108', 'Seeking information that confirms beliefs', [
      'Seeking disconfirming information',
      'Seeking all information',
      'Seeking no information',
    ]),
    level: 5,
  },
  {
    id: 'psy109',
    text: 'What is the availability heuristic?',
    answers: A('psy109', 'Judging by ease of recall', [
      'Judging by logic',
      'Judging by statistics',
      'No judging',
    ]),
    level: 5,
  },
  {
    id: 'psy110',
    text: 'What is the representativeness heuristic?',
    answers: A('psy110', 'Judging by similarity to prototype', [
      'Judging by base rates',
      'Judging by logic',
      'No judging',
    ]),
    level: 5,
  },
  {
    id: 'psy111',
    text: 'What is schema?',
    answers: A('psy111', 'Mental framework for organizing information', [
      'Random organization',
      'No organization',
      'Physical framework',
    ]),
    level: 6,
  },
  {
    id: 'psy112',
    text: 'What is priming?',
    answers: A('psy112', 'Exposure affecting subsequent processing', [
      'No effect',
      'Opposite effect',
      'Random effect',
    ]),
    level: 6,
  },
  {
    id: 'psy113',
    text: 'What is implicit memory?',
    answers: A('psy113', 'Memory without conscious awareness', [
      'Conscious memory',
      'No memory',
      'Random memory',
    ]),
    level: 6,
  },
  {
    id: 'psy114',
    text: 'What is explicit memory?',
    answers: A('psy114', 'Conscious memory recall', [
      'Unconscious memory',
      'No memory',
      'Random memory',
    ]),
    level: 6,
  },
  {
    id: 'psy115',
    text: 'What is procedural memory?',
    answers: A('psy115', 'Memory for skills and procedures', [
      'Memory for facts',
      'Memory for events',
      'No memory',
    ]),
    level: 6,
  },
  {
    id: 'psy116',
    text: 'What is the mere exposure effect?',
    answers: A('psy116', 'Preference from repeated exposure', [
      'Dislike from exposure',
      'No effect',
      'Random effect',
    ]),
    level: 7,
  },
  {
    id: 'psy117',
    text: 'What is cognitive load?',
    answers: A('psy117', 'Mental effort required for task', [
      'Physical effort',
      'No effort',
      'Random effort',
    ]),
    level: 7,
  },
  {
    id: 'psy118',
    text: 'What is working memory?',
    answers: A('psy118', 'Active manipulation of information', [
      'Passive storage',
      'No storage',
      'Random storage',
    ]),
    level: 7,
  },
  {
    id: 'psy119',
    text: 'What is the central executive?',
    answers: A('psy119', 'Attention control in working memory', [
      'Storage component',
      'No component',
      'Random component',
    ]),
    level: 7,
  },
  {
    id: 'psy120',
    text: 'What is the phonological loop?',
    answers: A('psy120', 'Verbal working memory component', [
      'Visual component',
      'No component',
      'Random component',
    ]),
    level: 7,
  },
  {
    id: 'psy121',
    text: 'What is the visuospatial sketchpad?',
    answers: A('psy121', 'Visual working memory component', [
      'Verbal component',
      'No component',
      'Random component',
    ]),
    level: 8,
  },
  {
    id: 'psy122',
    text: 'What is the episodic buffer?',
    answers: A('psy122', 'Integration component of working memory', [
      'Storage only',
      'No component',
      'Random component',
    ]),
    level: 8,
  },
  {
    id: 'psy123',
    text: 'What is spreading activation?',
    answers: A('psy123', 'Activation spreading through memory network', [
      'No spreading',
      'Random spreading',
      'Opposite spreading',
    ]),
    level: 8,
  },
  {
    id: 'psy124',
    text: 'What is the levels of processing theory?',
    answers: A('psy124', 'Deeper processing leads to better memory', [
      'Shallow processing better',
      'No difference',
      'Random processing',
    ]),
    level: 8,
  },
  {
    id: 'psy125',
    text: 'What is transfer-appropriate processing?',
    answers: A('psy125', 'Memory best when encoding matches retrieval', [
      'No match needed',
      'Opposite match',
      'Random match',
    ]),
    level: 8,
  },
  // ===== LEVEL 1: More Very Easy Questions =====
  {
    id: 'psy126',
    text: 'What is the brain?',
    answers: A('psy126', 'Organ that controls thinking', [
      'Organ that pumps blood',
      'Organ that digests food',
      'Organ that breathes',
    ]),
    level: 1,
  },
  {
    id: 'psy127',
    text: 'What is a thought?',
    answers: A('psy127', 'Idea in your mind', [
      'Physical object',
      'Sound',
      'Taste',
    ]),
    level: 1,
  },
  {
    id: 'psy128',
    text: 'What is a feeling?',
    answers: A('psy128', 'Emotional experience', [
      'Physical object',
      'Sound',
      'Taste',
    ]),
    level: 1,
  },
  {
    id: 'psy129',
    text: 'What is happiness?',
    answers: A('psy129', 'Positive emotion', [
      'Negative emotion',
      'No emotion',
      'Physical sensation',
    ]),
    level: 1,
  },
  {
    id: 'psy130',
    text: 'What is sadness?',
    answers: A('psy130', 'Negative emotion from loss', [
      'Positive emotion',
      'No emotion',
      'Physical sensation',
    ]),
    level: 1,
  },
  {
    id: 'psy131',
    text: 'What is anger?',
    answers: A('psy131', 'Strong negative emotion', [
      'Positive emotion',
      'No emotion',
      'Physical sensation',
    ]),
    level: 1,
  },
  {
    id: 'psy132',
    text: 'What is fear?',
    answers: A('psy132', 'Emotion from perceived danger', [
      'Positive emotion',
      'No emotion',
      'Physical sensation',
    ]),
    level: 1,
  },
  {
    id: 'psy133',
    text: 'What is surprise?',
    answers: A('psy133', 'Emotion from unexpected event', [
      'Expected emotion',
      'No emotion',
      'Physical sensation',
    ]),
    level: 1,
  },
  {
    id: 'psy134',
    text: 'What is love?',
    answers: A('psy134', 'Strong positive feeling for someone', [
      'Negative feeling',
      'No feeling',
      'Physical sensation',
    ]),
    level: 1,
  },
  {
    id: 'psy135',
    text: 'What is memory?',
    answers: A('psy135', 'Ability to remember', [
      'Ability to forget',
      'Ability to see',
      'Ability to hear',
    ]),
    level: 1,
  },
  {
    id: 'psy136',
    text: 'What is learning?',
    answers: A('psy136', 'Gaining new knowledge', [
      'Forgetting',
      'Sleeping',
      'Eating',
    ]),
    level: 1,
  },
  {
    id: 'psy137',
    text: 'What is sleep?',
    answers: A('psy137', 'State of rest for body and mind', [
      'State of activity',
      'State of eating',
      'State of working',
    ]),
    level: 1,
  },
  {
    id: 'psy138',
    text: 'What is a dream?',
    answers: A('psy138', 'Images and thoughts during sleep', [
      'Thoughts while awake',
      'Physical activity',
      'Eating',
    ]),
    level: 1,
  },
  {
    id: 'psy139',
    text: 'What is attention?',
    answers: A('psy139', 'Focusing on something', [
      'Ignoring everything',
      'Sleeping',
      'Forgetting',
    ]),
    level: 1,
  },
  {
    id: 'psy140',
    text: 'What is concentration?',
    answers: A('psy140', 'Focused attention', [
      'Distraction',
      'Sleep',
      'Forgetting',
    ]),
    level: 1,
  },
  {
    id: 'psy141',
    text: 'What is stress?',
    answers: A('psy141', 'Mental or emotional strain', [
      'Relaxation',
      'Happiness',
      'Sleep',
    ]),
    level: 1,
  },
  {
    id: 'psy142',
    text: 'What is relaxation?',
    answers: A('psy142', 'State of being calm', [
      'State of stress',
      'State of anger',
      'State of fear',
    ]),
    level: 1,
  },
  {
    id: 'psy143',
    text: 'What is a habit?',
    answers: A('psy143', 'Regular behavior pattern', [
      'One-time action',
      'Random action',
      'No action',
    ]),
    level: 1,
  },
  {
    id: 'psy144',
    text: 'What is motivation?',
    answers: A('psy144', 'Desire to do something', [
      'Desire to do nothing',
      'Fear',
      'Anger',
    ]),
    level: 1,
  },
  {
    id: 'psy145',
    text: 'What is personality?',
    answers: A('psy145', 'Unique characteristics of a person', [
      'Physical appearance',
      'Age',
      'Height',
    ]),
    level: 1,
  },
  {
    id: 'psy146',
    text: 'What is intelligence?',
    answers: A('psy146', 'Ability to learn and understand', [
      'Physical strength',
      'Height',
      'Weight',
    ]),
    level: 1,
  },
  {
    id: 'psy147',
    text: 'What is creativity?',
    answers: A('psy147', 'Ability to create new ideas', [
      'Copying others',
      'Following rules',
      'Memorizing',
    ]),
    level: 1,
  },
  {
    id: 'psy148',
    text: 'What is imagination?',
    answers: A('psy148', 'Ability to form mental images', [
      'Physical vision',
      'Hearing',
      'Touch',
    ]),
    level: 1,
  },
  {
    id: 'psy149',
    text: 'What is a psychologist?',
    answers: A('psy149', 'Person who studies the mind', [
      'Person who studies the body',
      'Person who studies plants',
      'Person who studies rocks',
    ]),
    level: 1,
  },
  {
    id: 'psy150',
    text: 'What is behavior?',
    answers: A('psy150', 'How someone acts', [
      'How someone looks',
      'How tall someone is',
      'How old someone is',
    ]),
    level: 1,
  },
  {
    id: 'psy151',
    text: 'What is a mood?',
    answers: A('psy151', 'Emotional state over time', [
      'Single emotion',
      'Physical state',
      'Thought',
    ]),
    level: 1,
  },
  {
    id: 'psy152',
    text: 'What is boredom?',
    answers: A('psy152', 'Feeling of lack of interest', [
      'Excitement',
      'Happiness',
      'Fear',
    ]),
    level: 1,
  },
  {
    id: 'psy153',
    text: 'What is curiosity?',
    answers: A('psy153', 'Desire to learn or know', [
      'Lack of interest',
      'Fear',
      'Anger',
    ]),
    level: 1,
  },
  {
    id: 'psy154',
    text: 'What is confidence?',
    answers: A('psy154', 'Belief in oneself', ['Doubt', 'Fear', 'Anger']),
    level: 1,
  },
  {
    id: 'psy155',
    text: 'What is shyness?',
    answers: A('psy155', 'Feeling nervous around others', [
      'Confidence',
      'Aggression',
      'Happiness',
    ]),
    level: 1,
  },
  {
    id: 'psy156',
    text: 'What is jealousy?',
    answers: A('psy156', 'Feeling envious of others', [
      'Happiness for others',
      'Indifference',
      'Love',
    ]),
    level: 1,
  },
  {
    id: 'psy157',
    text: 'What is empathy?',
    answers: A('psy157', 'Understanding others feelings', [
      'Ignoring others',
      'Hurting others',
      'Avoiding others',
    ]),
    level: 1,
  },
  {
    id: 'psy158',
    text: 'What is sympathy?',
    answers: A('psy158', 'Feeling sorry for someone', [
      'Feeling happy for someone',
      'Ignoring someone',
      'Hurting someone',
    ]),
    level: 1,
  },
  {
    id: 'psy159',
    text: 'What is patience?',
    answers: A('psy159', 'Ability to wait calmly', [
      'Impatience',
      'Anger',
      'Fear',
    ]),
    level: 1,
  },
  {
    id: 'psy160',
    text: 'What is frustration?',
    answers: A('psy160', 'Feeling upset when blocked', [
      'Satisfaction',
      'Happiness',
      'Calm',
    ]),
    level: 1,
  },
  {
    id: 'psy161',
    text: 'What is excitement?',
    answers: A('psy161', 'Strong positive anticipation', [
      'Boredom',
      'Sadness',
      'Fear',
    ]),
    level: 1,
  },
  {
    id: 'psy162',
    text: 'What is anxiety?',
    answers: A('psy162', 'Worry about future', [
      'Calm',
      'Happiness',
      'Excitement',
    ]),
    level: 1,
  },
  {
    id: 'psy163',
    text: 'What is pride?',
    answers: A('psy163', 'Satisfaction in achievement', [
      'Shame',
      'Guilt',
      'Fear',
    ]),
    level: 1,
  },
  {
    id: 'psy164',
    text: 'What is shame?',
    answers: A('psy164', 'Painful feeling from wrongdoing', [
      'Pride',
      'Happiness',
      'Excitement',
    ]),
    level: 1,
  },
  {
    id: 'psy165',
    text: 'What is guilt?',
    answers: A('psy165', 'Feeling bad about actions', [
      'Pride',
      'Happiness',
      'Excitement',
    ]),
    level: 1,
  },
  {
    id: 'psy166',
    text: 'What is loneliness?',
    answers: A('psy166', 'Feeling of being alone', [
      'Feeling of connection',
      'Happiness',
      'Excitement',
    ]),
    level: 1,
  },
  {
    id: 'psy167',
    text: 'What is friendship?',
    answers: A('psy167', 'Close relationship between people', [
      'Enmity',
      'Hatred',
      'Indifference',
    ]),
    level: 1,
  },
  {
    id: 'psy168',
    text: 'What is trust?',
    answers: A('psy168', 'Belief in reliability of someone', [
      'Distrust',
      'Fear',
      'Anger',
    ]),
    level: 1,
  },
  {
    id: 'psy169',
    text: 'What is honesty?',
    answers: A('psy169', 'Being truthful', ['Lying', 'Cheating', 'Deceiving']),
    level: 1,
  },
  {
    id: 'psy170',
    text: 'What is kindness?',
    answers: A('psy170', 'Being friendly and caring', [
      'Cruelty',
      'Meanness',
      'Indifference',
    ]),
    level: 1,
  },
  {
    id: 'psy171',
    text: 'What is gratitude?',
    answers: A('psy171', 'Feeling thankful', [
      'Ungratefulness',
      'Anger',
      'Resentment',
    ]),
    level: 1,
  },
  {
    id: 'psy172',
    text: 'What is forgiveness?',
    answers: A('psy172', 'Letting go of anger at someone', [
      'Holding grudge',
      'Revenge',
      'Hatred',
    ]),
    level: 1,
  },
  {
    id: 'psy173',
    text: 'What is self-esteem?',
    answers: A('psy173', 'How you value yourself', [
      'How others value you',
      'Physical appearance',
      'Intelligence',
    ]),
    level: 1,
  },
  {
    id: 'psy174',
    text: 'What is optimism?',
    answers: A('psy174', 'Expecting good outcomes', [
      'Expecting bad outcomes',
      'No expectations',
      'Fear',
    ]),
    level: 1,
  },
  {
    id: 'psy175',
    text: 'What is pessimism?',
    answers: A('psy175', 'Expecting bad outcomes', [
      'Expecting good outcomes',
      'No expectations',
      'Happiness',
    ]),
    level: 1,
  },
  // ===== LEVEL 2: More Easy Questions =====
  {
    id: 'psy176',
    text: 'What is the conscious mind?',
    answers: A('psy176', 'Awareness of thoughts and surroundings', [
      'Unconscious mind',
      'Sleep state',
      'Dream state',
    ]),
    level: 2,
  },
  {
    id: 'psy177',
    text: 'What is the unconscious mind?',
    answers: A('psy177', 'Mental processes outside awareness', [
      'Conscious thoughts',
      'Awake state',
      'Alert state',
    ]),
    level: 2,
  },
  {
    id: 'psy178',
    text: 'What is short-term memory?',
    answers: A('psy178', 'Memory lasting seconds to minutes', [
      'Memory lasting years',
      'Permanent memory',
      'No memory',
    ]),
    level: 2,
  },
  {
    id: 'psy179',
    text: 'What is long-term memory?',
    answers: A('psy179', 'Memory lasting long periods', [
      'Memory lasting seconds',
      'Temporary memory',
      'No memory',
    ]),
    level: 2,
  },
  {
    id: 'psy180',
    text: 'What is perception?',
    answers: A('psy180', 'Interpreting sensory information', [
      'Ignoring information',
      'Creating information',
      'Deleting information',
    ]),
    level: 2,
  },
  {
    id: 'psy181',
    text: 'What is sensation?',
    answers: A('psy181', 'Detecting stimuli through senses', [
      'Interpreting stimuli',
      'Ignoring stimuli',
      'Creating stimuli',
    ]),
    level: 2,
  },
  {
    id: 'psy182',
    text: 'What is cognition?',
    answers: A('psy182', 'Mental processes of knowing', [
      'Physical processes',
      'Emotional processes only',
      'No processes',
    ]),
    level: 2,
  },
  {
    id: 'psy183',
    text: 'What is an instinct?',
    answers: A('psy183', 'Inborn behavior pattern', [
      'Learned behavior',
      'Random behavior',
      'No behavior',
    ]),
    level: 2,
  },
  {
    id: 'psy184',
    text: 'What is a reflex?',
    answers: A('psy184', 'Automatic response to stimulus', [
      'Planned response',
      'Delayed response',
      'No response',
    ]),
    level: 2,
  },
  {
    id: 'psy185',
    text: 'What is conditioning?',
    answers: A('psy185', 'Learning through association', [
      'Forgetting',
      'Ignoring',
      'Random change',
    ]),
    level: 2,
  },
  {
    id: 'psy186',
    text: 'What is reinforcement?',
    answers: A('psy186', 'Strengthening behavior through consequences', [
      'Weakening behavior',
      'Ignoring behavior',
      'Random behavior',
    ]),
    level: 2,
  },
  {
    id: 'psy187',
    text: 'What is punishment?',
    answers: A('psy187', 'Consequence that decreases behavior', [
      'Consequence that increases behavior',
      'No consequence',
      'Reward',
    ]),
    level: 2,
  },
  {
    id: 'psy188',
    text: 'What is a reward?',
    answers: A('psy188', 'Positive consequence for behavior', [
      'Negative consequence',
      'No consequence',
      'Punishment',
    ]),
    level: 2,
  },
  {
    id: 'psy189',
    text: 'What is a phobia?',
    answers: A('psy189', 'Intense irrational fear', [
      'Normal fear',
      'No fear',
      'Courage',
    ]),
    level: 2,
  },
  {
    id: 'psy190',
    text: 'What is depression?',
    answers: A('psy190', 'Persistent sadness and low mood', [
      'Happiness',
      'Excitement',
      'Normal mood',
    ]),
    level: 2,
  },
  {
    id: 'psy191',
    text: 'What is therapy?',
    answers: A('psy191', 'Treatment for mental health', [
      'Physical treatment only',
      'No treatment',
      'Surgery',
    ]),
    level: 2,
  },
  {
    id: 'psy192',
    text: 'What is a therapist?',
    answers: A('psy192', 'Professional who provides therapy', [
      'Patient',
      'Friend',
      'Family member',
    ]),
    level: 2,
  },
  {
    id: 'psy193',
    text: 'What is a psychiatrist?',
    answers: A('psy193', 'Doctor specializing in mental health', [
      'General doctor',
      'Surgeon',
      'Dentist',
    ]),
    level: 2,
  },
  {
    id: 'psy194',
    text: 'What is mental health?',
    answers: A('psy194', 'Psychological well-being', [
      'Physical health only',
      'No health',
      'Illness',
    ]),
    level: 2,
  },
  {
    id: 'psy195',
    text: 'What is a disorder?',
    answers: A('psy195', 'Condition affecting normal function', [
      'Normal function',
      'Perfect health',
      'No condition',
    ]),
    level: 2,
  },
  {
    id: 'psy196',
    text: 'What is addiction?',
    answers: A('psy196', 'Compulsive need for substance or behavior', [
      'Normal use',
      'No use',
      'Healthy habit',
    ]),
    level: 2,
  },
  {
    id: 'psy197',
    text: 'What is withdrawal?',
    answers: A('psy197', 'Symptoms when stopping addictive substance', [
      'Starting substance',
      'Normal state',
      'No symptoms',
    ]),
    level: 2,
  },
  {
    id: 'psy198',
    text: 'What is tolerance?',
    answers: A('psy198', 'Needing more for same effect', [
      'Needing less',
      'Same amount',
      'No need',
    ]),
    level: 2,
  },
  {
    id: 'psy199',
    text: 'What is a hallucination?',
    answers: A('psy199', 'Perceiving something not there', [
      'Normal perception',
      'Memory',
      'Dream while awake',
    ]),
    level: 2,
  },
  {
    id: 'psy200',
    text: 'What is a delusion?',
    answers: A('psy200', 'False belief despite evidence', [
      'True belief',
      'Opinion',
      'Fact',
    ]),
    level: 2,
  },
  // ===== LEVEL 3-4: More Intermediate Questions =====
  {
    id: 'psy201',
    text: 'What is classical conditioning?',
    answers: A('psy201', 'Learning through stimulus association', [
      'Learning through rewards',
      'Learning through observation',
      'No learning',
    ]),
    level: 3,
  },
  {
    id: 'psy202',
    text: 'What is operant conditioning?',
    answers: A('psy202', 'Learning through consequences', [
      'Learning through association',
      'Learning through observation',
      'No learning',
    ]),
    level: 3,
  },
  {
    id: 'psy203',
    text: 'What is observational learning?',
    answers: A('psy203', 'Learning by watching others', [
      'Learning by doing',
      'Learning by reading',
      'No learning',
    ]),
    level: 3,
  },
  {
    id: 'psy204',
    text: 'What is cognitive dissonance?',
    answers: A('psy204', 'Discomfort from conflicting beliefs', [
      'Comfort from beliefs',
      'No beliefs',
      'Agreement',
    ]),
    level: 3,
  },
  {
    id: 'psy205',
    text: 'What is the placebo effect?',
    answers: A('psy205', 'Improvement from belief in treatment', [
      'Real drug effect',
      'No effect',
      'Negative effect',
    ]),
    level: 3,
  },
  {
    id: 'psy206',
    text: 'What is confirmation bias?',
    answers: A('psy206', 'Seeking information that confirms beliefs', [
      'Seeking opposing information',
      'No seeking',
      'Random seeking',
    ]),
    level: 3,
  },
  {
    id: 'psy207',
    text: 'What is the halo effect?',
    answers: A('psy207', 'One trait influencing overall impression', [
      'No influence',
      'Negative influence only',
      'Random impression',
    ]),
    level: 3,
  },
  {
    id: 'psy208',
    text: 'What is groupthink?',
    answers: A('psy208', 'Conformity in group decision-making', [
      'Independent thinking',
      'No thinking',
      'Random decisions',
    ]),
    level: 3,
  },
  {
    id: 'psy209',
    text: 'What is social facilitation?',
    answers: A('psy209', 'Improved performance with audience', [
      'Worse performance',
      'No change',
      'Random change',
    ]),
    level: 3,
  },
  {
    id: 'psy210',
    text: 'What is social loafing?',
    answers: A('psy210', 'Reduced effort in groups', [
      'Increased effort',
      'Same effort',
      'No effort',
    ]),
    level: 3,
  },
  {
    id: 'psy211',
    text: 'What is conformity?',
    answers: A('psy211', 'Changing behavior to match group', [
      'Staying different',
      'No change',
      'Random behavior',
    ]),
    level: 3,
  },
  {
    id: 'psy212',
    text: 'What is obedience?',
    answers: A('psy212', 'Following orders from authority', [
      'Disobeying',
      'Ignoring',
      'Random response',
    ]),
    level: 3,
  },
  {
    id: 'psy213',
    text: 'What is the bystander effect?',
    answers: A('psy213', 'Less help when others present', [
      'More help',
      'Same help',
      'No effect',
    ]),
    level: 3,
  },
  {
    id: 'psy214',
    text: 'What is attribution?',
    answers: A('psy214', 'Explaining causes of behavior', [
      'Describing behavior',
      'Ignoring behavior',
      'Random explanation',
    ]),
    level: 3,
  },
  {
    id: 'psy215',
    text: 'What is the fundamental attribution error?',
    answers: A('psy215', 'Overemphasizing personality over situation', [
      'Overemphasizing situation',
      'Balanced view',
      'No attribution',
    ]),
    level: 4,
  },
  {
    id: 'psy216',
    text: 'What is self-serving bias?',
    answers: A(
      'psy216',
      'Taking credit for success, blaming others for failure',
      ['Blaming self for all', 'No bias', 'Random attribution'],
    ),
    level: 4,
  },
  {
    id: 'psy217',
    text: 'What is the mere exposure effect?',
    answers: A('psy217', 'Liking things more with familiarity', [
      'Liking less',
      'No change',
      'Random preference',
    ]),
    level: 4,
  },
  {
    id: 'psy218',
    text: 'What is cognitive load?',
    answers: A('psy218', 'Mental effort required for task', [
      'Physical effort',
      'No effort',
      'Emotional effort only',
    ]),
    level: 4,
  },
  {
    id: 'psy219',
    text: 'What is working memory?',
    answers: A('psy219', 'Active processing of information', [
      'Passive storage',
      'Long-term storage',
      'No memory',
    ]),
    level: 4,
  },
  {
    id: 'psy220',
    text: 'What is encoding?',
    answers: A('psy220', 'Converting information for storage', [
      'Retrieving information',
      'Forgetting information',
      'No processing',
    ]),
    level: 4,
  },
  {
    id: 'psy221',
    text: 'What is retrieval?',
    answers: A('psy221', 'Accessing stored information', [
      'Storing information',
      'Forgetting information',
      'No access',
    ]),
    level: 4,
  },
  {
    id: 'psy222',
    text: 'What is interference?',
    answers: A('psy222', 'Memory disruption from other information', [
      'Memory enhancement',
      'No effect',
      'Random effect',
    ]),
    level: 4,
  },
  {
    id: 'psy223',
    text: 'What is proactive interference?',
    answers: A('psy223', 'Old memories disrupting new', [
      'New disrupting old',
      'No interference',
      'Random interference',
    ]),
    level: 4,
  },
  {
    id: 'psy224',
    text: 'What is retroactive interference?',
    answers: A('psy224', 'New memories disrupting old', [
      'Old disrupting new',
      'No interference',
      'Random interference',
    ]),
    level: 4,
  },
  {
    id: 'psy225',
    text: 'What is the primacy effect?',
    answers: A('psy225', 'Better memory for first items', [
      'Better for last',
      'Better for middle',
      'No difference',
    ]),
    level: 4,
  },
  // ===== LEVEL 5-8: More Advanced Questions =====
  {
    id: 'psy226',
    text: 'What is the recency effect?',
    answers: A('psy226', 'Better memory for last items', [
      'Better for first',
      'Better for middle',
      'No difference',
    ]),
    level: 5,
  },
  {
    id: 'psy227',
    text: 'What is the serial position effect?',
    answers: A('psy227', 'Memory varies by list position', [
      'Same for all positions',
      'Random memory',
      'No memory',
    ]),
    level: 5,
  },
  {
    id: 'psy228',
    text: 'What is chunking?',
    answers: A('psy228', 'Grouping information for memory', [
      'Separating information',
      'Forgetting information',
      'No organization',
    ]),
    level: 5,
  },
  {
    id: 'psy229',
    text: 'What is elaborative rehearsal?',
    answers: A('psy229', 'Deep processing for memory', [
      'Shallow processing',
      'No processing',
      'Random processing',
    ]),
    level: 5,
  },
  {
    id: 'psy230',
    text: 'What is the spacing effect?',
    answers: A('psy230', 'Better learning with distributed practice', [
      'Better with massed practice',
      'No difference',
      'Random effect',
    ]),
    level: 5,
  },
  {
    id: 'psy231',
    text: 'What is state-dependent memory?',
    answers: A('psy231', 'Better recall in same state as learning', [
      'Better in different state',
      'No effect',
      'Random recall',
    ]),
    level: 5,
  },
  {
    id: 'psy232',
    text: 'What is context-dependent memory?',
    answers: A('psy232', 'Better recall in same context as learning', [
      'Better in different context',
      'No effect',
      'Random recall',
    ]),
    level: 5,
  },
  {
    id: 'psy233',
    text: 'What is the misinformation effect?',
    answers: A('psy233', 'Memory distortion from misleading information', [
      'Memory improvement',
      'No effect',
      'Random effect',
    ]),
    level: 5,
  },
  {
    id: 'psy234',
    text: 'What is source monitoring?',
    answers: A('psy234', 'Identifying origin of memories', [
      'Creating memories',
      'Forgetting memories',
      'No monitoring',
    ]),
    level: 6,
  },
  {
    id: 'psy235',
    text: 'What is flashbulb memory?',
    answers: A('psy235', 'Vivid memory of emotional event', [
      'Faded memory',
      'No memory',
      'Random memory',
    ]),
    level: 5,
  },
  {
    id: 'psy236',
    text: 'What is implicit memory?',
    answers: A('psy236', 'Memory without conscious awareness', [
      'Conscious memory',
      'No memory',
      'Random memory',
    ]),
    level: 5,
  },
  {
    id: 'psy237',
    text: 'What is explicit memory?',
    answers: A('psy237', 'Conscious memory recall', [
      'Unconscious memory',
      'No memory',
      'Random memory',
    ]),
    level: 5,
  },
  {
    id: 'psy238',
    text: 'What is semantic memory?',
    answers: A('psy238', 'Memory for facts and knowledge', [
      'Memory for events',
      'Memory for skills',
      'No memory',
    ]),
    level: 5,
  },
  {
    id: 'psy239',
    text: 'What is episodic memory?',
    answers: A('psy239', 'Memory for personal events', [
      'Memory for facts',
      'Memory for skills',
      'No memory',
    ]),
    level: 5,
  },
  {
    id: 'psy240',
    text: 'What is procedural memory?',
    answers: A('psy240', 'Memory for skills and procedures', [
      'Memory for facts',
      'Memory for events',
      'No memory',
    ]),
    level: 5,
  },
  {
    id: 'psy241',
    text: 'What is the availability heuristic?',
    answers: A('psy241', 'Judging by ease of recall', [
      'Judging by logic',
      'No judgment',
      'Random judgment',
    ]),
    level: 6,
  },
  {
    id: 'psy242',
    text: 'What is the representativeness heuristic?',
    answers: A('psy242', 'Judging by similarity to prototype', [
      'Judging by statistics',
      'No judgment',
      'Random judgment',
    ]),
    level: 6,
  },
  {
    id: 'psy243',
    text: 'What is anchoring bias?',
    answers: A('psy243', 'Over-relying on first information', [
      'Ignoring first information',
      'No bias',
      'Random reliance',
    ]),
    level: 6,
  },
  {
    id: 'psy244',
    text: 'What is the hindsight bias?',
    answers: A('psy244', 'Believing you knew it all along', [
      'Admitting surprise',
      'No bias',
      'Random belief',
    ]),
    level: 6,
  },
  {
    id: 'psy245',
    text: 'What is the Dunning-Kruger effect?',
    answers: A('psy245', 'Incompetent overestimate ability', [
      'Competent overestimate',
      'Accurate estimation',
      'No effect',
    ]),
    level: 6,
  },
  {
    id: 'psy246',
    text: 'What is learned helplessness?',
    answers: A('psy246', 'Giving up after repeated failure', [
      'Persisting after failure',
      'No response',
      'Random response',
    ]),
    level: 6,
  },
  {
    id: 'psy247',
    text: 'What is self-efficacy?',
    answers: A('psy247', 'Belief in ability to succeed', [
      'Belief in failure',
      'No belief',
      'Random belief',
    ]),
    level: 6,
  },
  {
    id: 'psy248',
    text: 'What is locus of control?',
    answers: A('psy248', 'Belief about control over outcomes', [
      'No belief',
      'Random belief',
      'Physical control',
    ]),
    level: 6,
  },
  {
    id: 'psy249',
    text: 'What is the spotlight effect?',
    answers: A('psy249', 'Overestimating others notice of us', [
      'Underestimating',
      'Accurate estimation',
      'No effect',
    ]),
    level: 7,
  },
  {
    id: 'psy250',
    text: 'What is the illusion of transparency?',
    answers: A('psy250', 'Overestimating how much others know our feelings', [
      'Underestimating',
      'Accurate estimation',
      'No illusion',
    ]),
    level: 7,
  },
  {
    id: 'psy251',
    text: 'Who is considered the father of psychoanalysis?',
    answers: A('psy251', 'Sigmund Freud', [
      'Carl Jung',
      'Alfred Adler',
      'Erik Erikson',
    ]),
    level: 2,
  },
  {
    id: 'psy252',
    text: 'Who developed the theory of collective unconscious?',
    answers: A('psy252', 'Carl Jung', [
      'Sigmund Freud',
      'Alfred Adler',
      'Karen Horney',
    ]),
    level: 4,
  },
  {
    id: 'psy253',
    text: 'Who developed the hierarchy of needs?',
    answers: A('psy253', 'Abraham Maslow', [
      'Carl Rogers',
      'Rollo May',
      'Viktor Frankl',
    ]),
    level: 3,
  },
  {
    id: 'psy254',
    text: 'Who founded behaviorism?',
    answers: A('psy254', 'John B. Watson', [
      'B.F. Skinner',
      'Ivan Pavlov',
      'Edward Thorndike',
    ]),
    level: 4,
  },
  {
    id: 'psy255',
    text: 'Who developed operant conditioning?',
    answers: A('psy255', 'B.F. Skinner', [
      'Ivan Pavlov',
      'John B. Watson',
      'Edward Thorndike',
    ]),
    level: 3,
  },
  {
    id: 'psy256',
    text: 'Who discovered classical conditioning?',
    answers: A('psy256', 'Ivan Pavlov', [
      'B.F. Skinner',
      'John B. Watson',
      'Edward Thorndike',
    ]),
    level: 3,
  },
  {
    id: 'psy257',
    text: 'Who developed social learning theory?',
    answers: A('psy257', 'Albert Bandura', [
      'B.F. Skinner',
      'John B. Watson',
      'Ivan Pavlov',
    ]),
    level: 4,
  },
  {
    id: 'psy258',
    text: 'Who conducted the Bobo doll experiment?',
    answers: A('psy258', 'Albert Bandura', [
      'Stanley Milgram',
      'Philip Zimbardo',
      'Solomon Asch',
    ]),
    level: 4,
  },
  {
    id: 'psy259',
    text: 'Who conducted the obedience experiments?',
    answers: A('psy259', 'Stanley Milgram', [
      'Philip Zimbardo',
      'Solomon Asch',
      'Albert Bandura',
    ]),
    level: 4,
  },
  {
    id: 'psy260',
    text: 'Who conducted the Stanford prison experiment?',
    answers: A('psy260', 'Philip Zimbardo', [
      'Stanley Milgram',
      'Solomon Asch',
      'Albert Bandura',
    ]),
    level: 4,
  },
  {
    id: 'psy261',
    text: 'Who conducted conformity experiments with line judgments?',
    answers: A('psy261', 'Solomon Asch', [
      'Stanley Milgram',
      'Philip Zimbardo',
      'Muzafer Sherif',
    ]),
    level: 5,
  },
  {
    id: 'psy262',
    text: 'Who developed client-centered therapy?',
    answers: A('psy262', 'Carl Rogers', [
      'Abraham Maslow',
      'Rollo May',
      'Fritz Perls',
    ]),
    level: 5,
  },
  {
    id: 'psy263',
    text: 'Who developed rational emotive behavior therapy?',
    answers: A('psy263', 'Albert Ellis', [
      'Aaron Beck',
      'Carl Rogers',
      'Fritz Perls',
    ]),
    level: 6,
  },
  {
    id: 'psy264',
    text: 'Who developed cognitive therapy?',
    answers: A('psy264', 'Aaron Beck', [
      'Albert Ellis',
      'Carl Rogers',
      'Sigmund Freud',
    ]),
    level: 5,
  },
  {
    id: 'psy265',
    text: 'Who developed Gestalt therapy?',
    answers: A('psy265', 'Fritz Perls', [
      'Carl Rogers',
      'Abraham Maslow',
      'Rollo May',
    ]),
    level: 6,
  },
  {
    id: 'psy266',
    text: 'Who developed logotherapy?',
    answers: A('psy266', 'Viktor Frankl', [
      'Rollo May',
      'Abraham Maslow',
      'Carl Rogers',
    ]),
    level: 6,
  },
  {
    id: 'psy267',
    text: 'Who developed the theory of multiple intelligences?',
    answers: A('psy267', 'Howard Gardner', [
      'Robert Sternberg',
      'Daniel Goleman',
      'Alfred Binet',
    ]),
    level: 4,
  },
  {
    id: 'psy268',
    text: 'Who developed the triarchic theory of intelligence?',
    answers: A('psy268', 'Robert Sternberg', [
      'Howard Gardner',
      'Daniel Goleman',
      'Charles Spearman',
    ]),
    level: 6,
  },
  {
    id: 'psy269',
    text: 'Who popularized emotional intelligence?',
    answers: A('psy269', 'Daniel Goleman', [
      'Howard Gardner',
      'Robert Sternberg',
      'Peter Salovey',
    ]),
    level: 5,
  },
  {
    id: 'psy270',
    text: 'Who developed the first intelligence test?',
    answers: A('psy270', 'Alfred Binet', [
      'Lewis Terman',
      'David Wechsler',
      'Charles Spearman',
    ]),
    level: 5,
  },
  {
    id: 'psy271',
    text: 'Who developed the concept of g factor?',
    answers: A('psy271', 'Charles Spearman', [
      'Louis Thurstone',
      'Howard Gardner',
      'Robert Sternberg',
    ]),
    level: 6,
  },
  {
    id: 'psy272',
    text: 'Who developed the stages of moral development?',
    answers: A('psy272', 'Lawrence Kohlberg', [
      'Jean Piaget',
      'Erik Erikson',
      'Carol Gilligan',
    ]),
    level: 4,
  },
  {
    id: 'psy273',
    text: 'Who developed the stages of cognitive development?',
    answers: A('psy273', 'Jean Piaget', [
      'Lev Vygotsky',
      'Erik Erikson',
      'Lawrence Kohlberg',
    ]),
    level: 3,
  },
  {
    id: 'psy274',
    text: 'Who developed the sociocultural theory?',
    answers: A('psy274', 'Lev Vygotsky', [
      'Jean Piaget',
      'Erik Erikson',
      'Urie Bronfenbrenner',
    ]),
    level: 5,
  },
  {
    id: 'psy275',
    text: 'Who developed the psychosocial stages of development?',
    answers: A('psy275', 'Erik Erikson', [
      'Sigmund Freud',
      'Jean Piaget',
      'Lawrence Kohlberg',
    ]),
    level: 4,
  },
  {
    id: 'psy276',
    text: 'Who developed attachment theory?',
    answers: A('psy276', 'John Bowlby', [
      'Mary Ainsworth',
      'Harry Harlow',
      'Erik Erikson',
    ]),
    level: 5,
  },
  {
    id: 'psy277',
    text: 'Who developed the Strange Situation procedure?',
    answers: A('psy277', 'Mary Ainsworth', [
      'John Bowlby',
      'Harry Harlow',
      'Diana Baumrind',
    ]),
    level: 6,
  },
  {
    id: 'psy278',
    text: 'Who conducted monkey attachment experiments?',
    answers: A('psy278', 'Harry Harlow', [
      'John Bowlby',
      'Mary Ainsworth',
      'Ivan Pavlov',
    ]),
    level: 5,
  },
  {
    id: 'psy279',
    text: 'Who identified parenting styles?',
    answers: A('psy279', 'Diana Baumrind', [
      'Mary Ainsworth',
      'John Bowlby',
      'Erik Erikson',
    ]),
    level: 5,
  },
  {
    id: 'psy280',
    text: 'What are the three parenting styles identified by Baumrind?',
    answers: A('psy280', 'Authoritative, authoritarian, permissive', [
      'Strict, lenient, balanced',
      'Good, bad, neutral',
      'Active, passive, mixed',
    ]),
    level: 5,
  },
  {
    id: 'psy281',
    text: 'Who developed the concept of flow?',
    answers: A('psy281', 'Mihaly Csikszentmihalyi', [
      'Martin Seligman',
      'Abraham Maslow',
      'Carl Rogers',
    ]),
    level: 6,
  },
  {
    id: 'psy282',
    text: 'Who founded positive psychology?',
    answers: A('psy282', 'Martin Seligman', [
      'Mihaly Csikszentmihalyi',
      'Abraham Maslow',
      'Carl Rogers',
    ]),
    level: 5,
  },
  {
    id: 'psy283',
    text: 'Who developed the concept of learned optimism?',
    answers: A('psy283', 'Martin Seligman', [
      'Aaron Beck',
      'Albert Ellis',
      'Carol Dweck',
    ]),
    level: 6,
  },
  {
    id: 'psy284',
    text: 'Who developed the concept of growth mindset?',
    answers: A('psy284', 'Carol Dweck', [
      'Martin Seligman',
      'Angela Duckworth',
      'Albert Bandura',
    ]),
    level: 5,
  },
  {
    id: 'psy285',
    text: 'Who developed the concept of grit?',
    answers: A('psy285', 'Angela Duckworth', [
      'Carol Dweck',
      'Martin Seligman',
      'Albert Bandura',
    ]),
    level: 5,
  },
  {
    id: 'psy286',
    text: 'Who developed the Big Five personality traits?',
    answers: A('psy286', 'Multiple researchers (Costa & McCrae prominent)', [
      'Carl Jung',
      'Hans Eysenck',
      'Raymond Cattell',
    ]),
    level: 6,
  },
  {
    id: 'psy287',
    text: 'What are the Big Five personality traits?',
    answers: A(
      'psy287',
      'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism',
      [
        'Happy, Sad, Angry, Calm, Excited',
        'Smart, Kind, Brave, Honest, Loyal',
        'Active, Passive, Neutral, Mixed, Random',
      ],
    ),
    level: 5,
  },
  {
    id: 'psy288',
    text: 'Who developed the Myers-Briggs Type Indicator?',
    answers: A('psy288', 'Isabel Briggs Myers and Katharine Cook Briggs', [
      'Carl Jung',
      'Hans Eysenck',
      'Raymond Cattell',
    ]),
    level: 5,
  },
  {
    id: 'psy289',
    text: 'Who developed the theory of psychological types?',
    answers: A('psy289', 'Carl Jung', [
      'Sigmund Freud',
      'Alfred Adler',
      'Karen Horney',
    ]),
    level: 5,
  },
  {
    id: 'psy290',
    text: 'Who developed the concept of archetypes?',
    answers: A('psy290', 'Carl Jung', [
      'Sigmund Freud',
      'Joseph Campbell',
      'Claude Lévi-Strauss',
    ]),
    level: 5,
  },
  {
    id: 'psy291',
    text: 'Who developed the inferiority complex concept?',
    answers: A('psy291', 'Alfred Adler', [
      'Sigmund Freud',
      'Carl Jung',
      'Karen Horney',
    ]),
    level: 5,
  },
  {
    id: 'psy292',
    text: 'Who developed the concept of basic anxiety?',
    answers: A('psy292', 'Karen Horney', [
      'Sigmund Freud',
      'Carl Jung',
      'Alfred Adler',
    ]),
    level: 6,
  },
  {
    id: 'psy293',
    text: 'Who developed the personal construct theory?',
    answers: A('psy293', 'George Kelly', [
      'Carl Rogers',
      'Abraham Maslow',
      'Gordon Allport',
    ]),
    level: 7,
  },
  {
    id: 'psy294',
    text: 'Who developed the trait theory of personality?',
    answers: A('psy294', 'Gordon Allport', [
      'Raymond Cattell',
      'Hans Eysenck',
      'Walter Mischel',
    ]),
    level: 6,
  },
  {
    id: 'psy295',
    text: 'Who challenged trait theory with situationism?',
    answers: A('psy295', 'Walter Mischel', [
      'Gordon Allport',
      'Raymond Cattell',
      'Hans Eysenck',
    ]),
    level: 7,
  },
  {
    id: 'psy296',
    text: 'Who developed the two-factor theory of emotion?',
    answers: A('psy296', 'Stanley Schachter and Jerome Singer', [
      'William James',
      'Carl Lange',
      'Walter Cannon',
    ]),
    level: 6,
  },
  {
    id: 'psy297',
    text: 'Who developed the James-Lange theory of emotion?',
    answers: A('psy297', 'William James and Carl Lange', [
      'Walter Cannon',
      'Philip Bard',
      'Stanley Schachter',
    ]),
    level: 6,
  },
  {
    id: 'psy298',
    text: 'Who developed the Cannon-Bard theory of emotion?',
    answers: A('psy298', 'Walter Cannon and Philip Bard', [
      'William James',
      'Carl Lange',
      'Stanley Schachter',
    ]),
    level: 6,
  },
  {
    id: 'psy299',
    text: 'Who developed the facial feedback hypothesis?',
    answers: A('psy299', 'Multiple researchers (Tomkins, Izard prominent)', [
      'Paul Ekman',
      'Carroll Izard',
      'William James',
    ]),
    level: 7,
  },
  {
    id: 'psy300',
    text: 'Who identified universal facial expressions?',
    answers: A('psy300', 'Paul Ekman', [
      'Carroll Izard',
      'Silvan Tomkins',
      'William James',
    ]),
    level: 5,
  },
];
