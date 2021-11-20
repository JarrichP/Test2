<!DOCTYPE html>
<html lang="en">

 <?php 
include 'template/head.php';
?> 

<body>




<?php 

$json = file_get_contents($jsonurl);
$weather = json_decode($json);
$sky = $weather->weather[0]->main;
$cloud='Cloud';
$rain= 'Rain';
$mist='Mist';
if(strpos($sky, $rain)!== false){
    echo '<style> body{background-image: url(img/simpons-rainy@2x.jpg); background-repeat: no-repeat;} </style>';
} elseif(strpos($sky, $cloud)!== false){
    echo '<style> body{background-image: url(img/Simpsons-cloud@2x.png); background-repeat: no-repeat;} </style>';
} elseif(strpos($sky, $mist)!== false){
    echo '<style> body{background-image: url(img/Simpsons-mist@2x.png); background-repeat: no-repeat;} </style>';
};



include 'template/header.php';
include 'template/main.php';

include 'template/kalender.php';
include 'template/footer.php';
?>





</html>