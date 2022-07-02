import { useForm } from './useForm';

const Form = () => {
    const [fields, setfields, insertData] = useForm();
    return (
        <section className='bg-gray-100 min-h-screen flex flex-col space-y-5 items-center justify-center'>
            <h1 className='font-bold text-5xl '>Contact Us</h1>
            <p>Share your queries with us!</p>
            <div className="right flex-column-center w-full sm:max-w-[50%] xl:max-w-[30%]  p-6  bg-white shadow-md rounded-md">
                <input type="text" className="w-full my-2 outline-none border-2 p-2 rounded-md focus:border-blue-600" placeholder="Enter your Name" value={fields.name} onChange={(e) => setfields({ ...fields, name: e.target.value })} />
                <input type="text" className="w-full my-2 outline-none border-2 p-2 rounded-md focus:border-blue-600" placeholder="Enter your Email" value={fields.email} onChange={(e) => setfields({ ...fields, email: e.target.value })} />
                <textarea rows={10} className="w-full my-2 outline-none border-2 p-2 rounded-md focus:border-blue-600 resize-none" placeholder="Enter your Message" value={fields.message} onChange={(e) => setfields({ ...fields, message: e.target.value })} />
                <button className="bg-green-600 hover:bg-green-800 text-white my-2 text-xl px-5 py-2 w-full rounded-md" onClick={insertData}>
                    Send
                </button>
            </div>
        </section>
    )
}
export default Form;
