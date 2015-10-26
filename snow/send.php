<?php
/* header('Content-Type: text/html; charset=utf-8'); */
	$to = "info@ppsokol.ru";
	$subject = "Сообщение с сайта ПП 'Сокол'";
    $name    = $_POST['name'];
    $email   = $_POST['email'];
	$phone   = $_POST['phone'];
	$message = $_POST['mess'];
	/* ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$ */
    $message = "Имя: {$name}\nE-mail: {$email}\nТелефон: {$phone}\nСообщение: {$message}";
	$headers = "Content-Type: text/plain; charset=utf-8\r\n"
	."From: Сайт ПП 'Сокол' <info@ppsokol.ru>\r\n";
	if(mail($to, $subject, $message, $headers)) {
		echo("Ваше письмо отправлено!");
	}
	else {
		echo("Возникла ошибка при отправке");
	}
?>