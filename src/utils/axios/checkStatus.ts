export function checkStatus(
  status: number,
  msg?: string,
): void {
  const { t } = useI18n()
  let errMessage = ''

  switch (status) {
    case 400:
      errMessage = `${msg}`
      break
    case 401:
      break
    case 403:
      errMessage = t('globalTip.errMsg403')
      break
    // 404请求不存在
    case 404:
      errMessage = t('globalTip.errMsg404')
      break
    case 405:
      errMessage = t('globalTip.errMsg405')
      break
    case 408:
      errMessage = t('globalTip.errMsg408')
      break
    case 500:
      errMessage = t('globalTip.errMsg500')
      break
    case 501:
      errMessage = t('globalTip.errMsg501')
      break
    case 502:
      errMessage = t('globalTip.errMsg502')
      break
    case 503:
      errMessage = t('globalTip.errMsg503')
      break
    case 504:
      errMessage = t('globalTip.errMsg504')
      break
    case 505:
      errMessage = t('globalTip.errMsg505')
      break
    default:
  }
  if (errMessage) {
    // TODO:错误提示
    // createErrorModal({title: errMessage})
  }
}
