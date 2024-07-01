import { Controller, Get, Ip, Param } from '@nestjs/common';
import { Ipv4Service } from './ipv4.service';
import { IpUtil } from '../utils/IpUtil';
import { Ipv4 } from './interfaces/ipv4.interface';

@Controller()
export class Ipv4Controller {
  constructor(private readonly ipv4Service: Ipv4Service) {}

  @Get(['', '4', 'ip4', 'ipv4'])
  async getIpv4(@Ip() ip: string): Promise<Ipv4> {
    const longIp = IpUtil.dot2LongIP(ip);
    return this.ipv4Service.ipv4(longIp);
  }

  @Get(['/:ipv4', '4/:ipv4', 'ip4/:ipv4', 'ipv4/:ipv4'])
  async getIpv4F(@Param('ipv4') ipv4: string): Promise<Ipv4> {
    const longIpv4 = IpUtil.dot2LongIP(ipv4);
    return this.ipv4Service.ipv4(longIpv4);
  }
}
