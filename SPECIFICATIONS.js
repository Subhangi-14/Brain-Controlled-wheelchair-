document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');

    // Helper to activate a tab
    function activateTab(tabId) {
        tabs.forEach(tab => {
            const isActive = tab.dataset.tab === tabId;
            tab.classList.toggle('active', isActive);
        });

        tabContents.forEach(content => {
            const isActive = content.id === tabId;
            content.classList.toggle('active', isActive);
        });

        // Update URL hash
        history.replaceState(null, null, `#${tabId}`);
    }

    // Click event
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            activateTab(target);
        });
    });

    // Keyboard navigation 
    document.addEventListener('keydown', (e) => {
        const activeIndex = [...tabs].findIndex(t => t.classList.contains('active'));
        if (e.key === 'ArrowRight') {
            const next = (activeIndex + 1) % tabs.length;
            activateTab(tabs[next].dataset.tab);
        } else if (e.key === 'ArrowLeft') {
            const prev = (activeIndex - 1 + tabs.length) % tabs.length;
            activateTab(tabs[prev].dataset.tab);
        }
    });

    // Activate based on URL hash
    const initialTab = window.location.hash.replace('#', '') || 'sensors';
    if (document.getElementById(initialTab)) {
        activateTab(initialTab);
    } else {
        activateTab('sensors');
    }
});
