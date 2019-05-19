package cn.chenlong.basic.dao;

import cn.chenlong.basic.model.Role;
import cn.chenlong.basic.model.RoleExample;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface RoleMapper {
    long countByExample(RoleExample example);

    int deleteByExample(RoleExample example);

    int deleteByPrimaryKey(Long id);

    int insert(Role record);

    int insertSelective(Role record);

    List<Role> selectByExample(RoleExample example);

    Role selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") Role record, @Param("example") RoleExample example);

    int updateByExample(@Param("record") Role record, @Param("example") RoleExample example);

    int updateByPrimaryKeySelective(Role record);

    int updateByPrimaryKey(Role record);

    /**
     * 根据用户ID查询用户角色
     *
     * @param userId 用户ID
     * @return List<Role>
     */
    List<Role> selectByUserId(Long userId);
}