package com.yx.springboot.exception;

import com.yx.springboot.pojo.SeverResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class StoreExceptionHandler {

    @ExceptionHandler
    public SeverResult exceptionHandle(Throwable e){
        String message = e.getMessage();
        e.printStackTrace();
        SeverResult severResult = new SeverResult(500,"服务器出错，到控制台查看错误详细信息",message);
        return severResult;
    }
}
