Template.messageList.onCreated (function() {
    var instance = this;
    instance.messagesSub = instance.subscribe ("messages", Session.get("currentRoom", 30));
});

Template.messageList.onDestroyed (function() {
    var instance = this;
    instance.messagesSub.stop();
});

Template.messageList.helpers ({
    messages() {
        return Messages.find({}, {sort: {timestemp: 1}});
    }
});