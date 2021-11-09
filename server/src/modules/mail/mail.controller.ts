import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @Post()
  async mail(@Body() body) {
    const response = await this.mailService.sendMail({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      message: body.message,
    });

    return response;
  }
}
