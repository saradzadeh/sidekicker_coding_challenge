<?php

$host = "localhost"; 
$user = "root"; 
$password = "your_mysql_root_password"; 
$dbname = "coding-challenge-db"; 
$id = '';

$conn = mysqli_connect($host, $user, $password,$dbname);



// if (!$con) {
//   die("Connection failed: " . mysqli_connect_error());
// }


// switch ($method) {
//     case 'GET':
//       $id = $_GET['id'];
//       $sql = "select * from job_list".($id?" where id=$id":''); 
//       break;
//     case 'POST':
//       $title = $_POST["title"];
//       $description = $_POST["description"];
//       $date = $_POST["date"];
//       $location = $_POST["location"];
//       $applicants = $_POST["applicants"];

//       $sql = "insert into contacts (title, description, date, location, applicants) values ('$title', '$description', '$date', '$location', '$applicants')"; 
//       break;
// }

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
    $trp = mysqli_query($conn, "SELECT * from job_list");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    print json_encode($rows); 

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();

?>