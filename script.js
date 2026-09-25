// ==========================================
// TASK 5 - SINGLE PAGE APPLICATION
// SPA ROUTER + UI INTERACTIONS
// ==========================================


// ==========================================
// DOM ELEMENTS
// ==========================================

const app = document.getElementById("app");

const navLinks = document.querySelectorAll(".nav-link");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navLinks");

const themeToggle = document.getElementById("themeToggle");


// ==========================================
// ROUTE DATA
// ==========================================

const routes = {

    home: {
        title: "Home",

        content: `
            <section class="page-section hero-page">

                <p class="intro">
                    Hello, I'm
                </p>

                <h1>
                    Namrata
                </h1>

                <h2>
                    Frontend Web Developer
                </h2>

                <p>
                    Welcome to my Single Page Application portfolio.
                    This website dynamically loads content without
                    requiring full page reloads.
                </p>

                <a
                    href="?page=projects"
                    data-route="projects"
                    class="primary-btn"
                >
                    Explore My Projects
                </a>

            </section>
        `
    },


    about: {
        title: "About",

        content: `
            <section class="page-section">

                <p class="page-label">
                    ABOUT ME
                </p>

                <h1>
                    About Me
                </h1>

                <p>
                    I am an engineering student interested in frontend
                    web development and creating responsive,
                    user-friendly websites.
                </p>

                <p>
                    I enjoy learning modern web technologies and
                    improving my development skills through
                    practical projects.
                </p>

            </section>
        `
    },


    skills: {
        title: "Skills",

        content: `
            <section class="page-section">

                <p class="page-label">
                    MY SKILLS
                </p>

                <h1>
                    Technical Skills
                </h1>

                <div class="cards-container">

                    <article class="skill-card">

                        <h2>
                            HTML5
                        </h2>

                        <p>
                            Semantic webpage structure and accessible
                            HTML elements.
                        </p>

                    </article>


                    <article class="skill-card">

                        <h2>
                            CSS3
                        </h2>

                        <p>
                            Responsive layouts, animations and modern
                            visual styling.
                        </p>

                    </article>


                    <article class="skill-card">

                        <h2>
                            JavaScript
                        </h2>

                        <p>
                            DOM manipulation, events and interactive
                            web functionality.
                        </p>

                    </article>


                    <article class="skill-card">

                        <h2>
                            Git & GitHub
                        </h2>

                        <p>
                            Version control and project collaboration.
                        </p>

                    </article>

                </div>

            </section>
        `
    },


    projects: {
        title: "Projects",

        content: `
            <section class="page-section">

                <p class="page-label">
                    MY WORK
                </p>

                <h1>
                    Projects
                </h1>

                <div class="cards-container">

                    <article class="project-card">

                        <h2>
                            Bus Reservation System
                        </h2>

                        <p>
                            A web-based academic project designed to
                            manage bus reservations and passenger
                            information.
                        </p>

                        <span>
                            Academic Project
                        </span>

                    </article>


                    <article class="project-card">

                        <h2>
                            Smart Study Planner
                        </h2>

                        <p>
                            A study planning application designed to
                            help students organize subjects, tasks,
                            deadlines and progress.
                        </p>

                        <span>
                            Web Project
                        </span>

                    </article>


                    <article class="project-card">

                        <h2>
                            Interactive Portfolio
                        </h2>

                        <p>
                            A responsive portfolio enhanced with
                            JavaScript-based interactions.
                        </p>

                        <span>
                            Frontend Project
                        </span>

                    </article>

                </div>

            </section>
        `
    },


    contact: {
        title: "Contact",

        content: `
            <section class="page-section">

                <p class="page-label">
                    GET IN TOUCH
                </p>

                <h1>
                    Contact Me
                </h1>

                <p>
                    Have a question or want to connect?
                    Send me a message.
                </p>


                <form
                    id="contactForm"
                    class="contact-form"
                >

                    <div class="form-group">

                        <label for="name">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="email">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Enter your message"
                            required
                        ></textarea>

                    </div>


                    <button
                        type="submit"
                        class="primary-btn"
                    >
                        Send Message
                    </button>


                    <p
                        id="formMessage"
                        class="form-message"
                        aria-live="polite"
                    ></p>

                </form>

            </section>
        `
    }

};


// ==========================================
// GET CURRENT ROUTE
// ==========================================

function getRoute() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const route =
        params.get("page");


    if (!route) {
        return "home";
    }


    return route;
}


// ==========================================
// UPDATE ACTIVE NAVIGATION
// ==========================================

function updateActiveNavigation(route) {

    navLinks.forEach(link => {

        link.classList.remove("active");


        if (link.dataset.route === route) {

            link.classList.add("active");

        }

    });

}


// ==========================================
// RENDER 404 PAGE
// ==========================================

function render404() {

    app.innerHTML = `

        <section class="page-section error-page">

            <div class="error-content">

                <p class="page-label">
                    ERROR
                </p>

                <h1>
                    404
                </h1>

                <h2>
                    Page Not Found
                </h2>

                <p>
                    The page you are looking for does not exist.
                </p>

                <a
                    href="?page=home"
                    data-route="home"
                    class="primary-btn"
                >
                    Return to Home
                </a>

            </div>

        </section>

    `;


    document.title =
        "Namrata | 404";


    updateActiveNavigation("");


    addPageTransition();
}


// ==========================================
// PAGE TRANSITION
// ==========================================

function addPageTransition() {

    app.classList.remove("page-enter");

    void app.offsetWidth;

    app.classList.add("page-enter");

}


// ==========================================
// RENDER PAGE
// ==========================================

function renderPage(
    route,
    addToHistory = false
) {

    // Check for invalid route
    if (!routes[route]) {

        render404();

        if (addToHistory) {

            history.pushState(
                {
                    route: "404"
                },
                "",
                "?page=404"
            );

        }

        return;
    }


    // Insert dynamic content
    app.innerHTML =
        routes[route].content;


    // Update browser title
    document.title =
        `Namrata | ${routes[route].title}`;


    // Update active navigation
    updateActiveNavigation(route);


    // Update URL
    if (addToHistory) {

        history.pushState(
            {
                route: route
            },
            "",
            `?page=${route}`
        );

    }


    // Animate page
    addPageTransition();


    // Initialize page functionality
    initializePageFeatures();


    // Close mobile navigation
    closeMobileMenu();

}


// ==========================================
// SPA NAVIGATION
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        const link =
            event.target.closest(
                "[data-route]"
            );


        if (!link) {
            return;
        }


        event.preventDefault();


        const route =
            link.dataset.route;


        renderPage(
            route,
            true
        );

    }
);


// ==========================================
// BROWSER BACK / FORWARD
// ==========================================

window.addEventListener(
    "popstate",
    function() {

        const route =
            getRoute();


        renderPage(
            route,
            false
        );

    }
);


// ==========================================
// MOBILE MENU
// ==========================================

function openMobileMenu() {

    navMenu.classList.add("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

}


function closeMobileMenu() {

    navMenu.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function() {

            const isOpen =
                navMenu.classList.contains("open");


            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );

}


// ==========================================
// DARK MODE
// ==========================================

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        document.body.classList.remove(
            "dark-mode"
        );

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


// Load saved theme
const savedTheme =
    localStorage.getItem("theme") ||
    "light";


applyTheme(savedTheme);


// Theme button
if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function() {

            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            const newTheme =
                isDark
                    ? "light"
                    : "dark";


            localStorage.setItem(
                "theme",
                newTheme
            );


            applyTheme(
                newTheme
            );

        }
    );

}


// ==========================================
// CONTACT FORM
// ==========================================

function initializePageFeatures() {

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const formMessage =
                document.getElementById(
                    "formMessage"
                );


            formMessage.textContent =
                "Thank you! Your message has been submitted successfully.";


            contactForm.reset();

        }
    );

}


// ==========================================
// INITIAL APPLICATION LOAD
// ==========================================

const initialRoute =
    getRoute();


renderPage(
    initialRoute,
    false
);