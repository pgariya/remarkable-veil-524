export default function getFutureDate(timestamp,days) {
    const futureDate = new Date(timestamp);
    futureDate.setDate(futureDate.getDate() + days); // Adding one day to the date
    const weekday = futureDate.toLocaleString('default', { weekday: 'long' });
    const day = futureDate.getDate();
    const formattedDate = `${weekday.toUpperCase()} ${day}`;
    return formattedDate;
  }
  
  