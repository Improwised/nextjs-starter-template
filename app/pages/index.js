import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCountries } from '../store/actions';

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    await reduxStore.dispatch(fetchCountries());
    return { isServer };
  }

  componentDidMount() {
    const { cData } = this.props;
    cData();
  }

  render() {
    const { countries, isServer } = this.props;
    return (
      <div>
        <h3>{`isServer: ${isServer}`}</h3>
        <h1>Countries</h1>
        <ul>
          {countries.map(country => (
            <li key={country.alpha2Code}>{country.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Index.propTypes = {
  cData: PropTypes.func,
  countries: PropTypes.array,
  isServer: PropTypes.bool
};

Index.defaultProps = {
  cData: [],
  countries: [],
  isServer: true
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ cData: fetchCountries }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
