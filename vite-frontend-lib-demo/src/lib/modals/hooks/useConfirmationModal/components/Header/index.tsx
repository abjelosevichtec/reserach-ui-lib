import * as T from './types'
import * as S from './Styled'

function Header({closePortal}: T.Props) {
  return (
    <S.Wrapper>
      <S.Close
        onClick={closePortal}
      >X</S.Close>
    </S.Wrapper>
  )
}

export default Header