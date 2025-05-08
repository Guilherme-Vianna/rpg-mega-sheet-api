import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SheetModule } from './sheet/sheet.module';
import { FieldModule } from './field/field.module';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    SheetModule,
    FieldModule,
    SectionsModule
  ],
})
export class AppModule { }
