<?php

<<<<<<< HEAD
require_once 'config.php';




//require_once 'config.php';

=======
>>>>>>> cf2f30f47f970483def1a71cdb494237e6ed5b9a
/* PLEASE DO NOT EDIT THIS FILE */
/* PLEASE DO NOT EDIT THIS FILE */
/* PLEASE DO NOT EDIT THIS FILE */
/* PLEASE DO NOT EDIT THIS FILE */

/* IF YOU ARE HAVING ERROR, EDITING THIS FILE IS NOT THE BEST SOLUTION PLEASE DO NOT EDIT THIS FILE */

<<<<<<< HEAD
//require_once '../config.php';

=======
require_once '../config.php';
>>>>>>> cf2f30f47f970483def1a71cdb494237e6ed5b9a

try {
    $conn = new PDO("mysql:host=". DB_HOST. ";dbname=". DB_DATABASE , DB_USER, DB_PASSWORD);
} catch (PDOException $pe) {
    die("Could not connect to the database " . DB_DATABASE . ": " . $pe->getMessage());
}
