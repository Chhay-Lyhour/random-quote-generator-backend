import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/drizzle/drizzle.module';
import type { DrizzleDB } from 'src/drizzle/types/drizzle';

@Injectable()
export class QuotesService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}
  async findRandomQuote() {
    const allQuotes = await this.db.query.quotes.findMany();
    if (!allQuotes || allQuotes.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    return allQuotes[randomIndex];
  }
}
