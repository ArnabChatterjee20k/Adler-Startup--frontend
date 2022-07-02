import { Link } from "react-router-dom"
import { PrimaryBtn } from "./PrimaryBtn"
// extra_classes is applied in Link as it is parent
export const Message = ({text,extra_classes}) => {
    return (
        <Link to={"/adler/message"} className={extra_classes}>
            <PrimaryBtn text={text || "Message"} classes={extra_classes} />
        </Link>
    )
}
