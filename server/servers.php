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

$dbConnectString = "mysql://".$_SERVER['CONFIG_DB_USER'].":".$_SERVER['CONFIG_DB_PASS']."@".$_SERVER['CONFIG_DB_HOST'].":".$_SERVER['CONFIG_DB_PORT']."/".$_SERVER['CONFIG_DB_NAME'];
$dbSocket = DB::connect($dbConnectString);

if (DB::isError ($dbSocket))
	die ($dbSocket->getMessage());


$dbSocket->setFetchMode(DB_FETCHMODE_ASSOC);

$data =& $dbSocket->getAll('SELECT * FROM hotspots ORDER BY orderid ASC');



$servers='';
	
foreach ($data as &$value) {
    $servers.='
	<data>
      <name>'.$value['country'].' - '.$value['location'].'</name>   
      <ip>'.$value['fqdn'].'</ip>';         
      if ($_GET['p']=='udp' || $_GET['p']=='tcp' ) {
		$servers.='
		<ca>cert.cer</ca>';
	  } else if ($_GET['p']=='l2tp') {
	  $servers.='
	  <key>monkeyvpn</key>';
	  }
	  $servers.='
	  </data>
	  ';
	
}


$xml = '<?xml version="1.0" encoding="UTF-8"?>
<monkeyVPN>
  <'.$_GET['p'].'>'.$servers
  
    
    
   
   .' 
  </'.$_GET['p'].'>
</monkeyVPN>';

echo $xml;

?>