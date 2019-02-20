<?php
	
	/*
	 	需求：
	 		* 接收前端传来的数据
	 		* 做数据库的查询
	 		* echo 数据给前端
	 
	 */
	
	// header("content-type:text/html;charset=utf-8");
	
	//接收前端传来的数据
	$page=isset($_GET['page'])?$_GET['page']:'';//如果有就用它本身，没有就用空的
	$qty=isset($_GET['qty'])?$_GET['qty']:'';
	
//	echo $page,$qty;//接收参数记得检测，接收成功再往下面做

	//做数据库的查询
	
	include 'connect.php';
	
	$index = ($page - 1) * $qty;
	
	//写查询语句:按需查询数据，每一次只查询一页数据
	$sql = "SELECT * FROM list ORDER BY price LIMIT $index,$qty";
	
	//执行语句:得到的返回值是一个结果集
	$res = $conn->query($sql);

	
	// var_dump($res);
	//获取结果集里面的内容部分
	$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]
	
	//获取总条数
	$sql2 = 'SELECT * FROM list';
	
	//执行sql
	$res2 = $conn->query($sql2);
	
	//获取总行数
	$num = $res2->num_rows;
	
//	var_dump($row);

	$goodslist = array(
		'total' => $num,
		'list' => $row,
		'page' => $page,
		'qty' => $qty
	);
	
	//把对象转成字符串，echo给前端
	// echo $num;
	echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);
	$res->close();
	$res2->close();
	$conn->close();
?>