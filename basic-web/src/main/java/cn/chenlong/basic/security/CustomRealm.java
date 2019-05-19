package cn.chenlong.basic.security;

import cn.chenlong.basic.model.User;
import cn.chenlong.basic.service.UserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.crypto.hash.Sha256Hash;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.Set;

/**
 * 这个类是参照JDBCRealm写的，主要是自定义了如何查询用户信息，如何查询用户的角色和权限，如何校验密码等逻辑
 */
public class CustomRealm extends AuthorizingRealm {


    @Resource
    private UserService userService;

    //告诉shiro如何根据获取到的用户信息中的密码和盐值来校验密码
    {
        //设置用于匹配密码的CredentialsMatcher
        HashedCredentialsMatcher hashMatcher = new HashedCredentialsMatcher();
        hashMatcher.setHashAlgorithmName(Sha256Hash.ALGORITHM_NAME);
        hashMatcher.setStoredCredentialsHexEncoded(false);
        hashMatcher.setHashIterations(1024);
        this.setCredentialsMatcher(hashMatcher);
    }


    //定义如何获取用户的角色和权限的逻辑，给shiro做权限判断
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        //null usernames are invalid
        if (principals == null) {
            throw new AuthorizationException("PrincipalCollection method argument cannot be null.");
        }

        User user = (User) getAvailablePrincipal(principals);

        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();

        //打印信息
        System.out.println("获取角色信息：" + user.getRoles());
        user.getRoles().forEach(role -> {
            System.out.println("获取权限信息：" + role.getPerms());
        });

        //获取用户角色名集合
        Set<String> roleNames = new HashSet<>();
        user.getRoles().forEach(role -> {
            roleNames.add(role.getRoleName());
        });
        info.setRoles(roleNames);

        //获取用户角色对应的所有权限名集合
        Set<String> permNames = new HashSet<>();
        user.getRoles().forEach(role -> {
            role.getPerms().forEach(perm -> {
                permNames.add(perm.getPermName());
            });
        });
        info.setStringPermissions(permNames);

        return info;
    }

    //定义如何获取用户信息的业务逻辑，给shiro做登录
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

        UsernamePasswordToken upToken = (UsernamePasswordToken) token;
        String username = upToken.getUsername();

        // Null username is invalid
        if (username == null) {
            throw new AccountException("Null usernames are not allowed by this realm.");
        }

        //查询用户的角色和权限存到SimpleAuthenticationInfo中，这样在其它地方
        //SecurityUtils.getSubject().getPrincipal()就能拿出用户的所有信息，包括角色和权限
        User userDB = userService.findUserByUsernameFetchRolesAndPerms(username);

        if (userDB == null) {
            throw new UnknownAccountException("No account found for admin [" + username + "]");
        }

        SimpleAuthenticationInfo info = new SimpleAuthenticationInfo(userDB, userDB.getUserPassword(), getName());
        if (userDB.getSalt() != null) {
            info.setCredentialsSalt(ByteSource.Util.bytes(userDB.getSalt()));
        }

        return info;
    }
}
