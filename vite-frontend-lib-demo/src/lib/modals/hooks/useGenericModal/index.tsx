import {useCallback} from 'react'

import usePortal, {Args} from 'react-cool-portal'

import * as T from './types'
import * as S from './Styled'

function useGenericModal(options: Args = {}): T.GenericReturn {
  const {Portal, isShow, hide, ...otherPortalProps} = usePortal({
    defaultShow: false,
    ...options
  })

  const handleOnBackdropClick = useCallback(() => {
    if (options.clickOutsideToHide) {
      hide()
    }
  }, [options.clickOutsideToHide])

  const Modal = useCallback(
    ({children}: T.ModalProps) => (
      <Portal>
        <S.Wrapper tabIndex={-1}>
          <S.Backdrop onClick={handleOnBackdropClick} />
          <S.ContentWrapper>
            {children}
          </S.ContentWrapper>
        </S.Wrapper>
      </Portal>
    ),
    [isShow]
  )

  return {Modal, isShow, hide, ...otherPortalProps}
}

export default useGenericModal