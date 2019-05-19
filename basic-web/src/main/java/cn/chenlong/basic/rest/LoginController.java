package cn.chenlong.basic.rest;

import cn.chenlong.basic.model.Role;
import cn.chenlong.basic.model.User;
import cn.chenlong.basic.service.RoleService;
import cn.chenlong.basic.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/security")
public class LoginController {

    @Resource
    private UserService userService;

    @Resource
    private RoleService roleService;

    @GetMapping("login")
    public String login() {
        return "登陆";
    }

    @GetMapping("user")
    public User testUser() {
        log.info("开始测试获取用户");

        User user = userService.findUserByUsername("admin");

        List<Role> roles = this.userService.getRolesByUser(user);

        roles.forEach(role -> {
            role.setPerms(this.roleService.getPermsByRole(role));
        });

        user.setRoles(roles);

//        List<Roles> rolesByUserId = userService.getRolesByUser(user);
//        List<Perms> permsByUser = userService.getPermsByUser(user);
//
//        for (Roles roles : rolesByUserId) {
//            System.out.println(roles);
//        }
//
//        for (Perms perms : permsByUser) {
//            System.out.println(perms);
//        }

        log.info("获取用户成功");

        return user;
    }
}
