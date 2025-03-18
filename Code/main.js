// Clear the console for debugging
console.clear();

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Check if GSAP is loaded
    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded. Check your script link in HTML.");
        return;
    }

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Wait for the full page to load
    window.addEventListener("load", () => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".wrapper",   // Element that triggers the animation
                    start: "top top",      // When the animation starts
                    end: "+=150%",         // When the animation ends
                    pin: true,             // Keeps the element fixed while scrolling
                    scrub: true,           // Smooth scrolling effect
                    // markers: true          // Debug markers (remove in production)
                }
            })
            .to("img", {
                scale: 2,                  // Zoom in
                z: 380,                    // Move forward (3D effect)
                filter: "blur(7px)",       // Blur effect
                transformOrigin: "center center",
                ease: "power1.inOut"
            })
            .to(
                ".section.welcome",
                {
                    scale: 1.1,            // Slight zoom in on the hero section
                    transformOrigin: "center center",
                    ease: "power1.inOut"
                },
                "<"  // Run this animation at the same time as the previous one
            )
            .fromTo(
                ".welcome-text", 
                { y: 50, opacity: 0 },  // Start: below and invisible
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },  // End: visible and in position
                "<"  // Run this animation at the same time as the previous one
            );
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // console.log("Clicked:", this.getAttribute("data-target"));
            const target = this.getAttribute("data-target");

            if (target.startsWith("#")) {  
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    console.log("Scrolling to:", targetElement);
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    console.error("Target section not found:", target);
                }
            }
        });
    });
});
