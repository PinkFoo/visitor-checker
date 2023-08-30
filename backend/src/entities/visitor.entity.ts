export class Visitor {
  visitorId: string;
  scrolled: boolean;
  avatarSrc: string;

  public constructor(visitorId: string) {
    this.visitorId = visitorId;
    this.scrolled = false;
    this.avatarSrc = '';
  }
}
