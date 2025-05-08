import React from 'react';

const formatNumber = (num) =>
    num?.toLocaleString('en-US', { maximumFractionDigits: 2 });

const formatPercent = (num) => {
    const isPositive = num >= 0;
    return (
        <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {isPositive ? '▲' : '▼'} {Math.abs(num).toFixed(2)}%
        </span>
    );
};

const CryptoRow = ({ index, asset }) => {
    return (
        <tr className="border-t hover:bg-gray-50 transition text-center">
            <td className="px-4 py-2 font-medium">{index}</td>
            <td className="px-4 py-2 flex items-center gap-2 justify-start">
                <img
                    src={asset.logo}
                    alt={asset.name}
                    className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-left">{asset.name} ({asset.symbol})</span>
            </td>
            <td className="px-4 py-2 text-right">${formatNumber(asset.price)}</td>
            <td className="px-4 py-2 text-right">{formatPercent(asset['1h'])}</td>
            <td className="px-4 py-2 text-right">{formatPercent(asset['24h'])}</td>
            <td className="px-4 py-2 text-right">{formatPercent(asset['7d'])}</td>
            <td className="px-4 py-2 text-right">${formatNumber(asset.marketCap)}</td>
            <td className="px-4 py-2 text-right">${formatNumber(asset.volume24h)}</td>
            <td className="px-4 py-2 text-right">{asset.supply}</td>
            <td className="px-4 py-2 text-center">
                <img
                    src={asset.chart}
                    alt={`${asset.symbol} 7D Chart`}
                    className="w-20 h-6 object-contain mx-auto"
                />
            </td>
        </tr>
    );
};

export default CryptoRow;
