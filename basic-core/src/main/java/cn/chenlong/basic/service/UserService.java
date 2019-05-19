package cn.chenlong.basic.service;

import cn.chenlong.basic.model.Role;
import cn.chenlong.basic.model.User;

import java.util.List;

public interface UserService {

    /**
     * 根据账户名查询账户信息
     *
     * @param userName 账户名
     * @return
     */
    User findUserByUsername(String userName);

    /**
     * 根据用户ID查询用户角色
     *
     * @param user
     * @return
     */
    List<Role> getRolesByUser(User user);

}
