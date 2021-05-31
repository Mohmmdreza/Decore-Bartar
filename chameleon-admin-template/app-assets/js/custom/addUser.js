$(document).ready(function () {
    $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
});

// Password Validation

$(document).ready(function () {

    var $password = $("#password");
    $password.keyup(function () {

        if ($password.val().length < 8) {
            $(".error-validation").attr("style", "display:block !important");
        } else {
            $(".error-validation").attr("style", "display:none !important");
        }
    })



});
$(document).ready(function () {
    var $inputNameValidation = $("#name");

    $inputNameValidation.keyup(function () {

        if ($inputNameValidation.val().length == 0) {
            $("#name").addClass("error");
            $("#name-label").addClass("color-red");
            $(".name-span").addClass("d-block");

        } else {
            $("#name").removeClass("error");
            $("#name-label").removeClass("color-red");
            $(".name-span").removeClass("d-block");

        }
    })

    var $inputLastNameValidation = $("#lastname");

    $inputLastNameValidation.keyup(function () {

        if ($inputLastNameValidation.val().length == 0) {
            $("#lastname").addClass("error");
            $("#lastname-label").addClass("color-red");
            $(".lastname-span").addClass("d-block");

        } else {
            $("#lastname").removeClass("error");
            $("#lastname-label").removeClass("color-red");
            $(".lastname-span").removeClass("d-block");

        }
    })


    var $inputPhoneValidation = $("#phone");

    $inputPhoneValidation.keyup(function () {

        if ($inputPhoneValidation.val().length == 0) {
            $("#phone").addClass("error");
            $("#phone-label").addClass("color-red");
            $(".phone-span").addClass("d-block");

        } else {
            $("#phone").removeClass("error");
            $("#phone-label").removeClass("color-red");
            $(".phone-span").removeClass("d-block");

        }
    })


    var $inputUsernameValidation = $("#username");

    $inputUsernameValidation.keyup(function () {

        if ($inputUsernameValidation.val().length == 0) {
            $("#username").addClass("error");
            $("#username-label").addClass("color-red");
            $(".username-span").addClass("d-block");

        } else {
            $("#username").removeClass("error");
            $("#username-label").removeClass("color-red");
            $(".username-span").removeClass("d-block");

        }
    })


    var $inputPassValidation = $("#password");

    $inputPassValidation.keyup(function () {

        if ($inputPassValidation.val().length == 0) {
            $("#password").addClass("error");
            $("#pass-label").addClass("color-red");
            $(".pass-span").addClass("d-block");

        } else {
            $("#password").removeClass("error");
            $("#pass-label").removeClass("color-red");
            $(".pass-span").removeClass("d-block");

        }
    })
})



// DropDown
// $(".lists").on("click", ".init", function () {
//     $(this).closest(".lists").children('.list:not(.init)').toggle();

// });

// var allOptions = $(".lists").children('.list:not(.init)');
// $(".lists").on("click", ".list:not(.init)", function () {
//     allOptions.removeClass('selected');
//     $(this).addClass('selected');
//     $(".lists").children('.init').html($(this).html());
//     allOptions.toggle();
// });

// $(".lists").click(function () {
//     $(".rotate").toggleClass("down");
// })

// // DropDown New
// var selectBtn = document.getElementsByClassName('custom-dropdown'),
//     dropdownMenu = document.getElementsByClassName('dropdownMenu');
// var flag = 0;
// for (i = 0; i < selectBtn.length; i++) {
//     selectBtn[i].onclick = function () {
//         if (flag == 0) {
//             for (j = 0; j < selectBtn.length; j++) {
//                 removeClass(selectBtn[j], 'active')

//             }
//             flag = 1;
//             console.log(flag)
//         } else if (flag == 1) {
//             addClass(this, 'active');
//             flag = 0;
//             console.log(flag);
//         }
//     };

// }
// for (i = 0; i < dropdownMenu.length; i++) {
//     var child = dropdownMenu[i].children;
//     for (j = 0; j < child.length; j++) {
//         child[j].onclick = function () {
//             var text = this.innerHTML;
//             this.parentNode.previousElementSibling.children[0].innerHTML = text;
//             toggleClass(this.parentNode, 'showMenu');
//         };
//     }
// }

// window.addEventListener('click', function (event) {
//     for (i = 0; i < selectBtn.length; i++) {
//         if (event.target != selectBtn[i].children[0]) {
//             removeClass(selectBtn[i], 'active');
//         }
//     }
// });




// function toggleClass(el, classToToggle) {
//     var classN = el.className;
//     if (classN.indexOf(classToToggle) > -1) {
//         el.className = classN.replace(" " + classToToggle, '');
//     } else {
//         el.className = classN + " " + classToToggle;
//     }
// }

// function addClass(el, classToToggle) {
//     var classN = el.className
//     if (classN.indexOf(classToToggle) < 1) {
//         el.className = classN + " " + classToToggle;
//     }
// }

// function removeClass(el, classToToggle) {
//     var classN = el.className;
//     if (classN.indexOf(classToToggle) > -1) {
//         el.className = classN.replace(" " + classToToggle, '');
//     }
// }