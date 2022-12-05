package com.yx.springboot.controller;

import com.yx.springboot.pojo.SeverResult;
import com.yx.springboot.pojo.User;
import com.yx.springboot.pojo.UserDRO;
import com.yx.springboot.pojo.UserDTO;
import com.yx.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("/login")
    public SeverResult login(UserDTO userDTO){

        String id = userService.login(userDTO);
        if(id!="null"){
            SeverResult severResult = new SeverResult(0,"登陆成功",id);

            return severResult;
        }
        else{
            SeverResult severResult = new SeverResult(101,"登陆失败",null);
            return severResult;
        }
    }

    @RequestMapping("/register")
    public SeverResult register(UserDRO userDRO){
        if(userService.register(userDRO)==true){
            SeverResult severResult = new SeverResult(0,"注册成功",null);
            return severResult;
        }
        else{
            SeverResult severResult = new SeverResult(101,"注册失败",null);
            return severResult;
        }
    }

    @RequestMapping("/selectAll")
    public SeverResult selectAll(@RequestParam("id") String id){
        User user = userService.selectall(id);
        if(user!=null){
            SeverResult severResult = new SeverResult(0,"查询成功",user);
            return severResult;
        }
        else{
            SeverResult severResult = new SeverResult(101,"查询失败",null);
            return severResult;
        }
    }
}
