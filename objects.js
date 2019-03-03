var playlist = new Object({ 'Korn': 'Did my time', 'slowdive': 'alison', 'my bloody valentine': 'Sometimes' })


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
