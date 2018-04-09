import React, {Component} from 'react';
import PropTypes from
class MovieList extends Component {
    state = {selectedOption: 'Guardians of the Galaxy Vol. 2'};

    handleOnChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }

    renter() {

    }


}