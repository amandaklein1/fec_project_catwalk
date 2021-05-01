
import { connect } from 'react-redux';
import StyleVisual from '../src/components/styleVisual';

const mapStateToProps = (state) => ({
  style: state.thumbnails
});

const StyleVisualContainer = connect(mapStateToProps, null)(StyleVisual);

export default StyleVisualContainer;