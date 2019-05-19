package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@ToString
public class User {
    private Long id;

    private String userName;

    private String userPassword;

    private String nickName;

    private String salt;

    private Date createTime;

    private Date updateTime;

    private Boolean enabled;

    private List<UserRole> userRoles;

    private List<Role> roles;

}