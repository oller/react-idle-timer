import * as expect from 'expect'
import { cleanup } from '@testing-library/react'
import { MessageChannel } from 'worker_threads'
import { createMocks } from '../src'

expect.extend({
  toBeAround (actual, expected, precision = 2) {
    const pass = (actual <= expected + precision && actual >= expected - precision)
    if (pass) {
      return {
        message: () => `expected ${actual} to not be within ${precision} of ${expected}`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${actual} to be within ${precision} of ${expected}`,
        pass: false
      }
    }
  }
})

beforeAll(() => {
  // @ts-ignore
  global.MessageChannel = MessageChannel
  createMocks()
})

afterAll(cleanup)
