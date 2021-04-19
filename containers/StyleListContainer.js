import { connect } from 'react-redux';
import StyleList from '../src/components/productDetail';
import changeCurrentSku from '../actions/currentSku';

var mapStateToProps = (state) => ({
  styleList: state.styleList
});

var mapDispatchToProps = (dispatch) => ({
  handleCurrentSkuTitleClick: (style) => {
    dispatch(changeCurrentSku(style));
  }
});

var StyleListContainer = connect(mapStateToProps, mapDispatchToProps)(StyleList);

export default StyleListContainer;