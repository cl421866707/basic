package cn.chenlong.basic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
public class UserRoles {
    private Long id;

    private Long roleId;

    private Long userId;

    private Date createTime;

    private Date updateTime;

    private Date deleteTime;

    private String backup1;

    private String backup2;

    private String backup3;

    private String backup4;

    private String backup5;

    @Override
    public String toString() {
        return "UserRoles{" +
                "id=" + id +
                ", roleId=" + roleId +
                ", userId=" + userId +
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