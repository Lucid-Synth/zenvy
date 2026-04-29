# Zenvy

Zenvy is a full-stack web application designed for high-quality, AI-driven image background removal. It features a sleek, responsive landing page, a secure authentication system, and a user dashboard where images can be uploaded and processed instantly. The backend leverages the Cloudinary API for powerful, fast, and accurate background removal.

## Features

-   **AI-Powered Background Removal:** Utilizes Cloudinary's `background_removal` effect for precise cutouts.
-   **Seamless Upload Experience:** An intuitive drag-and-drop zone for uploading images (PNG, JPG, WebP).
-   **Secure Authentication:** Powered by `better-auth`, supporting email/password and social providers (Google, GitHub).
-   **User Dashboard:** A protected space for users to manage their work, view their profile, and access application settings.
-   **Modern Tech Stack:** Built with the Next.js App Router, React, and Tailwind CSS.
-   **Database Integration:** Uses Drizzle ORM with a PostgreSQL database for managing user data.
-   **Responsive UI:** Beautifully crafted components using `shadcn/ui` and `Framer Motion` for a polished look and feel on all devices.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
-   **Authentication:** [better-auth](https://github.com/bravo-6/better-auth)
-   **Database:** [PostgreSQL](https://www.postgresql.org/)
-   **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
-   **Image Processing:** [Cloudinary](https://cloudinary.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

-   Node.js (v20 or later)
-   `npm` (or your preferred package manager)
-   A running PostgreSQL database instance
-   Cloudinary, Google, and GitHub developer accounts for API credentials

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lucid-synth/zenvy.git
    cd zenvy
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the project's root directory and populate it with your credentials.

    ```dotenv
    # Database URL (PostgreSQL)
    NILEDB_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

    # better-auth configuration (use your local URL for development)
    BETTER_AUTH_URL="http://localhost:3000"
    GOOGLE_CLIENT_ID="your_google_client_id"
    GOOGLE_CLIENT_SECRET="your_google_client_secret"
    GITHUB_CLIENT_ID="your_github_client_id"
    GITHUB_CLIENT_SECRET="your_github_client_secret"

    # Cloudinary credentials
    CLOUDINARY_API_KEY="your_cloudinary_api_key"
    CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
    ```

4.  **Set up the database:**
    Run the Drizzle command to push the schema to your database.
    ```bash
    npm drizzle-kit push
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The repository is organized as a standard Next.js 14 App Router project.

-   `app/`: Contains the core application logic and pages.
    -   `api/`: API routes for handling authentication (`/auth`) and image uploads (`/upload`).
    -   `dashboard/`: Protected routes for the user dashboard, including the main upload page and profile.
    -   `drizzle/`: Configuration, schema, and migrations for the Drizzle ORM.
    -   `lib/`: Contains authentication setup (`auth.ts`, `auth-client.ts`) and utility functions.
    -   `(public_pages)/`: Publicly accessible pages like the landing page (`/`), `signin`, and `signup`.
-   `components/`: Reusable React components.
    -   `ui/`: UI components built with `shadcn/ui`.
    -   `Reusable/`: Custom reusable components used across the application.
-   `hooks/`: Custom React hooks, such as `use-mobile` for detecting mobile viewports.
-   `public/`: Static assets.