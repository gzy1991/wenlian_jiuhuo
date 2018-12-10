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
	
