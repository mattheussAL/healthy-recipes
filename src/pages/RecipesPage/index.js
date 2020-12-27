import React from 'react';
import { RecipesData } from './Data';

import Recipes from '../../components/Recipes';
import Home from '../../components/Home';
import { homeObject } from '../HomePage/Data';

function RecipesPage() {
  return (
    <>
      <Home {...homeObject}/>
      <Recipes {...RecipesData}/>
    </>
  );
}

export default RecipesPage;