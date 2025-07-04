// This file is the entry point of the website. It initializes the application, sets up event listeners, and handles any dynamic functionality.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is initialized.');

    // Example of setting up an event listener
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});