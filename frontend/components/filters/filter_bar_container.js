import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import FilterBar from "./filter_bar";

const mapStateToProps = state => ({
  filters: state.ui.filters
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(null, mapDispatchToProps)(FilterBar);