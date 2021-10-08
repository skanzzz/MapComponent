import { LightningElement, api } from 'lwc';

export default class MapComponent extends LightningElement {
    @api street;
    @api city;
    @api state;
    @api zipCode;
    @api country;
    mapMarkers;
    zoomLevel;
    connectedCallback(){
        this.mapMarkers = [{
            location: {
                City: this.city,
                Country: this.country,
                PostalCode: this.zipCode,
                State: this.state,
                Street: this.street
            },
        }];
        this.zoomLevel=15;
    }
}