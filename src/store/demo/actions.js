import Model from '../../sdk/model'
export function getDemoData ({ dispatch }) {
 return Model.get().then((data) => {
   console.log('返回data', data)
    dispatch('MINE_INFO', data)
  })
}
