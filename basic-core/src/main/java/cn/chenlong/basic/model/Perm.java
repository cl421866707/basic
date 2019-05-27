package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@ToString
public class Perm implements Serializable {

    private static final long serialVersionUID = 5454155825314635342L;

    private Long id;

    private String permName;

    private Date createTime;

    private Date updateTime;

    private Boolean enabled;

}