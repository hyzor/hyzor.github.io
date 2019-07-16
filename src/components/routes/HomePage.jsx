import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
import { Facebook, Linkedin, Twitter, Instagram, GithubBox } from 'mdi-material-ui';
import IconButton from '@material-ui/core/IconButton';
import { Trail, Transition } from 'react-spring/renderprops';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import TransitionReveal from 'components/TransitionReveal';
import Particles from 'react-particles-js';
import particlesData from 'data/particles.json';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
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
  centerFlex: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  pageParent: {
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
  page: {
    position: 'relative',
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
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
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
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

class HomePage extends React.Component {
  state = {
    scroll: true,
    scrollModifier: 1,
  };

  constructor(props) {
    super(props);

    this.parallax = React.createRef();

    this.handleModalOpen = this.handleModalOpen.bind(this);
  }

  handleModalOpen = open => {
    if (open) {
      this.setState({ scrollModifier: 0 });
    } else {
      this.setState({ scrollModifier: 1 });
    }
  };

  parallaxScroll = to => () => {
    this.parallax.current.scrollTo(to);
  };

  render() {
    const { classes } = this.props;
    const { scroll, scrollModifier } = this.state;
    const pageHeight = 1750;
    const numPages = 6;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar color="secondary">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Button onClick={this.parallaxScroll(0)} color="inherit">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Button>
            </div>
            <Box display="flex" flexWrap="wrap">
              <Button
                onClick={this.parallaxScroll(1.075)}
                style={{ display: 'flex' }}
                variant="text"
                color="inherit"
              >
                Projects
              </Button>
              <Button
                onClick={this.parallaxScroll(2.075)}
                style={{ display: 'flex' }}
                variant="text"
                color="inherit"
              >
                Résumé
              </Button>
              <Button
                onClick={this.parallaxScroll(3.2)}
                style={{ display: 'flex' }}
                variant="text"
                color="inherit"
              >
                About
              </Button>
              <Button
                onClick={this.parallaxScroll(4.125)}
                style={{ display: 'flex' }}
                variant="text"
                color="inherit"
              >
                Publications
              </Button>
              <Button
                onClick={this.parallaxScroll(5)}
                style={{ display: 'flex' }}
                variant="text"
                color="inherit"
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          <div
            style={{
              height: pageHeight,
              position: 'relative',
              overflow: 'hidden',
              background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
            }}
          >
            <Particles className={classes.particles} params={particlesData} />
            <Parallax
              pages={numPages}
              scrolling={scroll}
              ref={this.parallax}
              style={{ overflow: 'hidden' }}
            >
              <ParallaxLayer offset={0.2} speed={0.3 * scrollModifier}>
                <Transition
                  items={
                    <Avatar src="images/DSC_0035_resized_512.png" className={classes.avatar} />
                  }
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                  delay={500}
                >
                  {item => props => <div style={props}>{item}</div>}
                </Transition>
              </ParallaxLayer>
              <ParallaxLayer offset={0.325} speed={0.55 * scrollModifier}>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                  <Trail
                    items={['Jes', 'per ', 'Han', 'sson ', 'Fal', 'ken', 'by']}
                    from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    delay={500}
                  >
                    {item => props => (
                      <Typography align="center" color="textSecondary" style={props} variant="h1">
                        {item}
                      </Typography>
                    )}
                  </Trail>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                  <Trail
                    items={[
                      'Pro',
                      'gra',
                      'mmer ',
                      '⭐ Gam',
                      'ing',
                      ' Enth',
                      'usi',
                      'ast ⭐',
                      ' Ge',
                      'ek',
                    ]}
                    from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    delay={750}
                  >
                    {item => props => (
                      <Typography align="center" color="textSecondary" style={props} variant="h4">
                        {item}
                      </Typography>
                    )}
                  </Trail>
                </Box>
              </ParallaxLayer>
              <ParallaxLayer
                offset={1}
                speed={0.1}
                style={{
                  backgroundImage: 'url(images/trianglify.svg)',
                  backgroundSize: 'cover',
                }}
              />
              <ParallaxLayer offset={1} speed={0.3 * scrollModifier}>
                <div className={classes.pageParent}>
                  <div className={classes.page}>
                    <TransitionReveal>
                      <Projects data={projectsData} handleModalOpen={this.handleModalOpen} />
                    </TransitionReveal>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={2} speed={0.3 * scrollModifier}>
                <div className={classes.pageParent}>
                  <div className={classes.page}>
                    <TransitionReveal>
                      <Resume />
                    </TransitionReveal>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={3}
                speed={0.1}
                style={{
                  backgroundImage: 'url(images/trianglify.svg)',
                  backgroundSize: 'cover',
                }}
              />
              <ParallaxLayer offset={3} speed={0.3 * scrollModifier}>
                <div className={classes.pageParent}>
                  <div className={classes.page}>
                    <TransitionReveal>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Trail
                          items={['Ab', 'out me 👋']}
                          from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                          delay={500}
                        >
                          {item => props => (
                            <Typography
                              className={classes.white}
                              style={props}
                              align="center"
                              variant="h2"
                              gutterBottom
                            >
                              {item}
                            </Typography>
                          )}
                        </Trail>
                      </div>
                      <Trail
                        items={aboutData.data.about}
                        from={{ opacity: 0, transform: 'translate3d(0,120px,0)' }}
                        to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                        delay={0}
                      >
                        {item => props => (
                          <Typography
                            className={classes.white}
                            style={{ ...props, marginTop: 10 }}
                            variant="subtitle1"
                          >
                            {item}
                          </Typography>
                        )}
                      </Trail>
                    </TransitionReveal>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={4} speed={0.3 * scrollModifier}>
                <div className={classes.pageParent}>
                  <div className={classes.page}>
                    <TransitionReveal>
                      <Publications data={publicationsData.data} />
                    </TransitionReveal>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={5}
                speed={0.1}
                style={{
                  backgroundImage: 'url(images/trianglify.svg)',
                  backgroundSize: 'cover',
                }}
              />
              <ParallaxLayer offset={5.1} speed={0.3 * scrollModifier}>
                <div className={classes.page}>
                  <TransitionReveal>
                    <Contact />
                  </TransitionReveal>
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={5.4} speed={0.4 * scrollModifier}>
                <div className={classes.columnFlex}>
                  <div
                    className={classes.rowFlex}
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
                      href="https://www.linkedin.com/in/jesperhf92/"
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
                      <GithubBox />
                    </IconButton>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Trail
                      items={['Copyright ', '© ', 'Jesper ', 'Hansson ', 'Falkenby ', '2019']}
                      from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                      to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                      delay={1000}
                    >
                      {item => props => (
                        <Typography
                          style={props}
                          className={classes.white}
                          variant="subtitle1"
                          align="center"
                          gutterBottom
                        >
                          {item}
                        </Typography>
                      )}
                    </Trail>
                  </div>
                </div>
              </ParallaxLayer>
            </Parallax>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
