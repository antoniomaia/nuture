// https://www.iea.org/reports/global-energy-co2-status-report-2019/emissions

const averageCarbonIntensity = 0.000475; // tCO2/kWh

export const carbonEmissionsElectricity = (
  electricityKwh = 0,
  participants = 1
) => {
  return (electricityKwh * averageCarbonIntensity) / participants;
};
