document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('imageSlider');
    const images = [
        { src: '1.png' },
        { src: '2.png', alt: '빌바오 추억 5', date: '2024-03-19' },
        { src: '3.png' },
        { src: '4.png' },
        { src: '5.png' },
    ];

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';

    images.forEach(image => {
        const sliderItem = document.createElement('div');
        sliderItem.className = 'slider-item';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        const dateElement = document.createElement('div');
        dateElement.className = 'slider-date';
        dateElement.textContent = image.date;

        sliderItem.appendChild(img);
        sliderItem.appendChild(dateElement);
        sliderContainer.appendChild(sliderItem);
    });

    slider.appendChild(sliderContainer);

    let currentIndex = 0;
    const totalItems = images.length;

    function moveSlider() {
        currentIndex = (currentIndex + 1) % totalItems;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(moveSlider, 5000); // 5초마다 이미지 전환

    // 로그인 모달
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    closeBtn.onclick = function() {
        loginModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }

    // 로그인 폼 제출 처리
    const loginForm = document.getElementById("loginForm");
    loginForm.onsubmit = function(e) {
        e.preventDefault();
        // 여기에 로그인 처리 로직을 추가하세요
        console.log("로그인 시도");
        loginModal.style.display = "none";
    }
});