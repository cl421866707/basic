package cn.chenlong.basic;

import cn.chenlong.basic.config.datasource.DynamicDataSourceRegister;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@MapperScan("cn.chenlong.basic.dao")
@Import(DynamicDataSourceRegister.class)
public class BasicWebApplication {

    public static void main(String[] args) {
		SpringApplication.run(BasicWebApplication.class, args);
    }

}
