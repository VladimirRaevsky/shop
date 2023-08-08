import { StateSchema } from 'entites/Counter/ui/Counter'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    test('should return value', () => {
        const state: StateSchema = {
            counter: { value: 10 },
        }
        expect(getCounterValue(state)).toEqual(10)
    })
})
