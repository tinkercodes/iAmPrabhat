document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dynamic project and blog loading
    const projects = [
        { title: "Project 1", description: "A cool project", link: "#" },
        { title: "Project 2", description: "Another great project", link: "#" },
        { title: "Project 3", description: "Yet another project", link: "#" }
    ];
    
    const blogs = [
        { title: "Blog Post 1", snippet: "An interesting blog post", link: "#" },
        { title: "Blog Post 2", snippet: "Another insightful post", link: "#" }
    ];
    
    function loadContent(containerId, items) {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `<h3>${item.title}</h3><p>${item.description || item.snippet}</p><a href="${item.link}" class="btn">Read More</a>`;
            container.appendChild(div);
        });
    }
    
    loadContent("projects-list", projects);
    loadContent("blog-list", blogs);

    // Contact form submission handling
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        this.reset();
    });
});
