$(document).ready(function () {

    var flag = 0;
    $("#toggle1").click(function () {

        if (flag == 0) {
            $(".brand-logo1").css("display", "none");
            $(".brand-logo2").css("display", "block");

            flag = 1;

        } else if (flag == 1) {
            $(".brand-logo2").css("display", "none");
            $(".brand-logo1").css("display", "block");
            flag = 0;

        }
    });
});