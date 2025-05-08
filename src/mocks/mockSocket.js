import { updateAsset } from '../features/cryptoSlice';

export default class MockSocket {
  constructor(dispatch, assetIds) {
    this.dispatch = dispatch;
    this.assetIds = assetIds;
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      const randomId = this.assetIds[Math.floor(Math.random() * this.assetIds.length)];
      const randomChange = (Math.random() * 2 - 1).toFixed(2);

      this.dispatch(updateAsset({
        id: randomId,
        changes: {
          price: +(Math.random() * 100000).toFixed(2),
          '1h': +randomChange,
          '24h': +(randomChange * 2).toFixed(2),
          '7d': +(randomChange * 5).toFixed(2),
          volume24h: Math.floor(Math.random() * 100_000_000_000),
        }
      }));
    }, 1500);
  }

  stop() {
    clearInterval(this.interval);
  }
}
