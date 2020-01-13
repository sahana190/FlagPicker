import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

class Continents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        const {handleContinets, continents} = this.props
        return (
            <Autocomplete
                id="combo-box-demo"
                tabIndex="0"
                options={continents}
                getOptionLabel={option => option.title}
                style={{ width: 300 }}
                onInputChange={(event, value, reason) => handleContinets(event, value, reason)}
                renderInput={params => (
                    <TextField {...params} label="Select Continent" variant="outlined" fullWidth />
                )}
            />
        );
    }
}

Continents.propTypes = { 
    continents: PropTypes.array.isRequired,
    handleContinets: PropTypes.func
}
export default Continents;