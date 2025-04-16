// DOM Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeBtns = document.querySelectorAll('.close-btn');
const addToCartBtns = document.querySelectorAll('.add-to-cart');

// Show Login Modal
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

// Show Signup Modal
signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'flex';
});

// Close Modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Add to Cart functionality
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        alert(`${productName} (${productPrice}) added to cart!`);
        
        // In a real app, you would update the cart count here
        // For now, we'll just show an alert
    });
});

// Form submissions (would be handled by backend in real app)
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here');
    loginModal.style.display = 'none';
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created! (In a real app)');
    signupModal.style.display = 'none';
});