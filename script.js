// Typewriter effect
const roles = ["Saya berasal dari SMK Prima Unggul", "Jurusan saya Broadcasting", "Saya berusia 16 Tahun"];
let roleIndex = 0;
let charIndex = 0;
const typeElement = document.querySelector(".typewriter");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typeElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typeElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Animate progress bars when visible
const progressBars = document.querySelectorAll(".progress-bar span");
window.addEventListener("scroll", () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.dataset.skill + "%";
        }
    });
});
