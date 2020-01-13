import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {countries: []};
        this.handleCountries = this.handleCountries.bind(this);
    }
    componentDidUpdate(prevProps) {
        if(!isEqual(prevProps.countries, this.props.countries)){
            this.setState({countries: []}, this.props.handleCountries(null));
        }
    }

    handleCountries = (countries) => {
        this.setState({ countries }, () => {
            this.props.handleCountries(countries)
        })

    }
    render() {
        return (
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                tabIndex="0"
                options={this.props.countries.countries}
                disableCloseOnSelect
                value={this.state.countries}
                getOptionLabel={option => option.name}
                onChange={(event, value) => { this.handleCountries(value) }}
                renderOption={(option, { selected }) => (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                    </React.Fragment>
                )}
                style={{ width: 500 }}
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Countries"
                        placeholder="Select Countries"
                        fullWidth
                    />
                )}
            />
        );
    }
}

Countries.propTypes = {
    countries: PropTypes.object.isRequired,
    handleCountries: PropTypes.func
}
export default Countries;