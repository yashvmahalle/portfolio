document.addEventListener('DOMContentLoaded', function () {
    // Toggle menu and navbar on menu icon click
    document.getElementById('menu').addEventListener('click', function () {
        this.classList.toggle('fa-times');
        document.querySelector('.navbar').classList.toggle('nav-toggle');
    });

    // Handle scroll events
    window.addEventListener('scroll', function () {
        // Remove active classes from menu and navbar
        document.getElementById('menu').classList.remove('fa-times');
        document.querySelector('.navbar').classList.remove('nav-toggle');

        // Show or hide the scroll-to-top button
        if (window.scrollY > 60) {
            document.getElementById('scroll-top').classList.add('active');
        } else {
            document.getElementById('scroll-top').classList.remove('active');
        }

        // Scroll spy to highlight active section link in navbar
        document.querySelectorAll('section').forEach(function (section) {
            let height = section.offsetHeight;
            let offset = section.offsetTop - 200;
            let top = window.scrollY;
            let id = section.getAttribute('id');

            if (top > offset && top < offset + height) {
                document.querySelectorAll('.navbar ul li a').forEach(function (link) {
                    link.classList.remove('active');
                });
                document.querySelector('.navbar').querySelector(`[href="#${id}"]`).classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fetch data from JSON files
    async function fetchData(type = "skills") {
        let response;
        if (type === "skills") {
            response = await fetch("skills.json");
        } else {
            response = await fetch("./projects/projects.json");
        }
        const data = await response.json();
        return data;
    }

    // Display skills in the skills container
    function showSkills(skills) {
        let skillsContainer = document.getElementById("skillsContainer");
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += `
            <div class="bar">
                <div class="info">
                    <img src="${skill.icon}" alt="Icon representing ${skill.name}" />
                    <span>${skill.name}</span>
                </div>
            </div>`;
        });
        skillsContainer.innerHTML = skillHTML;
    }

    // Fetch and display skills
    fetchData("skills").then(data => {
        showSkills(data);
    });

    // Change document title and favicon based on visibility
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Hani Thakkar";
            document.getElementById("favicon").setAttribute("href", "assets/images/profile-pic.png");
        } else {
            document.title = "Come Back To Portfolio";
            document.getElementById("favicon").setAttribute("href", "assets/images/favhand.png");
        }
    });

    // Initialize typing effect
    new Typed(".typing-text", {
        strings: ["frontend development", "web development"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // Initialize tilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    // Initialize scroll reveal animations
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    // Scroll reveal for different sections
    srtop.reveal('.home .content h3', { delay: 200 });
    srtop.reveal('.home .content p', { delay: 200 });
    srtop.reveal('.home .content .btn', { delay: 200 });
    srtop.reveal('.home .image', { delay: 400 });
    srtop.reveal('.home .linkedin', { interval: 600 });
    srtop.reveal('.home .github', { interval: 800 });
    srtop.reveal('.home .twitter', { interval: 1000 });
    srtop.reveal('.home .telegram', { interval: 600 });
    srtop.reveal('.home .instagram', { interval: 600 });
    srtop.reveal('.home .dev', { interval: 600 });

    srtop.reveal('.about .content h3', { delay: 200 });
    srtop.reveal('.about .content .tag', { delay: 200 });
    srtop.reveal('.about .content p', { delay: 200 });
    srtop.reveal('.about .content .box-container', { delay: 200 });
    srtop.reveal('.about .content .resumebtn', { delay: 200 });

    srtop.reveal('.skills .container', { interval: 200 });
    srtop.reveal('.skills .container .bar', { delay: 400 });

    srtop.reveal('.education .box', { interval: 200 });

    srtop.reveal('.work .box', { interval: 200 });

    srtop.reveal('.experience .timeline', { delay: 400 });
    srtop.reveal('.experience .timeline .container', { interval: 400 });

    srtop.reveal('.contact .container', { delay: 400 });
    srtop.reveal('.contact .container .form-group', { delay: 400 });
});


