import React from 'react';
import Guides from '../components/Guides';

const Home = () => (
  <Guides includeVariants>
    {(previews) => (
        previews.map(preview => preview({
          width: 300,
          height: 300,
        }))
    )}
  </Guides>
)

export default Home;