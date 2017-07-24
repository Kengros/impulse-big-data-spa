import React from 'react';
import { Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Dashboard from './routes/Dashboard';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

export default (
  <Route component={App}>
    <Route path='/' component={Dashboard} />
  </Route>
);
