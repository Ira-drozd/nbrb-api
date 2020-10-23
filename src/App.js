import React from 'react';
import Chart from "./components/Currency/Currency";
//import {connect} from "react-redux";

function App() {
  return (
      <Chart/>
  );
}

/*const mapStateToProps = (state) => ({
    currency: state.currency.currency,
    loading: state.currency.loading
})

const mapDispatchToProps = (dispatch) => ({
    // fetchCurrency: () => dispatch(fetchCurrency()),
    // setCurrentPage: (page) => dispatch(setCurrentPage(page))
})*/

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;