const db = {
    chat: [
        {name: "ChatGPT", url: "https://chatgpt.com"},
        {name: "Claude", url: "https://claude.ai"},
        {name: "Gemini", url: "https://gemini.google.com"},
        {name: "DeepSeek", url: "https://deepseek.com"},
        {name: "Grok", url: "https://grok.com"},
        {name: "Perplexity", url: "https://perplexity.ai"},
        {name: "Poe", url: "https://poe.com"},
        {name: "Coze", url: "https://coze.com"}
    ],
    writing: [
        {name: "Grammarly", url: "https://grammarly.com"},
        {name: "CopyAI", url: "https://copy.ai"},
        {name: "QuillBot", url: "https://quillbot.com"},
        {name: "Notion AI", url: "https://notion.so"}
    ],
    design: [
        {name: "Midjourney", url: "https://midjourney.com"},
        {name: "Canva", url: "https://canva.com"},
        {name: "Leonardo", url: "https://leonardo.ai"},
        {name: "Ideogram", url: "https://ideogram.ai"},
        {name: "Adobe Firefly", url: "https://adobe.com/firefly"}
    ],
    video: [
        {name: "Veed.io", url: "https://veed.io"},
        {name: "HeyGen", url: "https://heygen.com"},
        {name: "InVideo", url: "https://invideo.io"},
        {name: "Descript", url: "https://descript.com"},
        {name: "Suno", url: "https://suno.com"}
    ],
    code: [
        {name: "Cursor", url: "https://cursor.com"},
        {name: "GitHub Copilot", url: "https://github.com/features/copilot"},
        {name: "Replit", url: "https://replit.com"}
    ],
    research: [
        {name: "Elicit", url: "https://elicit.com"},
        {name: "ChatPDF", url: "https://chatpdf.com"},
        {name: "Consensus", url: "https://consensus.app"}
    ]
};

function renderCategory(cat) {
    const cont = document.getElementById('content');
    cont.innerHTML = db[cat].map(t => `<a href="${t.url}" target="_blank" class="tool-card">${t.name}</a>`).join('');
}
renderCategory('chat'); // Boshlang'ich
