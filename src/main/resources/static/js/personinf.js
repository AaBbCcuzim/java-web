var config={
        "el":"#app",
        "data":{
            "severUrl":severUrl,
			"id":"",
			"account":"",
			"password":"",
			"email":"",
			"year":"",
			"month":"",
			"day":"",
			"school":"",
			"phone":""
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
			}
        },
		"mounted":function(){
			var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)sdw2021327\s*\=\s*([^;]*).*$)|^.*$/, "$1")
			
			if(myCookie==''){
				this.id= "none"
			}
			else {
				this.id = myCookie
				var url=severUrl+"/user/selectAll?id="+this.id
				var result = null
				var _this=this
				axios.get(url)
					.then(function(response){
						result = response.data
						_this.account=result.data.account
						_this.password=result.data.password
						_this.email=result.data.email
						_this.year=result.data.birthyear
						_this.month=result.data.birthmonth
						_this.day=result.data.birthday
						_this.school=result.data.school
						_this.phone=result.data.phone
					})
					.catch(function(e){
						console.log(e)
						window.alert("联网出错了")
					})
			}
		}
    }