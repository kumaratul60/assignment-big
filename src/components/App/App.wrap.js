import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ settingsView, gamesView, resultsView }) => ({
  // map state props to make them available in wrapped component
  settingsView,
  gamesView,
  resultsView,
});

export default connect(mapStateToProps)(App);
