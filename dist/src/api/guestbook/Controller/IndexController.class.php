<?php
/**
 * @ controller Index.class.php
 *
 */

defined('IN_APP') or exit('Denied Access!');

class IndexController extends Controller {

	public function index() {
		// echo '<p>欢迎</p>';
		//$result = $this->db->get("select * from users", 1);
		//dump($result);
	}

	/**
	 * @ interface 用户名验证
	 */
	public function verifyUserName() {
		
		$username = trim(isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
		
		switch ($this->_verifyUserName($username)) {
			case 0:
				$this->sendByAjax(array('message'=>'恭喜你，该用户名可以注册！'));
				break;
			case 1:
				$this->sendByAjax(array('code'=>1,'message'=>'用户名长度不能小于3个或大于16个字符！'));
				break;
			case 2:
				$this->sendByAjax(array('code'=>2,'message'=>'对不起，该用户名已经被注册了！'));
				break;
			default:
				break;
		}
		
	}

	/**
	 * @ interface 用户注册
	 */
	public function reg() {
		$username = trim(isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
		$password = trim(isset($_REQUEST['password']) ? $_REQUEST['password'] : '');
		$avatar = trim(isset($_REQUEST['avatar']) && in_array($_REQUEST['avatar'], array(1,2,3,4,5,6,7,8,9)) ? intval($_REQUEST['avatar']) : 1);

		if ($this->_verifyUserName($username) !== 0 || strlen($password)<3 || strlen($password) > 20) {
			$this->sendByAjax(array('code'=>1,'message'=>'注册失败！'));
		}
		$password = md5($password);
		if (false === $this->db->query("INSERT INTO `users` (`username`, `password`, `avatar`) VALUES ('{$username}', '{$password}', {$avatar})")) {
			$this->sendByAjax(array('code'=>1,'message'=>'注册失败！'));
		} else {
			$this->sendByAjax(array('message'=>'注册成功！'));
		}
	}


	/**
	 * @ 用户登陆
	 */
	public function login() {
		$username = trim(isset($_REQUEST['username']) ? $_REQUEST['username'] : '');
		$password = trim(isset($_REQUEST['password']) ? $_REQUEST['password'] : '');

		if (isset($_COOKIE['uid'])) {
			$this->sendByAjax(array('code'=>1,'message'=>'你已经登陆过了！'));
		}

		if ($rs = $this->db->get("SELECT * FROM `users` WHERE `username`='{$username}'")) {
			if ($rs['password'] != md5($password)) {
				$this->sendByAjax(array('code'=>1,'message'=>'登陆失败！'));
			} else {
				setcookie('uid', $rs['uid'], time() + 3600*60, '/');
				setcookie('username', $rs['username'], time() + 3600*60, '/');
				$this->sendByAjax(array('code'=>0,'message'=>'登陆成功！'));
			}
		} else {
			$this->sendByAjax(array('code'=>1,'message'=>'登陆失败！'));
		}
	}

	/**
	 * @ 用户退出
	 */
	public function logout() {
		if (!isset($_COOKIE['uid'])) {
			$this->sendByAjax(array('code'=>1,'message'=>'你还没有登陆！'));
		} else {
			setcookie('uid', 0, time() - 3600*60, '/');
			$this->sendByAjax(array('code'=>0,'message'=>'退出成功！'));
		}
	}

	/**
	 * 用户留言保存
	 */
	public function send() {
		// if (!isset($_COOKIE['uid'])) {
		// 	$this->sendByAjax(array('code'=>1,'message'=>'你还没有登陆！'));
		// } else {
		// 	$id = trim(isset($_POST['id']) ? $_POST['id'] : '');
		// 	$id = isset($_POST['item.id']) ? $_POST['id'] : '';
		// 	if (empty($content)) {
		// 		$this->sendByAjax(array('code'=>1,'message'=>'留言内容不能为空！'));
		// 	}
		// 	$dateline = time();
		    //$page=isset($_GET['page'])?$_GET['page']:'';//如果有就用它本身，没有就用空的
			// $id = isset($_POST['item.id']) ? $_POST['item.id'] : '';
			// $img = isset($_POST['item.img']) ? $_POST['item.img'] : '';
			// $pinpai = isset($_POST['item.pinpai']) ? $_POST['item.pinpai'] : '';
			// $show = isset($_POST['item.show']) ? $_POST['item.show'] : '';
			// $size = isset($_POST['item.size']) ? $_POST['item.size'] : '';
			// $man = isset($_POST['item.man']) ? $_POST['item.man'] : '';
			// $color = isset($_POST['item.color']) ? $_POST['item.color'] : '';
			// $price = isset($_POST['item.price']) ? $_POST['item.price'] : '';
			// $paizi = isset($_POST['item.paizi']) ? $_POST['item.paizi'] : '';
			// $pinlun = isset($_POST['item.pinlun']) ? $_POST['item.pinlun'] : '';
			// $bianhao = isset($_POST['item.bianhao']) ? $_POST['item.bianhao'] : '';
			// $img1 = isset($_POST['item.img1']) ? $_POST['item.img1'] : '';
			// $img2 = isset($_POST['item.img2']) ? $_POST['item.img2'] : '';
			// $img3 = isset($_POST['item.img3']) ? $_POST['item.img3'] : '';
			// $img4 = isset($_POST['item.img4']) ? $_POST['item.img4'] : '';
			// $img5 = isset($_POST['item.img5']) ? $_POST['item.img5'] : '';
			// $img6 = isset($_POST['item.img6']) ? $_POST['item.img6'] : '';
			// $img7 = isset($_POST['item.img7']) ? $_POST['item.img7'] : '';
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
			$this->db->query("INSERT INTO `contents` (`id`, `img`, `pinpai`,`show`, `size`, `man`,`color`, `price`, `paizi`,`pinlun`, `bianhao`, `img1`,`img2`, `img3`, `img4`,`img5`, `img6`, `img7`) VALUES ('{$id}', '{$img}', '{$pinpai}', '{$show}', '{$size}', '{$man}', '{$color}', '{$price}', '{$paizi}', '{$pinlun}', '{$bianhao}', '{$img1}', '{$img2}', '{$img3}', '{$img4}', '{$img5}', '{$img6}', '{$img7}')");
			$returnData = array(
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
				'img7'	=>	$img7
				
			);
			$this->sendByAjax(array('code'=>0,'message'=>'留言成功！','data'=>$returnData));
			// $this->sendByAjax(array('data'=>$returnData));
		}
	//删除
	public function sendtt() {
				$id = isset($_POST['id']) ? $_POST['id'] : '';
				$this->db->query("DELETE FROM contents WHERE id= $id");
				$returnData = array(
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
					'img7'	=>	$img7
					
				);
				$this->sendByAjax(array('code'=>0,'message'=>'留言成功！','data'=>$returnData));
				// $this->sendByAjax(array('data'=>$returnData));
			}
		//升序
		public function sendtt1() {
			//$price = isset($_POST['id']) ? $_POST['id'] : '';
			$this->db->query("SELECT * FROM list ORDER BY price");
			$returnData = array(
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
				'img7'	=>	$img7
				
			);
			$this->sendByAjax(array('code'=>0,'message'=>'留言成功！','data'=>$returnData));
			// $this->sendByAjax(array('data'=>$returnData));
		}
		public function sendtt2() {
			// $id = isset($_POST['id']) ? $_POST['id'] : '';
			$this->db->query("SELECT * FROM list ORDER BY id");
			$returnData = array(
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
				'img7'	=>	$img7
				
			);
			$this->sendByAjax(array('code'=>0,'message'=>'留言成功！','data'=>$returnData));
			// $this->sendByAjax(array('data'=>$returnData));
		}
	/**
	 * @ 获取留言列表
	 */
	public function getList() {
		$page = isset($_REQUEST['page']) ? intval($_REQUEST['page']) : 1;	//当前页数
		$n = isset($_REQUEST['n']) ? intval($_REQUEST['n']) : 10;	//每页显示条数
		//获取总记录数
		$result_count = $this->db->get("SELECT count('cid') as count FROM `contents`");
		$count = $result_count['count'] ? (int) $result_count['count'] : 0;
		if (!$count) {
			$this->sendByAjax(array('code'=>1,'message'=>'还没有任何留言！'));
		}
		$pages = ceil($count / $n);
		if ($page > $pages) {
			$this->sendByAjax(array('code'=>2,'message'=>'没有数据了！'));
		}
		$start = ( $page - 1 ) * $n;
		$result = $this->db->select("SELECT c.cid,c.uid,u.username,c.content,c.dateline,c.support,c.oppose FROM `contents` as c, `users` as u WHERE u.uid=c.uid ORDER BY c.cid DESC LIMIT {$start},{$n}");
		$data = array(
			'count'	=>	$count,
			'pages'	=>	$pages,
			'page'	=>	$page,
			'n'		=>	$n,
			'list'	=>	$result
		);
		$this->sendByAjax(array('code'=>0,'message'=>'','data'=>$data));
	}
	/**
	 * @ 用户名验证
	 */
	private function _verifyUserName($username='') {
		if (strlen($username) < 3 || strlen($username) > 16) {
			return 1;
		}
		$rs = $this->db->get("SELECT `username` FROM `users` WHERE `username`='{$username}'");
		if ($rs) return 2;
		return 0;
	}
	// 排序接口
	
}