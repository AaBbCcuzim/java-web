package com.yx.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
public class HtmlController {

    @RequestMapping(value="/{name}")
    public String commonController(@PathVariable String name) {
        return name;
    }

}
