import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/'

import "./reset.css";
import "../node_modules/normalize-css/normalize.css";
import "./assets/css/bootstrap.min.css";
import "./style.css";

platformBrowserDynamic().bootstrapModule(AppModule);
