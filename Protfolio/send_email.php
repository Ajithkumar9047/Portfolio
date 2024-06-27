<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];

  // Your SMTP configuration
  $to = "ajithkumaraji9047@gmail.com";
  $smtpHost = "smtp.google.com"; // Change this to your SMTP host
  $smtpPort = 587; // Change this to your SMTP port
  $smtpUsername = "ajithkumaraji9047@gmail.com"; // Change this to your SMTP username
  $smtpPassword = "uroqpjoiixmnrxxb"; // Change this to your SMTP password

  // Set headers
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  // Send email
  if (mail($to, $subject, $message, $headers)) {
    echo "<script>alert('Thank you for contacting us!');</script>";
  } else {
    echo "<script>alert('Sorry, there was an error sending your message.');</script>";
  }
}
?>
