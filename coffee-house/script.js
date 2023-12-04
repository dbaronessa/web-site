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
        // Get the current assortment from the URL or any other means
        const currentAssortment = getCurrentAssortment(); // Implement this function based on your logic

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


    function openModal(modalId) {
        const modalOverlay = document.getElementById(`modalOverlay${modalId.slice(-1)}`);
        const modal = document.getElementById(modalId);
        if (modalOverlay && modal) {
            modalOverlay.style.display = 'flex';
            modal.style.display = 'block';
        }
    }

    function closeModal(modalId) {
        const modalOverlay = document.getElementById(`modalOverlay${modalId.slice(-1)}`);
        const modal = document.getElementById(modalId);
        if (modalOverlay && modal) {
            modalOverlay.style.display = 'none';
            modal.style.display = 'none';
        }
    }



const hamburger = document.querySelector(".navbar__toggle");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".navbar__links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


