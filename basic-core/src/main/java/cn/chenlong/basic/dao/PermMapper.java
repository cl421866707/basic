package cn.chenlong.basic.dao;

import cn.chenlong.basic.model.Perm;
import cn.chenlong.basic.model.PermExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface PermMapper {
    long countByExample(PermExample example);

    int deleteByExample(PermExample example);

    int deleteByPrimaryKey(Long id);

    int insert(Perm record);

    int insertSelective(Perm record);

    List<Perm> selectByExample(PermExample example);

    Perm selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") Perm record, @Param("example") PermExample example);

    int updateByExample(@Param("record") Perm record, @Param("example") PermExample example);

    int updateByPrimaryKeySelective(Perm record);

    int updateByPrimaryKey(Perm record);

    /**
     * 根据角色ID查询角色权限
     *
     * @param roleId 角色ID
     * @return List<Perm>
     */
    List<Perm> selectByRoleId(Long roleId);
}