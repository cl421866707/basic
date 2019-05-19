package cn.chenlong.basic.service;

import cn.chenlong.basic.model.Perm;
import cn.chenlong.basic.model.Role;

import java.util.List;

public interface RoleService {

    /**
     * 根据角色获取角色权限
     *
     * @param role
     * @return
     */
    List<Perm> getPermsByRole(Role role);
}
