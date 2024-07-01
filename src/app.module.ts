import { Module } from '@nestjs/common';
import { Ipv4Module } from './ipv4/ipv4.module';

@Module({
  imports: [Ipv4Module],
})
export class AppModule {}
