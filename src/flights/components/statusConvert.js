export const statusConvert = (status, time) => {
  switch (status) {
    case 'LN':
      return `Landed ${time}`
    case 'DP':
      return `Departed at: ${time}`
    case 'FR':
      return 'In flight'
    case 'CC':
      return 'Check-in closed'
    case 'GC':
      return 'Gate closed'
    case 'ON':
      return 'On time'
    case 'CK':
      return 'Check-in'
    case 'CX':
      return 'Cancelled'
    case 'BD':
      return 'Boarding'
    default:
      break;
  }
}