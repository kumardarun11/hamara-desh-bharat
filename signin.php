<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    

    // Retrieve user data
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);
    echo $password;
    echo "</br>";
    echo $user['password'];
    // Verify the password
    if ($user && $password==$user['password']) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['name'];
        header("Location: ../heritage/dashboard.php"); // Redirect to a dashboard or home page
    } else {
        echo "Invalid email or password";
    }

    mysqli_close($conn);
}
?>
