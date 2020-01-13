import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


class Flags extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <p>
                    {this.props.flags.map(item => item.flag)}
                </p>
                <Button
                    variant="contained"
                    color="primary"
                    tabIndex="0"
                    onClick={e => this.props.clearFlags()} >
                    Clear Flags
                </Button>
            </div>
        );
    }
}

Flags.propTypes = {
    flags: PropTypes.array,
    clearFlags: PropTypes.func
}

export default Flags;
