package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class RolePerm {

    private Long id;

    private Long roleId;

    private Long permId;

    private Date createTime;

    private Boolean enabled;

    private Role role;

    private Perm perm;
}