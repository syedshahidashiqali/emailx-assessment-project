# EmailX: AI Email Campaign Coach

EmailX is a full-stack AI-powered web application that helps sales and marketing professionals generate personalized email campaign suggestions for potential leads. It features a user-friendly interface with a contact table and a chatbot assistant powered by OpenAI's GPT-4.

## 🌐 Live Demo

The application can be pulled and run via Docker images:

- **Frontend Image**: [syedshahidashiqali/emailx-frontend](https://hub.docker.com/r/syedshahidashiqali/emailx-frontend)
- **Backend Image**: [syedshahidashiqali/emailx-backend](https://hub.docker.com/r/syedshahidashiqali/emailx-backend)
- **Project Demo**: [Watch on Google Drive](https://drive.google.com/file/d/1F0rnurAIRI6q3MQFOCB94eYCa4mxsTQx/view?usp=sharing)

---

## 📁 Project Structure

```
├── backend/                # Flask backend
│   ├── app.py              # Flask routes and main server
│   ├── ai_coach.py         # AI campaign generation logic using OpenAI
│   ├── data/
│   │   └── contacts.json   # List of 7 sample contacts
│   ├── templates/
│   │   └── index.html      # Main HTML fallback
│   └── requirements.txt    # Python dependencies
│   └── .env                # Environment variables (not committed)
│   └── Dockerfile          # Docker File for Backend
├── frontend/               # Next.js frontend
│   ├── pages/
│   │   └── index.tsx       # Home page
│   ├── components/
│   │   ├── ContactTable.tsx   # Contact display table
│   │   └── CampaignModal.tsx # Modal with AI chatbot suggestion
│   ├── hooks/
│   │   └── loader.ts       # Custom hook for loading state
│   ├── lib/
│   │   └── api.ts          # API functions (fetch contacts, suggestions)
│   ├── public/
│   └── Dockerfile          # Docker File for Frontend
├── docker-compose.yml      # Docker orchestration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/syedshahidashiqali/emailx-assessment-project
cd emailx-assessment-project
```

### 2. Setup environment

Create a `.env` file:

```
OPENAI_API_KEY=your_openai_key_here
```

### 3. Run with Docker Compose

```bash
docker-compose up --build
```

App runs on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### 4. Or use Docker Hub Images

```bash
docker pull syedshahidashiqali/emailx-frontend

docker pull syedshahidashiqali/emailx-backend
```

---

## 🧠 AI Campaign Logic

The AI Coach uses OpenAI's GPT-4 model to suggest personalized outreach emails. It works like this:

- Takes contact info (name, job title, LinkedIn, website).
- Combines it with sender info (company name, position, etc.).
- Sends a system + user prompt to GPT-4 with instructions.
- GPT-4 responds in a structured JSON format:

```json
{
  "subject": "...",
  "body": "...",
  "schedule": "2025-04-21 10:00",
  "justification": "...",
  "citations": [
    { "id": 1, "source_url": "..." }
  ]
}
```

---

## ✨ Features

- 📋 Contact table with sample leads
- 💬 Chatbot-style AI modal with GPT-4
- 🧠 Justified suggestions with citations
- ⚡ Next.js + Tailwind CSS frontend
- 🐍 Flask backend with OpenAI integration

---

## 📦 Backend Setup (Standalone)

```bash
cd backend
py -3 -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
flask run
```

---

## 📦 Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

---

## 📑 Assumptions

- Contacts are mock data (static JSON file)
- Campaign logic is prompt-based using OpenAI
- `.env` file is required to set the OpenAI key

---

## 📜 License

This project is for educational and assessment purposes only.

---

## 👨‍💻 Author

**Shahid Ali**  
Docker Hub: [syedshahidashiqali](https://hub.docker.com/u/syedshahidashiqali)

---

Feel free to reach out for feedback or collaboration!

