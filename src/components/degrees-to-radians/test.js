import assert from 'assert'
import { degreesToRadians } from './degrees-to-radians'

describe('degreesToRadians', function() {
    it('Converts 360 degrees to 2π radians', () => {
        const result = degreesToRadians(360)
        assert(result === 2 * Math.PI)
    })
})
