        // Mobile Navigation Toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const mainNav = document.getElementById('main-nav');
        
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Menu tab functionality
        const menuTabs = document.querySelectorAll('.menu-tab');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
            });
        });
        
        // Add to cart functionality
        const addToCartBtns = document.querySelectorAll('.btn');
        const cartCount = document.querySelector('.cart-count');
        let count = 3;
        
        addToCartBtns.forEach(btn => {
            if (btn.textContent === 'Add to Cart') {
                btn.addEventListener('click', () => {
                    count++;
                    cartCount.textContent = count;
                    
                    // Add animation effect
                    btn.textContent = 'Added!';
                    btn.style.backgroundColor = '#4CAF50';
                    
                    setTimeout(() => {
                        btn.textContent = 'Add to Cart';
                        btn.style.backgroundColor = '';
                    }, 1500);
                });
            }
        });