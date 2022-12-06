import { connect } from "react-redux";
import Home from '../components/Home';
import { addToCart, removeToCart } from "../services/Actions/actions";

const mapStateToProps = state => ({
    cartData: state.cartItems
})
const mapDespatchToProps = dispatch => ({
    addToCartHandle: data => dispatch(addToCart(data)),
    removeToCartHandle: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDespatchToProps)(Home)
// export default Home;