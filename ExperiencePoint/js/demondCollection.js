$(document).ready(function(){
    $("#demondCollectionForm").validate({
        rules:{
            demond:{
                required:true,
                maxlength:5
            }
        },
        messages:{
            demond:{
                required:"请填写需求说明",
                maxlength:"长度不能超过500"
            }
        }
    })
    /*绑定"提交"按钮*/
    $("#submit").on("click",function(){
        if(!$("#demondCollectionForm").valid()){
            return;
        }
        alert("提交成功!");
    })
    /*绑定“清空”按钮*/
    $("#reset").on("click",function(){
        $("#demond").val("");
    })



})
