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
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from 'components/external/Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    activeGrid: 0,
  };

  handleClick = project => () => {
    this.setState({ openProject: project.id });
  };

  handleClose = () => {
    this.setState({ openProject: null });
  };

  handleChangeGrid = activeGrid => {
    this.setState({ activeGrid });
  };

  handleNext = numChunks => () => {
    this.setState(prevState => ({
      activeGrid: prevState.activeGrid + 1 < numChunks ? prevState.activeGrid + 1 : 0,
    }));
  };

  handleBack = numChunks => () => {
    this.setState(prevState => ({
      activeGrid: prevState.activeGrid - 1 >= 0 ? prevState.activeGrid - 1 : numChunks - 1,
    }));
  };

  render() {
    const { data, classes, theme } = this.props;
    const { openProject, activeGrid } = this.state;
    const { projects } = data.data;

    const projectChunks = [];
    const projectChunkSize = 6;
    let index = 0;

    while (index < projects.length) {
      projectChunks.push(projects.slice(index, projectChunkSize + index));
      index += projectChunkSize;
    }

    const numChunks = projectChunks.length;

    return (
      <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Trail
            items={['Pro', 'jec', 'ts']}
            from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            delay={500}
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
        <AutoPlaySwipeableViews
          style={{ overflow: 'hidden' }}
          slideStyle={{ overflow: 'hidden' }}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeGrid}
          onChangeIndex={this.handleChangeGrid}
          interval={5000}
        >
          {projectChunks.map((chunk, _index) => {
            return (
              <Grid key={_index} container spacing={40} style={{ overflow: 'hidden' }}>
                <Trail
                  items={chunk}
                  keys={item => item.id}
                  from={{ opacity: 0, transform: 'translate3d(0, 200px, 0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
                  delay={0}
                >
                  {item => props => (
                    <Grid
                      style={{ ...props, ...{ overflow: 'hidden' } }}
                      item
                      key={item.id}
                      sm={6}
                      md={4}
                      lg={4}
                    >
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
            );
          })}
        </AutoPlaySwipeableViews>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
          <Pagination dots={numChunks} index={activeGrid} onChangeIndex={this.handleChangeGrid} />
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default hot(module)(withStyles(styles, { withTheme: true })(Projects));
