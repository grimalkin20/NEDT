// Show dropdown on hover for navbar
document.querySelectorAll('.navbar .dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        this.classList.add('show');
        this.querySelector('.dropdown-menu').classList.add('show');
    });
    dropdown.addEventListener('mouseleave', function() {
        this.classList.remove('show');
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});

// Smooth fade effect for image slider
        const slider = document.getElementById('customImageSlider');
        const items = slider.querySelectorAll('.carousel-item');
        let current = 0;

        function showSlide(next) {
            items[current].classList.remove('active', 'carousel-fade');
            items[next].classList.add('carousel-fade');
            setTimeout(() => {
            items[next].classList.add('active');
            }, 20); // slight delay for transition
            current = next;
        }

        setInterval(() => {
            let next;
            do {
            next = Math.floor(Math.random() * items.length);
            } while (next === current);
            showSlide(next);
        }, 3500);

        // Add fade effect styles
        const style = document.createElement('style');
        style.innerHTML = `
            .carousel-item {
            opacity: 0;
            transition: opacity 1s;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            }
            .carousel-item.active {
            opacity: 1;
            position: relative;
            z-index: 2;
            }
            .carousel-inner {
            position: relative;
            }
        `;
        document.head.appendChild(style);

$(document).ready(function() {
        $('.filter-btn').on('click', function(){
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');
            let filter = $(this).data('filter');
            if(filter === 'all') {
                $('.course-card').show();
            } else {
                $('.course-card').each(function(){
                    let cat = $(this).data('category');
                    if(cat && cat.includes(filter)) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            }
        });
    });


// Show/hide scroll-to-top button
        window.addEventListener('scroll', function() {
            const btn = document.getElementById('scroll-top');
            if (window.scrollY > 200) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });

        // Scroll to top on click
        document.getElementById('scroll-top').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });