import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbV3Gh46f48Qvj6jMmWE7gswOqVd3g_x0",
  authDomain: "chat-a5960.firebaseapp.com",
  projectId: "chat-a5960",
  storageBucket: "chat-a5960.firebasestorage.app",
  messagingSenderId: "138275981388",
  appId: "1:138275981388:web:794065c29d63986ee9cce9"
};

const auth = getAuth(initializeApp(firebaseConfig));
const provider = new GoogleAuthProvider();

const db = {
    chat: [
        {name: "ChatGPT", url: "https://chatgpt.com"},
        {name: "Gemini", url: "https://gemini.google.com"},
        {name: "Claude", url: "https://claude.ai"},
        {name: "DeepSeek", url: "https://deepseek.com"},
        {name: "Grok", url: "https://grok.com"},
        {name: "Perplexity", url: "https://perplexity.ai"}
    ],
    writing: [
        {name: "Grammarly", url: "https://grammarly.com"},
        {name: "QuillBot", url: "https://quillbot.com"},
        {name: "CopyAI", url: "https://copy.ai"},
        {name: "Notion AI", url: "https://notion.so"},
        {name: "Jasper", url: "https://jasper.ai"},
        {name: "Writer", url: "https://writer.com"}
    ],
    design: [
        {name: "Canva", url: "https://canva.com"},
        {name: "Midjourney", url: "https://midjourney.com"},
        {name: "Leonardo", url: "https://leonardo.ai"},
        {name: "Ideogram", url: "https://ideogram.ai"},
        {name: "Adobe Firefly", url: "https://adobe.com/firefly"},
        {name: "Figma", url: "https://figma.com"}
    ],
    video: [
        {name: "Veed.io", url: "https://veed.io"},
        {name: "HeyGen", url: "https://heygen.com"},
        {name: "InVideo", url: "https://invideo.io"},
        {name: "Descript", url: "https://descript.com"},
        {name: "Suno", url: "https://suno.com"},
        {name: "Runway", url: "https://runwayml.com"}
    ],
    code: [
        {name: "Cursor", url: "https://cursor.com"},
        {name: "GitHub Copilot", url: "https://github.com"},
        {name: "Replit", url: "https://replit.com"},
        {name: "Claude Dev", url: "https://claude.ai"},
        {name: "Tabnine", url: "https://tabnine.com"},
        {name: "Codeium", url: "https://codeium.com"}
    ],
    research: [
        {name: "Elicit", url: "https://elicit.com"},
        {name: "ChatPDF", url: "https://chatpdf.com"},
        {name: "Consensus", url: "https://consensus.app"},
        {name: "SciSpace", url: "https://typeset.io"},
        {name: "Perplexity", url: "https://perplexity.ai"},
        {name: "Semantic Scholar", url: "https://semanticscholar.org"}
    ],
    marketing: [
        {name: "Semrush", url: "https://semrush.com"},
        {name: "AdCopy", url: "https://adcopy.ai"},
        {name: "Surfer SEO", url: "https://surferseo.com"},
        {name: "HubSpot AI", url: "https://hubspot.com"},
        {name: "Buffer", url: "https://buffer.com"},
        {name: "Canva Marketing", url: "https://canva.com"}
    ],
    productivity: [
        {name: "Notion", url: "https://notion.so"},
        {name: "Trello", url: "https://trello.com"},
        {name: "Todoist", url: "https://todoist.com"},
        {name: "ClickUp", url: "https://clickup.com"},
        {name: "Slack", url: "https://slack.com"},
        {name: "Obsidian", url: "https://obsidian.md"}
    ]
};

// Login/Logout logikasi
onAuthStateChanged(auth, (user) => {
    const menu = document.getElementById('menu');
    const welcome = document.getElementById('welcomeMsg');
    const btn = document.getElementById('authBtn');
    
    if (user) {
        welcome.innerText = `Xush kelibsiz, ${user.displayName}! 👋`;
        btn.innerText = "Chiqish";
        menu.style.display = "flex"; 
    } else {
        welcome.innerText = "Davom etish uchun tizimga kiring.";
        btn.innerText = "👤 Login";
        menu.style.display = "none";
        document.getElementById('content').innerHTML = "<h3>Saytdan foydalanish uchun Login qiling.</h3>";
    }
});

document.getElementById('authBtn').addEventListener('click', () => {
    if (auth.currentUser) signOut(auth);
    else signInWithPopup(auth, provider);
});

// Kategoriyani bosganda ma'lumotlarni chiqarish
document.querySelectorAll('#menu button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const cat = e.target.getAttribute('data-cat');
        // Xatolik bo'lmasligi uchun tekshiramiz
        if (db[cat]) {
            document.getElementById('content').innerHTML = db[cat].map(t => 
                `<a href="${t.url}" target="_blank" class="tool-card"><h3>${t.name}</h3></a>`
            ).join('');
        }
    });
});
