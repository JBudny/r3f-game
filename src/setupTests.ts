/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'

global.URL.createObjectURL = jest.fn()
jest.mock('scheduler', () => require('scheduler/unstable_mock'))
