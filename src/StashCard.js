import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarRatings from 'react-star-ratings';

const styles = theme => ({
    card: {
        maxWidth: 400
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    actions: {
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        }),
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    }
});

class StashCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const {
            classes,
            name,
            description,
            img,
            location_name,
            address,
            rating,
            postal_code,
            country,
            capacity
        } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label="Recipe"
                                className={classes.avatar}
                            >
                                {country}
                            </Avatar>
                        }
                        title={name}
                        subheader={location_name}
                    />
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography component="p">{address}</Typography>
                        <Typography component="p">{postal_code}</Typography>
                    </CardContent>

                    <CardActions
                        className={classes.actions}
                        disableActionSpacing
                    >
                        {rating ? (
                            <StarRatings
                                rating={rating}
                                starDimension="20px"
                                starSpacing="7px"
                                starRatedColor="rgb(255, 0, 0)"
                            />
                        ) : (
                            'no rating yet'
                        )}

                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse
                        in={this.state.expanded}
                        timeout="auto"
                        unmountOnExit
                    >
                        <CardContent>
                            <Typography paragraph variant="body2">
                                Description:
                            </Typography>
                            <Typography paragraph>{description}</Typography>

                            <Typography paragraph>
                                Capacity: {capacity}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

StashCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StashCard);
