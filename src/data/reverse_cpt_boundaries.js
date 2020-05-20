import * as turf from '@turf/turf'

const polygon = turf.polygon(
  [
    [
      [
        18.590711,
        -34.059332
      ],
      [
        18.623799,
        -34.059332
      ],
      [
        18.623799,
        -34.070957
      ],
      [
        18.590711,
        -34.070957
      ],
      [
        18.590711,
        -34.059332
      ]
    ]
  ]
)

const masked = turf.mask(polygon);


export default masked;
