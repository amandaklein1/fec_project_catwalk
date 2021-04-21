import { connect } from 'react-redux';
import StyleList from '../src/components/productDetail';
import changeCurrentSku from '../actions/currentSku';

const mapStateToProps = (state) => ({
  styles: state.styleList
});

const mapDispatchToProps = (dispatch) => ({
  handleCurrentSkuTitleClick: (style) => {
    dispatch(changeCurrentSku(style));
  }
});

const StyleListContainer = connect(mapStateToProps, mapDispatchToProps)(StyleList);

export default StyleListContainer;