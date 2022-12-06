import {connect} from "react-redux";
import Home from '../components/Home';
import { addToCart } from "../services/Actions/actions";

const mapStateToProps = state=>({
    cartData: state.cartItems
})
const mapDespatchToProps = dispatch=>({
    addToCartHandle: data=> dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDespatchToProps)(Home)
// export default Home;