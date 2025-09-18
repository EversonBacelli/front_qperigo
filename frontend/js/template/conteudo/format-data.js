export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');

  const formattedDate = `${padToTwoDigits(parseInt(day, 10))}/${padToTwoDigits(parseInt(month, 10))}/${year}`;

  return formattedDate;
}

function padToTwoDigits(num) {
  return num.toString().padStart(2, '0');
}
