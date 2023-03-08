import { describe, expect, it } from 'vitest'
import { passwordValidator } from '../validator'

describe('密码校验', () => {
  const DEFAULT_MESSAGE = '密码至少八个字符，至少一个字母，一个数字和一个特殊字符'

  it('正常情况', () => {
    expect(passwordValidator('As12345@')).toBe(true)
  })

  it('密码长度不低于8位', () => {
    expect(passwordValidator('As1.')).toBe(DEFAULT_MESSAGE)
  })

  it('密码至少包含一个字母', () => {
    expect(passwordValidator('1234567@')).toBe(DEFAULT_MESSAGE)
  })

  it('密码至少包含一个数字', () => {
    expect(passwordValidator('abcdefg@')).toBe(DEFAULT_MESSAGE)
  })

  it('密码至少包含一个特殊字符', () => {
    expect(passwordValidator('1abcdefg')).toBe(DEFAULT_MESSAGE)
  })
})
