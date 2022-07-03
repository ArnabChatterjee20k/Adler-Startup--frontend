import { useForm } from './useForm';
import { Field } from "./Field"
import { useValidaton } from './useValidation';
import { useEffect } from 'react';
import contact from "../lottie/assets/contact_man.json"
import Lottie from "../lottie/Lottie"
const Form = () => {
    const [fields, setfields, insertData, valid, setvalid, isName, isEmail, isMessage, setisEmail, setisMessage, setisName] = useForm();
    const [checkName, checkEmail, checkMessage] = useValidaton();

    useEffect(() => {
        if (isEmail && isMessage && isEmail) {
            setvalid(true)
        }
    }, [fields])

    return (
        <section className='mt-20 py-10 flex flex-col space-y-3 items-center justify-center'>
            <div className='flex items-center w-full ml-4 md:ml-0 md:justify-center px-4'>
                <Lottie lottie_object={contact} style={{ height: "100px", width: "100px" }} />
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold text-4xl sm:text-5xl '>Contact Us</h1>
                    <p className='font-medium'>Share your queries with us!</p>
                </div>
            </div>
            <div className="right flex-column-center w-full sm:max-w-[50%] xl:max-w-[30%]  px-6 py-2  bg-white shadow-md rounded-md">
                <Field type="text" value={fields.name} validity_check={isName} placeholder="Name" invalid_message="Name must be between 3 and 10" onChange={(e) => setfields({ ...fields, name: e.target.value })} onKeyDown={() => checkName(fields.name, setisName)} onBlur={() => checkName(fields.name, setisName)} />
                <Field type="email" value={fields.email} validity_check={isEmail} placeholder="Email" invalid_message="invalid email" onChange={(e) => setfields({ ...fields, email: e.target.value })} onKeyDown={() => checkEmail(fields.email, setisEmail)} onBlur={() => checkEmail(fields.email, setisEmail)} />

                <div className='flex flex-col justify-start my-2'>
                    <textarea rows={10} className={`w-full my-2 outline-none border-2 p-2 rounded-md ${isMessage ? "border-blue-600" : "border-red-600"} `} placeholder="Enter your Message" value={fields.message} onChange={(e) => setfields({ ...fields, message: e.target.value })} onKeyDown={() => checkMessage(fields.message, setisMessage)} onBlur={() => checkMessage(fields.message, setisMessage)} />
                    <small className={`${isMessage ? "text-blue-600" : "text-red-600"}`}>{isMessage ? "Looks good" : "Message must be between 4 and 200"}</small>
                </div>

                <button className="bg-green-600 hover:bg-green-800 text-white my-2 text-xl px-5 py-2 w-full rounded-md" onClick={insertData} y>
                    Send
                </button>
            </div>
        </section>
    )
}
export default Form;
