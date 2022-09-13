import * as T from './types'
import * as S from './Styled'

function ButtonSecondary({onClick, children}: T.Props) : JSX.Element {
  return (
    <S.Button onClick={onClick}>{children}</S.Button>
  )
}

export default ButtonSecondary