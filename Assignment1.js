function showPreview(event) {
    if(event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    }
}

$(document).ready(function(){
    $('#userPic a').click(function(){
        $('#upload-form').show();
    });

    $('#upload-form a').click(function(){
        $('#bar').show();
        $('#progress-bar').show();
        var progress = document.getElementById("progress-bar");
        var newWidth = progress.style.width;
        setTimeout(function(){ 
            //newWidth = "50%";
            $('#bar').text("50%")
        }, 1000);
        setTimeout(function(){ 
            $('#bar').text("100%")
            // newWidth = "100%";
        }, 2000);
        // $('#upload-form').hide();
        // $('#bar').hide();
        // $('#progress-bar').hide();
    });
});