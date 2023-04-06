<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'config.php';
$db = new DbConn;
$conn = $db->connect();

session_start();
$_SESSION['auth_token'] = $token;

// Output the token as a cookie to be sent to the client's browser
$cookie_lifetime = 3600; // Token lifespan in seconds
$cookie_path = '/'; // Cookie available on all pages
$cookie_domain = 'example.com'; // Replace with your domain name
$cookie_secure = true; // Only send the cookie over HTTPS
$cookie_http_only = true; // Prevent client-side scripts from accessing the cookie
setcookie('auth_token', $token, time() + $cookie_lifetime, $cookie_path, $cookie_domain, $cookie_secure, $cookie_http_only);

// Use the token to verify the user's identity on subsequent requests
if (isset($_COOKIE['auth_token']) && isset($_SESSION['auth_token']) && $_COOKIE['auth_token'] === $_SESSION['auth_token']) {
  // Validate the token on the server-side
    
  // The user is authenticated
} else {
  // The user is not authenticated
}
function validate_token() {
    session_start();
    if (!isset($_SESSION['auth_token']) || !isset($_COOKIE['auth_token']) || $_SESSION['auth_token'] !== $_COOKIE['auth_token']) {
      // The token is not valid
        return false;
    }
    // Validate the token expiration time
    $token_lifetime = 3600; // Token lifespan in seconds
    if (time() - $_SESSION['auth_token_time'] > $token_lifetime) {
      // The token has expired
        return false;
    }
    // Validate the token against the user's credentials
    $username = 'user'; // Replace with the user's username
    $password = 'password'; // Replace with the user's password
    $token = $_COOKIE['auth_token'];
    $hash = hash('sha256', $username . $password . $_SERVER['REMOTE_ADDR']);
    if ($hash !== $token) {
      // The token does not match the user's credentials
        return false;
    }
    // The token is valid
    return true;
} 

// Check if the user is authenticated
if (!validate_token()) { 
  // Redirect the user to a login page
    echo "You are not authorized to access this page. Please log in first.";
    header("Location: login.php");
    exit();
}

?> 