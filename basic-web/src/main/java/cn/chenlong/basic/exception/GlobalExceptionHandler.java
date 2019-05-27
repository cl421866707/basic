package cn.chenlong.basic.exception;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.ShiroException;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authz.UnauthenticatedException;
import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@ControllerAdvice(basePackages = {"cn.chenlong.basic.rest"})
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    //不满足@RequiresGuest注解时抛出的异常信息
    private static final String GUEST_ONLY = "Attempting to perform a guest-only operation";


    @ExceptionHandler(ShiroException.class)
    @ResponseBody
    public ResponseEntity handleShiroException(ShiroException e) {
        String eName = e.getClass().getSimpleName();
        log.error("shiro执行出错：{}", eName);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("鉴权或授权过程出错");
    }

    @ExceptionHandler(UnauthenticatedException.class)
    @ResponseBody
    public ResponseEntity page401(UnauthenticatedException e) {
        String eMsg = e.getMessage();
        if (StringUtils.startsWithIgnoreCase(eMsg, GUEST_ONLY)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("只允许游客访问，若您已登录，请先退出登录：" + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("用户未登录：" + e.getMessage());
    }

    @ExceptionHandler(UnauthorizedException.class)
    @ResponseBody
    public ResponseEntity page403() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("用户没有访问权限");
    }

    @ExceptionHandler(UnknownAccountException.class)
    @ResponseBody
    public ResponseEntity unknownAccount() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("未知账户");
    }

    @ExceptionHandler(IncorrectCredentialsException.class)
    @ResponseBody
    public ResponseEntity wrongPassword() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("密码错误");
    }

    @ExceptionHandler(LockedAccountException.class)
    @ResponseBody
    public ResponseEntity lockedAccount() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("账户已被锁定");
    }

    @ExceptionHandler(AuthenticationException.class)
    @ResponseBody
    public ResponseEntity authenticationException() {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("登陆异常");
    }
}
