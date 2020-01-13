import React from 'react';
import Continents from './components/continents-component/continents-component';
import Countries from './components/countries-component/countries-component';
import continentsData from './mock-data/continents.json'
import Flags from './components/flags-component/flags-componet';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = () => ({
  root: {
    flexGrow: 1,
  },
  spaceStyle: {
    marginTop: '25px',
  },
  h1Style: {
    textAlign: 'center',
    color: 'blue'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continents: [],
      countries: null,
      flags: null
    };
    this.handleContinets = this.handleContinets.bind(this);
    this.handleCountries = this.handleCountries.bind(this);
    this.clearFlags = this.clearFlags.bind(this);
  }
  componentDidMount() {
    const continents = [];
    continentsData.forEach((element, index) => {
      continents.push({ title: element.continent, id: index })
    });
    this.setState({ continents });
  }

  handleContinets = (event, continent, reason) => {
    if (reason === 'clear') {
      this.setState({ countries: null, flags: null });
    } else {
      const countries = continentsData.find(obj => obj.continent === continent);
      this.setState({ countries });
    }
  }

  handleCountries = (flags) => {
    this.setState({ flags });
  }

  clearFlags = () => {
    this.setState({ countries: null, flags: null });
  }

  render() {
    const { countries, continents, flags } = this.state;
    const { classes } = this.props

    return (
      <div className={classes.spaceStyle}>
        <h1 className={classes.h1Style}> Flag Picker </h1>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Continents continents={continents} handleContinets={this.handleContinets} />
            </Grid>
            <Grid item xs>
              {countries ? <Countries countries={countries} handleCountries={this.handleCountries} /> : null}
            </Grid>
            <Grid item xs>
              {flags ? <Flags flags={flags} clearFlags={this.clearFlags} /> : null}
            </Grid>
          </Grid>
        </div>
      </div >
    );
  }
}


App.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(App);
