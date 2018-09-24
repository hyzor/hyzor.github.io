import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import ProjectModal from 'components/ProjectModal';
import { withStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  cardMedia: {
    //paddingTop: '56.25%', // 16:9
    paddingTop: '100%',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  title: {
    textAlign: 'center',
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

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Typography className={classes.title} variant="display1" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={40}>
          {data.data.projects.map(project => (
            <Grid item key={project.id} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardActionArea onClick={this.handleClick(project)}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.thumbnail}
                    title={project.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2">
                      {project.name}
                    </Typography>
                    <Typography>{project.desc}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <ProjectModal
                project={project}
                openProject={openProject}
                handleClose={this.handleClose}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default hot(module)(withStyles(styles)(Projects));
