package com.yx.springboot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yx.springboot.pojo.User;
import org.apache.ibatis.annotations.*;


@Mapper
public interface UserMapper extends BaseMapper<User> {

}
