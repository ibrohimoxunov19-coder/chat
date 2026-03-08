const tools = {
    chat: [
        {name: "ChatGPT", url: "https://chatgpt.com"},
        {name: "Gemini", url: "https://gemini.google.com"},
        {name: "DeepSeek", url: "https://deepseek.com"},
        {name: "Claude", url: "https://claude.ai"}
    ],
    writing: [
        {name: "Grammarly", url: "https://grammarly.com"},
        {name: "CopyAI", url: "https://copy.ai"},
        {name: "QuillBot", url: "https://quillbot.com"}
    ],
    design: [
        {name: "Midjourney", url: "https://midjourney.com"},
        {name: "Canva", url: "https://canva.com"},
        {name: "Leonardo", url: "https://leonardo.ai"}
    ],
    video: [
        {name: "HeyGen", url: "https://heygen.com"},
        {name: "Veed.io", url: "https://veed.io"},
        {name: "Suno", url: "https://suno.com"}
    ],
    code: [
        {name: "Cursor", url: "https://cursor.com"},
        {name: "Replit", url: "https://replit.com"},
        {name: "GitHub Copilot", url: "https://github.com/features/copilot"}
    ],
    research: [
        {name: "Perplexity", url: "https://perplexity.ai"},
        {name: "Elicit", url: "https://elicit.com"},
        {name: "ChatPDF", url: "https://chatpdf.com"}
    ]
};

function showTab(category) {
    const container = document.getElementById('content');
    container.innerHTML = '';
    tools[category].forEach(tool => {
        container.innerHTML += `<a href="${tool.url}" target="_blank" class="tool-card">${tool.name}</a>`;
    });
}
// Boshlang'ich sahifa
showTab('chat');
