$(document).ready(function(){
	$("#experienceForm").validate({
	    rules: {
	      username: {
	        required: true,//必写
	        minlength: 2    //最小长度
	      }
	    },
	    messages: {
	      username: {
	        required: "请输入用户名",
	        minlength: "用户姓名必须大于2"
	      }
	    }
	});
})

$.validator.setDefaults({
    submitHandler: function() {
      alert("提交事件!");
    }
});