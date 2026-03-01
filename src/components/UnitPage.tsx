/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { UnitData } from '../lib/unitsData';

interface UnitPageProps {
  unit: UnitData;
}

export function UnitPage({ unit }: UnitPageProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = unit.content;
    }
    document.title = unit.title;
  }, [unit]);

  return (
    <div className="container">
      <h1>📜 {unit.title}</h1>
      <img 
          src={unit.imageUrl} 
          alt={`תמונת נושא ${unit.unitNumber}`}
          className="w-full h-auto rounded-lg mb-6"
      />
      <div ref={contentRef}></div>
    </div>
  );
}
