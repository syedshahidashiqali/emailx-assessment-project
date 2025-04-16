# Technical Task: AI Email Campaign Coach

### Overview

Your task is to build a web application that displays a table of 7 contacts (e.g., name, job title, LinkedIn). You’ll add an AI Sales Coach chatbot in a Bootstrap modal that suggests a personalized email campaign (subject, body, schedule) for a selected contact. The AI should back up its suggestions with verifiable data. There are multiple ways of doing this, by creating a knowledge base of proven email campaigns/techniques (look up gong.io blog, hubspot blog & academy, close.com blog...) and using RAG to extract them, by creating an AI agent with web search capabilities, or by using simple rules. Use Flask for the backend and choose vanilla HTML/CSS/JavaScript with Bootstrap or React for the frontend. This tests your UI (table, modal) and Python/AI (campaign suggestions) skills.

### Tech Stack

**Frontend (choose one):**
- Option 1: Vanilla HTML, CSS (Bootstrap 5), Vanilla JavaScript.
- Option 2: React (with Bootstrap 5 for styling).

**Backend:**
- Python
- Flask


### Suggested Project Structure

You’re free to organize as you prefer, but here’s a suggested layout:

```
├── app/                    # Flask backend
│   ├── routes.py           # Flask routes (e.g., /suggest/<contact_id>)
│   ├── ai_coach.py         # AI Coach logic (rules, RAG, or search)
│   ├── templates/          # HTML templates for vanilla JS
│   │   └── index.html      # Contact table with Bootstrap
│   ├── static/             # CSS and JS assets
│   │   └── css/
│   │       └── style.css   # EmailX branding (e.g., .emailx-bg-primary)
│   └── data/               # Data files
│       └── contacts.json   # 7 contacts for table
├── frontend/               # React app (optional)
│   ├── src/                # React source files
│   │   ├── App.jsx         # Main React component
│   │   └── CampaignModal.jsx  # Modal component
│   └── package.json        # React dependencies
├── requirements.txt        # Python dependencies (e.g., flask)
└── README.md               # Task documentation
```

### Requirements

Build an app that:

1. Shows a table of 7 contacts with a “Generate Campaign” button per row.
2. Opens a Bootstrap modal when clicking the button, displaying an AI Coach with a conversational chatbot that gives email campaign suggestion:
      - Subject (e.g., “Grow with TechTrend!”).
      -  Body (e.g., “Hi Alice,\nLet’s explore AI for marketing...\n-EmailX”).
      -  Schedule (e.g., “2025-04-21 10:00”).
      -  Justification (e.g., “Based on Alice’s marketing role, I suggest a strategic pitch”).
3. Justifies suggestions using contact data (job title, LinkedIn, website) via:
      -  RAG: Embed data and retrieve relevant context / Search Agent: Simulate searching LinkedIn/website / Rules: Simple logic (e.g., “Director” → formal tone)

### Bonus (Optional):
Add Perplexity-like inline sources in the modal’s AI response, showing which resource inspired each suggestion. 

### Deliverables

GitHub repository with:

- Code (app/, templates/, static/, or frontend/ for React).
- README.md covering:
- Setup instructions.
- AI approach (RAG, search, rules).
- Assumptions (e.g., mock data).
- Modified contacts.json if enhanced.


### Evaluation Criteria

**UI (50%)**:
- Is the table responsive and Bootstrap-styled?
- Are the emailx colors incorporated in the styling?
- Does the modal work smoothly (open, display, save)?
- Does the AI Coach chatbot work smoothly?

**Python/AI (40%)**:
- Are suggestions relevant and justified?
- Is AI logic (RAG/search/rules) creative?
- Are Flask routes robust?

**Code Quality (10%)**:


**Bonus (+20%)**

### Timeline

Deadline: 21 days.

