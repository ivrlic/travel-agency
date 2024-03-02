import { format } from 'date-fns';

// converting dates to another format
export default function formatDate(date) {
  if (date) {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return formattedDate
  }
}

