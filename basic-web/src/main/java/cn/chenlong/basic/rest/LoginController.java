package cn.chenlong.basic.rest;

import cn.chenlong.basic.model.Perms;
import cn.chenlong.basic.model.Roles;
import cn.chenlong.basic.model.User;
import cn.chenlong.basic.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/security")
public class LoginController {

    @Resource
    private UserService userService;

    @GetMapping("login")
    public String login() {
        return "登陆";
    }

    @GetMapping("user")
    public User testUser() {
        User user = userService.findUserByUsername("admin");


        List<Roles> rolesByUserId = userService.getRolesByUser(user);
        List<Perms> permsByUser = userService.getPermsByUser(user);

        for (Roles roles : rolesByUserId) {
            System.out.println(roles);
        }

        for (Perms perms : permsByUser) {
            System.out.println(perms);
        }

        return user;
    }
}
