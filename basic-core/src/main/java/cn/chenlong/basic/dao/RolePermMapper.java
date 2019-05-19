package cn.chenlong.basic.dao;

import cn.chenlong.basic.model.RolePerm;
import cn.chenlong.basic.model.RolePermExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface RolePermMapper {
    long countByExample(RolePermExample example);

    int deleteByExample(RolePermExample example);

    int deleteByPrimaryKey(Long id);

    int insert(RolePerm record);

    int insertSelective(RolePerm record);

    List<RolePerm> selectByExample(RolePermExample example);

    RolePerm selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") RolePerm record, @Param("example") RolePermExample example);

    int updateByExample(@Param("record") RolePerm record, @Param("example") RolePermExample example);

    int updateByPrimaryKeySelective(RolePerm record);

    int updateByPrimaryKey(RolePerm record);
}