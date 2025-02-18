// // // const imgs = document.querySelectorAll('.header-slider ul img ');
// // // const prev_btn = document.querySelector('.control-prev');
// // // const next_btn = document.querySelector('.control-next');

// // // let n = 0;

// // // function changeSlide() {
// // //     for (let i = 0; i < imgs.length; i++) {
// // //         imgs[i].style.display = 'none';
// // //     }
// // //     imgs[n].style.display = 'block';
// // // }

// // // changeSlide();

// // // prev_btn.addEventListener('click', (e)=>{
// // //     if (n < 0) {
// // //         n--;
// // //     }else{
// // //         n = imgs.length - 1;
// // //     }
// // //     changeSlide();
// // // })

// // // next_btn.addEventListener('click', (e)=>{
// // //     if (n < imgs.length - 1) {
// // //         n++;
// // //     }else{
// // //         n = 0;
// // //     }
// // //     changeSlide();
// // // })

// // // const scrollContainer = document.querySelectorAll(".products");

// // // for (const item of scrollContainer) {
// // //     item.addEventListener("wheel", (e) => {
// // //         e.preventDefault();
// // //         if (e.deltaY > 0) {
// // //             item.scrollLeft += 100;
// // //         } else {
// // //             item.scrollLeft -= 100;
// // //         }
// // //     });
// // // }

// // document.addEventListener("DOMContentLoaded", function () {
// //     const imgs = document.querySelectorAll('.header-slider ul img');
// //     const prev_btn = document.querySelector('.control-prev');
// //     const next_btn = document.querySelector('.control-next');

// //     let n = 0;

// //     function changeSlide() {
// //         imgs.forEach(img => img.style.display = 'none'); // Hide all images
// //         imgs[n].style.display = 'block'; // Show current image
// //     }

// //     changeSlide();

// //     if (prev_btn) {
// //         prev_btn.addEventListener('click', () => {
// //             if (n > 0) {
// //                 n--;
// //             } else {
// //                 n = imgs.length - 1; // Loop back to last image
// //             }
// //             changeSlide();
// //         });
// //     }

// //     if (next_btn) {
// //         next_btn.addEventListener('click', () => {
// //             if (n < imgs.length - 1) {
// //                 n++;
// //             } else {
// //                 n = 0; // Loop back to first image
// //             }
// //             changeSlide();
// //         });
// //     }

// //     // Horizontal scroll for product sliders
// //     const scrollContainers = document.querySelectorAll(".products");

// //     scrollContainers.forEach(item => {
// //         item.addEventListener("wheel", (e) => {
// //             e.preventDefault();
// //             item.scrollLeft += e.deltaY > 0 ? 100 : -100;
// //         });
// //     });
// // });
// document.addEventListener("DOMContentLoaded", function () {
//     const imgs = document.querySelectorAll('.header-slider ul img');
//     const prev_btn = document.querySelector('.control-prev');
//     const next_btn = document.querySelector('.control-next');
    
//     let n = 0;
//     let intervalTime = 3000; // Change slide every 3 seconds

//     function changeSlide() {
//         imgs.forEach(img => img.style.display = 'none'); // Hide all images
//         imgs[n].style.display = 'block'; // Show current image
//     }

//     function nextSlide() {
//         n = (n + 1) % imgs.length; // Loop to first image after last
//         changeSlide();
//     }

//     function prevSlide() {
//         n = (n - 1 + imgs.length) % imgs.length; // Loop back to last image if at first
//         changeSlide();
//     }

//     changeSlide(); // Show first image initially

//     let slideInterval = setInterval(nextSlide, intervalTime); // Start automatic sliding

//     if (prev_btn) {
//         prev_btn.addEventListener('click', () => {
//             prevSlide();
//             resetInterval(); // Reset the interval when manually clicked
//         });
//     }

//     if (next_btn) {
//         next_btn.addEventListener('click', () => {
//             nextSlide();
//             resetInterval(); // Reset the interval when manually clicked
//         });
//     }

//     function resetInterval() {
//         clearInterval(slideInterval); // Stop current interval
//         slideInterval = setInterval(nextSlide, intervalTime); // Restart it
//     }

//     // Horizontal scroll for product sliders
//     const scrollContainers = document.querySelectorAll(".products");
//     scrollContainers.forEach(item => {
//         item.addEventListener("wheel", (e) => {
//             e.preventDefault();
//             item.scrollLeft += e.deltaY > 0 ? 100 : -100;
//         });
//     });
//     const productCards = document.querySelectorAll(".product-card");

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//         }
//     });
// }, { threshold: 0.2 });

// productCards.forEach(card => observer.observe(card));
// });

document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.header-slider ul img');
    const prev_btn = document.querySelector('.control-prev');
    const next_btn = document.querySelector('.control-next');
    
    let n = 0;
    let intervalTime = 3000; // Change slide every 3 seconds

    function changeSlide() {
        imgs.forEach(img => img.style.display = 'none'); // Hide all images
        imgs[n].style.display = 'block'; // Show current image
    }

    function nextSlide() {
        n = (n + 1) % imgs.length; // Loop to first image after last
        changeSlide();
    }

    function prevSlide() {
        n = (n - 1 + imgs.length) % imgs.length; // Loop back to last image if at first
        changeSlide();
    }

    changeSlide(); // Show first image initially

    let slideInterval = setInterval(nextSlide, intervalTime); // Start automatic sliding

    if (prev_btn) {
        prev_btn.addEventListener('click', () => {
            prevSlide();
            resetInterval(); // Reset the interval when manually clicked
        });
    }

    if (next_btn) {
        next_btn.addEventListener('click', () => {
            nextSlide();
            resetInterval(); // Reset the interval when manually clicked
        });
    }

    function resetInterval() {
        clearInterval(slideInterval); // Stop current interval
        slideInterval = setInterval(nextSlide, intervalTime); // Restart it
    }

    // Horizontal scroll for product sliders
    const scrollContainers = document.querySelectorAll(".products");
    scrollContainers.forEach(item => {
        item.addEventListener("wheel", (e) => {
            e.preventDefault();
            item.scrollLeft += e.deltaY > 0 ? 100 : -100;
        });
    });

    // Intersection Observer for product cards animations
    const productCards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    productCards.forEach(card => observer.observe(card));
});
