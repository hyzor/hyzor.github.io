import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import 'react-pdf/dist/Page/AnnotationLayer.css';
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
import { Parallax } from 'react-scroll-parallax';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, scrollSpy } from 'react-scroll';
import loadable from '@loadable/component';

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
    };
  }

  componentDidMount() {
    scrollSpy.update();
  }

  handleSetActive = (to) => {
    this.setState({
      active: to,
    });
  };

  render() {
    const { classes } = this.props;
    const { active } = this.state;

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
        <AppBar color="secondary">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Link
                activeClass="active"
                to="home"
                spy
                smooth
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <Button variant="text" color="primary">
                  <Typography variant="h6" color="textSecondary">
                    Home
                  </Typography>
                </Button>
              </Link>
            </div>
            <Box display="flex" flexWrap="wrap">
              <Link
                activeClass="active"
                to="projects"
                spy
                smooth
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
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
              <Link
                activeClass="active"
                to="resume"
                spy
                smooth
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
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
              <Link
                activeClass="active"
                to="about"
                spy
                smooth
                offset={-60}
                duration={500}
                onSetActive={this.handleSetActive}
              >
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
              <Link
                activeClass="active"
                to="publications"
                spy
                smooth
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
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
              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
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
          <Box style={{ height: 1280 }} name="home">
            <Parallax y={[50, 100]}>
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
            <Parallax y={[250, 120]}>
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
            <Parallax y={[1400, 1300]}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
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
            </Parallax>
          </Box>
          <Box style={{ height: 768, marginBottom: 768 }} name="projects">
            <Parallax y={[50, 0]}>
              <div className={classes.page}>
                <Projects data={projectsData} />
              </div>
            </Parallax>
          </Box>
          <Box style={{ height: 768, marginBottom: 768 }} name="resume">
            <Parallax y={[50, 0]}>
              <Resume />
            </Parallax>
          </Box>
          <Box style={{ height: 512, marginBottom: 512 }} name="about">
            <Parallax y={[50, 0]}>
              <div className={classes.page}>
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
              </div>
            </Parallax>
          </Box>
          <Box style={{ height: 512, marginBottom: 512 }} name="publications">
            <Parallax y={[50, 0]}>
              <Publications data={publicationsData.data} />
            </Parallax>
          </Box>
          <Box style={{ height: 1700, paddingTop: 384 }} name="contact">
            <Parallax y={[50, 0]}>
              <Contact />
            </Parallax>
            <Parallax y={[225, 175]}>
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="row"
                  style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 100 }}
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
                  <Typography color="textSecondary" variant="subtitle1" align="center" gutterBottom>
                    Copyright © Jesper Hansson Falkenby 2020
                  </Typography>
                </Box>
              </Box>
            </Parallax>
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
