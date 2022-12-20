<?php
require_once '../../core/function.php';

$id = intval($_GET['id']);
$rs = delete_category($id);

$respone = array(
    'status' => $rs
);

echo json_encode($respone);