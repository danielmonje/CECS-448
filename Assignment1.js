function showPreview(event) {
    if(event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    }
}
$(document).ready(function(){

    toggleSubmit(hasEmptyFields());
    addListenersToTextBoxes();

    $('#userPic a').click(function(){
        $('#upload-form').show();
    });

    $('#upload-form a').click(function(){
        $('#upload-form').hide();
    });
});

function toggleSubmit(hasEmpty)
{
    var button = document.getElementById("submitButton");

    if(hasEmpty)
    {
        button.disabled = true;
    }
    else
    {
        button.disabled = false;
    }
}

function hasEmptyFields()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipCode = document.getElementById("zipCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    
    if(firstName == "" || lastName == "" || dob == "" || username == "" ||
    email == "" || password == "" || confirmPassword == "" || address == "" ||
    city == "" || state == "" || zipCode == "" || phoneNumber == "") 
    {
        return true;
    }
    else
    {
        return false;
    }
}



function addListenersToTextBoxes()
{
    $(':text').each(function() 
    {
        $(this).bind('keyup', function()
        {
            toggleSubmit(hasEmptyFields());
        });
    });

    $(':password').each(function() 
    {
        $(this).bind('keyup', function()
        {
            toggleSubmit(hasEmptyFields());
        });
    });
}


