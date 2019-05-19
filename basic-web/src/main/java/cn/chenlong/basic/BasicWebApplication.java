package cn.chenlong.basic;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("cn.chenlong.basic.dao")
public class BasicWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(BasicWebApplication.class, args);
	}

}
