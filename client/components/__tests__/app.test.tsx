//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderApp } from '../../test/setup'
import { screen } from '@testing-library/react'

describe('welcome screen', () => {
  it('shows a header', () => {
    renderApp('/')
    const heading = screen.getByRole('heading', { name: /pickles/i })
    expect(heading).toBeVisible()
  })
})

