// Translations index
// Índice de traducciones

import esTranslations from './es';
import frTranslations from './fr';
import deTranslations from './de';
import zhTranslations from './zh';
import jaTranslations from './ja';
import ptTranslations from './pt';

// Type for individual question translation
export interface QuestionTranslation {
  text: string;
  correct: string;
  wrong: string[];
}

// Type for category translations (question ID -> translation)
export type CategoryTranslations = Record<string, QuestionTranslation>;

// Type for language translations (category -> translations)
export type LanguageTranslations = Record<string, CategoryTranslations>;

// All translations by language code
const translations: Record<string, LanguageTranslations> = {
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  zh: zhTranslations,
  ja: jaTranslations,
  pt: ptTranslations,
  // Add more languages as they are created:
  // ru: ruTranslations,
  // ar: arTranslations,
  // it: itTranslations,
  // ko: koTranslations,
};

// Get translation for a specific question
export function getQuestionTranslation(
  languageCode: string,
  category: string,
  questionId: string,
): QuestionTranslation | null {
  const langTranslations = translations[languageCode];
  if (!langTranslations) return null;

  const categoryTranslations = langTranslations[category];
  if (!categoryTranslations) return null;

  return categoryTranslations[questionId] || null;
}

// Get all translations for a language
export function getLanguageTranslations(
  languageCode: string,
): LanguageTranslations | null {
  return translations[languageCode] || null;
}

// Check if a language has translations
export function hasTranslations(languageCode: string): boolean {
  return languageCode in translations;
}

// Get list of available languages with translations
export function getAvailableTranslationLanguages(): string[] {
  return Object.keys(translations);
}

export default translations;
