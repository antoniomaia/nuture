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
  [TRANSPORT.SHORT_HAUL_FLIGHT]: 0.000133,
  [TRANSPORT.LONG_HAUL_FLIGHT]: 0.000102,
};

const carbonEmissionTransportType = transportType => {
  const {
    CAR,
    BUS,
    TRAIN,
    MOTORBIKE,
    BICYCLE,
    WALK,
    SHORT_HAUL_FLIGHT,
    LONG_HAUL_FLIGHT,
  } = TRANSPORT;
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
    case SHORT_HAUL_FLIGHT: {
      return TRANSPORT_CO2[SHORT_HAUL_FLIGHT];
    }
    case LONG_HAUL_FLIGHT: {
      return TRANSPORT_CO2[LONG_HAUL_FLIGHT];
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
