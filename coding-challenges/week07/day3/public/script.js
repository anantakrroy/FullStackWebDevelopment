$(document).ready(function () {

    // Switch between login and register forms
    $('#forLogin').on('click', function () {
        $('#loginForm').attr("hidden", false);
        $('#registerForm').attr("hidden", true);
    });

    $('#forRegister').on('click', function () {
        $('#registerForm').attr("hidden", false);
        $('#loginForm').attr("hidden", true);
    });


    // on login validate
    $('#login').on('click', function () {
        var username = $("#username").val();
        var password = $("#password").val();

        $.ajax({
            method: 'POST',
            url: '/login?',
            data: ({ username: username, password: password }),
            datatype: 'json',
            success: function (data) {
                alert("User: " + data.user + " successfully logged in!");
            }
        })
    });

    // on register validate
    $('#register').on('click', function () {
        var username = $("#regUser").val();
        var password = $("#regPass").val();
        var confPass = $("#confirmPass").val();

        $.ajax({
            method: 'POST',
            url: '/register',
            data: ({ username: username, password: password, confPass: confPass }),
            datatype: 'json',
            success: function (data) {
                alert("User: " + data.user + " successfully registered!");
            }
        })
    });
})