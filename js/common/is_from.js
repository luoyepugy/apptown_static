/*表单验证*/

var form_mm={"format":function(text){//验证输入的格式
      if(!/^[0-9a-zA-Z]{11}$/.test(text)){
    	  return false;
       }		
       return true;
	},"isnull":function(text){//验证是否为空
	    if(text==""||text==undefined||text==null){
	    	return false;
	    }
	    return true;
   },"tel":function(text){//验证手机号码
	    if(!/^\d{11}$/.test(text)){
	    	return false;
	    }
	    return true;
   },"email":function(x){//验证邮箱
	   var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	   if(!reg.test(x)){
		   return  false;
	   }
   	   return true;
   },"isCardNo":function(num){//验证身份证号码
	   var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
	   if(reg.test(num) === false) {  
	       return  false;  
	   }  
       return true;
   },"isnumber":function(number){
   	var reg=/^[0-9]*$/;
   	if(reg.test(number) === false) {  
	       return  false;  
	   }  
       return true;
   }, 'strLength': function(str) {	// 返回字符输入长度
   		var len = 0;
   		for(var i = 0; i < str.length; i++) {
   			if(str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
   				len +=2;
   			} else {
   				len++;
   			}
   		}
   		return len;
   }
}