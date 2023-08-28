export class Visitor {
  visitor_id: string;
  scrolled: boolean;

  public constructor(visitor_id: string) {
    this.visitor_id = visitor_id;
    this.scrolled = false;
  }
}
