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
	/*$('#addressName').pa*/
}


