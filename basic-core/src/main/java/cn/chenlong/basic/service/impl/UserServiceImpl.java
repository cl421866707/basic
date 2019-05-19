package cn.chenlong.basic.service.impl;


import cn.chenlong.basic.dao.PermsMapper;
import cn.chenlong.basic.dao.RolesMapper;
import cn.chenlong.basic.dao.UserMapper;
import cn.chenlong.basic.model.*;
import cn.chenlong.basic.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;
    @Resource
    private RolesMapper rolesMapper;
    @Resource
    private PermsMapper permsMapper;

    @Override
    public User findUserByUsername(String userName) {
        UserExample userExample = new UserExample();
        userExample.or().andUserNameEqualTo(userName);
        return userMapper.selectByExample(userExample).get(0);
    }

    @Override
    public List<Roles> getRolesByUser(User user) {
        List<Long> roleIds = new ArrayList<>();
        List<UserRoles> roles = user.getRoles();
        for (UserRoles userRoles:roles) {
            roleIds.add(userRoles.getRoleId());
        }
        RolesExample rolesExample = new RolesExample();
        rolesExample.or().andIdIn(roleIds);
        return rolesMapper.selectByExample(rolesExample);
    }

    @Override
    public List<Perms> getPermsByUser(User user) {
        List<Long> permIds = new ArrayList<>();
        List<UserPerms> perms = user.getPerms();
        for (UserPerms userPerms:perms) {
            permIds.add(userPerms.getPermId());
        }
        PermsExample permsExample = new PermsExample();
        permsExample.or().andIdIn(permIds);
        return permsMapper.selectByExample(permsExample);
    }
}
