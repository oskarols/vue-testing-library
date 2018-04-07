import Vue from 'vue'
import VeeValidate from 'vee-validate'

import { render, Simulate, wait } from '../../src'
import Validate from './components/Validate'

test('can validate using plugin', async () => {
  const { getByPlaceholderText, queryByTestId } = render(Validate, {},
    vue => vue.use(VeeValidate, { events: 'blur' }))

  const usernameInput = getByPlaceholderText('Username...')
  Simulate.touch(usernameInput)  

  await wait()

  expect(queryByTestId('username-errors').textContent).toBe('The username field is required.')
})
