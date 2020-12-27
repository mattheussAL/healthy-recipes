import React from 'react';

import Home from '../../components/Home';
import Recipes from '../../components/Recipes';
import Services from '../../components/Services';

import { homeObject } from '../HomePage/Data';
import { RecipesData } from '../RecipesPage/Data';
import { ServicesData } from './Data';

function ServicesPage() {
  return (
    <>
      <Home {...homeObject}/>
      <Recipes {...RecipesData}/>
      <Services {...ServicesData}/>
    </>
  );
}

export default ServicesPage;