export const useValidaton = () => {

  const checkName = (name,setisName)=>{
    const valid_name = /^[a-zA-Z][a-zA-Z0-9-_]{3,30}$/gi;
    const isvalid = valid_name.test(name);
    setisName(isvalid)

}

  const checkEmail = (email,setisEmail) => {
    const valid_email = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    const isvalid = valid_email.test(email);
    setisEmail(isvalid);
  }

  const checkMessage = (message,setisMessage) => {
    const valid_message = /^[\w\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]{4,200}$/
    const isvalid = valid_message.test(message);
    setisMessage(isvalid);
  }

    return [checkName,checkEmail,checkMessage]
}
