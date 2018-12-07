function test(){
/*	alert(allMenu[first].secondMenu[second].name)
	
	$('#title').text(allMenu[first].secondMenu[second].name);*/

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
/*绑定校验*/
var validate =function(){
    $()
    $("#experienceForm").validate({
        rules:{
            name:{
                requires:true,
                maxlength:10
            },
            phone:{
                requires:true,
                rangelength:[8,12],
                digits:true
            },
            company:{
                maxlength:30
            },
            duty:{
                maxlength:15
            },
            /*date:{
                requires:true
            },*/
            peopleNumber:{
                requires:true,
                digits:true,
                maxlength:15
            },
            purpose:{
                maxlength:100
            }
        },
        messages:{
            name:"请输入长度小于10的名字",
            phone:{
                requires:"请输入联系电话",
                rangelength:"电话长度在8-12之间",
                digits:"必须为整数"
            },
            company:"长度不能超过30",
            duty:"长度不能超过15",
            /*date:"请选择预约时间",*/
            peopleNumber:{
                requires:"请输入预约人数",
                digits:"必须是整数",
                maxlength:"长度不超过15"
            },
            purpose:"长度不超过100"
        }
    })
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
    validate();
	
})
