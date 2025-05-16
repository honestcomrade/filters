import { render, screen } from '@testing-library/react'
import { Card } from './Card'
import { describe, expect, it } from 'vitest'

describe('Card', () => {
  it('should render', () => {
    render(<Card id={0} title={'testTitle'} description={'testDescription'} imageUrl={'testImageUrl'} />)
    expect(screen.getByText('testTitle', { selector: '.card-title' })).toBeInTheDocument()
    expect(screen.getByText('testDescription', { selector: '.card-description' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'testTitle' })).toBeInTheDocument()
  })
})