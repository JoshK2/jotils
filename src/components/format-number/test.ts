import assert from 'assert'
import { formatNumber } from './format-number'

describe('formatNumber', function() {
    it('check number', () => {
        assert(formatNumber('123') === '123')
    })
    it('check number', () => {
        assert(formatNumber('1234') === '1,234')
    })
    it('check number', () => {
        assert(formatNumber('12345') === '12,345')
    })
    it('check number', () => {
        assert(formatNumber('123456') === '123,456')
    })
    it('check number', () => {
        assert(formatNumber('1234567') === '1,234,567')
    })
    it('check number', () => {
        assert(formatNumber('12345678') === '12,345,678')
    })
})
