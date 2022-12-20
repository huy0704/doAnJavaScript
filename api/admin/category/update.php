<?php
require_once "../../core/function.php";

$id = $_POST['id'];
$name = $_POST['name'];

$rs = update_category($id,$name);

$response = array(
    'status' => $rs
);
echo json_encode($response);