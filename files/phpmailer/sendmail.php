<?php

   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'files/phpmailer/src/Exception.php';
   require 'files/phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer/language/');
   $mail->IsHTML(true);

   // От кого
   $mail->setFrom('alex-diakov@support.com', 'Поддержка от Alex Diakov');
   // На какой email отправка
   $mail->addAddress('hetman.novel@gmail.com');
   // Тема письма
   $mail->Subject = 'Письмо с сайта alex-diakov.com';

   // Тело письма
   $body = 'Сообщение от посетителя с моего сайта';

   if(trim(!empty($_POST['contact-name']))) {
      $body.='<p><strong>Имя: <strong/> '.$_POST['contact-name'].'</p>';
   }

   if(trim(!empty($_POST['contact-email']))) {
      $body.='<p><strong>Email: <strong/> '.$_POST['contact-email'].'</p>';
   }

   if(trim(!empty($_POST['contact-message']))) {
      $body.='<p><strong>Сообщение: <strong/> '.$_POST['contact-message'].'</p>';
   }

   $mail->Body = $body;

   // Отправка
   if (!$mail->send()) {
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);

?>