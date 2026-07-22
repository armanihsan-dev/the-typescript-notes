const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

// Use a boolean flag instead of a DOM element to track click state
let isScrollingFromClick = false;

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // 1. Tell the observer to pause its updates
        isScrollingFromClick = true;

        // 2. Immediately update the UI for the clicked link
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        // 3. Re-enable the observer after the smooth scroll finishes (approx 800ms)
        setTimeout(() => {
            isScrollingFromClick = false;
        }, 800);
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        // Ignore intersection updates if the user just clicked a sidebar link
        if (isScrollingFromClick) return;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach((l) => l.classList.remove('active'));

                // Find the link corresponding to the section currently in view
                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);

                if (activeLink) {
                    // Highlight it
                    activeLink.classList.add('active');

                    // BONUS UX: Automatically scroll the sidebar itself so the active link is always visible
                    activeLink.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });
                }
            }
        });
    },
    {
        // Triggers when a section enters the top 20% of the screen
        rootMargin: '-20% 0px -70% 0px'
    }
);

// Start observing all sections
sections.forEach((section) => observer.observe(section));