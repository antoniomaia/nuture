import { useEffect, useState } from 'react';

const loadEcologicalEarthBadge = () => {
  const existingScript = document.getElementById('ecologicalEarth');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'http://local.ecological.earth:8080/badge.js';
    script.id = 'ecologicalEarth';
    document.body.appendChild(script);
  }
};

const Share = () => {
  const [companyId, setCompanyId] = useState(1);

  useEffect(() => {
    loadEcologicalEarthBadge();
  });

  return (
    <div>
      <h1>Share</h1>
      <input onChange={e => setCompanyId(e.target.value)} value={companyId} />

      <br />
      <br />
      <br />

      <ecological-earth id={companyId} />
    </div>
  );
};

Share.propTypes = {};

export default Share;
