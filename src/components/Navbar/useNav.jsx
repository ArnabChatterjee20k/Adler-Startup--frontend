import { useNavigate } from "react-router-dom"
// event will act as prop to the component
export const useNav = (extra_class) => {
    const navigateTo = useNavigate();
    const links = [
        {
            name:"home",
            event:{onClick:()=>navigateTo("/")}
        },
        {
            name:"services",
            event:{}
        },
        {
            name:"reviews",
            event:{}
        },
        {
            name:"about us",
            event:{}
        },
        {
            name:"contact us",
            event:{}
        }
    ]
    return (
        links
    )
}
