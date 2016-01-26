var Tools = {

    //纯静态tab切换
    setTab: function (name, cursel, n) {
        for (i = 1; i <= n; i++) {
            var menu = document.getElementById(name + i);
            var con = document.getElementById("con_" + name + "_" + i);
            menu.className = i == cursel ? "hover" : "";
            con.style.display = i == cursel ? "block" : "none";
        }
    },

    //html转义解析
    html_encode: function (str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&gt;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;
    },
    html_decode: function (str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&gt;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        s = s.replace(/<br>/g, "\n");
        return s;
    },
    htmlEncode: function (str) {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    },
    htmlDecode: function (str) {
        var div = document.createElement("div");
        div.innerHTML = str;
        return div.innerHTML;
    },
    
    /**
     * 获取登录用户状态
     */
    getUserId: function(){
	var userid = appcan.locStorage.getVal('userid');   
	if(userid == null){
	    alert('对不起，你还没有登录！');
	    location.href = './login.html';
	}
    },
    
    /**
     * 获取登录用户名
     * 格式：<font id="username"></font>
     */
    getUserName: function(){
	var username = appcan.locStorage.getVal('username');             
	if(username != null){
	    $("#username").html(username);
	}
    },
    
    /**
     * 退出当前登录用户
     * @returns {undefined}
     */
    logout: function(){
	var userid = appcan.locStorage.getVal('userid');   
	if(userid != null){
	    appcan.locStorage.remove('userid');   
	    appcan.locStorage.remove('username');   
	    alert('退出登录成功！');
	    location.href = './index.html';
	}
    }
    
}