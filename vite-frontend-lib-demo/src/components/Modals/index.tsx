import useGenericModal from '../../lib/modals/hooks/useGenericModal'
import useConfirmationModal from '../../lib/modals/hooks/useConfirmationModal'

import * as S from './Styled'

function Modals() {
  const {Modal: GenericModal, show: showGeneric} = useGenericModal({
    clickOutsideToHide: true
  })
  const {Modal: ConfirmationModal, show: showConfirmationModal} = useConfirmationModal({
    clickOutsideToHide: true
  })

  return (
    <S.Wrapper>
      <S.Title>Modals</S.Title>
      <S.Card>
        <S.Button onClick={showGeneric}>
          Show Generic Modal
        </S.Button>
        <S.Button onClick={showConfirmationModal}>
          Show Confirmation Modal
        </S.Button>
      </S.Card>
      <GenericModal>
        <S.GenericContentWrapper>Generic Modal Content</S.GenericContentWrapper>
      </GenericModal>
      <ConfirmationModal 
        title="Save data?"
        confirmBtnText="Save"
        cancelBtnText="Cancel"
      />
    </S.Wrapper>
  )
}

export default Modals