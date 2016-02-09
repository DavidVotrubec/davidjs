<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $json = file_get_contents("php://input");
    $obj = json_decode($json);

    $name = test_input($obj->{'name'});
    $email = test_input($obj->{'email'});
    $message = $obj->{'message'};
  
    return sendEmail($name, $email, $message);
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
  return $data;
}

function sendEmail($name, $email, $message) {
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Via: davidjs.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $message = "REPLY TO: " . $name . " on " . $email . "\r\n\r\n\r\n" . $message;

    // In case any of our lines are larger than 70 characters, we should use wordwrap()
    $message = wordwrap($message, 70, "\r\n");

    // Send    
    return mail('david.votrubec@gmail.com', 'Sent from davidjs.com', $message, $headers);    
}

?>