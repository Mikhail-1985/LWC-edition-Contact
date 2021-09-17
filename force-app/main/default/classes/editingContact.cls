public with sharing class editingContact {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(Id contactId) {
        List<Contact> cont = [SELECT LastName, FirstName, Id, MailingCity,
        MailingStreet, MailingState, MailingCountry, MailingPostalCode,
        MobilePhone, Phone, Email FROM Contact WHERE Id =:contactId LIMIT 1];
        return cont;
    }
}
