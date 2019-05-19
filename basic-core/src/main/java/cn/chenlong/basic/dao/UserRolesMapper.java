package cn.chenlong.basic.dao;

import java.util.List;

import cn.chenlong.basic.model.UserRoles;
import cn.chenlong.basic.model.UserRolesExample;
import org.apache.ibatis.annotations.Param;

public interface UserRolesMapper {
    long countByExample(UserRolesExample example);

    int deleteByExample(UserRolesExample example);

    int deleteByPrimaryKey(Long id);

    int insert(UserRoles record);

    int insertSelective(UserRoles record);

    List<UserRoles> selectByExample(UserRolesExample example);

    UserRoles selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") UserRoles record, @Param("example") UserRolesExample example);

    int updateByExample(@Param("record") UserRoles record, @Param("example") UserRolesExample example);

    int updateByPrimaryKeySelective(UserRoles record);

    int updateByPrimaryKey(UserRoles record);

    List<UserRoles> selectByUserId(Long userId);

}