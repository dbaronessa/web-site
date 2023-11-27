let currentSlide = 0;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % document.querySelectorAll('.slide').length;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
            updateSlider();
        }

        function updateSlider() {
            const slideWidth = document.querySelector('.slide').offsetWidth;
            document.querySelector('.slides').style.transform = `translateX(${-currentSlide * slideWidth}px)`;
            updateProgressBar();
            updatePointer();
        }

        function updateProgressBar() {
            const progressBar = document.querySelector('.progress-bar');
            const totalSlides = document.querySelectorAll('.slide').length;
            const percentage = (currentSlide / (totalSlides - 1)) * 100;

            progressBar.style.width = `${percentage}%`;
        }

        function updatePointer() {
            const pointers = document.querySelectorAll('.slider-pointer');
            pointers.forEach((pointer, index) => {
                pointer.style.transform = `translateX(${40 * index}px)`;
                pointer.style.backgroundColor = index === currentSlide ? '#403F3D' : '#C1B6AD'; 
            });
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }const progressBar = document.querySelector('.progress-bar');
        const totalSlides = document.querySelectorAll('.slide').length;
        const percentage = (currentSlide / (totalSlides - 1)) * 100;

        progressBar.style.width = `${percentage}%`;
        
        function updateProgressBar() {
            const progressBar = document.querySelector('.progress-bar');
            const totalSlides = document.querySelectorAll('.slide').length;
            const percentage = (currentSlide / (totalSlides - 1)) * 100;
    
            progressBar.style.width = `${percentage}%`;
        }

    function updatePointer() {
        const pointers = document.querySelectorAll('.slider-pointer');
        pointers.forEach((pointer, index) => {
            pointer.style.transform = `translateX(${40 * index}px)`;
            pointer.style.backgroundColor = index === currentSlide ? '#403F3D' : '#C1B6AD'; 
        });
    }

    document.addEventListener('DOMContentLoaded', function () {

        const currentAssortment = getCurrentAssortment(); 

        setActiveButton(currentAssortment);
    });

    function changeAssortment(assortmentNumber) {
        setActiveButton(assortmentNumber);
    }

    function setActiveButton(assortmentNumber) {
        document.querySelectorAll('.button-offer-menu button').forEach(function (button) {
            button.classList.remove('active');
        });

        const activeButton = document.getElementById(`btn${assortmentNumber}`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    function getCurrentAssortment() {
        return 1;
    }