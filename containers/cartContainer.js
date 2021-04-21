import { connect } from 'react-redux';
import Cart from '../src/components/cart';


const mapStateToProps = (state) => ({
  style: state.thumbnails
});

const CartContainer = connect(mapStateToProps, null)(Cart);

export default CartContainer;