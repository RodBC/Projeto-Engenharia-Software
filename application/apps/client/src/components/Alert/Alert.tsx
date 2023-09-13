import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showSuccessToast = async (message:string) => {
  const Toast = MySwal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'green',
    customClass: {
      popup: 'colored-toast',
      icon: 'colored-toast-icon-success',
      title: 'colored-toast-title',
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });
  
  await Toast.fire({
    icon: 'success',
    title: message,
  });
};

export const showErrorToast = async (message:string) => {
  const Toast = MySwal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'red',
    customClass: {
      popup: 'colored-toast',
      icon: 'colored-toast-icon-success',
      title: 'colored-toast-title',
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });
  
  await Toast.fire({
    icon: 'error',
    title: message
  })
};

export const showAutoCloseAlert = async (message:string): Promise<void> => {
  let timerInterval: NodeJS.Timeout;

  await Swal.fire({
    title: message,
    html: 'Aguarde Por Favor',
    timer: 2500,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer()?.querySelector('b');
      if (b) {
        timerInterval = setInterval(() => {
          const timerLeft = Swal.getTimerLeft();
          if (b && typeof timerLeft === 'number') {
            b.textContent = timerLeft.toString();
          }
        }, 100);
      }
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
};