import Header from '../Components/Header'
import {connect} from 'react-redux'
//import {addToCart} from '../Services/Action/action'

const mapStateToProps=state=>({
     data:state.cardItems
 })
 const mapDispatchToProps=dispatch=>({
 })
 export default connect(mapStateToProps,mapDispatchToProps)(Header)