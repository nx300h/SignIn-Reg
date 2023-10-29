function register() {
	// Get form data
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById("confirm-password").value;

	// Check if passwords match
	if (password !== confirm_password) {
		alert("Passwords do not match!");
		return;
	}

	// Register user (this is where you would send data to a server-side script)
	alert("Registration successful!");
}
