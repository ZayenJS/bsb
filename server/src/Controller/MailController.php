<?php

namespace App\Controller;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class MailController extends AbstractController {

  #[Route('/mail', name:'mail', methods:['POST'])]
public function index(Request $request, MailerInterface $mailer): Response {
  $payload = json_decode($request->getContent(), true);

  $requiredFields = ['email', 'firstName', 'lastName', 'message'];

  foreach ($requiredFields as $requiredField) {
    $translatedKey = '';

    switch ($requiredField) {
    case 'firstName':
      $translatedKey = 'prénom';
      break;
    case 'lastName':
      $translatedKey = 'nom';
      break;
    default:
      $translatedKey = $requiredField;
    }

    $fieldValue = $payload[$requiredField] ?? null;

    if (!is_string($fieldValue)) {
      return $this->json([
        'isSent' => false,
        'message' => "Le type de donnée n'est pas correct pour le champ $translatedKey.",
      ]);
    }

    $fieldValue = trim($fieldValue);

    if (in_array($requiredField, $payload) || empty($fieldValue)) {
      return $this->json([
        'isSent' => false,
        'message' => "le champ $translatedKey est requis.",
      ]);
    } elseif ($requiredField === "email" && !empty($fieldValue) && !filter_var($fieldValue, FILTER_VALIDATE_EMAIL)) {
      return $this->json([
        'isSent' => false,
        'message' => "Cet email n'est pas valide.",
      ]);
    }
  }

  $senderEmail = $payload['email'];
  $firstName = $payload['firstName'];
  $lastName = $payload['lastName'];
  $message = $payload['message'];

  $email = (new TemplatedEmail())
    ->from(new Address("noreply@brownskinbeauty.fr", "$firstName $lastName"))
    // ->to("oliviapaul@brownskinbeauty.fr") // TODO: activate this
    ->to(new Address("zayen01@gmail.com"))
    ->priority(Email::PRIORITY_HIGH)
    ->subject('Demande de contact')
    ->text($message)
    ->htmlTemplate('emails/contact.html.twig')
    ->context([
      'senderEmail' => $senderEmail,
      'firstName' => $firstName,
      'lastName' => $lastName,
      'message' => $message,
    ]);

  $mailer->send($email);

  return $this->json([
    'isSent' => true,
    'message' => 'Email bien envoyé !',
  ]);
}
}