// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  SRS,
} from './';

export default {
  path: 'srs',
  name: 'Srs',
  childRoutes: [
    { path: 'default-page', name: 'SRS', component: SRS, isIndex: true },
  ],
};
