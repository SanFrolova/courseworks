document.addEventListener('DOMContentLoaded', function() {
    const titleText = document.querySelector('.title-text');
    const tasks1 = document.querySelector('.tasks-1');
    const tasks2 = document.querySelector('.tasks-2');
    const tasks3 = document.querySelector('.tasks-3');
    const results1 = document.querySelector('.results-1');
    const results2 = document.querySelector('.results-2');
    const results3 = document.querySelector('.results-3');
    
    const texts = [
        {
            title: "Conflict Resolution",
            tasks: tasks1,
            results: results1
        },
        {
            title: "Reconciliation of the parties",
            tasks: tasks2,
            results: results2
        },
        {
            title: "Legal and practical support",
            tasks: tasks3,
            results: results3
        }
    ];
    
    let currentIndex = 0;
    
    function updateTextContent() {
        // Скрываем все блоки
        texts.forEach(item => {
            item.tasks.style.display = 'none';
            item.results.style.display = 'none';
        });
        
        // Показываем текущий блок
        const current = texts[currentIndex];
        titleText.textContent = current.title;
        current.tasks.style.display = 'block';
        current.results.style.display = 'block';
        
        // Переходим к следующему индексу
        currentIndex = (currentIndex + 1) % texts.length;
    }
    
    // Инициализация
    updateTextContent();
    
    // Запускаем таймер для смены текста каждые 5 секунд
    setInterval(updateTextContent, 6600);
});