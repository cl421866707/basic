package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@ToString
public class Perm {
    private Long id;

    private String permName;

    private Date createTime;

    private Date updateTime;

    private Boolean enabled;

}