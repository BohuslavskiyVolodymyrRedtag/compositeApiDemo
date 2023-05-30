import {LightningElement, api} from 'lwc';

export default class TrailerItemDemo extends LightningElement {
    @api trailerItem;

    get customCss() {
        let customCss = 'color: white; background: '
        if (this.trailerItem.Status === 'Done') {
            return customCss + '#23633b';
        }
        return customCss + '#d32765';
    }
}
