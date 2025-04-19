# Fullstack Portfolio Design

## Overview

This is a fullstack practice project built using Next.js for the frontend and Nest.js for the backend. The UI is based on a free Figma design from a dev.to blog post, which you can find [here](https://dev.to/emmanx/free-figma-ui-designs-for-frontend-practice-3ak2). The project showcases the integration of a complete stack with a backend API to support dynamic features.

## Technologies Used

### Frontend:

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Linting & Formatting:** ESLint, Prettier
- **Build Tools:** PostCSS, TypeScript

### Backend:

- **Framework:** Nest.js (Node.js)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **API:** RESTful API built with Nest.js
- **ORM:** Mongoose (for MongoDB)

### Design Reference:

[Figma Design](https://www.figma.com/design/gKZoWoleFgP35xvYu83Y2l/Portfolio-UI---Web-%26-Mobile?node-id=6-52&t=WAtwEThwaKr6j7Gp-0)

## Project Structure

```
└── mjavason-fullstack-portfolio-design/
    ├── frontend/
    │   ├── README.md
    │   ├── eslint.config.mjs
    │   ├── next.config.ts
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── tailwind.config.ts
    │   ├── tsconfig.json
    │   ├── .gitignore
    │   ├── public/
    │   └── src/
    │       └── app/
    │           ├── globals.css
    │           ├── layout.tsx
    │           └── page.tsx
    ├── backend/
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── .gitignore
    │   ├── src/
    │   │   ├── app.module.ts
    │   │   ├── main.ts
    │   │   ├── auth/
    │   │   ├── users/
    │   │   ├── portfolio/
    │   │   └── common/
    │   ├── tsconfig.json
    │   ├── nest-cli.json
    │   ├── .env.sample
    │   └── prisma/
```

## Installation & Setup

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Copy the `.env.sample` file to a new `.env` file in the root of the `backend` directory and fill in the required values:
     ```sh
     cp .env.sample .env
     ```
4. Start the Nest.js development server:
   ```sh
   npm run start:dev
   ```

### Authentication

Authentication is handled via JWT (JSON Web Tokens). The backend provides endpoints for user registration, login, and token generation.

## Project Features

- **Frontend:** A fully responsive portfolio UI, integrated with dynamic backend data.
- **Backend:** RESTful API built with Nest.js, providing CRUD operations for user data and portfolio items.
- **Authentication:** JWT-based user authentication for secure access to certain API endpoints.

## Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature-name`)
5. Create a Pull Request

## License

This project is for practice purposes and does not currently have a license. Feel free to use and modify.
