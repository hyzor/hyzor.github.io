import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import projectsData from 'data/projects.json';
import aboutData from 'data/about.json';
import { hot } from 'react-hot-loader';
import publicationsData from 'data/publications.json';
import { Facebook, Linkedin, Twitter, Instagram, Github } from 'mdi-material-ui';
import IconButton from '@material-ui/core/IconButton';
import { Trail, Spring, Keyframes } from 'react-spring/renderprops';
import Particles from 'react-particles-js';
import particlesData from 'data/particles.json';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';
import loadable from '@loadable/component';
import Parallax from 'components/external/Parallax';
import { Waypoint } from 'react-waypoint';

const appBarHeight = 64;
const scrollOffset = -appBarHeight;
const waypointOffset = '40%';
const scrollDuration = 500; // ms
const minPageHeight = 1200;

const styles = (theme) => ({
  white: {
    color: '#fff',
  },
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    width: 320,
    height: 320,
  },
  avatarColor: {
    backgroundColor: 'transparent',
  },
  avatarImg: {
    color: 'transparent',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    textAlign: 'center',
    textIndent: '10000px',
  },
  pageParent: {
    display: 'grid',
    placeItems: 'center',
  },
  page: {
    [theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      height: `calc(100vh - ${appBarHeight}px)`,
      minHeight: minPageHeight,
    },
  },
  footer: {
    backgroundColor: theme.palette.secondary.main,
    height: 200,
  },
  particles: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    position: 'fixed',
  },
});

const FadeLoopScript = Keyframes.Spring(async (next) => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    await next({
      opacity: 1,
      transform: 'translate3d(0,0px,0)',
      from: { opacity: 0, transform: 'translate3d(0,-80px,0)' },
      reset: true,
      reverse: false,
    });
    // eslint-disable-next-line no-await-in-loop
    await next({
      opacity: 1,
      transform: 'translate3d(0,0px,0)',
      from: { opacity: 0, transform: 'translate3d(0,-80px,0)' },
      reset: true,
      reverse: true,
    });
  }
});

const Projects = loadable(() => import('../Projects'));
const Resume = loadable(() => import('../Resume'));
const Publications = loadable(() => import('../Publications'));
const Contact = loadable(() => import('../Contact'));
const EmojiToggle = loadable(() => import('../EmojiToggle'));

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: '',
      windowHeight: 1024,
      windowWidth: 1024,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  };

  handleSetActive = (to) => {
    this.setState({
      active: to,
    });
  };

  render() {
    const { classes } = this.props;
    const { active, windowHeight } = this.state;

    const aboutText = aboutData.data.about.map((item, i) => {
      return (
        <Typography key={i} color="textSecondary" style={{ marginTop: 10 }} variant="subtitle1">
          {item}
        </Typography>
      );
    });

    return (
      <>
        <CssBaseline />
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Link to="home" spy smooth offset={scrollOffset} duration={scrollDuration}>
                <Button variant="text" color="primary">
                  <Typography variant="h6" color="textSecondary">
                    Home
                  </Typography>
                </Button>
              </Link>
            </div>
            <Box display="flex" flexWrap="wrap">
              <Link to="projects" isDynamic smooth offset={scrollOffset} duration={scrollDuration}>
                <Button
                  style={{ display: 'flex' }}
                  variant={active === 'projects' ? 'contained' : 'text'}
                  color="primary"
                >
                  <Typography variant="button" color="textSecondary">
                    Projects
                  </Typography>
                </Button>
              </Link>
              <Link to="resume" smooth offset={scrollOffset} duration={scrollDuration}>
                <Button
                  style={{ display: 'flex' }}
                  variant={active === 'resume' ? 'contained' : 'text'}
                  color="primary"
                >
                  <Typography variant="button" color="textSecondary">
                    Résumé
                  </Typography>
                </Button>
              </Link>
              <Link to="about" smooth offset={scrollOffset} duration={scrollDuration}>
                <Button
                  style={{ display: 'flex' }}
                  variant={active === 'about' ? 'contained' : 'text'}
                  color="primary"
                >
                  <Typography variant="button" color="textSecondary">
                    About
                  </Typography>
                </Button>
              </Link>
              <Link to="publications" smooth offset={scrollOffset} duration={scrollDuration}>
                <Button
                  style={{ display: 'flex' }}
                  variant={active === 'publications' ? 'contained' : 'text'}
                  color="primary"
                >
                  <Typography variant="button" color="textSecondary">
                    Publications
                  </Typography>
                </Button>
              </Link>
              <Link to="contact" smooth offset={scrollOffset} duration={scrollDuration}>
                <Button
                  style={{ display: 'flex' }}
                  variant={active === 'contact' ? 'contained' : 'text'}
                  color="primary"
                >
                  <Typography variant="button" color="textSecondary">
                    Contact
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          <Particles className={classes.particles} params={particlesData} />
          <Box className={classes.page} name="home">
            <Waypoint
              onEnter={() => this.handleSetActive('home')}
              topOffset={waypointOffset}
              bottomOffset={waypointOffset}
            >
              <Box>
                <Parallax speed={-3}>
                  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500}>
                    {(props) => (
                      <Avatar
                        style={props}
                        classes={{
                          root: classes.avatar,
                          colorDefault: classes.avatarColor,
                        }}
                      >
                        <picture>
                          <source type="image/webp" srcSet="images/DSC_0035_resized_512.webp" />
                          <source type="image/jpeg" srcSet="images/DSC_0035_resized_512.jpg" />
                          <img
                            alt="Portrait"
                            className={classes.avatarImg}
                            src="images/DSC_0035_resized_512.jpg"
                          />
                        </picture>
                      </Avatar>
                    )}
                  </Spring>
                </Parallax>
                <Parallax speed={3}>
                  <Box display="flex" flexWrap="wrap" justifyContent="center">
                    <Trail
                      items={['Jesper ', 'Hansson ', 'Falkenby']}
                      from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                      to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                      delay={1000}
                    >
                      {(item, i) => (props) => (
                        <Typography
                          key={i}
                          align="center"
                          color="textSecondary"
                          style={props}
                          variant="h1"
                        >
                          {item}
                        </Typography>
                      )}
                    </Trail>
                  </Box>
                  <Box display="flex" flexWrap="wrap" justifyContent="center">
                    <Trail
                      items={['Programmer ', '⭐ Gaming', ' Enthusiast ⭐', ' Geek']}
                      from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                      to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                      delay={1500}
                    >
                      {(item, i) => (props) => (
                        <Typography
                          key={i}
                          align="center"
                          color="textSecondary"
                          style={props}
                          variant="h4"
                        >
                          {item}
                        </Typography>
                      )}
                    </Trail>
                  </Box>
                </Parallax>
                <Box display="flex" flexWrap="wrap" justifyContent="center" marginTop="15%">
                  <FadeLoopScript delay={500}>
                    {(props) => (
                      <Typography variant="h4" style={props}>
                        <span role="img" aria-label="Pointing down">
                          👇
                        </span>
                      </Typography>
                    )}
                  </FadeLoopScript>
                </Box>
              </Box>
            </Waypoint>
          </Box>
          <Box className={classes.page} name={windowHeight < minPageHeight ? '' : 'projects'}>
            <Waypoint
              onEnter={() => this.handleSetActive('projects')}
              topOffset={waypointOffset}
              bottomOffset={waypointOffset}
            >
              <Box name={windowHeight >= minPageHeight ? '' : 'projects'}>
                <Projects data={projectsData} />
              </Box>
            </Waypoint>
          </Box>
          <Box className={classes.page} name={windowHeight < minPageHeight ? '' : 'resume'}>
            <Waypoint
              onEnter={() => this.handleSetActive('resume')}
              topOffset={waypointOffset}
              bottomOffset={waypointOffset}
            >
              <Box name={windowHeight >= minPageHeight ? '' : 'resume'}>
                <Resume />
              </Box>
            </Waypoint>
          </Box>
          <Box className={classes.page} name={windowHeight < minPageHeight ? '' : 'about'}>
            <Waypoint
              onEnter={() => this.handleSetActive('about')}
              topOffset={waypointOffset}
              bottomOffset={waypointOffset}
            >
              <Box name={windowHeight >= minPageHeight ? '' : 'about'}>
                <Box display="flex" justifyContent="center">
                  <Typography
                    style={{ marginRight: 8 }}
                    align="center"
                    color="textSecondary"
                    variant="h2"
                    gutterBottom
                  >
                    About me
                  </Typography>
                  <EmojiToggle emoji1="👋" emoji2="💁‍♂️" />
                </Box>
                {aboutText}
              </Box>
            </Waypoint>
          </Box>
          <Box className={classes.page} name={windowHeight < minPageHeight ? '' : 'publications'}>
            <Waypoint
              onEnter={() => this.handleSetActive('publications')}
              topOffset={waypointOffset}
              bottomOffset={waypointOffset}
            >
              <Box name={windowHeight >= minPageHeight ? '' : 'publications'}>
                <Publications data={publicationsData.data} />
              </Box>
            </Waypoint>
          </Box>
          <Box className={classes.page} name={windowHeight < minPageHeight ? '' : 'contact'}>
            <Waypoint
              onEnter={() => this.handleSetActive('contact')}
              topOffset={waypointOffset}
              bottomOffset={waypointOffset}
            >
              <Box name={windowHeight >= minPageHeight ? '' : 'contact'}>
                <Contact />
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    flexDirection="row"
                    style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 200 }}
                  >
                    <IconButton
                      href="https://www.facebook.com/jesper.hansson.f"
                      className={classes.white}
                      aria-label="Facebook"
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                      href="https://www.linkedin.com/in/jesperfalkenby/"
                      className={classes.white}
                      aria-label="Linkedin"
                    >
                      <Linkedin />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com/JesperFalkenby"
                      className={classes.white}
                      aria-label="Twitter"
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton
                      href="https://www.instagram.com/jesperfalkenby/"
                      className={classes.white}
                      aria-label="Instagram"
                    >
                      <Instagram />
                    </IconButton>
                    <IconButton
                      href="https://github.com/hyzor"
                      className={classes.white}
                      aria-label="GitHub"
                    >
                      <Github />
                    </IconButton>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      align="center"
                      gutterBottom
                    >
                      Copyright © Jesper Hansson Falkenby 2021
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Waypoint>
          </Box>
        </main>
      </>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
