// Загрузка переводов
let translations = {};

fetch('js/index.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        // Устанавливаем язык по умолчанию
        setLanguage('en');
    })
    .catch(error => console.error('Error loading translations:', error));

// Функция установки языка
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    // Устанавливаем атрибут lang для документа
    document.documentElement.lang = lang;
    
    // Обновляем активную кнопку переключателя языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Обновляем текст на странице
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        
        // Обработка массивов (например, hero_text[0])
        if (key.includes('[')) {
            const arrayKey = key.split('[')[0];
            const index = key.match(/\[(\d+)\]/)[1];
            if (translations[lang][arrayKey] && translations[lang][arrayKey][index]) {
                element.textContent = translations[lang][arrayKey][index];
            }
        } 
        // Обычные ключи
        else if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Особый случай для заголовка страницы
    if (translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }
}

// Обработчики для кнопок переключения языка
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            
            // Сохраняем выбор языка в localStorage
            localStorage.setItem('preferredLanguage', lang);
        });
    });
    
    // Проверяем сохраненный язык
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    }
});