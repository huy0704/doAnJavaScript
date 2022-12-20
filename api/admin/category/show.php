<?php
require_once "../../core/function.php";

$id = $_GET['id'];

$category = get_category($id);

$response = array(
    'status' => 200,
    'data' => $category
);
echo json_encode($response);