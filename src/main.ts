export class App {

  add(a: number, b: number): number {
    return a + b;
  };

};

export class Payment {
  amount: number
  paid: boolean

  constructor(data?: any) {
    this.amount = data.amount;
    this.paid = data.paid;
  };

  refund(num: number) {
    this.amount -= num;
  };

  pay() {
    this.paid = true;
  };
}
