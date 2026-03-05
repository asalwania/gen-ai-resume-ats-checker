# YT-GENAI

YT-GENAI is a full-stack application designed to generate AI-powered interviews and reports. It leverages Google Gemini AI to analyze content and provide intelligent insights through a modern web interface.

## 🏗️ Project Architecture

The project is divided into two main parts:

- **[Backend](./Backend/README.md)**: Node.js & Express server with MongoDB and Google Gemini AI integration.
- **[Frontend](./Frontend/README.md)**: React & Vite application with a responsive SCSS design.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: `v24.13.1` (Required)
- **MongoDB**: Access to a MongoDB instance.
- **Google GenAI API Key**: For AI processing features.

### Setup & Installation

1. **Clone the project**:
   ```bash
   git clone <repository-url>
   cd YT-GENAI
   ```

2. **Setup Backend**:
   - Navigate to `Backend/`
   - Run `npm install`
   - Create a `.env` file (see [Backend README](./Backend/README.md) for details).
   - Start the server: `npm run dev`

3. **Setup Frontend**:
   - Navigate to `Frontend/`
   - Run `npm install`
   - Start the app: `npm run dev`

## 🛠️ Tech Stack

### Backend
- Express.js (v5.0+)
- MongoDB & Mongoose
- Google Generative AI (Gemini)
- Puppeteer & PDF-Parse

### Frontend
- React 19
- Vite
- Sass (SCSS)
- React Router 7

## 📂 Folder Structure

```text
YT-GENAI/
├── Backend/          # Express.js Server & AI Logic
│   ├── src/          # Source code
│   └── README.md     # Backend detailed documentation
├── Frontend/         # React Application
│   ├── src/          # Source code
│   └── README.md     # Frontend detailed documentation
└── README.md         # Root documentation (this file)
```

## 📄 License
This project is for educational/study purposes.
