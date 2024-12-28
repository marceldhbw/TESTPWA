import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button
} from 'framework7-react';
import MapComponent from '../components/MapComponent';
import LocationInputField from '../components/LocationInputField';
import LocatorComponent from '../components/LocatorComponent';
import { useState } from 'react';

const HomePage = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 61.505, longitude: -0.09 });

  const handleCoordinatesChange = (newCoordinates) => {
    setCoordinates(newCoordinates);
    }
    return (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Prüfungsaufgabe WebEng2</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Prüfungsaufgabe WebEng2</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    {/* Page content */}
    <Block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List strong inset dividersIos>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill popupOpen="#my-popup">Popup</Button>
      <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill panelOpen="left">Left Panel</Button>
      <Button fill panelOpen="right">Right Panel</Button>
    </Block>

    <List strong inset dividersIos>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
    <LocationInputField onCoordinatesChange={handleCoordinatesChange} />
    <LocatorComponent onCoordinatesChange={handleCoordinatesChange} />
    <MapComponent coordinates={coordinates} setCoordinates={setCoordinates} ></MapComponent>
  </Page>
  );
};
export default HomePage;