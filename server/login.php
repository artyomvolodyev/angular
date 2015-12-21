<?php
/**
 * Created by PhpStorm.
 * User: Kevin
 * Date: 31/03/2015
 * Time: 15:13
 */

include ("db.php");
session_start();
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = mysqli_real_escape_string($db, $_POST['username']);
    $password = mysqli_real_escape_string($db, $_POST['password']);

    $result = mysqli_query($db,"SELECT id FROM userinfo WHERE username='$username' and portalloginpassword='$password'");
    $count = mysqli_num_rows($result);
    $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
    if($count==1)
    {
        echo $row['id'];
    }
}