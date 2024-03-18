
import Swal from 'sweetalert2'

const Notify = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}


export default Notify;
