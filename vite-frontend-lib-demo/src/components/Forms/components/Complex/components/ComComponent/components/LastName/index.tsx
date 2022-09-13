import useFormContext from "../../../../../../../../lib/forms/hooks/useFormContext"
import {Input} from '../../../../../../../../lib/forms/Fields'

function LastName() {
  const {getField} = useFormContext()

  return (
    <Input {...getField('lastName')} label="Last name lvl 3" />
  )
}

export default LastName