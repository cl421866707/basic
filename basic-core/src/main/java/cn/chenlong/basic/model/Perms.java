package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class Perms {
    private Long id;

    private String permName;

    private Date createTime;

    private Date updateTime;

    private Date deleteTime;

    private String backp1;

    private String backp2;

    private String backp3;

    private String backp4;

    private String backp5;

    @Override
    public String toString() {
        return "Perms{" +
                "id=" + id +
                ", permName='" + permName + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", deleteTime=" + deleteTime +
                ", backp1='" + backp1 + '\'' +
                ", backp2='" + backp2 + '\'' +
                ", backp3='" + backp3 + '\'' +
                ", backp4='" + backp4 + '\'' +
                ", backp5='" + backp5 + '\'' +
                '}';
    }
}