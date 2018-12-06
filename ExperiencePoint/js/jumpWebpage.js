$(document).ready(function(){
	
	$('.second_menu_1_1').on('click',function  () {
		alert("一级菜单 : "+$('#first_menu_1').text()+"  二级菜单 : "+$('.second_menu_1_1').text())
		
	})
	
	$('.second_menu_1_2').on('click',function  () {
		alert("一级菜单 : "+$('#first_menu_1').text()+"  二级菜单 : "+$('.second_menu_1_2').text())
	})
})