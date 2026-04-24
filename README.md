# Express With Typescript

A backend API server built with Express.js and TypeScript for a course selling platform. Handles user authentication, admin management, course CRUD operations, and purchase tracking.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcryptjs
- **Security**: helmet, express-rate-limit, xss-clean, mongo-sanitize
- **Email**: Nodemailer

## Features

- **User Authentication**: Signup, login, password reset, JWT-based sessions
- **Admin Management**: Admin-only routes for content management
- **Course CRUD**: Create, read, update courses (admin only)
- **Course Purchase**: Users can purchase and track enrolled courses
- **Security**: Rate limiting, XSS protection, SQL injection prevention
- **Email**: Password reset via Gmail SMTP

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB

### Installation

```bash
npm install
```

### Configuration

1. Copy `.env.example` to `.env`
2. Update environment variables:

```env
NODE_ENV=development
PORT=3000
DATABASE=mongodb://localhost:27017/course-app
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
GMAIL_USERNAME=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
CLIENT_DOMAIN=http://localhost:5173
```

### Running

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## API Endpoints

### User Routes (`/api/v1/users`)

| Method | Endpoint                      | Description            |
| ------ | ----------------------------- | ---------------------- |
| POST   | `/auth/signup`                | Register new user      |
| POST   | `/auth/login`                 | Login user             |
| POST   | `/auth/forgot-password`       | Request password reset |
| PATCH  | `/auth/reset-password/:token` | Reset password         |
| PATCH  | `/auth/update-password`       | Update password        |
| GET    | `/me`                         | Get current user       |
| PATCH  | `/me`                         | Update profile         |
| DELETE | `/me`                         | Delete account         |

### Admin Routes (`/api/v1/admin`)

| Method | Endpoint                | Description          |
| ------ | ----------------------- | -------------------- |
| POST   | `/auth/signup`          | Register admin       |
| POST   | `/auth/login`           | Admin login          |
| GET    | `/me`                   | Get admin profile    |
| PATCH  | `/me`                   | Update admin         |
| DELETE | `/me`                   | Delete admin         |
| POST   | `/auth/forgot-password` | Admin password reset |

### Course Routes (`/api/v1/courses`)

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| GET    | `/`                   | Get all courses (admin) |
| GET    | `/:courseId`          | Get course details      |
| POST   | `/`                   | Create course (admin)   |
| PATCH  | `/:courseId`          | Update course (admin)   |
| POST   | `/:courseId/purchase` | Purchase course         |
| GET    | `/purchased`          | Get purchased courses   |

## Project Structure

```
src/
├── controllers/     # Request handlers
├── interfaces/      # TypeScript interfaces
├── model/           # Mongoose models
├── routes/          # Route definitions
├── Utils/           # Utility functions
├── app.ts           # Express app setup
└── server.ts        # Server entry point
```

## License

MIT
