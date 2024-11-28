import { describe, expect, it } from 'vitest'

describe('playground', () => {
  it('exported-some.ts', async () => {
    const { hello } = await import('../playground/exported-some')

    expect(hello('world')).toBe('Hello, world!')
  })
})
