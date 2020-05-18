import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import projectsData from 'data/projects.json';
import aboutData from 'data/about.json';
import Projects from 'components/Projects';
import Resume from 'components/Resume';
import { hot } from 'react-hot-loader';
import Publications from 'components/Publications';
import publicationsData from 'data/publications.json';
import Contact from 'components/Contact';
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
import { Link } from 'react-scroll';

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
    zIndex: 0,
    position: 'absolute',
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

const HomePage = ({ classes }) => {
  return (
    <>
      <CssBaseline />
      <AppBar color="secondary">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Link activeClass="active" to="home" spy smooth offset={0} duration={500}>
              <Button color="inherit">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Button>
            </Link>
          </div>
          <Box display="flex" flexWrap="wrap">
            <Link activeClass="active" to="projects" spy smooth offset={125} duration={500}>
              <Button style={{ display: 'flex' }} variant="text" color="inherit">
                Projects
              </Button>
            </Link>
            <Link activeClass="active" to="resume" spy smooth offset={-35} duration={500}>
              <Button style={{ display: 'flex' }} variant="text" color="inherit">
                Résumé
              </Button>
            </Link>
            <Link activeClass="active" to="about" spy smooth offset={-25} duration={500}>
              <Button style={{ display: 'flex' }} variant="text" color="inherit">
                About
              </Button>
            </Link>
            <Link activeClass="active" to="publications" spy smooth offset={50} duration={500}>
              <Button style={{ display: 'flex' }} variant="text" color="inherit">
                Publications
              </Button>
            </Link>
            <Link activeClass="active" to="contact" spy smooth offset={50} duration={500}>
              <Button style={{ display: 'flex' }} variant="text" color="inherit">
                Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Particles className={classes.particles} params={particlesData} />
        <Box style={{ height: 1280 }} name="home">
          <Parallax y={[50, 100]}>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={200}>
              {(props) => (
                <Avatar
                  style={props}
                  src="images/DSC_0035_resized_512.png"
                  className={classes.avatar}
                />
              )}
            </Spring>
          </Parallax>
          <Parallax y={[250, 120]}>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              <Trail
                items={['Jesper ', 'Hansson ', 'Falkenby']}
                from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                delay={500}
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
                delay={800}
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
        <Box style={{ height: 1500 }} name="projects">
          <Parallax y={[50, 0]}>
            <div className={classes.page}>
              <Projects data={projectsData} />
            </div>
          </Parallax>
        </Box>
        <Box style={{ height: 1500 }} name="resume">
          <Parallax y={[50, 0]}>
            <Resume />
          </Parallax>
        </Box>
        <Box style={{ height: 1024 }} name="about">
          <Parallax y={[50, 0]}>
            <div className={classes.page}>
              <Box display="flex" justifyContent="center">
                <Trail
                  items={['About', ' me ', '👋']}
                  from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  delay={0}
                >
                  {(item, i) => (props) => (
                    <Typography
                      key={i}
                      style={props}
                      align="center"
                      color="textSecondary"
                      variant="h2"
                      gutterBottom
                    >
                      {item}
                    </Typography>
                  )}
                </Trail>
              </Box>
              <Trail
                items={aboutData.data.about}
                from={{ opacity: 0, transform: 'translate3d(0,120px,0)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                delay={0}
              >
                {(item, i) => (props) => (
                  <Typography
                    key={i}
                    color="textSecondary"
                    style={{ ...props, marginTop: 10 }}
                    variant="subtitle1"
                  >
                    {item}
                  </Typography>
                )}
              </Trail>
            </div>
          </Parallax>
        </Box>
        <Box style={{ height: 1500 }} name="publications">
          <Parallax y={[50, 0]}>
            <Publications data={publicationsData.data} />
          </Parallax>
        </Box>
        <Box style={{ height: 1280 }} name="contact">
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
                <Trail
                  items={['Copyright ', '© ', 'Jesper ', 'Hansson ', 'Falkenby ', '2020']}
                  from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  delay={1000}
                >
                  {(item, i) => (props) => (
                    <Typography
                      key={i}
                      style={props}
                      color="textSecondary"
                      variant="subtitle1"
                      align="center"
                      gutterBottom
                    >
                      {item}
                    </Typography>
                  )}
                </Trail>
              </Box>
            </Box>
          </Parallax>
        </Box>
      </main>
    </>
  );
};

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
