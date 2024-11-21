document.addEventListener("DOMContentLoaded", function () {
    const checkButton = document.getElementById("check-btn");
    const themeSwitch = document.getElementById("theme-switch");

    checkButton.addEventListener("click", () => {
        const inputText = document.getElementById("text-input").value;
        displayResult(inputText);
    });

    themeSwitch.addEventListener("change", toggleTheme);

    /**
     * Display the result of whether the input text is a palindrome
     * @param {string} inputText - The text input by the user
     */
    function displayResult(inputText) {
        const resultElement = document.getElementById("result");

        // Check if input is empty and alert the user if it is
        if (!inputText.trim()) {
            resultElement.textContent = "Please enter some text.";
            return;
        }

        // Check if the input is too short
        if (inputText.length < 2) {
            resultElement.textContent = "Input is too short to be a palindrome.";
            return;
        }

        // Check if input contains only non-alphanumeric characters
        const cleanedText = inputText.replace(/[^a-z0-9]/gi, '');
        if (!cleanedText) {
            resultElement.textContent = "Input contains no valid characters.";
            return;
        }

        // Determine if the input text is a palindrome and display the result
        const isPalindrome = checkPalindrome(cleanedText);
        resultElement.textContent = isPalindrome
            ? `${inputText} is a palindrome`
            : `${inputText} is not a palindrome`;
    }

    /**
     * Check if a given text is a palindrome
     * @param {string} text - The text to check
     * @returns {boolean} - True if the text is a palindrome, false otherwise
     */
    function checkPalindrome(text) {
        // Clean the text by converting to lowercase and removing non-alphanumeric characters
        const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Reverse the cleaned text
        const reversedText = cleanedText.split('').reverse().join('');
        // Compare the cleaned text with the reversed text
        return cleanedText === reversedText;
    }

    /**
     * Toggle the theme between light and dark mode
     */
    function toggleTheme() {
        // Toggle the 'dark' class on the body element
        document.body.classList.toggle("dark");
    }
});
