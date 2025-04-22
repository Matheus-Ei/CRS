export class Session {
  constructor(
    public id: number,
    public movieId: number,
    public roomId: number,
    public startDate: Date,
    public endDate: Date,
    public price: number,
  ) {}
}
