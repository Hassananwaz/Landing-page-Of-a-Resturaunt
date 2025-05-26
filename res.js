    <!-- JavaScript -->
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Menu items animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const menuItems = document.querySelectorAll('.menu-item');
            
            // Function to check if an element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.bottom >= 0
                );
            }
            
            // Initial check for elements in viewport
            function checkElements() {
                menuItems.forEach((item, index) => {
                    if (isInViewport(item)) {
                        setTimeout(() => {
                            item.classList.add('animated');
                        }, index * 100);
                    }
                });
            }
            
            // Check on scroll
            window.addEventListener('scroll', checkElements);
            
            // Initial check
            checkElements();
            
            // Testimonial slider
            const slides = document.querySelector('.slides');
            const dots = document.querySelectorAll('.dot');
            let currentSlide = 0;
            
            function showSlide(index) {
                slides.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                currentSlide = index;
            }
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Auto slide
            setInterval(() => {
                const nextSlide = (currentSlide + 1) % dots.length;
                showSlide(nextSlide);
            }, 5000);
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Menu category filter
            const categoryButtons = document.querySelectorAll('.category-btn');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Simulate category filtering with animation
                    menuItems.forEach(item => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(30px)';
                    });
                    
                    setTimeout(() => {
                        menuItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, index * 100);
                        });
                    }, 300);
                });
            });
            
            // Form submission animation
            const form = document.querySelector('.contact-form');
            
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const submitBtn = this.querySelector('.submit-btn');
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.textContent = 'Sending...';
                    submitBtn.style.opacity = '0.7';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                        submitBtn.style.backgroundColor = '#4CAF50';
                        submitBtn.style.opacity = '1';
                        
                        // Reset form
                        setTimeout(() => {
                            form.reset();
                            submitBtn.textContent = originalText;
                            submitBtn.style.backgroundColor = '#e2b04a';
                            submitBtn.disabled = false;
                        }, 2000);
                    }, 1500);
                });
            }
            
            // Parallax effect for hero section
            window.addEventListener('scroll', function() {
                const hero = document.querySelector('.hero');
                const scrollPosition = window.scrollY;
                
                if (hero) {
                    hero.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
                }
            });
            
            // Add a food animation that follows cursor
            const body = document.querySelector('body');
            const foodIcons = ['🍕', '🍔', '🍷', '🍰', '🍣', '🍹', '🥗', '🍝'];
            
            body.addEventListener('mousemove', function(e) {
                if (Math.random() > 0.97) {
                    const icon = document.createElement('div');
                    icon.className = 'food-icon';
                    icon.textContent = foodIcons[Math.floor(Math.random() * foodIcons.length)];
                    icon.style.position = 'absolute';
                    icon.style.left = `${e.clientX}px`;
                    icon.style.top = `${e.clientY}px`;
                    icon.style.fontSize = '20px';
                    icon.style.pointerEvents = 'none';
                    icon.style.zIndex = '9999';
                    icon.style.opacity = '0';
                    icon.style.transition = 'all 1s ease';
                    
                    body.appendChild(icon);
                    
                    setTimeout(() => {
                        icon.style.transform = `translateY(-100px) rotate(${Math.random() * 90 - 45}deg)`;
                        icon.style.opacity = '1';
                    }, 10);
                    
                    setTimeout(() => {
                        icon.style.opacity = '0';
                    }, 800);
                    
                    setTimeout(() => {
                        body.removeChild(icon);
                    }, 1500);
                }
            });
            
            // CTA button hover animations
            const ctaButtons = document.querySelectorAll('.primary-btn, .secondary-btn, .menu-btn, .submit-btn');
            
            ctaButtons.forEach(button => {
                button.addEventListener('mouseover', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 20px rgba(226, 176, 74, 0.3)';
                });
                
                button.addEventListener('mouseout', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
            
            // Add special dish animation
            const specialDish = document.createElement('div');
            specialDish.innerHTML = `
                <div style="position: fixed; bottom: 30px; right: 30px; background-color: #141414; border-radius: 10px; padding: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); display: flex; align-items: center; z-index: 999; transform: translateY(200px); transition: transform 0.5s ease;">
                    <div style="width: 60px; height: 60px; border-radius: 10px; overflow: hidden; margin-right: 15px;">
                        <img src="/api/placeholder/100/100" alt="Special Dish" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div>
                        <h4 style="margin: 0 0 5px; color: #e2b04a;">Today's Special</h4>
                        <p style="margin: 0; font-size: 14px; color: #aaa;">Sea Bass with Saffron Sauce</p>
                        <p style="margin: 5px 0 0; font-size: 16px; font-weight: 600;">$34</p>
                    </div>
                    <button style="background: none; border: none; color: #666; margin-left: 15px; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            document.body.appendChild(specialDish);
            
            // Show special dish notification after 3 seconds
            setTimeout(() => {
                specialDish.querySelector('div').style.transform = 'translateY(0)';
            }, 3000);
            
            // Close button functionality
            specialDish.querySelector('button').addEventListener('click', function() {
                specialDish.querySelector('div').style.transform = 'translateY(200px)';
                
                setTimeout(() => {
                    document.body.removeChild(specialDish);
                }, 500);
            });
        });