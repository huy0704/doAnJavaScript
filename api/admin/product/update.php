<?php
require_once "../../core/function.php";

$id = $_POST['id'];
$name = $_POST['name'];
$price = $_POST['price'];
$img = $_POST['img'];


$rs = update_products($id,$name,$price,$img);

$response = array(
    'status' => $rs
);
echo json_encode($response);