import {LightningElement} from 'lwc';

export default class TrailerListDemo extends LightningElement {

    trailerList = [
        {Name: 'Trailer', Title: 'Demo', Number: 1, Time: null, Status: 'Done'},
        {Name: 'Trailer', Title: 'Demo', Number: 2, Time: null, Status: 'Done'},
        {Name: 'Trailer', Title: 'Demo', Number: 3, Time: null, Status: 'Done'},
        {Name: 'Trailer', Title: 'Demo', Number: 4, Time: '0:30', Status: 'InTransit'},
        {Name: 'Trailer', Title: 'Demo', Number: 5, Time: '1:00', Status: 'InTransit'},
    ]


}
