// Spanish translations index
// Índice de traducciones al español - 15 categorías completas

import type { CategoryTranslations } from '../index';
import { algorithms } from './algorithms';
import { anatomy } from './anatomy';
import { art } from './art';
import { astronomy } from './astronomy';
import { biology } from './biology';
import { computerScience } from './computerScience';
import { dataStructures } from './dataStructures';
import { economics } from './economics';
import { history } from './history';
import { literature } from './literature';
import { music } from './music';
import { philosophy } from './philosophy';
import { programming } from './programming';
import { psychology } from './psychology';
import { sports } from './sports';

const translations: Record<string, CategoryTranslations> = {
  algorithms,
  anatomy,
  art,
  astronomy,
  biology,
  computerScience,
  dataStructures,
  economics,
  history,
  literature,
  music,
  philosophy,
  programming,
  psychology,
  sports,
};

export default translations;
