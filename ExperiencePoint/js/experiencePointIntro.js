function test(){
	var firstId= sessionStorage.getItem("first");
	var secondId= sessionStorage.getItem("second");
	$('.introduction-title').text(allMenu[firstId].secondMenu[secondId].name);
	$('.introduction-content').text(allMenu[firstId].secondMenu[secondId].intro)
	$(".address").text(allMenu[firstId].secondMenu[secondId].place)
	if(allMenu[firstId].secondMenu[secondId].isOrder=="是"){
		$(".appointment").text("需要提前预约");
	}else{
		$(".appointment").text("不需要提前预约");
	}
	$("#addressName").attr('placeholder',allMenu[firstId].secondMenu[secondId].name);//体验点名称
	$("#themename").attr('placeholder',allMenu[firstId].firstMenu);
}

$(function () {
    var currYear = (new Date()).getFullYear();
    var opt={};
    opt.date = {preset : 'date'};
    opt.datetime = {preset : 'datetime'};
    opt.time = {preset : 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: true,
        nowText: "今天",
        startYear: currYear - 50, //开始年份
        endYear: currYear + 10 //结束年份
    };

    $("#date").mobiscroll($.extend(opt['date'], opt['default']));

});
$(function(){
    $("#introduction").css("display","block");
    $("nav a:first").addClass("active");
    $("nav a").on("click",function(){
        $("nav a").stop(false,false);
        $("nav a").removeClass("active");
        $(this).addClass("active");
        $("section .contentbox:eq("+$(this).index("nav a")+")").fadeIn(500).siblings().hide();
    });
});

$(document).ready(function(){
    /*绑定“清空”按钮*/
    $("#clear").on("click",function(){
        $("#username").val("");
        $("#phone").val("");
        $("#company").val("");
        $("#duty").val("");
        $("#association").val("");
        $("#date").val("");
        $("#peopleNumber").val("");
        $("#purpose").val("");
    })
    /*校验*/
    $("#experienceForm").validate({
        rules: {
            username: {
                required: true,//必写
                maxlength:10,//最大长度
                minlength: 2    //最小长度
            },
            phone:{
                required:true,
                digits:true,
                rangelength:[8,12]

            },
            company:{
                maxlength:30
            },
            duty:{
                maxlength:15
            },
            peopleNumber:{
                required:true,
                digits:true,
                maxlength:15
            },
            purpose:{
                maxlength:100
            }
        },
        messages: {
            username: {
                required: "请输入用户名",
                maxlength: "长度小于10",
                minlength: "长度大于2"
            },
            phone:{
                required:"请输入联系电话",
                digits:"必须是数字",
                rangelength:"电话长度在8-12之间"
            },
            company:"长度不能超过30",
            duty:"长度不能超过15",
            peopleNumber:{
                required:"请输入预约人数",
                digits:"必须是整数",
                maxlength:"长度不超过15"
            },
            purpose:"长度不超过100"
        }
    });
})

$.validator.setDefaults({
    submitHandler: function() {
        alert("提交成功!");
    }
});