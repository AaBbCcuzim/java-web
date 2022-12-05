package com.yx.springboot.service;

import com.yx.springboot.pojo.User;
import com.yx.springboot.pojo.UserDRO;
import com.yx.springboot.pojo.UserDTO;

import java.util.List;

public interface UserService {

    public String login(UserDTO userDTO);
    public boolean register(UserDRO userDRO);
    public User selectall(String id);

}
