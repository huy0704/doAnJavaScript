<?php
require_once './core/functions.php';
header('Access-Control-Allow-Origin: *');

$email = $_POST['email'];
$password = $_POST['password'];

$bool = register($email, $password);

$response = array(
    'status' => $bool
);

echo json_encode($response);