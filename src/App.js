import React, { Component } from 'react';
import queryString from 'query-string';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DotLoader } from 'react-spinners';
import './App.css';
import StashCard from './StashCard';
import MenuButtons from './buttons';

class App extends Component {
    state = {
        stashpoints: [],
        header: 'Show All'
    };
    componentDidMount() {
        this.fetchStashpoints('', this.state.header);
    }
    fetchStashpoints(parameters, header) {
        this.setState({ stashpoints: [], header });
        const query = queryString.stringify(parameters);
        fetch(`https://api-staging.stasher.com/v1/stashpoints?${query}`)
            .then(response => response.json())
            .then(json => this.setState({ stashpoints: json }));
    }
    renderStashpoints() {
        const { stashpoints } = this.state;
        if (stashpoints.length > 0) {
            return (
                <Grid container spacing={24}>
                    {stashpoints.map((stashpoint, index) => (
                        <Grid item xs={4} key={index} key={index}>
                            <StashCard
                                name={stashpoint.name}
                                description={stashpoint.description}
                                img={stashpoint.photos[0]}
                                location_name={stashpoint.location_name}
                                address={stashpoint.address}
                                rating={stashpoint.rating}
                                postal_code={stashpoint.postal_code}
                                country={stashpoint.country}
                            />
                        </Grid>
                    ))}
                </Grid>
            );
        }
        return (
            <div className="spinner">
                <DotLoader color={'#F2453D'} loading />
            </div>
        );
    }
    render() {
        const { stashpoints } = this.state;
        console.log('stashpoints', stashpoints);
        return (
            <div className="app">
                <h2>Sort By: {this.state.header}</h2>
                <div className="navbtn">
                    {MenuButtons.map((item, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            onClick={() => {
                                this.fetchStashpoints(
                                    item.parameters,
                                    item.label
                                );
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
                {this.renderStashpoints()}
            </div>
        );
    }
}

export default App;
// {stashpoint.description}
// <p>{stashpoint.rating}*</p>
