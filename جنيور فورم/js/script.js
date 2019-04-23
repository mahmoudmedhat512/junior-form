

$(function () {
    $('.inpt1').hover(function () {
        $('.inpt1 span').css({
            right : "0"
        })
        $('.inpt1 input').css({
            paddingRight : "50px"
        })
    })

    $('.inpt1').mouseleave(function () {
        $('.inpt1 span').css({
            right : "-43px"
            
        })
        $('.inpt1 input').css({
            paddingRight : "10px"
        })
    });
});


$(function () {
    $('.inpt2').hover(function () {
        $('.inpt2 span').css({
            right : "0"
        })
        $('.inpt2 input').css({
            paddingRight : "50px"
        })
    })

    $('.inpt2').mouseleave(function () {
        $('.inpt2 span').css({
            right : "-43px"
            
        })
        $('.inpt2 input').css({
            paddingRight : "10px"
        })
    });
});

$(function () {
    $('.inpt3').hover(function () {
        $('.inpt3 span').css({
            right : "0"
        })
        $('.inpt3 input').css({
            paddingRight : "50px"
        })
    })

    $('.inpt3').mouseleave(function () {
        $('.inpt3 span').css({
            right : "-43px"
            
        })
        $('.inpt3 input').css({
            paddingRight : "10px"
        })
    });
});

$(function () {
    $('.inpt4').hover(function () {
        $('.inpt4 span').css({
            right : "0"
        })
        $('.inpt4 input').css({
            paddingRight : "50px"
        })
    })

    $('.inpt4').mouseleave(function () {
        $('.inpt4 span').css({
            right : "-43px"
            
        })
        $('.inpt4 input').css({
            paddingRight : "10px"
        })
    });
});

$(function () {
    $('.inpt5').hover(function () {
        $('.inpt5 span').css({
            right : "0"
        })
        $('.inpt5 input').css({
            paddingRight : "50px"
        })
    })

    $('.inpt5').mouseleave(function () {
        $('.inpt5 span').css({
            right : "-43px"
            
        })
        $('.inpt5 input').css({
            paddingRight : "10px"
        })
    });
});

$(function () {
    $('.inpt6').hover(function () {
        $('.inpt6 span').css({
            right : "0"
        })
        $('.inpt6 input').css({
            paddingRight : "50px"
        })
    })

    $('.inpt6').mouseleave(function () {
        $('.inpt6 span').css({
            right : "-43px"
            
        })
        $('.inpt6 input').css({
            paddingRight : "10px"
        })
    });
});

$(function () {
    $('.inpt7').hover(function () {
        $('.inpt7 span').css({
            right : "0"
        })
        $('.inpt7 input').css({
            paddingRight : "50px"
        })
    })

    $('.inpt7').mouseleave(function () {
        $('.inpt7 span').css({
            right : "-43px"
            
        })
        $('.inpt7 input').css({
            paddingRight : "10px"
        })
    });
});







function myfun(){
    var x = document.getElementById("mobnum").value;
    if(x==""){
        document.getElementById("message").innerHTML="Please Fill Mobile Number";
        return false;
    }
    if(isNaN(x)){
        document.getElementById("message").innerHTML="Enter only Numeric value";
        return false;

    }
    if(x.length<11){
        document.getElementById("message").innerHTML="Mobile Number Must Be 11 digit";
        return false;
    }
    if(x.length>11){
        document.getElementById("message").innerHTML="Mobile Number Must Be 11 digit";
        return false;
    }
    
    
    
    
    var y = document.getElementById("mobnum2").value;
    if(y==""){
        document.getElementById("message2").innerHTML="Please Fill Mobile Number";
        return false;
    }
    if(isNaN(y)){
        document.getElementById("message2").innerHTML="Enter only Numeric value";
        return false;

    }
    if(y.length<11){
        document.getElementById("message2").innerHTML="Mobile Number Must Be 11 digit";
        return false;
    }
    if(y.length>11){
        document.getElementById("message2").innerHTML="Mobile Number Must Be 11 digit";
        return false;
    }
    

    
}