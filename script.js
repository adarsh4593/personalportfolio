// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Sticky Navbar Effect
window.addEventListener('scroll', function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-green-500");
    } else {
        navbar.classList.remove("bg-green-500");
    }
});

// Contact Form Submission (Using Formspree API)
document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    let formData = new FormData(this);

    let response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        alert("Message sent successfully!");
        this.reset();
    } else {
        alert("Error sending message. Please try again.");
    }
});
