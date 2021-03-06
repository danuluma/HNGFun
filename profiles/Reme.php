<?php
$result = $conn->query("Select * from secret_word LIMIT 1");
$result = $result->fetch(PDO::FETCH_OBJ);
$secret_word = $result->secret_word;
//echo $secret_word;

$result2 = $conn->query("Select * from interns_data where username = 'Reme'");
$user = $result2->fetch(PDO::FETCH_OBJ);

//echo $user->name;
?>

<!DOCTYPE hmtl>
<html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">   
    
    
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>

<style>

body, h1, h2, h3, h4, h5, h6, p, nav, div, span
{
    font-family: "Comfortaa", cursive; 
}
.wrapper {
    display: flex;
    align-items: stretch;
    position: absolute;
    left: 0;
    top: 0;
}

#side-nav {
    background-color: #2b0b30;
    color: #ffffff;
    min-width: 250px;
    max-width: 250px;
    min-height: 100vh;
    
   }

#side-nav.active {
    margin-left: -250px;
}
@media (max-width: 768px) {
    #side-nav {
        margin-left: -250px; 
/*hides the side nav on smaller screens*/
    }
    #side-nav {
        margin-left: 0;
    }
}
#side-nav ul li
    {
        list-style-type: none;
    }
    
#image-frame
    {
        padding: 0 50px;
    }
#sidenavCollapse
    {
     text-align: left; !important
    }
</style>
</head>
    
<body>
<div id="wrapper">
<div class="row">
<nav id="side-nav" class="col-lg-3">
<br><br><br><br>
<div id="image-frame" >
<?php echo '<img src="'.$user->image_filename.'" width="150px" class="rounded">'; ?>
</div>
<ul>
<li><i class="fa fa-user"></i> <?php echo $user->name; ?></li>
<li><i class="fa fa-slack"></i> @<?php echo $user->username; ?></li>
<li><i class="fa fa-lock"></i> <?php echo $secret_word?></li>
</ul>
</nav>
    
<div id="content" class="col-lg-9">
<button type="button" id="sidenavCollapse" class="btn btn-info navbar-btn">
<i class="glyphicon glyphicon-align-left"></i>
Toggle Sidebar
</button>
</div>
</div>
</div>    
<script>
$(document).ready(function () {

    $('#sidenavCollapse').on('click', function () {
        $('#side-nav').toggleClass('active');
    });

});
</script>
    </body>

</html>
