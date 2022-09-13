import {useCallback} from 'react'
import {useFormContext as useContext} from 'react-hook-form'
import {getFieldProps} from '../useForm'

function useFormContext() {
  const methods = useContext()

  const getField = useCallback((name: string) => ({...getFieldProps(methods, name), name}), [methods])

  return {getField, ...methods}
}

export default useFormContext