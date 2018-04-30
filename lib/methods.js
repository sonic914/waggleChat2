Meteor.methods ({
    insertMessage (messageObject) {
        if (Meteor.isClient) {
            messageObject["isClient"] = true;
        }
        Messages.insert(messageObject);
    }
});