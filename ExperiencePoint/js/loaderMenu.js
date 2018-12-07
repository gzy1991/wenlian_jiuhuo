$(document).ready(function(){	
	loaderMenu();
})

function loaderMenu () {
	$('.first_menu').empty();	
	for(var i = 0;i < allMenu.length;i++){
		txt = "<li>";
		txt +="<div class='first_menu_text' id='"+i+"FristMenuId' onclick='clickFirstMenu (this)'>"+allMenu[i].firstMenu+"<span class='sin' id='"+i+"sin'>";
		txt +="</span></div>";
		txt +="<ul class='second_menu myclass' >";
		
		for(var j = 0;j<allMenu[i].secondMenu.length;j++){
			txt +="<li><div class='second_menu_1_1' id='"+j+"'   onclick='clickSecondMenu (this,"+i+")'>"+allMenu[i].secondMenu[j].name+"</div></li>";
			
		}		
		txt +="</ul></li>"
		$('.first_menu').append(txt);
	}
	
	
}


/*点击一级菜单*/
function clickFirstMenu (obj) {
		$("#"+obj.id+"").next().slideToggle(400);
		/*获取下三角的ID*/
		var sinId = obj.id.substring(0,1)+"sin";
		
		$("#"+sinId+"").toggle();
		/*firstNameId = parseInt(obj.id.substring(0,1));*/
		
	}
/*点击二级菜单*/
function clickSecondMenu(obj,firstNameId){
	/*
	 * 一级菜单名字   allMenu[firstNameId].firstMenu
	 * 二级菜单对象   allMenu[firstNameId].secondMenu[obj.id]
	 * */
/*	alert(allMenu[firstNameId].firstMenu);
	alert(allMenu[firstNameId].secondMenu[obj.id].name);*/
	
	sessionStorage.setItem("first", firstNameId);
	sessionStorage.setItem("second", obj.id);
	window.location.href = "ExperiencePointIntro.html";
	
}
