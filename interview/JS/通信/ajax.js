var Util = {
	tpl : function (id) {
		return document.getElementById(id).innerHTML;
	},
	ajax: function (url,fn) {
		var xhr = new new XMLHttpRequest();
		xhr.open('GET',url,true);
		xhr.send(null);
		xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
            	var data = JSON.parse(xhr.responseText)
            	 fn && fn(data);

            }
		}
	}
}
Util.ajax("",function(){

})