<!-- head here  -->
<?php
require "../db.php";

   $insert_sql = "INSERT INTO secret_word (secret_word) values ('1n73rn@Hng')";
   $stmt = $conn->prepare($insert_sql);
   $stmt->execute();
   $result = $conn->query("Select * from secret_word LIMIT 1");
   $result = $result->fetch(PDO::FETCH_OBJ);
   $secret_word = $result->secret_word;

 $result2 = $conn->query("Select * from interns_data where username = 'pepps01'");
 $user = $result2->fetch(PDO::FETCH_OBJ);
 if ($result2->rowCount() > 0) true;
$profile_name = $_GET['id'];

?>
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>HNG FUN</title>

    <!-- Bootstrap core CSS -->
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


      <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>


    <!-- Custom styles for this template -->
      <link href="css/style2.css" rel="stylesheet">
      <link href="css/style1.css" rel="stylesheet">
      <link href="css/style.css" rel="stylesheet">
      <link href="css/learn.css" rel="stylesheet">
<!--	  <link href="css/carousel.css" rel="stylesheet">-->
      <link href="css/landing-page.min.css" rel="stylesheet">

     <style type="text/css">
     	.profile-bar{ border:1px solid #007BFF;border-radius:10px;margin: 20px auto; text-align: center; width: 400px;padding: 10px; font-family: 'Lora';}
     	.profile_image{border-radius: 50%; border:1px solid #007BFF;}
     </style>
  </head>

  <body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="/index.php">HNG FUN</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.php">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="learn.php">Learn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="listing.php">Interns</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="admin.php">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="testimonies.php">Testimonies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<!-- Page Content -->

<div class="profile-bar">
		
	<img src="https://res.cloudinary.com/pepps01/image/upload/v1523816522/sunny.jpg" class="profile_image"  width="260" height="250">
		<h4 style="margin-top: 5px;"><?php echo $user->name;?></h4>
		 Backend and Android
		<p>@<?=$user->username;?></p>	

		<a href="" class="btn btn-success">Holla</a>
</div>
</body>

<?php
include_once('footer.php');
?>