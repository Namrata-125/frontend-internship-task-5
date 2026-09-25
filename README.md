# Week 5 – Single Page Application (SPA) Simulation

## 📌 Project Overview

This project was developed as part of the **Week 5 Frontend Web Development Internship Task**. The objective was to simulate a Single Page Application (SPA) using **HTML, CSS, and JavaScript**.

The application dynamically changes page content without requiring a complete browser page reload. It uses JavaScript-based client-side routing, browser history management, DOM manipulation, responsive design, smooth page transitions, dark mode, and basic error handling.

The project demonstrates how a traditional multi-page website can be structured as a single-page interface while maintaining clear navigation and a responsive user experience.

---

## 🎯 Objectives

- Build a small-scale Single Page Application simulation.
- Dynamically load and display page content.
- Implement client-side navigation using JavaScript.
- Use the browser History API for navigation.
- Manipulate the DOM dynamically.
- Provide smooth page transitions.
- Create a responsive interface for different screen sizes.
- Implement basic 404 error handling.
- Add interactive features such as dark mode and a contact form.
- Test and debug the application before deployment.

---

## ✨ Features

### 🔹 SPA Navigation
The application dynamically displays different sections without requiring a complete page reload.

Available routes:

- Home
- About
- Skills
- Projects
- Contact

### 🔹 Client-Side Routing

The application uses JavaScript to detect the requested route and render the corresponding content.

Example:

```text
index.html
index.html?page=about
index.html?page=skills
index.html?page=projects
index.html?page=contact
🔹 Browser History

The JavaScript History API is used to manage navigation.

The application supports:

Browser Back button
Browser Forward button
URL state changes
popstate event handling
🔹 Dynamic Content

Page content is generated and inserted into the main application container using JavaScript DOM manipulation.

🔹 Smooth Page Transitions

CSS animations are used when new page content is displayed to provide a smoother navigation experience.

🔹 Responsive Design

The interface is designed to adapt to:

Desktop
Tablet
Mobile
🔹 Dark Mode

Users can switch between light and dark themes. The selected theme is stored using browser localStorage.

🔹 Mobile Navigation

A responsive navigation menu is provided for smaller screen sizes.

🔹 Contact Form Interaction

The Contact page includes a form with JavaScript-based submission handling and a success message without refreshing the page.

🔹 404 Error Handling

Invalid routes display a custom Page Not Found interface instead of leaving the application in a broken state.

🛠️ Technologies Used
Technology	Purpose
HTML5	Application structure
CSS3	Styling, responsive design and animations
JavaScript	Routing, DOM manipulation and interactions
History API	Browser navigation and URL state
LocalStorage	Theme preference persistence
Git	Version control
GitHub	Source code hosting
GitHub Pages	Live deployment
🏗️ Application Architecture

The project follows a simple SPA architecture:

User Interaction
       ↓
Navigation Link
       ↓
JavaScript Route Detection
       ↓
Route Selection
       ↓
Dynamic Content Rendering
       ↓
DOM Update
       ↓
Browser History Update

The application uses a single HTML page as the main shell. JavaScript determines which content should be displayed based on the current route.

🔄 Routing Implementation

The current route is obtained from the URL query parameter.

For example:

?page=about

JavaScript reads the page parameter and selects the corresponding page content.

Navigation is handled using:

history.pushState()

Browser Back and Forward actions are handled using:

window.addEventListener("popstate", ...)

This allows navigation between application views while keeping the SPA structure.

📁 Project Structure
frontend-internship-task-5/
│
├── index.html
├── style.css
├── script.js
├── favicon.svg
│
└── screenshots/
    ├── browser-history.png
    ├── console-final.png
    ├── contact-form.png
    ├── dark-mode.png
    ├── desktop.png
    ├── error-404.png
    ├── mobile.png
    ├── routing.png
    └── tablet.png
🧪 Testing and Verification

The application was tested for the major functionality required by the task.

Test	Verification
Home page	Verified
About navigation	Verified
Skills navigation	Verified
Projects navigation	Verified
Contact navigation	Verified
Browser Back navigation	Verified
Browser Forward navigation	Verified
Dynamic content rendering	Verified
404 handling	Verified
Dark mode	Verified
Contact form interaction	Verified
Mobile navigation	Verified
Responsive layouts	Verified
Browser console	Verified
📸 Screenshots
SPA Routing

Browser History

404 Error Handling

Mobile View

Tablet View

Desktop View

Dark Mode

Contact Form

Console Verification

🌐 Live Demo

GitHub Pages:
https://namrata-125.github.io/frontend-internship-task-5/

💻 GitHub Repository

Repository:
https://github.com/Namrata-125/frontend-internship-task-5

🚧 Challenges and Solutions
1. Client-Side Routing

A routing approach was required that could work with a static GitHub Pages deployment.

Solution:
Query-based routes were implemented using URLs such as:

index.html?page=about

This allowed the SPA navigation to work with the deployed static site.

2. Browser History

Navigation needed to work with browser Back and Forward controls.

Solution:
The History API and popstate event were implemented to manage route changes.

3. Invalid Routes

Users could enter an invalid route manually.

Solution:
A custom 404 view was implemented to provide a clear error state and a way to return to the Home page.

4. Responsive Navigation

The navigation needed to remain usable on smaller screens.

Solution:
A responsive mobile navigation menu was implemented using CSS media queries and JavaScript interaction.

📚 Learning Outcomes

Through this project, I practiced:

SPA architecture
Client-side routing
JavaScript DOM manipulation
Browser History API
pushState() and popstate
Dynamic content rendering
Responsive web design
CSS transitions and animations
LocalStorage
Form interaction
Error handling
Git and GitHub
GitHub Pages deployment
Testing and debugging
👩‍💻 Author

Namrata

Computer Engineering Student
Frontend Web Development Intern

📌 Internship Task

Week 5 – Developing a Single Page Application (SPA) Simulation

The project was developed to demonstrate the integration of HTML, CSS and JavaScript for creating a dynamic, interactive and responsive single-page application experience.
