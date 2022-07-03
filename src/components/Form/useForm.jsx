import supabase from "./useConfig";
import { useState , useRef, useEffect} from "react";
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
export const useForm = () => {
    
    const [fields, setfields] = useState({ name: "", email: "", message: "" });
    const [isName,setisName] = useState(false);
    const [isEmail,setisEmail] = useState(false);
    const [isMessage,setisMessage] = useState(false);
    const [valid,setvalid] = useState(false)
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
        if (valid) {
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
        else{
            toast.error("Please fill the form properly!",{theme:"dark"})
        }
    }
    return (
        [fields, setfields, insertData,valid,setvalid,isName,isEmail,isMessage,setisEmail,setisMessage,setisName]
    )
}
