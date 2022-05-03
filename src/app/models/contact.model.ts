export class Contact {
  constructor(
    public _id?: string,
    public name: string = '',
    public email: string = '',
    public coins: number = 0,
    public phone: string = '',
    public picture: string = '',
    public moves: any = []
  ) {}

  setId?(id: string) {
    // Implement your own set Id
    this._id = id;
  }
}
