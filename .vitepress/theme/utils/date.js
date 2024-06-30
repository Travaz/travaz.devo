export function formattedDuration(from, to) {
    const start = parseDate(from);
    const end = to.toLowerCase() === 'now' ? new Date() : parseDate(to);

    // Add 1 day to the end date to include the end date in the calculation
    start.setDate(1);
    end.setDate(2);

    const diff = new Date(end - start);
    const years = diff.getUTCFullYear() - 1970;
    const months = diff.getUTCMonth();

    let str = '';
    if (years > 0) {
      str += `${years} ${years > 1 ? 'yrs' : 'yr'} `;
    }

    if (months === 0 && years === 0) {
      return 'Less than a month';
    }

    return str + `${months} ${months > 1 ? 'mos' : 'mo'}`;
}

export function formattedDate(dateString) {
  return formatDate(dateString);
}

export function parseDate(dateString) {
  const [year, month] = dateString.split('-');
  return new Date(year, month - 1);
}

function formatDate(dateStr) {

  if (dateStr.toLowerCase() === 'now') {
    return 'Present';
  }
  
  const [year, month] = dateStr.split('-');
  const date = new Date(year, month - 1);
  return date.toLocaleString('default', { month: 'short', year: '2-digit' });
}