// Get the modal and the button to open the modal
let body = document.getElementById('main-body');
let modal = document.getElementById('loginModal');
let loginBtn = document.getElementById('loginBtn');
let closeBtn = document.getElementById('closeBtn');
console.log('e');
console.log('qweqw')
// When the user clicks the "Login" button, open the modal
function showlogin(){
    modal.style.display = 'flex';  // Show the modal
    modal.classList.remove('hidden');
}

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';  // Hide the modal
    modal.classList.add('hidden');
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
    modal.style.display = 'none';  // Hide the modal if clicking outside
    modal.classList.add('hidden');
    }
}

// Handle login form submission (just an example, no actual login)
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();  // Prevent page reload
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Example: log the values (replace this with actual authentication logic)
    console.log('Username:', username);
    console.log('Password:', password);

    // Close the modal after submitting
    modal.style.display = 'none';
    modal.classList.add('hidden');
}