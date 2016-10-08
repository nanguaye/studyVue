
export function getDemoData ({ dispatch }) {
  const mine = {name: 'ych', sex: '男'}
  dispatch('MINE_INFO', mine)
}
