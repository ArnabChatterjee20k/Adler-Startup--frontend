import supabase from "./useConfig";
import { useState , useRef} from "react";
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
export const useForm = () => {
    
    const [fields, setfields] = useState({ name: "", email: "", message: "" });
    const toastRef = useRef(null);
    const toast_options = {
        position: "top-right",
        autoClose: 5000,
        icon:true,
        hideProgressBar: false,
        theme: "dark",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    };

    const insertData = async () => {
        if (fields.name.trim() && fields.email.trim() && fields.message.trim()) {
            toastRef.current = toast(<div className="flex"><MoonLoader className="mx-2" color="white" size={25}/>Sending..</div>,{...toast_options,icon:false,type:toast.TYPE.INFO,autoClose:false})
            
            const { data, error } = await supabase
                .from('Customers')
                .insert([
                    { Name: fields.name, Email: fields.email, Message: fields.message }
                ])

            if (data) {
                toast.update(toastRef.current,{...toast_options,render:"Success!",type:toast.TYPE.SUCCESS,autoClose:5000})
            }
            else {
                toast.update(toastRef.current,{...toast_options,render:"Error!",type:toast.TYPE.ERROR,autoClose:5000})
            }
        }
    }
    return (
        [fields, setfields, insertData]
    )
}
