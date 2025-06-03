// Variável global para armazenar o número de itens no carrinho
let cartCount = 0;

// Função para atualizar a contagem do carrinho no cabeçalho
function updateCartCount() {
    const cartDisplay = document.getElementById('cart-count');
    cartDisplay.textContent = cartCount;
}

// Função chamada ao clicar no botão "Comprar"
function addToCart(productName) {
    cartCount++; // Incrementa o número de itens no carrinho
    updateCartCount(); // Atualiza a contagem no cabeçalho

    // Exibe uma mensagem de sucesso
    showSuccessMessage(productName);
}

// Função para mostrar a mensagem de sucesso
function showSuccessMessage(productName) {
    // Cria o elemento de mensagem
    const message = document.createElement('div');
    message.classList.add('success-message');
    message.textContent = `Você adicionou a ${productName} ao carrinho!`;

    // Adiciona a mensagem ao corpo da página
    document.body.appendChild(message);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Adiciona o ouvinte de eventos para cada botão "Comprar"
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.closest('.product-card').querySelector('h2').textContent;
        addToCart(productName); // Chama a função de adicionar ao carrinho
    });
});

// Inicializa a contagem de carrinho na página ao carregar
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Inicializa a contagem do carrinho
});

