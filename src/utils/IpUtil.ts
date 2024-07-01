export class IpUtil {
  static dot2LongIP(ipaddr: string): number {
    if (!ipaddr) {
      return 0;
    }

    const ips = ipaddr.split('.').map(Number);

    if (
      ips.length !== 4 ||
      ips.some((num) => isNaN(num) || num < 0 || num > 255)
    ) {
      throw new Error('Invalid IP address format');
    }

    return (
      ips[3] + ips[2] * 256 + ips[1] * 256 * 256 + ips[0] * 256 * 256 * 256
    );
  }
}
