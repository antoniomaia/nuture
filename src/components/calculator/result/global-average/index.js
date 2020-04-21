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
  const data = [{ name: 'You', value: result }];
  if (countryCode !== 'gb') {
    const gbr = worldEmissions.find(c => c.code === 'GBR');
    data.unshift({ name: 'U.K.', value: formatNumber(gbr.perCapita) });
  }
  if (countryCode !== 'pe') {
    const per = worldEmissions.find(c => c.code === 'PER');
    data.unshift({ name: 'Peru', value: formatNumber(per.perCapita) });
  }
  if (countryEmissions) {
    data.push({
      name: countryEmissions.entity,
      value: formatNumber(countryEmissions.perCapita),
    });
  }
  if (countryCode !== 'de') {
    const de = worldEmissions.find(c => c.code === 'DEU');
    data.push({ name: 'Germany', value: formatNumber(de.perCapita) });
  }
  if (countryCode !== 'us') {
    const usa = worldEmissions.find(c => c.code === 'USA');
    data.push({ name: 'U.S.', value: formatNumber(usa.perCapita) });
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
