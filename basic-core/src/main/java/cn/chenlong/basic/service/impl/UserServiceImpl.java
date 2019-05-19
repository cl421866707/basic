package cn.chenlong.basic.service.impl;


import cn.chenlong.basic.dao.RoleMapper;
import cn.chenlong.basic.dao.UserMapper;
import cn.chenlong.basic.model.*;
import cn.chenlong.basic.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;
    @Resource
    private RoleMapper roleMapper;

    @Override
    public User findUserByUsername(String userName) {
        UserExample userExample = new UserExample();
        userExample.or().andUserNameEqualTo(userName);
        return userMapper.selectByExample(userExample).get(0);
    }

    @Override
    public List<Role> getRolesByUser(User user) {
        return this.roleMapper.selectByUserId(user.getId());
//        List<Long> roleIds = new ArrayList<>();
//        List<UserRole> userRoles = user.getUserRoles();
//        for (UserRole userRole : userRoles) {
//            roleIds.add(userRole.getRoleId());
//        }
//        RoleExample rolesExample = new RoleExample();
//        rolesExample.or().andIdIn(roleIds);
//        return roleMapper.selectByExample(rolesExample);
    }

}
