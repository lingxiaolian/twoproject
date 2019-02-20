<?php
	/*
	 	连接数据库：操纵数据库
	 		* 写好配置信息
	 		* 检测是否连接成功
	 */
	
	//中文乱码
	header("content-type:text/html;charset=utf-8");
	
	//配置信息
	$servername = 'localhost';//主机名
	$username = 'root';//登陆数据库的用户名
	$password = 'root';//如果用wamp就是为空，用phpstudy 密码是 root
	$dbname = 'guestbook';//数据库名称
	
	//创建数据库连接
	$conn = new mysqli($servername,$username,$password,$dbname);
	
	//测试是否成功
	//js使用对象和方法：是用.      arr.length  arr.push()
	//php使用对象和方法： ->     $conn->属性名    $conn->方法名()
	
	if($conn->connect_error) {
		//打印这里，失败了
		die('连接失败：'.$conn->connect_error);
	}else{
		// 连接成功echo '成功连接数据库';
		
	 }
	
	//设置编码:
	//乱码：编码方式不一致的时候，数据的来源(csv、xls)/数据的存储(数据库数据表)/php(接口)/html(前端页面)
//	$conn->set_charset('utf8');

	
?>