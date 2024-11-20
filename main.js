// Get the modal and the button to open the modal
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
console.log(loginBtn)
const closeBtn = document.getElementById('closeBtn');
console.log('e')
// When the user clicks the "Login" button, open the modal
loginBtn.addEventListener('click', function() {
    console.log('e');
    modal.style.display = 'flex';  // Show the modal
});


// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';  // Hide the modal
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
    modal.style.display = 'none';  // Hide the modal if clicking outside
    }
}

// Handle login form submission (just an example, no actual login)
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();  // Prevent page reload
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: log the values (replace this with actual authentication logic)
    console.log('Username:', username);
    console.log('Password:', password);

    // Close the modal after submitting
    modal.style.display = 'none';
}