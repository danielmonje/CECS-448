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
        $('#bar').show();
        $('#progress-bar').show();
        //FIXME this is used to update width of the blue progression bar (bugged out)
        var progress = document.getElementById("progress-bar");
        var newWidth = progress.style.width;
        setTimeout(function(){ 
            newWidth = "50%";
            $('#bar').text("50%")
        }, 1000); //updates to 50% after 1 second
        setTimeout(function(){ 
            $('#bar').text("100%")
            newWidth = "100%";
        }, 2000); //updates to 100% after 2 seconds
        //Hides the upload form menu after 2 seconds
        // $('#upload-form').hide();
        // $('#bar').hide();
        // $('#progress-bar').hide();
    });
});