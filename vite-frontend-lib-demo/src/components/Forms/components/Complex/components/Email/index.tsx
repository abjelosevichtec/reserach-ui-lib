import useFormContext from '../../../../../../lib/forms/hooks/useFormContext'
import {Input} from '../../../../../../lib/forms/Fields'

import * as S from './Styled'

function Email() {
  const {getField} = useFormContext()
  
  return (
    <S.Wrapper>
      <Input {...getField('email')} label="Email lvl 2" type="email" />
    </S.Wrapper>
  )
}

export default Email