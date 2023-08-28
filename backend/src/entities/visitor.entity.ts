export class Visitor {
  visitor_id: string;
  scrolled: boolean;
  avatar_src: string;

  public constructor(visitor_id: string) {
    this.visitor_id = visitor_id;
    this.scrolled = false;
    this.avatar_src = '';
  }
}
