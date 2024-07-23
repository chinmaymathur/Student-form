$(document).ready(function() {
    $('#contact').on('input', function() {
        $(this).val($(this).val().replace(/\D/g, ''));
    });

    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();

        $('.text-danger').text('');

        let valid = true;
        const firstName = $('#firstName').val().trim();
        const middleName = $('#middleName').val().trim();
        const lastName = $('#lastName').val().trim();
        const email = $('#email').val().trim();
        const contact = $('#contact').val().trim();
        const password = $('#password').val().trim();
        const gender = $('input[name="gender"]:checked').val();
        const hobbies = $('input[name="hobbies"]:checked').map(function() { return this.value; }).get().join(', ');
        const city = $('#city').val().trim();
        const address = $('#address').val().trim();
        const dob = $('#dob').val().trim();

        const fullName = `${firstName} ${middleName} ${lastName}`.trim();

        if (!firstName) {
            $('#firstName-error').text('First name is mandatory.');
            valid = false;
        }
        if (!lastName) {
            $('#lastName-error').text('Last name is mandatory.');
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailPattern.test(email)) {
            $('#email-error').text('Please enter a valid email address.');
            valid = false;
        }
        if (!contact) {
            $('#contact-error').text('Please enter a valid contact number.');
            valid = false;
        }
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,8}$/;
        if (!password || !passwordPattern.test(password)) {
            $('#password-error').text('Password must be 6-8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character.');
            valid = false;
        }
        if (!gender) {
            $('#gender-error').text('Please select your gender.');
            valid = false;
        }

        if (!city) {
            $('#city-error').text('Please select your city.');
            valid = false;
        }

        if (valid) {
            // Show thank you message 
            $('.card-body').html(`
                <h1 class="card-title text-center">Thank You</h1>
                <p class="text-center">Thank you for filling up the form. Here is the information you provided:</p>
                <ul class="list-group">
                    <li class="list-group-item"><strong>Full Name:</strong> ${fullName}</li>
                    <li class="list-group-item"><strong>Email:</strong> ${email}</li>
                    <li class="list-group-item"><strong>Contact Number:</strong> ${contact}</li>
                    <li class="list-group-item"><strong>Gender:</strong> ${gender}</li>
                    <li class="list-group-item"><strong>Hobbies:</strong> ${hobbies}</li>
                    <li class="list-group-item"><strong>City:</strong> ${city}</li>
                    <li class="list-group-item"><strong>Address:</strong> ${address}</li>
                    <li class="list-group-item"><strong>Date of Birth:</strong> ${dob}</li>
                </ul>
                <div class="text-center mt-3">
                    <button class="btn btn-primary" onclick="window.location.reload()">Back</button>
                </div>
            `);
        }
    });
});
