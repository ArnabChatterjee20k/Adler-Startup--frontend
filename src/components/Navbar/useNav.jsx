import { useNavigate,useLocation } from "react-router-dom"
// event will act as prop to the component
export const useNav = (extra_class) => {
    const location=useLocation()
    const navigateTo = useNavigate();
    const links = [
        {
            name:"home",
            event:{onClick:()=>location.pathname==="/"?scrollTo(0,0):navigateTo("/")},
            link:false
        },
        {
            name:location.pathname==="/"?"services":null,
            event:{},
            scroll_to:"services",
            link:true
        },
        {
            name:location.pathname==="/"?"reviews":null,
            event:{},
            scroll_to:"reviews",
            link:true
        },
        {
            name:location.pathname==="/"?"about us":null,
            event:{},
            scroll_to:"about us",
            link:true
        },
        {
            name:location.pathname==="/"?"contact us":null,
            event:{},
            scroll_to:"contact us",
            link:true
        }
    ]
    return (
        links
    )
}
