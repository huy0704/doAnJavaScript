<?php
require_once '../../core/function.php';

$category_list = get_category_list();
echo json_encode($category_list);