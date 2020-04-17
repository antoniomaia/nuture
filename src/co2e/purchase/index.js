const averageCarbonIntensity = 0.0001; // tCO2/kWh

export const carbonEmissionsPurchase = (amount = 0) => {
  return amount * averageCarbonIntensity;
};
