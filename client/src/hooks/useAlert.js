import { showAlert } from "@/store/slices/alertSlice";
import { useDispatch } from "react-redux";


const useAlert = () => {
    const dispatch = useDispatch();
    
    const alert = (message, severity, position) => {
        dispatch(
           showAlert({
              message,
              severity: severity || "info", 
              position: position || "top-right",
           })
        );
    }

    return alert;
}

export default useAlert;