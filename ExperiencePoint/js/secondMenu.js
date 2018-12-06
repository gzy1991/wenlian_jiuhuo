$(document).ready(function(){
	/*json填充一级菜单*/
	$()
	
	/*点击第一个*/
	$('#first_menu_1').on('click',function(){
		if($('#second_menu_1').css('display')=="none"){
			$('#second_menu_1').css('display','block');
			$('.sin1').css('display','none');
		}else{
			$('#second_menu_1').css('display','none');
			$('.sin1').css('display','block');
			
			
		}	
	})	
					
})