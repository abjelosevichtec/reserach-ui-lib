import * as S from './Styled'

import SimpleForm from './components/Simple'
import ComplexForm from './components/Complex'

function Forms() {
  return (
    <S.Wrapper>
      <S.Title>Forms</S.Title>
      <S.Card>
        <SimpleForm />
        <ComplexForm />
      </S.Card>
    </S.Wrapper>
  )
}

export default Forms