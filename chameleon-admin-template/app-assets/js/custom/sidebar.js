$(document).ready(function () {


    var flag = 0;
    $("#toggle1").click(function () {
        console.log("ok")
        if (flag == 0) {
            $(".brand-logo2").attr("style", "display:block !important");
            $(".brand-logo1").attr("style", "display:none !important");

            flag = 1;
            console.log("flag 1", flag)

        }


        else if (flag == 1) {
            $(".brand-logo2").attr("style", "display:none !important");
            $(".brand-logo1").attr("style", "display:block !important");
            flag = 0;
            console.log("flag 0", flag)

        }










    });
});
