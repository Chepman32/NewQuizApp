import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'categories',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string', isOptional: true },
        { name: 'icon_name', type: 'string', isOptional: true },
        { name: 'color_light', type: 'string', isOptional: true },
        { name: 'color_dark', type: 'string', isOptional: true },
        { name: 'is_premium', type: 'boolean' },
      ],
    }),
    tableSchema({
      name: 'quizzes',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string', isOptional: true },
        { name: 'difficulty', type: 'string' },
        { name: 'category_id', type: 'string', isIndexed: true },
      ],
    }),
    tableSchema({
      name: 'questions',
      columns: [
        { name: 'quiz_id', type: 'string', isIndexed: true },
        { name: 'question_text', type: 'string' },
      ],
    }),
    tableSchema({
      name: 'answers',
      columns: [
        { name: 'question_id', type: 'string', isIndexed: true },
        { name: 'answer_text', type: 'string' },
        { name: 'is_correct', type: 'boolean' },
      ],
    }),
    tableSchema({
      name: 'user_progress',
      columns: [
        { name: 'quiz_id', type: 'string', isIndexed: true },
        { name: 'high_score', type: 'number', isOptional: true },
        { name: 'last_played', type: 'number', isOptional: true },
        { name: 'completed_count', type: 'number', isOptional: true },
      ],
    }),
  ],
});

