document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // กำหนดตำแหน่งใหม่ให้กับ currentIndex
    currentIndex = (index + totalSlides) % totalSlides; // เพื่อให้วนกลับไปที่ 0

    // ซ่อนและแสดงภาพที่ถูกต้อง
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex+1) { // รูปที่ชัดสุด
            slide.classList.add('active');
        }
    });

    // ปรับตำแหน่งของ slider-images
    const sliderImages = document.querySelector('.slider-images');
    const translateValue = -((currentIndex) * (100 / 3)); // ใช้ currentIndex เพื่อให้ภาพที่กดแสดงตรงกลาง
    sliderImages.style.transform = `translateX(${translateValue}%)`;
}

// ฟังก์ชันสำหรับเลื่อนภาพไปข้างหน้าและย้อนกลับ
function moveSlide(direction) {
    currentIndex += direction; // เพิ่มหรือลด currentIndex ตามทิศทาง
    if (currentIndex < 0) {
        currentIndex = 9; // กลับไปที่ภาพสุดท้าย
    } else if (currentIndex > 9) {
        currentIndex = 0; // กลับไปที่ภาพแรก
    }
    showSlide(currentIndex);
}

// เริ่มต้นแสดงภาพแรก
showSlide(currentIndex);