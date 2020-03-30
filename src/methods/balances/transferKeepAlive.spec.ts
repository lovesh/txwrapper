import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { transferKeepAlive } from './transferKeepAlive';

describe('balances::transferKeepAlive', () => {
  it('should work', () => {
    const unsigned = transferKeepAlive(
      TEST_METHOD_ARGS.balances.transferKeepAlive,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x0603ff96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30'
    );
  });
});
