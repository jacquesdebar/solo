export const authEndpoint = 'https://accounts.spotify.com/authorize'

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = '15ebbce78a1f4f8daa2a3827347e73cb'
export const redirectUri = window.location.href
export const scopes = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state'
]
