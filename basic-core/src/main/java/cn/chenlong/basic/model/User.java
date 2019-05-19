package cn.chenlong.basic.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@JsonIgnoreProperties(value = {"handler"})
@Getter
@Setter
@NoArgsConstructor
public class User implements Serializable {
    private Long id;

    private String userName;

    private String userPassword;

    private String nickName;

    private String salt;

    private Date createTime;

    private Date updateTime;

    private Date deleteTime;

    private String backup1;

    private String backup2;

    private String backup3;

    private String backup4;

    private String backup5;

    //用户所有角色值，用于shiro做角色权限的判断
    private List<UserRoles> roles = new ArrayList<>();
    //用户所有权限值，用于shiro做资源权限的判断
    private List<UserPerms> perms = new ArrayList<>();

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", nickName='" + nickName + '\'' +
                ", salt='" + salt + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", deleteTime=" + deleteTime +
                ", backup1='" + backup1 + '\'' +
                ", backup2='" + backup2 + '\'' +
                ", backup3='" + backup3 + '\'' +
                ", backup4='" + backup4 + '\'' +
                ", backup5='" + backup5 + '\'' +
                '}';
    }
}