<?php
/**
 * Created by PhpStorm.
 * User: Kevin
 * Date: 31/03/2015
 * Time: 15:11
 */

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'monkeyvpn');
$db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);