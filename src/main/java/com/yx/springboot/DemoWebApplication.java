package com.yx.springboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

import java.sql.*;

@SpringBootApplication
@MapperScan(basePackages = "com.yx.springboot.mapper")
public class DemoWebApplication {

    public static void main(String[] args) throws SQLException {
        SpringApplication.run(DemoWebApplication.class, args);
    }

}
