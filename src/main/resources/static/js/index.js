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
			"book1":function(){
				window.location.href=severUrl+"/probabilityindex"
			}
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