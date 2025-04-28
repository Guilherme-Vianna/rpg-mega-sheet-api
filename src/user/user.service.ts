import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  // TODO: Implementar o envio de e-mail para recuperação de senha
  // async sendResetEmail(email: string, token: string) {
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.gmail.com',
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASS,
  //     },
  //   });

  //   const resetUrl = `https://seusite.com/reset-password?token=${token}`;

  //   await transporter.sendMail({
  //     from: '"Seu App" <no-reply@seusite.com>',
  //     to: email,
  //     subject: 'Recuperação de Senha',
  //     html: `
  //       <p>Você pediu para redefinir sua senha.</p>
  //       <p>Clique no link abaixo para criar uma nova senha:</p>
  //       <a href="${resetUrl}">Redefinir Senha</a>
  //       <p>Se você não pediu isso, apenas ignore este e-mail.</p>
  //     `,
  //   });
  // }

  async create(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.users.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
      },
    });
  }

  async findAll() {
    return this.prisma.users.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data: any = { ...updateUserDto };

    if (updateUserDto.password) {
      data.password = await bcrypt.hash(updateUserDto.password, 10);
    } else {
      delete data.password;
    }

    return this.prisma.users.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.users.delete({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async verifyPassword(email: string, password: string) {
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (!user) return false;
    return bcrypt.compare(password, user.password);
  }

  // ------- ADICIONADO PARA RECUPERAÇÃO DE SENHA --------

  async generatePasswordResetToken(email: string) {
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const token = randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1); // expira em 1 hora

    await this.prisma.password_reset_tokens.create({
      data: {
        token,
        userId: user.id,
        expiresAt,
      },
    });

    return token;
  }

  async validatePasswordResetToken(token: string) {
    const tokenRecord = await this.prisma.password_reset_tokens.findUnique({
      where: { token },
    });

    if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
      throw new Error('Token inválido ou expirado.');
    }

    return tokenRecord.userId;
  }

  async resetPassword(token: string, newPassword: string) {
    const tokenRecord = await this.prisma.password_reset_tokens.findUnique({
      where: { token },
    });

    if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
      throw new Error('Token inválido ou expirado.');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.prisma.users.update({
      where: { id: tokenRecord.userId },
      data: { password: hashedPassword },
    });

    await this.prisma.password_reset_tokens.delete({
      where: { token },
    });

    return { message: 'Senha atualizada com sucesso.' };
  }
}
