import toast from "react-hot-toast";

const showSuccessToast = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 5000,    
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export default showSuccessToast;