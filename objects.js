var playlist = new Object({ 'Korn': 'Did My Time', 'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes' })


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
