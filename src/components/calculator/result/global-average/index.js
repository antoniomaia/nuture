import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Cell,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';

import { worldEmissions } from '../../../../co2e/world/co-emissions-per-capita';
import { countries } from '../../../../constants/countries';

import styles from './styles.module.scss';

const formatNumber = number => parseFloat(number.toFixed(1));

const getWorldDataEmissions = (countryCode, result) => {
  const country = countries.find(c => c.countryCode === countryCode);
  let countryEmissions = worldEmissions.find(c => c.code === countryCode);
  if (!countryEmissions) {
    countryEmissions = worldEmissions.find(
      c => c.entity.toLowerCase() === country.name.toLowerCase()
    );
  }
  const data = [];
  if (countryCode !== 'cn') {
    const cn = worldEmissions.find(c => c.code === 'CHN');
    data.push({ name: cn.entity, value: formatNumber(cn.perCapita) });
  }
  if (countryCode !== 'br') {
    const bra = worldEmissions.find(c => c.code === 'BRA');
    data.push({ name: bra.entity, value: formatNumber(bra.perCapita) });
  }
  if (countryCode !== 'us') {
    const usa = worldEmissions.find(c => c.code === 'USA');
    data.push({ name: 'U.S.', value: formatNumber(usa.perCapita) });
  }
  data.push({ name: 'You', value: result });
  if (countryEmissions) {
    data.push({
      name: countryEmissions.entity,
      value: formatNumber(countryEmissions.perCapita),
    });
  }
  if (countryCode !== 'fr') {
    const fra = worldEmissions.find(c => c.code === 'FRA');
    data.push({ name: fra.entity, value: formatNumber(fra.perCapita) });
  }
  if (countryCode !== 'cm') {
    const cmr = worldEmissions.find(c => c.code === 'CMR');
    data.push({ name: cmr.entity, value: formatNumber(cmr.perCapita) });
  }
  data.push({ name: 'World', value: formatNumber(4.789869769) });

  return data;
};

const WorldAverage = ({ result, countryCode }) => {
  const data = useMemo(() => getWorldDataEmissions(countryCode, result), [
    result,
  ]);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h4>How do you compare to the average person in other countries?</h4>
        <br />
        <br />
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              interval={0}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis />
            <Bar dataKey="value" label={{ position: 'top' }}>
              {data.map((entry, index) => (
                <Cell fill={entry.name === 'You' ? '#277a21' : '#424757'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorldAverage;
