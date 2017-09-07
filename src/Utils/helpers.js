export function getdate(timestamp) {
  if (timestamp) {
    let day = new Date(timestamp).getDate()
    let month = new Date(timestamp).getMonth()
    let year = new Date(timestamp).getFullYear()
    let d = month + '/' + day + '/' + year;
    return d
  }
}
