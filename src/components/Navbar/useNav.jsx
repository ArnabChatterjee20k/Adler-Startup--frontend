import { useNavigate } from "react-router-dom"
// event will act as prop to the component
export const useNav = (extra_class) => {
    const navigateTo = useNavigate();
    const links = [
        {
            name:"home",
            event:{onClick:()=>navigateTo("/")},
            link:false
        },
        {
            name:"services",
            event:{},
            scroll_to:"services",
            link:true
        },
        {
            name:"reviews",
            event:{},
            scroll_to:"reviews",
            link:true
        },
        {
            name:"about us",
            event:{},
            scroll_to:"about us",
            link:true
        },
        {
            name:"contact us",
            event:{},
            scroll_to:"contact us",
            link:true
        }
    ]
    return (
        links
    )
}
