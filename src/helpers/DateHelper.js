const DateHelper = {
  currentDate: () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses son base 0, por lo que se añade 1
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  isInWeekend: (newDate) => {
    return (new Date(newDate).getDay()) > 4 ? true : false;
  }
}


export default DateHelper
