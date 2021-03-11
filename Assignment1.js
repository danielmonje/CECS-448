var time= 3;
var offset = '440';
var i = 1;

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

    //shows upload form screen

    $('#userPic a').click(function(){
        $('#upload-form').show();
    });

    //"uploads" an image via circle animation before closing the upload form screen
    $('#upload-form a').click(function(){
        
        // if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        //     alert('The File APIs are not fully supported in this browser.');
        //     return;
        //   }   
        
        //   var input = document.getElementById('fileinput');
        //   if (!input) {
        //     alert("Um, couldn't find the fileinput element.");
        //   }
        //   else if (!input.files) {
        //     alert("This browser doesn't seem to support the `files` property of file inputs.");
        //   }
        //   else if (!input.files[0]) {
        //     alert("Please select a file before clicking 'Load'");               
        //   }
        //   else {
        //     var file = input.files[0];
        //     var fr = new FileReader();
        //     fr.onload = receivedText;
        //     //fr.readAsText(file);
        //     //fr.readAsBinaryString(file); //as bit work with base64 for example upload to server
        //     fr.readAsDataURL(file);
        //   }

        var file_url = $('#browse-button').prop('files')[0];
        $('body').css('background-image', file_url);

        var interval = setInterval(function() {
            if (i == time) {
                clearInterval(interval);
                 i = 1;
                return;
            }
            $('.circle-animation').css('stroke-dashoffset', offset - ((i+1)*(offset/time)));
            i++;
        }, 1000);
    });

    $('#close-upload').click(function(){
        $('#upload-form').hide();
        $('.circle-animation').css('stroke-dashoffset', offset);
        i = 1;
    });
});

function toggleSubmit(hasEmpty)
{
    var button = document.getElementById("submitButton");

    if(hasEmpty || button.textContent != "Submit")
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

function submitValidateFields()
{
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var hasErrors = false;
    var message = "Error:\n";
    var button = document.getElementById("submitButton");

    if(!validateEmail(email))
    {
        message += "Invalid E-Mail.\n";
        hasErrors = true;
    }

    if(!(password == confirmPassword))
    {
        message += "Passwords do not match.\n"
        hasErrors = true;
    }

    if(!validatePhone(phoneNumber))
    {
        message += "Invalid phone number.\n";
        hasErrors = true;
    }

    if(hasErrors)
    {
        alert(message);
    }
    else
    {
        button.textContent = "Submitted!";
        button.disabled = true;
    }

}

function validateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.toLowerCase()))
  {
    return true;
  }
    return false;
}
function validatePhone(phone) 
{
 if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone))
  {
    return true;
  }
    return false;
}

