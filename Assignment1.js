var time= 3
var offset = '440';
var i = 1;
var file_uploaded = false;
var finished_uploading = false;
var fileURL;

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

    //----------shows upload form screen -----------------------
    $('#userPic a').click(function(){
        $('#upload-form').show();
    });
    $('#userPic').click(function(){
        $('#upload-form').show();
    });

    //------------- Get the Data from file input ----------------
    $('#browse-button').change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            //alert("file read");
            //$('#userPic svg').hide();
            //$('#userPic a').hide();
            //$('#userPic').css('background-image', 'url("' + reader.result + '")');
            fileURL = reader.result;
        }
        if(file){
            file_uploaded = true;
            reader.readAsDataURL(file);
        } else {
        }
    })
    //"uploads" an image via circle animation before closing the upload form screen
    $('#upload-button').click(function(){
        if(file_uploaded) {
            $('#userPic svg').hide();
            $('#userPic a').hide();
            $('#userPic').css('background-image', 'url("' + fileURL + '")');
            var interval = setInterval(function() {
                if (i == time) {
                    clearInterval(interval);
                    i = 1;
                    $('#upload-form').hide();
                    return;
                }
                $('.circle-animation').css('stroke-dashoffset', offset - ((i+1)*(offset/time)));
                i++;
            }, 1000);
        
        } else {
            
        }

    });
    
    

    //-----Close the file imput form when the x button is clicked
    $('#close-upload').click(function(){
        $('#upload-form').hide();
        this.val(null);
        $('.circle-animation').css('stroke-dashoffset', offset);
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
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var zip = document.getElementById("zipCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var hasErrors = false;
    var message = "Error(s):\n";
    var button = document.getElementById("submitButton");
    var errorMessage = document.getElementById("errorMessage");

    if(!validateDOB(dob))
    {
        document.getElementById("dob").classList.add("error");
        message += "Invalid DOB, must be mm/dd/yyyy.\n";
        hasErrors = true;
    }
    else
    {
        document.getElementById("dob").classList.remove("error");
    }

    if(!validateEmail(email))
    {
        document.getElementById("email").classList.add("error");
        message += "Invalid E-Mail.\n";
        hasErrors = true;
    }
    else
    {
        document.getElementById("email").classList.remove("error");
    }

    if(!(password == confirmPassword))
    {
        document.getElementById("password").classList.add("error");
        document.getElementById("confirmPassword").classList.add("error");
        message += "Passwords do not match.\n"
        hasErrors = true;
    }
    else
    {
        document.getElementById("password").classList.remove("error");
        document.getElementById("confirmPassword").classList.remove("error");
    }

    if(!validateZip(zip))
    {
        document.getElementById("zipCode").classList.add("error");
        message += "Invalid zip code.\n";
        hasErrors = true;
    }
    else
    {
        document.getElementById("zipCode").classList.remove("error");
    }

    if(!validatePhone(phoneNumber))
    {
        document.getElementById("phoneNumber").classList.add("error");
        message += "Invalid phone number.\n";
        hasErrors = true;
    }
    else
    {
        document.getElementById("phoneNumber").classList.remove("error");
    }

    if(!hasErrors)
    {
        button.textContent = "Submitted!";
        button.disabled = true;
        button.classList.add("button-animation");
        errorMessage.hidden = true;
    }
    else
    {
        errorMessage.textContent = message;
        errorMessage.hidden = false;
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

function validateZip(zip) 
{
    return /^\d{5}(-\d{4})?$/.test(zip);
}

function validateDOB(dob)
{
    return /^\d{1,2}([/])\d{1,2}\1\d{4}$/.test(dob);
}
