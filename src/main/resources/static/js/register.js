var config={
	"el":"#app",
	"data":{
		"account":"",
		"password":"",
		"password2":"",
		"id":"",
		"accountstyle":"input1",
		"passwordstyle":"input1",
		"password2style":"input1",
		"idstyle":"input1",
		"accounterror":"",
		"passworderror":"",
		"passworderror2":"",
		"iderror":""
	},
	"methods":{
		"block1":function(){
			this.accountstyle = "input1"
			this.accounterror = ""
		},
		"block2":function(){
			this.passwordstyle = "input1"
			this.passworderror = ""
		},
		"block3":function(){
			this.password2style = "input1"
			this.passworderror2 = ""
		},
		"block4":function(){
			this.idstyle = "input1"
			this.iderror = ""
		},
		"register":function(){
			var j = this.registerjudge()
			if(j!=1){
				return 
			}
			var url=severUrl+"/user/register?account="+this.account+"&id="+this.id+"&password="+this.password
			axios.get(url)
			.then(function(response){
				result = response.data
				if(result.state!=0){
					window.alert("用户名已存在")
				}
				else {
					window.alert("注册成功")
					window.location.href=severUrl+"/login"
				}
			})
			.catch(function(e){
				console.log(e)
				window.alert("联网出错了")
			})
		},
		"registerjudge":function(){
			var ans = 1
			var accountjudge = /^(\w){6,16}$/
			var passwordjudge = /^(\w){6,16}$/
			var idjudge = /^[1-9a-zA-Z\u4e00-\u9afa5]{4,16}$/
			if(this.account===""){	
				this.accountstyle = "input2"
				ans = 0
			}
			if(this.password===""){
				this.passwordstyle = "input2"
				ans = 0
			}
			if(this.password2===""){
				this.password2style = "input2"
				ans = 0
			}
			if(this.id===""){
				this.idstyle = "input2"
				ans = 0
			}
			if(this.password!=this.password2){
				this.passwordstyle = "input2"
				this.password2style = "input2"
				ans = 0
			}
			if(accountjudge.test(this.account)==false){
				this.accountstyle = "input2"
				this.accounterror = "账号由6-16位数字，大小写字母或下划线组成"
				ans = 0
			}
			if(passwordjudge.test(this.password)==false){
				this.passwordstyle = "input2"
				this.password2style = "input2"
				this.passworderror = "密码由6-16位数字，大小写字母或下划线组成"
				this.passworderror2 = "密码由6-16位数字，大小写字母或下划线组成"
				ans = 0
			}						
			if(idjudge.test(this.id)==false){
				this.idstyle = "input2"
				this.iderror = "昵称由4-16数字，大小写字母或中文字符组成"
				ans = 0 
			}
			return ans
		}
	}
}