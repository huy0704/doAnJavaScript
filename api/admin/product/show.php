<?php
require_once "../../core/function.php";

$product_id = $_GET['id'];

$product = get_product($product_id);

$response = array(
    'status' => 200,
    'data' => $product
);
echo json_encode($response);