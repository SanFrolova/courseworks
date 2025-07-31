let translations = {};

fetch('js/index.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        setLanguage('en');
    })
    .catch(error => console.error('Error loading translations:', error));

function setLanguage(lang) {
    if (!translations[lang]) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        
        if (key.includes('[')) {
            const arrayKey = key.split('[')[0];
            const index = key.match(/\[(\d+)\]/)[1];
            if (translations[lang][arrayKey] && translations[lang][arrayKey][index]) {
                element.textContent = translations[lang][arrayKey][index];
            }
        } 
        else if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    if (translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            
            localStorage.setItem('preferredLanguage', lang);
        });
    });
    
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    }
});