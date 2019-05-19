package cn.chenlong.basic.service.impl;

import cn.chenlong.basic.dao.PermMapper;
import cn.chenlong.basic.model.Perm;
import cn.chenlong.basic.model.Role;
import cn.chenlong.basic.service.RoleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Resource
    private PermMapper permMapper;

    @Override
    public List<Perm> getPermsByRole(Role role) {
        return this.permMapper.selectByRoleId(role.getId());
    }
}
