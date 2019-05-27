package cn.chenlong.basic.config.datasource.annotation;

import java.lang.annotation.*;

/**
 * @Author ChenLong
 * @Date 2019-5-27
 * @Description 作用于类、接口或者方法上
 */
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface TargetDataSource {
    String name();
}
