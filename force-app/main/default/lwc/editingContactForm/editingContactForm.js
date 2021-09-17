import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import getContact from "@salesforce/apex/editingContact.getContact";
// import id from '@salesforce/schema/Contact.Id';
import First_Name from '@salesforce/schema/Contact.FirstName';
import Last_Name from '@salesforce/schema/Contact.LastName';
import Mailing_City from '@salesforce/schema/Contact.MailingCity';
import Mailing_Street from '@salesforce/schema/Contact.MailingStreet';
import Mailing_State from '@salesforce/schema/Contact.MailingState';
import MailingCountry from '@salesforce/schema/Contact.MailingCountry';
import MailingPostalCode from '@salesforce/schema/Contact.MailingPostalCode';
import MobilePhone from '@salesforce/schema/Contact.MobilePhone';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';
import MAILING_ADRESS_FIELD from '@salesforce/schema/Contact.MailingAddress';
export default class EditingContactForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = {
       firstname: First_Name,
        lastname: Last_Name,
        adress: MAILING_ADRESS_FIELD

    }

    // nameField = First_Name;
    // lastName = Last_Name;
    mobilePhone = MobilePhone;
    buisnessPhone = Phone;
    email = Email;

    mailingCity = Mailing_City;
    mailingStreet = Mailing_Street;
    mailingState = Mailing_State;
    mailingCountry = MailingCountry;
    mailingPostalCode = MailingPostalCode;
   
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {                
                    field.reset();               
            });
        }
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Всплывающее супер сообщение!',
            message: 'Record была saved!!!',
            actionName: 'view',
        });
        this.dispatchEvent(event);
    }
    
}