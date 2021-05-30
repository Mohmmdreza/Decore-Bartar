$(document).ready(function () {


    var flag = 0;
    $("#toggle1").click(function () {
        console.log("ok")
        if (flag == 0) {
            $(".brand-logo2").attr("style", "display:block");
            $(".brand-logo1").attr("style", "display:none");
            flag = 1;

        }


        else if (flag == 1) {
            $(".brand-logo2").attr("style", "display:none");
            $(".brand-logo1").attr("style", "display:block");
            flag = 0;

        }










    });
});
