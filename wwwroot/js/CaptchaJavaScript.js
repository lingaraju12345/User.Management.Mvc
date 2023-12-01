function refreshCaptcha() {
    var captchaText = generateCaptcha();
    document.getElementById('captcha-text').textContent = captchaText;
}

function generateCaptcha() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    var captcha = '';

    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars.charAt(randomIndex);
    }

    return captcha;
}

document.addEventListener('DOMContentLoaded', function () {
    refreshCaptcha();

    document.getElementById('captcha-form').addEventListener('submit', function (event) {
        var userInput = document.getElementById('user-input').value.toUpperCase();
        var captchaText = document.getElementById('captcha-text').textContent;

        if (userInput !== captchaText) {
            alert('!!!CAPTCHA verification failed!!!');
            event.preventDefault();
        }
    });
    document.getElementById('captcha-form').addEventListener('submit', function (event) {
        var userInput = document.getElementById('user-input').value.toUpperCase();
        var captchaText = document.getElementById('captcha-text').textContent;

        if (userInput === captchaText) {
            alert('CAPTCHA verified');
            event.preventDefault();
        }
    });
});