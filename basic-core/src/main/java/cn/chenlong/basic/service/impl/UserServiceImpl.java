package cn.chenlong.basic.service.impl;


import cn.chenlong.basic.dao.PermMapper;
import cn.chenlong.basic.dao.RoleMapper;
import cn.chenlong.basic.dao.UserMapper;
import cn.chenlong.basic.model.*;
import cn.chenlong.basic.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;
    @Resource
    private RoleMapper roleMapper;
    @Resource
    private PermMapper permMapper;

    @Override
    public User findUserByUsername(String userName) {
        UserExample userExample = new UserExample();
        userExample.or().andUserNameEqualTo(userName);
        return userMapper.selectByExample(userExample).get(0);
    }

    @Override
    public User findUserByUsernameFetchRoles(String userName) {
        User user = this.findUserByUsername(userName);
        user.setRoles(this.getRolesByUser(user));
        return user;
    }

    @Override
    public User findUserByUsernameFetchRolesAndPerms(String userName) {
        User user = this.findUserByUsername(userName);
        List<Role> roles = this.getRolesByUser(user);
        if (!CollectionUtils.isEmpty(roles)) {
            roles.forEach(role -> {
                role.setPerms(this.permMapper.selectByRoleId(role.getId()));
            });
        }
        user.setRoles(roles);
        return user;
    }

    @Override
    public List<Role> getRolesByUser(User user) {
        return this.roleMapper.selectByUserId(user.getId());
    }

}
