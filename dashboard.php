<?php
session_start();
// if (!isset($_SESSION['user_id'])) {
//     header("Location: ../pages/signin.html"); // Redirect to the login page if not logged in
//     exit();
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
        /* Basic reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }

        header {
            background:  #ff9933;
            color: #ffffff;
            padding: 20px 0;
            text-align: center;
        }

        header h1 {
            margin-bottom: 10px;
            font-size: 24px;
        }

        header p {
            font-size: 16px;
        }

        nav {
            background: #138808;
            padding: 10px;
        }

        nav ul {
            list-style: none;
            text-align: center;
        }

        nav ul li {
            display: inline;
            margin-right: 10px;
        }

        nav ul li a {
            color: #ffffff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background 0.3s ease-in-out;
        }

        nav ul li a:hover {
            background: #555;
        }

        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background: #69cde4;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .dashboard {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
        }

        .card {
            background: #fafafa;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease-in-out;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h3 {
            margin-bottom: 15px;
            font-size: 18px;
        }

        .card p {
            margin-bottom: 10px;
            font-size: 14px;
        }

        .card a {
            text-decoration: none;
            color: #35424a;
            font-weight: bold;
            transition: color 0.3s ease-in-out;
        }

        .card a:hover {
            color: #000;
        }

        footer {
            background: #ff9933;
            color: #ffffff;
            text-align: center;
            padding: 10px 0;
            margin-top: 20px;
        }

        footer p {
            font-size: 14px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['user_name']); ?>!</h1>
        <p>Your personalized dashboard</p>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="dashboard.php">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </nav>

    <div class="container">
        <div class="dashboard">
            <div class="card">
                <h3>Profile Overview</h3>
                <p>Manage your personal information</p>
                <a href="#">View Details</a>
            </div>
            <div class="card">
                <h3>Recent Activity</h3>
                <p>Check your recent actions</p>
                <a href="#">View Details</a>
            </div>
            <div class="card">
                <h3>Settings</h3>
                <p>Adjust your preferences</p>
                <a href="#">View Details</a>
            </div>
            <div class="card">
                <h3>Messages</h3>
                <p>View your recent messages</p>
                <a href="#">View Details</a>
            </div>
            <div class="card">
                <h3>Notifications</h3>
                <p>See your notifications</p>
                <a href="#">View Details</a>
            </div>
            <div class="card">
                <h3>Support</h3>
                <p>Need help? Contact us</p>
                <a href="./pages/helpcenter.html">View Details</a>
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; 2024 Code_Crazers. All rights reserved.</p>
    </footer>
</body>
</html>
