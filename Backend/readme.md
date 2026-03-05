# YT-GENAI Backend

The backend server for the YT-GENAI project, built with Node.js, Express, and MongoDB. It leverages Google Gemini AI for interview-related processing.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v24.13.1` (Recommended)
- **MongoDB**: A running MongoDB instance (local or Atlas)
- **Google GenAI API Key**: To enable AI features.

### Setup Instructions

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd YT-GENAI/Backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the `Backend` root directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
   PORT=5000
   ```
   *You can refer to `.env.example` for the required keys.*

### Running the Server

- **Development Mode** (with Nodemon):
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  node server.js
  ```

## 🛠️ Tech Stack

- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose
- **AI Integration**: @google/genai (Google Gemini)
- **Authentication**: JWT & bcryptjs
- **File Handling**: Multer & pdf-parse
- **Validation**: Zod
- **Automation**: Puppeteer

## 📂 Project Structure

- `src/controllers`: Request handlers for Auth and Interview.
- `src/models`: Mongoose schemas.
- `src/routes`: API route definitions.
- `src/middlewares`: Custom middleware (Auth, Error handling).
- `src/services`: External service integrations.