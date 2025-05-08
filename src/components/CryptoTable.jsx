import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setSort } from '../features/uiSlice';
import CryptoRow from './CryptoRow';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const crypto = useSelector((state) => state.crypto);
  const { filterText, sortBy, sortOrder } = useSelector((state) => state.ui);

  const handleSort = (field) => {
    dispatch(setSort(field));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  // Filtering
  const filteredData = crypto.filter(
    (asset) =>
      asset.name.toLowerCase().includes(filterText.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(filterText.toLowerCase())
  );

  // Sorting
  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  const renderSortIndicator = (field) =>
    sortBy === field ? (sortOrder === 'asc' ? ' 🔼' : ' 🔽') : '';

  return (
    <div className="overflow-x-auto bg-blue-100 rounded-md shadow p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or symbol"
          value={filterText}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded w-full max-w-xs"
        />
      </div>

      <table className="min-w-full bg-white border rounded-md shadow text-sm">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-right cursor-pointer" onClick={() => handleSort('price')}>
              Price {renderSortIndicator('price')}
            </th>
            <th className="px-4 py-2 text-right cursor-pointer" onClick={() => handleSort('percent_change_1h')}>
              1h % {renderSortIndicator('percent_change_1h')}
            </th>
            <th className="px-4 py-2 text-right cursor-pointer" onClick={() => handleSort('percent_change_24h')}>
              24h % {renderSortIndicator('percent_change_24h')}
            </th>
            <th className="px-4 py-2 text-right cursor-pointer" onClick={() => handleSort('percent_change_7d')}>
              7d % {renderSortIndicator('percent_change_7d')}
            </th>
            <th className="px-4 py-2 text-right">Market Cap</th>
            <th className="px-4 py-2 text-right">24h Volume</th>
            <th className="px-4 py-2 text-right">Circulating Supply</th>
            <th className="px-4 py-2 text-center">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {sortedData.map((asset, index) => (
            <CryptoRow key={asset.id} index={index + 1} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;