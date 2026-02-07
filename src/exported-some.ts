export function hello(name: string) {
  return `Hello, ${name}!`
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('exported-some', () => {
    it('should return a greeting message', () => {
      expect(hello('world')).toBe('Hello, world!')
    })
  })
}
