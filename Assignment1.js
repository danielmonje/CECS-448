var time= 3
var offset = '440';
var i = 1
var upload_clicked = false;

function showPreview(event) {
    if(event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    }
}

$(document).ready(function(){
    //shows upload form screen
    $('#userPic a').click(function(){
        $('#upload-form').show();
    });

    //"uploads" an image for 2 seconds before closing the upload form screen
    $('#upload-form a').click(function(){
        var interval = setInterval(function() {
            if (i == time) {
                clearIntercal(intercal);
                upload_clicked = true;
                return;
            }
            $('.circle-animation').css('stroke-dashoffset', offset - ((i+1)*(offset/time)));
            i++;
        }, 1000);
    });
});