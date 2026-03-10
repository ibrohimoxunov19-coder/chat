import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbV3Gh46f48Qvj6jMmWE7gswOqVd3g_x0",
  authDomain: "chat-a5960.firebaseapp.com",
  projectId: "chat-a5960",
  storageBucket: "chat-a5960.firebasestorage.app",
  messagingSenderId: "138275981388",
  appId: "1:138275981388:web:794065c29d63986ee9cce9"
};

initializeApp(firebaseConfig);

const db = {
    chat: [{name: "ChatGPT", url: "https://chatgpt.com"}, {name: "Claude", url: "https://claude.ai"}, {name: "Gemini", url: "https://gemini.google.com"}],
    writing: [{name: "Grammarly", url: "https://grammarly.com"}, {name: "CopyAI", url: "https://copy.ai"}],
    design: [{name: "Midjourney", url: "https://midjourney.com"}, {name: "Canva", url: "https://canva.com"}],
    video: [{name: "Veed.io", url: "https://veed.io"}, {name: "HeyGen", url: "https://heygen.com"}],
    code: [{name: "Cursor", url: "https://cursor.com"}, {name: "GitHub Copilot", url: "https://github.com"}],
    research: [{name: "Elicit", url: "https://elicit.com"}, {name: "ChatPDF", url: "https://chatpdf.com"}],
    marketing: [{name: "Semrush", url: "https://semrush.com"}, {name: "AdCopy AI", url: "https://adcopy.ai"}]
};

window.renderCategory = (cat) => {
    const cont = document.getElementById('content');
    cont.innerHTML = db[cat].map(t => 
        `<a href="${t.url}" target="_blank" class="tool-card"><h3>${t.name}</h3></a>`
    ).join('');
};

// Sahifa yuklanganda birinchi bo'limni ko'rsatish
renderCategory('chat');
