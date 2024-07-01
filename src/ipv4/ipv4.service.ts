import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Ipv4 } from './interfaces/ipv4.interface';

@Injectable()
export class Ipv4Service {
  constructor(private readonly prisma: PrismaService) {}

  async ipv4(longIpv4: number): Promise<Ipv4> {
    return this.prisma.ip2location_db11.findFirstOrThrow({
      select: {
        country_code: true,
        country_name: true,
        region_name: true,
        city_name: true,
        latitude: true,
        longitude: true,
        zip_code: true,
        time_zone: true,
      },
      where: {
        ip_to: {
          gte: longIpv4,
        },
      },
      orderBy: {
        ip_to: 'asc',
      },
    });
  }
}
