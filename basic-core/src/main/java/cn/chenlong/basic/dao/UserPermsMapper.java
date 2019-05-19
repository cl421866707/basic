package cn.chenlong.basic.dao;

import java.util.List;

import cn.chenlong.basic.model.UserPerms;
import cn.chenlong.basic.model.UserPermsExample;
import org.apache.ibatis.annotations.Param;

public interface UserPermsMapper {
    long countByExample(UserPermsExample example);

    int deleteByExample(UserPermsExample example);

    int deleteByPrimaryKey(Long id);

    int insert(UserPerms record);

    int insertSelective(UserPerms record);

    List<UserPerms> selectByExample(UserPermsExample example);

    UserPerms selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") UserPerms record, @Param("example") UserPermsExample example);

    int updateByExample(@Param("record") UserPerms record, @Param("example") UserPermsExample example);

    int updateByPrimaryKeySelective(UserPerms record);

    int updateByPrimaryKey(UserPerms record);

    List<UserPerms> selectByUserId(Long userId);
}