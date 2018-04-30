Template.messageList.onCreated (function() {
    var instance = this;
    Session.set("limit", 30);
    instance.autorun (function () {
        instance.messagesSub = instance.subscribe ("messages", 
        Session.get("currentRoom"),
        session.get("limit")
        );
    });
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