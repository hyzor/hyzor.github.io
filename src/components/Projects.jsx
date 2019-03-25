import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import ProjectModal from 'components/ProjectModal';
import { withStyles } from '@material-ui/styles';
import { hot } from 'react-hot-loader';
import { Trail } from 'react-spring/renderprops';

const styles = () => ({
  white: {
    color: '#fff',
  },
  card: {
    height: '100%',
    width: '100%',
  },
  cardMedia: {
    //paddingTop: '56.25%', // 16:9
    paddingTop: '100%',
  },
});

class Projects extends React.Component {
  state = {
    openProject: null,
  };

  handleClick = project => () => {
    this.setState({ openProject: project.id });
  };

  handleClose = () => {
    this.setState({ openProject: null });
  };

  render() {
    const { data, classes } = this.props;
    const { openProject } = this.state;
    const { projects } = data.data;

    return (
      <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Trail
            items={['Pro', 'jec', 'ts']}
            from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            delay={1500}
          >
            {item => props => (
              <Typography
                className={classes.white}
                align="center"
                color="inherit"
                style={props}
                variant="h2"
                gutterBottom
              >
                {item}
              </Typography>
            )}
          </Trail>
        </div>
        <Grid container spacing={40}>
          <Trail
            items={projects}
            keys={item => item.id}
            from={{ opacity: 0, transform: 'translate3d(0, -300px, 0)' }}
            to={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
            delay={1500}
          >
            {item => props => (
              <Grid style={props} item key={item.id} sm={6} md={4} lg={4}>
                <CardActionArea className={classes.card} onClick={this.handleClick(item)}>
                  <Card style={{ height: '100%' }}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.thumbnail}
                      title={item.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body2">{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
                <ProjectModal
                  project={item}
                  openProject={openProject}
                  handleClose={this.handleClose}
                />
              </Grid>
            )}
          </Trail>
        </Grid>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default hot(module)(withStyles(styles)(Projects));
