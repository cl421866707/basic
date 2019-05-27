package cn.chenlong.basic.rest;

import cn.chenlong.basic.model.User;
import cn.chenlong.basic.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@Slf4j
@Controller
@RequestMapping("/security")
public class LoginController {

    @Resource
    private UserService userService;

    @GetMapping("{page}")
    public String toPage(@PathVariable String page) {
        log.info("进入页面跳转器：" + page);
        return page;
    }

//    @TargetDataSource(name = "ds1")
    @PostMapping("login")
    public String login(User user) {
        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated()) {
            //collect user principals and credentials in a gui specific manner
            //such as username/password html form, X509 certificate, OpenID, etc.
            //We'll use the username/password example here since it is the most common.
            //(do you know what movie this is from? ;)
            UsernamePasswordToken token = new UsernamePasswordToken(user.getUserName(), user.getUserPassword());
            //this is all you have to do to support 'remember me' (no config - built in!):
            token.setRememberMe(true);
            currentUser.login(token);
            log.info("User [" + currentUser.getPrincipal() + "] logged in successfully.");
        }
        return "redirect:success";
    }

    @GetMapping("logout")
    public String logout() {
        return "redirect:login";
    }

    @GetMapping("user")
    @ResponseBody
    public User testUser() {
        log.info("开始测试获取用户");

        User user = userService.findUserByUsernameFetchRolesAndPerms("admin");

        System.out.println("用户信息：\n" + user);

        log.info("获取用户成功");

        return user;
    }
}
