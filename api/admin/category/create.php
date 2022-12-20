<?php
require_once "../../core/function.php";

$name = $_POST['name'];

$rs = create_category($name);

$response = array(
    'status' => $rs
);
echo json_encode($response);