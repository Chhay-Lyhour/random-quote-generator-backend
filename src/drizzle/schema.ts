import { text } from 'drizzle-orm/pg-core';
import { serial } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const quotes = pgTable('quotes', {
  id: serial('id').primaryKey(),
  quote: text('quote').notNull(),
  author: text('author').notNull(),
});
