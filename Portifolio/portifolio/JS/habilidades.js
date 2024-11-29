
    document.addEventListener('DOMContentLoaded', () => {
      
        const toggleThemeBtn = document.createElement('button');
        toggleThemeBtn.innerText = '🌙 Tema Escuro';
        toggleThemeBtn.style.position = 'fixed';
        toggleThemeBtn.style.top = '20px';
        toggleThemeBtn.style.right = '20px';
        toggleThemeBtn.style.padding = '10px';
        toggleThemeBtn.style.backgroundColor = '#6200ea';
        toggleThemeBtn.style.color = 'white';
        toggleThemeBtn.style.border = 'none';
        toggleThemeBtn.style.borderRadius = '5px';
        toggleThemeBtn.style.cursor = 'pointer';
        document.body.appendChild(toggleThemeBtn);

        // Função para alternar o tema
        toggleThemeBtn.addEventListener('click', () => {
            const isDarkTheme = document.body.classList.toggle('dark-theme');
            toggleThemeBtn.innerText = isDarkTheme ? '☀️ Tema Claro' : '🌙 Tema Escuro';
        });
    });

