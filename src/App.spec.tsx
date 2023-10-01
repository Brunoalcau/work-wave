import { render } from '@testing-library/react'


import App from './App'


test("sum", () => {

  const { getByText } = render(<App />)
  expect(getByText("Hello Word")).toBeTruthy()
  expect(1 + 1 ).toBe(2 )
})