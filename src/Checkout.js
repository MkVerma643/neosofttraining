import { useRouteMatch } from "react-router"

function Checkout(){
    var route= useRouteMatch()
    var url=route.url
    var path=route.path
    console.log(".....", route)

    return <div className="row">

        
    </div>
}

export default Checkout