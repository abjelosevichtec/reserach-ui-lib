import {useGenerateModel} from '../../lib/model'

function useModel() {
  const {model, ModelProvider} = useGenerateModel({
    spots: [],
    selected: [],
    toggleSelected(spot) {
      const spotAlreadyExists = this.selected.some(selSpot => selSpot.id === spot.id)

      if (spotAlreadyExists) {
        return (this.selected = this.selected.filter(s => s.id !== spot.id))
      }

      this.selected = [...this.selected, spot]
    },
    handleOnRefresh() {},
    handleCreateNewSpot() {}
  })

  return {model, ModelProvider}
}

export default useModel