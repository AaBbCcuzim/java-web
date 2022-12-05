var config={
        "el":"#app",
        "data":{
            "severUrl":severUrl,
			"id":""
        },
        "methods":{
			"course":function(){
				window.location.href=severUrl+"/index"
			},
            "login":function(){
            	window.location.href=severUrl+"/login"
            },
			"register":function(){
				window.location.href=severUrl+"/register"
			},
			"person":function(){
				window.location.href=severUrl+"/personinf"
			},
			"n11":function(){
				window.location.href=severUrl+"/probability1.1"
			},
			"n12":function(){
				window.location.href=severUrl+"/probability1.2"
			},
			"n13":function(){
				window.location.href=severUrl+"/probability1.3"
			},
			"n14":function(){
				window.location.href=severUrl+"/probability1.4"
			},
			"n15":function(){
				window.location.href=severUrl+"/probability1.5"
			},
        },
		"mounted":function(){
			var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)sdw2021327\s*\=\s*([^;]*).*$)|^.*$/, "$1")
			if(myCookie==''){
				this.id= "none"
			}
			else {
				this.id = myCookie
			}
		}
    }