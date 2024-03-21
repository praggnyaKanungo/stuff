function checkCode() {
    const code = document.getElementById('entry-code').value;
    if(code === "love") { // Replace YourSecretCode with your actual code
        document.getElementById('code-entry-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Incorrect code. Please try again.');
    }
}

let noMessages = ["Please!!!", "Please don't be mean!", "I love you though!"];
let messageIndex = 0;

function changeNoText() {
    if(messageIndex >= noMessages.length) messageIndex = 0;
    document.getElementById('no-btn').textContent = noMessages[messageIndex++];
}

document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = 'success.html'; // Ensure this path is correct
});
