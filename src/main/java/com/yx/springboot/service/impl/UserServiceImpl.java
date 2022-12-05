package com.yx.springboot.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yx.springboot.mapper.UserMapper;
import com.yx.springboot.pojo.User;
import com.yx.springboot.pojo.UserDRO;
import com.yx.springboot.pojo.UserDTO;
import com.yx.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public String login(UserDTO userDTO) {
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("account",userDTO.getAccount());
        queryWrapper.eq("password",userDTO.getPassword());
        User user = userMapper.selectOne(queryWrapper);

        if(user!=null){
            return user.getId();
        }
        return "null";
    }

    @Override
    public boolean register(UserDRO userDRO) {
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("account",userDRO.getAccount());
        User userj = userMapper.selectOne(queryWrapper);
        if(userj!=null){
            return false;
        }

        User user = new User();
        user.setAccount(userDRO.getAccount());
        user.setPassword(userDRO.getPassword());
        user.setId(userDRO.getId());

        int row = userMapper.insert(user);
        if(row>0){
            return true;
        }
        else return false;
    }

    @Override
    public User selectall(String id) {
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("id",id);
        User user = userMapper.selectOne(queryWrapper);

        return user;
    }

}
