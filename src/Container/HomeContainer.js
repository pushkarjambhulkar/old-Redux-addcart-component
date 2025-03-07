import Home from '../Components/Home';
import { connect } from 'react-redux';
import { addToCart ,removeToCart} from '../Services/Action/action';


const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)