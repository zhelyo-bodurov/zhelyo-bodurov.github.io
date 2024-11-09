<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $messageType = $_POST['messageType'];

    // Simple validation (you may want to add more validation)
    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "test@zhelyo.boostyourday.net"; // Your email address

        // Convert the name and message type to UTF-8 for the subject
        $encodedName = mb_convert_encoding($name, "UTF-8", "auto");
        $encodedMessageType = mb_convert_encoding($messageType, "UTF-8", "auto");

        // Encode the subject with mb_encode_mimeheader for UTF-8 characters
        $subject = mb_encode_mimeheader("New Contact Message from $encodedName: $encodedMessageType", "UTF-8", "B", "\n");

        // Create the email body with UTF-8 encoding
        $body = "Name: $encodedName\nEmail: $email\n\nMessage:\n$message";
        $body = mb_convert_encoding($body, "UTF-8", "auto");

        // Email headers for UTF-8 encoding
        $headers = "From: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully.";
        } else {
            echo "Message sending failed.";
        }
    } else {
        echo "All fields are required.";
    }
}
?>
