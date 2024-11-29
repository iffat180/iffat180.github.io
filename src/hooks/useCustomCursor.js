import { useEffect } from "react";

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    let inactivityTimeout; // Timeout reference for inactivity

    // Move the cursor with the mouse
    const moveCursor = (e) => {
      resetInactiveState(); // Reset inactivity state on movement
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    };

    // Set the cursor as inactive
    const setInactiveState = () => {
      cursor.classList.add("inactive");
    };

    // Reset the inactivity timer and state
    const resetInactiveState = () => {
      cursor.classList.remove("inactive");
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(setInactiveState, 1800); // 1.8 seconds
    };

    // Add hover effect
    const addHover = () => cursor.classList.add("hover");
    const removeHover = () => cursor.classList.remove("hover");

    // Apply hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, span, p, h1, h2, h3, h4, h5, h6");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Attach mousemove listener and set initial inactivity timer
    document.addEventListener("mousemove", moveCursor);
    inactivityTimeout = setTimeout(setInactiveState, 500); // Initial timer

    // Cleanup event listeners and timeout on unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      clearTimeout(inactivityTimeout);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);
};

export default useCustomCursor;
