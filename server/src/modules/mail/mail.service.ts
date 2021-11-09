import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

interface MailData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail({ email, firstName, lastName, message }: MailData) {
    try {
      const object = 'Demande de contact';
      console.log({ object });

      const response = await this.mailerService.sendMail({
        // TODO: change this for production
        // to: 'oliviapaul@brownskinbeauty.fr',
        to: 'zayen01@gmail.com',
        from: `${firstName} ${lastName}`,
        subject: object,
        template: './contact',
        context: {
          firstName,
          lastName,
          email,
          object,
          message,
        },
      });

      return {
        isSent: Boolean(response.accepted.length),
        message: 'Email bien envoyé !',
      };
    } catch (error) {
      return {
        isSent: false,
        message:
          "Une erreur est survenue durant l'envoi, merci de réessayer plus tard.",
      };
    }
  }
}
