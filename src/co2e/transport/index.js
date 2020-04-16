export const TRANSPORT = {
  CAR: 'car',
  BUS: 'bus',
  TRAIN: 'train',
  MOTORBIKE: 'motorbike',
  BICYCLE: 'bicycle',
  WALK: 'walk',
  SHORT_HAUL_FLIGHT: 'shortHaulFlight',
  LONG_HAUL_FLIGHT: 'longHaulFlight',
};

const TRANSPORT_CO2 = {
  [TRANSPORT.CAR]: 0.000043,
  [TRANSPORT.BUS]: 0.000104,
  [TRANSPORT.TRAIN]: 0.000041,
  [TRANSPORT.MOTORBIKE]: 0,
  [TRANSPORT.BICYCLE]: 0,
  [TRANSPORT.WALK]: 0,
  [TRANSPORT.SHORT_HAUL_FLIGHT]: 0.000115, //https://www.carbonindependent.org/22.html
  [TRANSPORT.LONG_HAUL_FLIGHT]: 0.000101,
};

const carbonEmissionTransportType = transportType => {
  const { CAR, BUS, TRAIN, MOTORBIKE, BICYCLE, WALK } = TRANSPORT;
  switch (transportType) {
    case CAR: {
      return TRANSPORT_CO2[CAR];
    }
    case BUS: {
      return TRANSPORT_CO2[BUS];
    }
    case TRAIN: {
      return TRANSPORT_CO2[TRAIN];
    }
    case MOTORBIKE: {
      return TRANSPORT_CO2[MOTORBIKE];
    }
    case BICYCLE: {
      return TRANSPORT_CO2[BICYCLE];
    }
    case WALK: {
      return TRANSPORT_CO2[WALK];
    }

    default:
      throw Error(`unknown transport type: ${transportType}`);
  }
};

/**
 * calculate carbon emission of transport per km
 * return tonCO2
 *
 * source: https://www.bbc.com/news/science-environment-49349566
 */
export const carbonEmissionTransportTypeWithDistance = (
  transportType,
  distance
) => {
  return carbonEmissionTransportType(transportType) * distance;
};

const SHORT_HAUL_DISTANCE_THRESHOLD = 1500; // km
const LONG_HAUL_DISTANCE_THRESHOLD = 2500; // km

export const carbonEmissionFlightType = (flightType, numberOfFlights) => {
  const { SHORT_HAUL_FLIGHT, LONG_HAUL_FLIGHT } = TRANSPORT;
  switch (flightType) {
    case SHORT_HAUL_FLIGHT: {
      return (
        TRANSPORT_CO2[SHORT_HAUL_FLIGHT] *
        numberOfFlights *
        SHORT_HAUL_DISTANCE_THRESHOLD
      );
    }
    case LONG_HAUL_FLIGHT: {
      return (
        TRANSPORT_CO2[LONG_HAUL_FLIGHT] *
        numberOfFlights *
        LONG_HAUL_DISTANCE_THRESHOLD
      );
    }
    default:
      return 0;
  }
};
