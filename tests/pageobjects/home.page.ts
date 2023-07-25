import { Ionic$, IonicButton, IonicSelect } from '../helpers';

import Page from './page';

class Home extends Page {
  get navigateToLoginPageButton() {
    return new IonicButton('ion-button');
    // return Ionic$.$('ion-button');
  }
}

export default new Home();
