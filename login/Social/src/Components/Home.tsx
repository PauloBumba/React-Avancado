import { Link } from "react-router-dom"

export const Home:React.FC=()=>{
    return(
        <div>
            <nav>
                <Link to="/login">Login </Link>
                
            </nav>
        </div>

    )
}