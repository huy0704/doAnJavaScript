<?php
require_once '../../core/function.php';

$product_list = get_product_list();
echo json_encode($product_list);