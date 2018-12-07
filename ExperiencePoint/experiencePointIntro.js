function test(){
/*	alert(allMenu[first].secondMenu[second].name)
		
	$('#title').text(allMenu[first].secondMenu[second].name);*/
	
	var firstId= sessionStorage.getItem("first");
	var secondId= sessionStorage.getItem("second");
	$('#title').text(allMenu[firstId].secondMenu[secondId].name);
	$('p').text(allMenu[firstId].secondMenu[secondId].intro)
	$("#address").text(allMenu[firstId].secondMenu[secondId].place)
	if(allMenu[firstId].secondMenu[secondId].isOrder=="是"){
		$("#isAppointment").text("是否需要预约:需要提前预约");
	}else{
		$("#isAppointment").text("是否需要预约:不需要提前预约");
	}
	
}


