import { useEffect, useState } from 'react';

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage and system preferences on initial load
        if (typeof localStorage !== 'undefined' && localStorage.theme === 'dark') {
            return true;
        }
        if (typeof localStorage === 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        return false;
    });

    useEffect(() => {
        // Update the HTML class when dark mode changes
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return {
        isDarkMode,
        toggleDarkMode: () => setIsDarkMode(prev => !prev)
    };
} 