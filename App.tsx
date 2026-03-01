/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { UnitPage } from './components/UnitPage';
import { unitsData, UnitData } from './lib/unitsData';

export default function App() {
  const [selectedUnit, setSelectedUnit] = useState<UnitData | null>(null);

  useEffect(() => {
    setSelectedUnit(unitsData[0]);
    document.documentElement.lang = 'he';
    document.documentElement.dir = 'rtl';
  }, []);

  const handleUnitSelect = (unit: UnitData) => {
    setSelectedUnit(unit);
  };

  return (
    <div className="font-sans bg-[#f8f9fa] min-h-screen text-[#212529] text-right p-5">
        <style>{`
        body {
            font-family: 'Heebo', Arial, sans-serif;
            background-color: #f8f9fa;
            color: #212529;
            line-height: 1.7;
            text-align: right;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        h1, h2, h3, h4 {
            color: #343a40;
            margin-top: 1.5em;
            margin-bottom: 0.8em;
        }
        h1 {
            font-size: 2.2em;
            border-bottom: 2px solid #dee2e6;
            padding-bottom: 10px;
        }
        h2 {
            font-size: 1.8em;
        }
        h3 {
            font-size: 1.5em;
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
        }
        h4 {
            font-size: 1.2em;
            color: #007bff;
        }
        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        blockquote {
            background-color: #e9ecef;
            border-right: 5px solid #007bff;
            padding: 15px;
            margin: 20px 0;
            font-style: italic;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #dee2e6;
            padding: 12px;
            text-align: right;
        }
        th {
            background-color: #f8f9fa;
            font-weight: bold;
        }
        hr {
            border: 0;
            border-top: 1px solid #dee2e6;
            margin: 40px 0;
        }
        ul, ol {
            padding-right: 20px;
        }
        p, li {
            margin-bottom: 10px;
        }
        .tip {
            background-color: #fff3cd;
            border-right: 5px solid #ffc107;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
      `}</style>
      <nav className="max-w-[800px] mx-auto mb-4 bg-white p-3 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">בחר יחידת לימוד:</h2>
        <div className="flex flex-wrap gap-2">
          {unitsData.map((unit) => (
            <button
              key={unit.unitNumber}
              onClick={() => handleUnitSelect(unit)}
              className={`px-4 py-2 rounded-md transition-colors ${selectedUnit?.unitNumber === unit.unitNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
              יחידה {unit.unitNumber}
            </button>
          ))}
        </div>
      </nav>

      {selectedUnit && <UnitPage unit={selectedUnit} />}
    </div>
  );
}
