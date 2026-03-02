import { toast } from "react-toastify";
import { TYPE_SHOW_NOTI } from "../utils/consts/notification";

export const showToast = (type = TYPE_SHOW_NOTI.err, content = "", id) => {
  if (type === TYPE_SHOW_NOTI.err) {
    return toast.error(content, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else if (type === TYPE_SHOW_NOTI.success) {
    return toast.success(content, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === TYPE_SHOW_NOTI.update_success) {
    return toast.update(id, {
      render: content,
      type: "success",
      isLoading: false,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === TYPE_SHOW_NOTI.update_error) {
    return toast.update(id, {
      render: content,
      type: "error",
      isLoading: false,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};
