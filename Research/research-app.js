//Importing components
import { copyright } from './Components/copyright.js';
import { privacy } from './Components/privacy.js';
import { seo } from './Components/search-engine-optimization.js';
import { hosting } from './Components/web-publishing.js';
import { maintenance } from './Components/web-performance.js';
import { security } from './Components/web-security.js';

//Rendering the copyright component

//Copyright
document.getElementById('copyright-component').innerHTML = copyright.renderUI();
copyright.addEvent();

//Privacy
document.getElementById('privacy-component').innerHTML = privacy.renderUI();
privacy.addEvent();

//Search Engine Optimisation
document.getElementById('seo-component').innerHTML = seo.renderUI();
seo.addEvent();

//Hosting
document.getElementById('hosting-component').innerHTML = hosting.renderUI();
hosting.addEvent();

//Maintenance
document.getElementById('maintenance-component').innerHTML = maintenance.renderUI();
maintenance.addEvent();

//Security
document.getElementById('security-component').innerHTML = security.renderUI();
security.addEvent();