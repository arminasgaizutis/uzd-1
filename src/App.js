import React from 'react';
import Block from './components/Block/Block';
import Button from './components/Button/Button';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Hero title='Success hero' subtitle='Success subtitle' />
      <Hero color='danger' title='A' subtitle='B' />

      <Block color='primary'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
        voluptatibus.
      </Block>
      <Block color='success'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
        quibusdam!
      </Block>
      <Block color='danger'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        obcaecati?
      </Block>

      <Button color='primary'>1</Button>
      <Button color='success'>2</Button>
      <Button color='danger'>3</Button>
    </>
  );
}

export default App;
