<?php

//中文乱码
header("content-type:text/html;charset=utf-8");
            $id = isset($_POST['id']) ? $_POST['id'] : '';  
            $one = isset($_POST['one']) ? $_POST['one'] : '';
			$price = isset($_POST['price']) ? $_POST['price'] : '';
            $shuliang = isset($_POST['shuliang']) ? $_POST['shuliang'] : '';

/**
 * 1.接收前端传输过来的数据
 * 2.数据库查询判断是否含有同id
 * 3.如果有则修改新数据，如果没有就添加新数据
 * 
 */

include 'connect.php';

$sql="SELECT * FROM contents";

//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);
$nu = $res->num_rows; //获取结果集长度
	
//获取结果集里面的内容部分
$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]
  
    $conn->query("UPDATE contents SET `shuliang` = $one WHERE id = '$id'");
    $conn->query("UPDATE contents SET `sum` = `price`*`shuliang` WHERE id = '$id'");
   
    $an="修改成功";

//6.新建关联数组
$returnData = array(
    'an'=>$an,
    'id'	=>	$id,
    'price'	=>	$price,
    'shuliang'=>$one
);
//7.返回给前端
echo json_encode($returnData,JSON_UNESCAPED_UNICODE);
$res->close();
$conn->close();
?>