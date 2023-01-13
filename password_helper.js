$(document).ready(function(){
    $('#password_to_test').on('input', function(){
        test_pass($('#password_to_test').val());
    });
    $('#generate_password').on('click', function() {
        generate_pass();
    });
});

function test_pass(test_password) {
    let length = test_password.length;
    let regex = '';

    // Test for lowercase letters
    regex = /[a-z]/;
    if (regex.test(test_password)) {
        $("#passes_lowercase").prop('checked', true);
    }
    else {
        $("#passes_lowercase").prop('checked', false);
    }

    // Test for uppercase letters
    regex = /[A-Z]/;
    if (regex.test(test_password)) {
        $("#passes_uppercase").prop('checked', true);
    }
    else {
        $("#passes_uppercase").prop('checked', false);
    }

    // Test for digits
    regex = /\d/;
    if (regex.test(test_password)) {
        $("#passes_digits").prop('checked', true);
    }
    else {
        $("#passes_digits").prop('checked', false);
    }

    // Test for special characters
    regex = /[!@#$%^&*(){}]/;
    if (regex.test(test_password)) {
        $("#passes_special").prop('checked', true);
    }
    else {
        $("#passes_special").prop('checked', false);
    }

    // Test for sequential digits
    regex = /01|12|23|34|45|56|67|78|89|90/;
    if (regex.test(test_password)) {
        $("#passes_no_sequential_digits").prop('checked', false);
    }
    else {
        $("#passes_no_sequential_digits").prop('checked', true);
    }

    // Test for repeating letters
    let status = 'pass';
    for (let i = 0; i < test_password.length -1; i++) {
        if (test_password[i] == test_password[i+1]) {
            status = 'fail';
            break;
        }
    }
    if (status == 'pass') {
        $("#passes_no_repeating_characters").prop('checked', true);
    }
    else {
        $("#passes_no_repeating_characters").prop('checked', false);
    }


    // Check password length
    $('#password_length').html(length);

    // Calculate password entropy
    let pool_size = 0;
    if ($('#passes_lowercase').prop('checked')) {
        pool_size += 26;
    }
    if ($('#passes_uppercase').prop('checked')) {
        pool_size += 26;
    }
    if ($('#passes_digits').prop('checked')) {
        pool_size += 10;
    }
    if ($('#passes_special').prop('checked')) {
        pool_size += 12;
    }    
    let entropy = 0;
    entropy = Math.round(length * Math.log(pool_size) / Math.LN2);
    $('#password_entropy').html(entropy);

};


function generate_pass() {
    alert('In generate_pass');
    $('#generatod_password').html('Placeholder');
};
