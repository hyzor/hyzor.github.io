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
import { Trail } from 'react-spring/renderprops';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import TransitionReveal from 'components/TransitionReveal';

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
    width: 256,
    height: 256,
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
          </Toolbar>
        </AppBar>
        <main>
          <div style={{ height: 1750, position: 'relative', overflow: 'hidden' }}>
            <Parallax
              pages={6}
              scrolling={scroll}
              ref={this.parallax}
              style={{ overflow: 'hidden' }}
            >
              <ParallaxLayer
                offset={0}
                speed={0}
                style={{ background: 'url(images/bg1.jpg) center center no-repeat' }}
              />
              <ParallaxLayer offset={0.15} speed={0.3 * scrollModifier}>
                <Avatar src="images/ProfilePic_v2.png" className={classes.avatar} />
              </ParallaxLayer>
              <ParallaxLayer offset={0.25} speed={0.5 * scrollModifier}>
                <div className={classes.white} style={{ marginTop: 32, marginBottom: 128 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Trail
                      items={['Jes', 'per ', 'Han', 'sson ', 'Fal', 'ken', 'by']}
                      from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                      to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                      delay={500}
                    >
                      {item => props => (
                        <Typography align="center" color="inherit" style={props} variant="h1">
                          {item}
                        </Typography>
                      )}
                    </Trail>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Trail
                      items={['Sys', 'tems ', 'dev', 'elo', 'per']}
                      from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
                      to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                      delay={1250}
                    >
                      {item => props => (
                        <Typography align="center" color="inherit" style={props} variant="h4">
                          {item}
                        </Typography>
                      )}
                    </Trail>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={1}
                speed={0}
                style={{ background: 'url(images/bg2.jpg) center center no-repeat' }}
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
              <ParallaxLayer
                offset={2}
                speed={0}
                style={{ background: 'url(images/bg3.jpg) center center no-repeat' }}
              />
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
                speed={0}
                style={{ background: 'url(images/bg4.jpg) center center no-repeat' }}
              />
              <ParallaxLayer offset={3} speed={0.3 * scrollModifier}>
                <div className={classes.pageParent}>
                  <div className={classes.page}>
                    <TransitionReveal>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Trail
                          items={['Ab', 'out']}
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
              <ParallaxLayer
                offset={4}
                speed={0}
                style={{ background: 'url(images/bg5.jpg) center center no-repeat' }}
              />
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
                speed={0}
                style={{ background: 'url(images/bg1.jpg) center center no-repeat' }}
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
