// Central question bank index
// This file exports all category question banks

import { Question, createAnswers } from './types';
import { biologyQuestions } from './biology';
import { historyQuestions } from './history';
import { literatureQuestions } from './literature';
import { artQuestions } from './art';
import { musicQuestions } from './music';
import { astronomyQuestions } from './astronomy';
import { economicsQuestions } from './economics';
import { psychologyQuestions } from './psychology';
import { philosophyQuestions } from './philosophy';
import { anatomyQuestions } from './anatomy';
import { sportsQuestions } from './sports';
import { computerScienceQuestions } from './computerScience';
import { programmingQuestions } from './programming';
import { algorithmsQuestions } from './algorithms';
import { dataStructuresQuestions } from './dataStructures';

export { createAnswers } from './types';
export type { Question } from './types';

// Export all question banks by category ID
export const questionBanks: Record<string, Question[]> = {
  biology: biologyQuestions,
  history: historyQuestions,
  literature: literatureQuestions,
  art: artQuestions,
  music: musicQuestions,
  astronomy: astronomyQuestions,
  economics: economicsQuestions,
  psychology: psychologyQuestions,
  philosophy: philosophyQuestions,
  anatomy: anatomyQuestions,
  sports: sportsQuestions,
  'computer-science': computerScienceQuestions,
  programming: programmingQuestions,
  algorithms: algorithmsQuestions,
  'data-structures': dataStructuresQuestions,
};

// Get questions for a specific category
export function getQuestionBank(categoryId: string): Question[] {
  return questionBanks[categoryId] || [];
}
