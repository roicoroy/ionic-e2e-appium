import { IonicComponent } from './component';

export class IonTitle extends IonicComponent {
  constructor(selector: string) {
    super(selector);
  }

  getText() {
    return $(this.selector).getText();
  }
}
