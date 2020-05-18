import * as turf from '@turf/turf'

const polygon = turf.polygon(
  [
    [
      [
        18.590711,
        -34.056310
      ],
      [
        18.623799,
        -34.056310
      ],
      [
        18.623799,
        -34.071384
      ],
      [
        18.590711,
        -34.071384
      ],
      [
        18.590711,
        -34.056310
      ]
    ]
  ]
)

const masked = turf.mask(polygon);


export default masked;
