// Listen for button click
$("button").on('click', displayUser);

// Global variable to store all users
var userList = [];

// Creating new elements for showing list
$("<div/>").attr("class", "user-display").appendTo(".container");
$("<div/>").attr("class", "row display-row").appendTo(".user-display");
$("<div/>").attr("class", "col-sm-8 mx-auto display-col").appendTo(".display-row");
$("<dl/>").attr("class", "row user-list").appendTo(".display-col");

// Call on button click
function displayUser() {

    // Push user info to list
    var usrName = $("#inputName").val();
    var usrAge = $("#inputAge").val();

    // Displaying the user list

    function displayUserList() {
        $("<dt/>").attr("class", "col-sm-5 i").text(usrName + " - ").appendTo(".user-list");
        $("<dd/>").attr("class", "col-sm-7 float-left font-italic").text(usrAge + " years").appendTo(".user-list");
    }

    // Disable button for 1.5seconds on error alert

    function showAlertDisableBtn() {
        $("button").attr("disabled", "true");
        setTimeout(function () {
            $("p").remove();
            $("button").removeAttr("disabled");
        }, 1000);
    }

    // Check for duplicate name entry -show success or error
    function checkDuplicate() {
        console.log("entered function.....")
        if (userList.length === 0) {
            $("<p/>").attr("class", "alert alert-success mx-3").text("Success! User record added!").appendTo(".show-alert");
            userList.push({
                "name": usrName,
                "age": usrAge,
            });
            displayUserList();
            showAlertDisableBtn();
            console.log(userList);
        } else if (userList.length >= 1) {
            var index = userList.findIndex(function (ele) { 
                return ele.name === usrName; 
            });
            if (index === -1) {
                $("<p/>").attr("class", "alert alert-success mx-3").text("Success! User record added!").appendTo(".show-alert");
                userList.push({
                    "name": usrName,
                    "age": usrAge,
                });
                displayUserList();
                showAlertDisableBtn();
            } else {
                $("<p/>").attr("class", "alert alert-danger mx-3 blank-form").text("Name already exists... Enter unique name!").appendTo(".show-alert");
                showAlertDisableBtn();
            }
        }
    }

    // Check for valid form entries
    if (!usrName) {
        if (!usrAge) {
            $("<p/>").attr("class", "alert alert-danger mx-3 blank-form").text("You are tying to submit a blank form!").appendTo(".show-alert");
            showAlertDisableBtn();

        } else {
            $("<p/>").attr("class", "alert alert-danger mx-3").text("Enter your name!").appendTo(".show-alert");
            showAlertDisableBtn();
        }

    } else if (!usrAge) {
        $("<p/>").attr("class", "alert alert-danger mx-3 blank-age").text("Your age is required!").appendTo(".show-alert");
        showAlertDisableBtn();

    } else if (usrAge < 15) {
        $("<p/>").attr("class", "alert alert-danger mx-3 err-age").text("You need to be above 15 years old!").appendTo(".show-alert");
        showAlertDisableBtn();

    }

    checkDuplicate();
}




// $("<p/>").attr("class", "alert alert-success mx-3").text("Success! User record added!").appendTo(".show-alert");
//         userList.push({
//             "name": usrName,
//             "age": usrAge,
//         });
//         console.log(userList);
//         displayUserList();
//         showAlertDisableBtn();


for (let i = 0; i < userList.length; i++) {
    if (usrName === userList[i].name) {
        console.log("entered if name equal....");
        console.log(userList[i]);
        $("<p/>").attr("class", "alert alert-danger mx-3 blank-form").text("Name already exists... Enter unique name!").appendTo(".show-alert");
        showAlertDisableBtn();
        break;
    } else if (usrName !== userList[i].name) {
        continue;
    } else if (i === userList.length - 1 && usrName === userList[i]) {
        
    }
        $("<p/>").attr("class", "alert alert-success mx-3").text("Success! User record added!").appendTo(".show-alert");
        userList.push({
            "name": usrName,
            "age": usrAge,
        });
        displayUserList();
        showAlertDisableBtn();

    }
}

// if (userList.includes(usrName)) {
            //     $("<p/>").attr("class", "alert alert-danger mx-3 blank-form").text("Name already exists... Enter unique name!").appendTo(".show-alert");
            //     showAlertDisableBtn();
            // } else if (!userList.includes(usrName)) {
            //     $("<p/>").attr("class", "alert alert-success mx-3").text("Success! User record added!").appendTo(".show-alert");
            //     userList.push({
            //         "name": usrName,
            //         "age": usrAge,
            //     });
            //     displayUserList();
            //     showAlertDisableBtn();
            // }