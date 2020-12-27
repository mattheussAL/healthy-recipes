import React from 'react';
import { homeObject } from './Data';

import Home from '../../components/Home';
import Recipes from '../../components/Recipes';
import Services from '../../components/Services';
import Join from '../../components/Join';

import { RecipesData } from '../RecipesPage/Data';
import { ServicesData } from '../ServicesPage/Data';
import { JoinData } from '../JoinPage/Data';

function HomePage() {
  return (
    <>
      <Home {...homeObject}/>
      <Recipes {...RecipesData}/>
      <Services {...ServicesData} />
      <Join {...JoinData} />
    </>
  );
}

export default HomePage;