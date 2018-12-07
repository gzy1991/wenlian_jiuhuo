$(document).ready(function(){
    $("#demondCollectionForm").validate({
        rules:{
            demond:{
                requires:true,
                maxlength:5
            }
        },
        messages:{
            demond:{
                requires:"请填写需求说明",
                maxlength:"长度不能超过500"
            }
        }
    })

    $("#submit").on("click",function(){
        alert("提交成功!");
        /*if($("#demondCollectionForm").valid()){
            alert("提交成功");
        }*/


    })



})
