package cn.chenlong.basic.dao;

import java.util.List;

import cn.chenlong.basic.model.Perms;
import cn.chenlong.basic.model.PermsExample;
import org.apache.ibatis.annotations.Param;

public interface PermsMapper {
    long countByExample(PermsExample example);

    int deleteByExample(PermsExample example);

    int deleteByPrimaryKey(Long id);

    int insert(Perms record);

    int insertSelective(Perms record);

    List<Perms> selectByExample(PermsExample example);

    Perms selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") Perms record, @Param("example") PermsExample example);

    int updateByExample(@Param("record") Perms record, @Param("example") PermsExample example);

    int updateByPrimaryKeySelective(Perms record);

    int updateByPrimaryKey(Perms record);
}