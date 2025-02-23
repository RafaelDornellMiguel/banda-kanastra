   // Dados para os cards
        const cardContent = {
            music: [
                'Truco - Nova música!',
                'Rainha Vermelha - Single',
                'Ás de Copas - Em breve',
                'Blefe - Acústico'
            ],
            shows: [
                'São Paulo - 15/03 - Lollapalooza',
                'Rio de Janeiro - 22/03 - Circo Voador',
                'Belo Horizonte - 29/03 - Autódromo',
                'Curitiba - 05/04 - Opera de Arame'
            ],
            shirts: [
                'Camiseta Truco - Edição Limitada',
                'Camiseta Tour 2025',
                'Regata Rainha Vermelha',
                'Moletom Kanastra'
            ],
            mugs: [
                'Caneca Truco',
                'Caneca Tour 2025',
                'Caneca Rainha Vermelha',
                'Kit Especial Colecionador'
            ]
        };

        // Modal e Cards
        const modal = new bootstrap.Modal(document.getElementById('contentModal'));
        const modalBody = document.querySelector('.modal-body');
        const modalTitle = document.querySelector('.modal-title');

        function flipCard(card, type) {
            card.classList.add('flipped');
            
            // Seleciona conteúdo aleatório
            const content = cardContent[type];
            const randomItem = content[Math.floor(Math.random() * content.length)];
            
            // Configura título baseado no tipo
            const titles = {
                music: '🎵 Música Revelada!',
                shows: '🎪 Show Revelado!',
                shirts: '👕 Produto Revelado!',
                mugs: '🎁 Item Revelado!'
            };
            
            setTimeout(() => {
                modalTitle.textContent = titles[type];
                modalBody.innerHTML = `
                    <div class="text-center">
                        <h3 class="mb-4">${randomItem}</h3>
                        <button class="btn btn-danger">Saiba Mais</button>
                    </div>
                `;
                modal.show();
                
                // Reset card após fechar modal
                modal._element.addEventListener('hidden.bs.modal', () => {
                    card.classList.remove('flipped');
                }, { once: true });
            }, 500);
        }

        // Acessibilidade
        function toggleTheme() {
            const body = document.body;
            body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', body.dataset.theme);
        }

        function toggleContrast() {
            const body = document.body;
            body.dataset.contrast = body.dataset.contrast === 'high' ? 'normal' : 'high';
            localStorage.setItem('contrast', body.dataset.contrast);
        }

        // Carregar preferências salvas
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            const savedContrast = localStorage.getItem('contrast');
            
            if (savedTheme) document.body.dataset.theme = savedTheme;
            if (savedContrast) document.body.dataset.contrast = savedContrast;
            
            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(26, 26, 26, 0.95)';
                } else {
                    navbar.style.background = 'var(--black-matte)';
                }
            });
        });
    