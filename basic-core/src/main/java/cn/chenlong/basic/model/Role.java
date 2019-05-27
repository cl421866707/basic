package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@ToString
public class Role implements Serializable {

    private static final long serialVersionUID = 5454155825314635342L;

    private Long id;

    private String roleName;

    private Date createTime;

    private Date updateTime;

    private Boolean enabled;

    private List<Perm> perms;

    private List<RolePerm> rolePerms;
}