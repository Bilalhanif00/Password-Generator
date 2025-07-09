function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const useWeak = document.getElementById("weak").checked;
    const useStrong = document.getElementById("strong").checked;
    const useVeryStrong = document.getElementById("veryStrong").checked;

    if (!useWeak && !useStrong && !useVeryStrong) {
        alert("Please select at least one password strength option.");
        return;
    }

    let chars = "";
    if (useWeak) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (useStrong) {
        chars += "0123456789";
    }
    if (useVeryStrong) {
        chars += "!@#$%^&*()_+=-{}[]<>?";
    }

    if (length < 3) {
        alert("Password length should be at least 3 characters.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("result").value = password;
}

function copyPassword() {
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
