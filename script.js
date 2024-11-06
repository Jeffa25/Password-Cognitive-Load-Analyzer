// script.js

// Event listeners for form submissions
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Implement actual login logic here
    alert('Logged in successfully!');
});

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Implement actual registration logic here
    alert('Registered successfully!');
});

// Password analysis function
function analyzePassword() {
    const password = document.getElementById('passwordAnalysisInput').value;
    const resultDiv = document.getElementById('analysisResult');
    if (!password) {
        resultDiv.innerHTML = 'Please enter a password to analyze.';
        return;
    }

    let complexityLevel = '';
    let suggestions = '';
    
    // Analyze password
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isRandom = isPasswordRandom(password);

    // Complexity Analysis
    if (length < 8) {
        complexityLevel = 'Weak: Password is too short.';
    } else if (length <= 12) {
        complexityLevel = 'Moderate: Password length is decent.';
    } else {
        complexityLevel = 'Strong: Password is sufficiently long.';
    }

    if (hasUppercase && hasLowercase && hasNumbers && hasSpecialChars) {
        complexityLevel += ' It uses a good combination of character types.';
    } else {
        complexityLevel += ' Consider using a mix of uppercase, lowercase, numbers, and special characters.';
    }

    // Suggestion based on randomness
    if (isRandom) {
        suggestions = 'This password seems random and hard to remember. Try incorporating a memorable phrase or acronym.';
    } else {
        suggestions = 'Great! You may want to add a few more characters to enhance security.';
    }

    resultDiv.innerHTML = `<strong>Analysis:</strong> ${complexityLevel}<br><strong>Suggestions:</strong> ${suggestions}`;
}

// Check if the password appears random (i.e., not containing easily guessable patterns)
function isPasswordRandom(password) {
    const commonPatterns = ['1234', 'password', 'qwerty', 'abcdef'];
    return !commonPatterns.some(pattern => password.toLowerCase().includes(pattern));
}
