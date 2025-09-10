# Random Quote Generator

## backend - created by chhay lyhour

## Brief Description:

This project is a straightforward quote generator that displays random quotes from a curated list. It was created as a practical exercise to enhance full-stack development skills by connecting a frontend, backend, and database.

## Tech Stack:

- UX/UI: Figma
- Frontend: NextJS, TailwindCSS, TypeScript, Shadcn UI
- Backend: NestJS, TypeScript
- Database: Neon (PostgreSQL), Drizzle ORM

## Setup Instructions:

1.  Clone the project repository
    ```bash
    git clone https://github.com/Chhay-Lyhour/random-quote-generator-backend.git
    cd random-quote-generator-backend
    ```
2.  Install the necessary backend dependencies
    ```bash
    npm install
    ```
3.  Configure the backend environment variables by referencing the `.env.example` file
4.  Start the backend development server
    ```bash
    npm run start:dev
    ```
5.  Proceed to the [frontend repository](https://github.com/Chhay-Lyhour/random-quote-generator-frontend.git) for the next steps

## Architecture Explanation:

This section outlines the communication flow between the backend and the database.

- HTTP -\> Controller
  - Incoming HTTP requests are first received by NestJS controllers (e.g., `src/quotes/quotes.controller.ts`). The controller's role is to validate the incoming data and pass the request to the appropriate service for processing.

- Controller -\> Service
  - The controller then invokes methods within the corresponding service (e.g., `src/quotes/quotes.service.ts`). The service layer houses the core business logic and determines the necessary database operations.

- Service -\> Drizzle (DB layer)
  - Services interact with the database via Drizzle ORM. The NestJS Drizzle provider (located in `src/drizzle/drizzle.module.ts`) injects a type-safe Drizzle client into the services.
  - Services utilize Drizzle and the defined schema (in `src/drizzle/schema.ts` and `src/drizzle/types/drizzle.d.ts`) to build and run SQL queries.
  - Drizzle executes these queries through a connection pool using the `DATABASE_URL` (Neon connection string) from the environment variables.

- Database
  - All database queries are executed on the Neon (PostgreSQL) instance. The database schema and its evolution are managed through Drizzle's SQL migration files.
