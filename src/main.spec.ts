import { App } from './main';
import { Payment } from './main';

describe('App', () => {
    it('should run tests', () => {
      let app = new App
      expect(app.add(3,2)).toBe(5)
    });
  });

describe('Payment', () => {

  it('should reduce amount owed by refund amount', () => {
      let payment = new Payment({amount: 100, paid: false})
      payment.refund(50)
      expect(payment.amount).toBe(50)

    });

  it('should make set paid to true', () => {
      let payment = new Payment({amount: 100, paid: false})
      payment.pay()
      expect(payment.paid).toBe(true)
    });

});
