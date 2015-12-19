<?php
/* header('Content-Type: text/html; charset=utf-8'); */
	$to = "dekortshop@gmail.com";
	$subject = "New order dekort-promo.ru";
    $name    = $_POST['name'];
    $email   = $_POST['email'];
	$phone   = $_POST['phone'];
	/* ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$ */
    $message = "Имя: {$name}\nE-mail: {$email}\nТелефон: {$phone}";
	$headers = "Content-Type: text/plain; charset=utf-8\r\n"
	."From: Dekort Robot <admin@dekort-promo.ru>\r\n";
	mail($to, $subject, $message, $headers);
?>