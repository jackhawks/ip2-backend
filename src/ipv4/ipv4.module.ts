import { Module } from '@nestjs/common';
import { Ipv4Controller } from './ipv4.controller';
import { Ipv4Service } from './ipv4.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [Ipv4Controller],
  providers: [Ipv4Service],
  imports: [PrismaModule],
})
export class Ipv4Module {}
