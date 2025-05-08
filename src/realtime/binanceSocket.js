const BASE_URL = 'wss://stream.binance.com:9443/ws';

export class BinanceSocket {
  constructor(dispatch, symbols) {
    this.dispatch = dispatch;
    this.symbols = symbols.map((id) => id.toLowerCase() + 'usdt');
    this.socket = null;
  }

  start() {
    const streamNames = this.symbols.map((s) => `${s}@miniTicker`).join('/');
    this.socket = new WebSocket(`${BASE_URL}/${streamNames}`);

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const symbol = data.s.toLowerCase().replace('usdt', '');

      this.dispatch({
        type: 'crypto/updateFromWebSocket',
        payload: {
          id: symbol,
          price: parseFloat(data.c),
          '1h': (Math.random() * 2 - 1).toFixed(2),
          volume24h: parseFloat(data.v),
        },
      });
    };
  }

  stop() {
    this.socket?.close();
  }
}
