import {connect} from "react-redux";
import Header from '../components/Header';

const mapStateToProps = state=>({
    cartData: state.cartItems
})
const mapDespatchToProps = dispatch=>({
})

export default connect(mapStateToProps, mapDespatchToProps)(Header)
// export default Home;