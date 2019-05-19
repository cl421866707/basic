package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
public class UserRole {

    private Long id;

    private Long roleId;

    private Long userId;

    private Date createTime;

    private Boolean enabled;

    private Role role;

    private User user;
}