<?php

//中文乱码
header("content-type:text/html;charset=utf-8");
            $id = isset($_POST['id']) ? $_POST['id'] : '';
			$img = isset($_POST['img']) ? $_POST['img'] : '';
			$pinpai = isset($_POST['pinpai']) ? $_POST['pinpai'] : '';
			$show = isset($_POST['show']) ? $_POST['show'] : '';
			$size = isset($_POST['size']) ? $_POST['size'] : '';
			$man = isset($_POST['man']) ? $_POST['man'] : '';
			$color = isset($_POST['color']) ? $_POST['color'] : '';
			$price = isset($_POST['price']) ? $_POST['price'] : '';
			$paizi = isset($_POST['paizi']) ? $_POST['paizi'] : '';
			$pinlun = isset($_POST['pinlun']) ? $_POST['pinlun'] : '';
			$bianhao = isset($_POST['bianhao']) ? $_POST['bianhao'] : '';
			$img1 = isset($_POST['img1']) ? $_POST['img1'] : '';
			$img2 = isset($_POST['img2']) ? $_POST['img2'] : '';
			$img3 = isset($_POST['img3']) ? $_POST['img3'] : '';
			$img4 = isset($_POST['img4']) ? $_POST['img4'] : '';
			$img5 = isset($_POST['img5']) ? $_POST['img5'] : '';
			$img6 = isset($_POST['img6']) ? $_POST['img6'] : '';
            $img7 = isset($_POST['img7']) ? $_POST['img7'] : '';
            $sum = isset($_POST['sum']) ? $_POST['sum'] : '';
            $shuliang = isset($_POST['shuliang']) ? $_POST['shuliang'] : '';

/**
 * 1.接收前端传输过来的数据
 * 2.数据库查询判断是否含有同id
 * 3.如果有则修改新数据，如果没有就添加新数据
 * 
 */

include 'connect.php';

$sql="SELECT * FROM contents WHERE id ='$id'";

//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);

$nu = $res->num_rows; //获取结果集长度
	
//获取结果集里面的内容部分
$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]

if($nu){
    $conn->query("UPDATE contents SET `shuliang` =`shuliang`+$shuliang
    WHERE id = '$id'");
    $conn->query("UPDATE contents SET `sum` = $price*`shuliang`
    WHERE id = '$id'");
    $an="修改成功";
    }
    else {
        //插入数据到数据库 
        // $strsql = ;
        $conn->query("INSERT INTO `contents` (`id`, `img`, `pinpai`,`show`, `size`, `man`,`color`, `price`, `paizi`,`pinlun`, `bianhao`, `img1`,`img2`, `img3`, `img4`,`img5`, `img6`, `img7`, `shuliang`,`sum`) VALUES ('{$id}', '{$img}', '{$pinpai}', '{$show}', '{$size}', '{$man}', '{$color}', '{$price}', '{$paizi}', '{$pinlun}', '{$bianhao}', '{$img1}', '{$img2}', '{$img3}', '{$img4}', '{$img5}', '{$img6}', '{$img7}', '{$shuliang}','{$sum}')");
        $conn->query("UPDATE contents SET `sum` = $price WHERE id = '$id'");
        $an="添加成功";
    }

//6.新建关联数组
$returnData = array(
    'an'=>$an,
    'id'	=>	$id,
    'img'	=>	$img,
    'pinpai'=>	$pinpai,
    'show'	=>	$show,
    'size'	=>	$size,
    'man'	=>	$man,
    'color'=>	$color,
    'price'	=>	$price,
    'paizi'	=>	$paizi,
    'pinlun'=>	$pinlun,
    'bianhao'=>	$bianhao,
    'img1'	=>	$img1,
    'img2'	=>	$img2,
    'img3'	=>	$img3,
    'img4'	=>	$img4,
    'img5'	=>	$img5,
    'img6'	=>	$img6,
    'img7'	=>	$img7,
    'shuliang'	=>	$shuliang,
    'sum'	=>	$sum,
    
);
//7.返回给前端
echo json_encode($returnData,JSON_UNESCAPED_UNICODE);
$res->close();
$conn->close();
?>