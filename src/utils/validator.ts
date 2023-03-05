const DEFAULT_MESSAGE = '密码至少八个字符，至少一个字母，一个数字和一个特殊字符'

/**
 * 密码校验（demo）
 * @param str 输入的字符
 * @param msg 错误消息
 * @returns boolean | string
 */
export const passwordValidator = (str: string, msg = DEFAULT_MESSAGE) => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

  if (!reg.test(str))
    return msg

  return true
}
