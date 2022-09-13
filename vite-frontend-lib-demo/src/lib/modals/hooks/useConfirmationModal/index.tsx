import {useCallback} from 'react'

import useGenericModal from '../useGenericModal'

import Header from './components/Header'
import ButtonPrimary from './components/ButtonPrimary'
import ButtonSecondary from './components/ButtonSecondary'

import * as T from './types'
import * as S from './Styled'

function useConfirmationModal(options: T.Props = {}): T.GenericReturn {
  const {Modal: GenericModal, isShow, hide, ...rest} = useGenericModal({
    ...options
  })

  const handleOnConfirm = useCallback(async () => {
    if (options.handleOnConfirm) {
      await options.handleOnConfirm()
    }
    hide()
  }, [options.handleOnConfirm])

  const CancelButtonComponent = options.CancelButton ? options.CancelButton : ButtonSecondary
  const ConfirmButtonComponent = options.ConfirmButton ? options.ConfirmButton : ButtonPrimary

  const Modal = useCallback(
    ({title = '', cancelBtnText = '', confirmBtnText = ''}: T.ModalProps) => (
      <GenericModal>
        <S.Wrapper>
          <Header closePortal={hide} />
          <S.ContentWrapper>
            <S.Title>{title}</S.Title>
            <S.ButtonsWrapper>
              <CancelButtonComponent onClick={hide}>{cancelBtnText}</CancelButtonComponent>
              <ConfirmButtonComponent
                onClick={handleOnConfirm}
               >{confirmBtnText}</ConfirmButtonComponent>
            </S.ButtonsWrapper>
          </S.ContentWrapper>
        </S.Wrapper>
      </GenericModal>
    ),
    [isShow]
  )

  return {Modal, isShow, hide, ...rest}
}

export default useConfirmationModal