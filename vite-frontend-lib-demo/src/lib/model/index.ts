// @ts-nocheck
import {createContext, useContext, useCallback} from 'react'
import {observer, useLocalObservable} from 'mobx-react-lite'

export const ModelContext = createContext()
export const useModelContext = () => useContext(ModelContext)



export const useGenerateModel = (modelData, Context = ModelContext) => {
  const model = useLocalObservable(() => modelData)

  const ModelProvider = useCallback(
    ({children}) => <Context.Provider value={{model}}>{children}</Context.Provider>,
    [model]
  )

  const useModelContext = useCallback(() => useContext(Context), [Context])

  return {model, ModelProvider, useModelContext}
}

export {observer}