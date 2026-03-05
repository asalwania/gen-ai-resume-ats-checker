# YT-GENAI Frontend

A modern React frontend for the YT-GENAI project, built with Vite and SCSS. It provides users with an interface to manage AI-generated interviews.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v24.13.1` (Recommended)
- **Backend**: Ensure the [Backend](../Backend/README.md) server is running for API requests to work.

### Setup Instructions

1. **Navigate to the Frontend directory**:
   ```bash
   cd YT-GENAI/Frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running the Application

- **Development Mode**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Routing**: React Router 7
- **Styling**: SCSS (Sass)
- **API Client**: Axios

## 📂 Project Structure

- `src/features/auth`: Authentication-related components and logic.
- `src/features/interview`: Interview generation and viewing pages.
- `src/app.routes.jsx`: Main routing configuration.
- `src/assets`: Static assets like images and global styles.

## 🎨 Features

- **User Authentication**: Secure Login/Signup.
- **AI Interview Generation**: Create interviews using Gemini AI.
- **Responsive Design**: Optimized for various screen sizes using SCSS.
