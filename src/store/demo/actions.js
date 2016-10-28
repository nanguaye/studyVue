import Model from '../../sdk/model'
import Extends from '../../sdk/extends'
console.log('Extends', new Extends('a','b','c'))
export function getDemoData ({ dispatch }) {
 return Model.get().then((data) => {
   console.log('返回data', data)
    dispatch('MINE_INFO', data)
  })
}
