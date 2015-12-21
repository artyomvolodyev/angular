<?php
header('Content-Type: application/xml');
isset($_GET['p']) || $_GET['p']='pptp';
isset($_GET['dl']) || $_GET['dl']='0';
if ($_GET['dl']=='1') {
    header('Content-Disposition: attachment; filename="'.$_GET['p'].'.xml"');
}
header( 'Expires: Sat, 26 Jul 1997 05:00:00 GMT' );
header( 'Last-Modified: ' . gmdate( 'D, d M Y H:i:s' ) . ' GMT' );
header( 'Cache-Control: no-store, no-cache, must-revalidate' );
header( 'Cache-Control: post-check=0, pre-check=0', false );
header( 'Pragma: no-cache' );

include_once ('db.php');

$data = mysqli_query($db, 'SELECT * FROM hotspots ORDER BY id ASC');
$data = mysqli_fetch_all($data, MYSQLI_ASSOC);

echo json_encode($data);
