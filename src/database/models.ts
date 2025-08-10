import { Model } from '@nozbe/watermelondb';
import { field, date, readonly, relation } from '@nozbe/watermelondb/decorators';

export class Category extends Model {
  static table = 'categories';
  @field('name') name!: string;
  @field('description') description?: string;
  @field('icon_name') iconName?: string;
  @field('color_light') colorLight?: string;
  @field('color_dark') colorDark?: string;
  @field('is_premium') isPremium!: boolean;
}

export class Quiz extends Model {
  static table = 'quizzes';
  @field('title') title!: string;
  @field('description') description?: string;
  @field('difficulty') difficulty!: 'easy' | 'medium' | 'hard';
  @field('category_id') categoryId!: string;
  category = relation<Category>('categories', 'category_id');
}

export class Question extends Model {
  static table = 'questions';
  @field('quiz_id') quizId!: string;
  @field('question_text') questionText!: string;
}

export class Answer extends Model {
  static table = 'answers';
  @field('question_id') questionId!: string;
  @field('answer_text') answerText!: string;
  @field('is_correct') isCorrect!: boolean;
}

export class UserProgress extends Model {
  static table = 'user_progress';
  @field('quiz_id') quizId!: string;
  @field('high_score') highScore?: number;
  @field('completed_count') completedCount?: number;
  @date('last_played') lastPlayed?: Date;
}

