import { connect } from 'react-redux';
import { getUser } from '../../redux/selectors/sessionSelectors';
import Header from './Header';

const mapStateToProps = state => ({
  userName: getUser(state),
});

export default connect(mapStateToProps, null)(Header);
