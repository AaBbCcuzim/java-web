var config={
        "el":"#app",
        "data":{
            "account":"",
			"password":""
        },
        "methods":{
			"login":function(){
				var url=severUrl+"/user/login?account="+this.account+"&password="+this.password
				debugger
				axios.get(url)
				.then(function(response){
					if(response.data.state==0){
						document.cookie=severcookie+"="+response.data.data
						window.alert("登陆成功")
						window.location.href=severUrl+"/index"
					}
					else{
						window.alert("账号或密码不对")
					}
				})
				.catch(function(e){
					window.alert("联网出错了")
				})
			},
			"register":function(){
				window.location.href=severUrl+"/register"
			}
        }
    }