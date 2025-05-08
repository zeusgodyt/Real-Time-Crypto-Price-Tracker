import btcLogo from './assets/btc-logo.png';
import ethLogo from './assets/eth-logo.png';
import usdtLogo from './assets/usdt-logo.png';
import bnbLogo from './assets/bnb-logo.png';
import xrpLogo from './assets/xrp-logo.png';

import btcChart from './assets/btc-chart.png';
import ethChart from './assets/eth-chart.png';
import usdtChart from './assets/usdt-chart.png';
import bnbChart from './assets/bnb-chart.png';
import xrpChart from './assets/xrp-chart.png';

export const sampleData = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 93759.48,
    '1h': 0.43,
    '24h': 0.93,
    '7d': 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    supply: '19.85M BTC',
    logo: btcLogo,
    chart: btcChart,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1802.46,
    '1h': 0.60,
    '24h': 3.21,
    '7d': 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    supply: '120.71M ETH',
    logo: ethLogo,
    chart: ethChart,
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    '1h': -0.02,
    '24h': 0.01,
    '7d': 0.00,
    marketCap: 110474634433,
    volume24h: 39394785983,
    supply: '110.47B USDT',
    logo: usdtLogo,
    chart: usdtChart,
  },
  {
    id: 'bnb',
    name: 'BNB',
    symbol: 'BNB',
    price: 606.65,
    '1h': -0.35,
    '24h': 1.92,
    '7d': 6.54,
    marketCap: 93764923764,
    volume24h: 1293764292,
    supply: '154.54M BNB',
    logo: bnbLogo,
    chart: bnbChart,
  },
  {
    id: 'xrp',
    name: 'XRP',
    symbol: 'XRP',
    price: 2.22,
    '1h': 1.10,
    '24h': 2.20,
    '7d': 7.30,
    marketCap: 11029274611,
    volume24h: 937462939,
    supply: '49.54B XRP',
    logo: xrpLogo,
    chart: xrpChart,
  },
];
