Template.messageInput.events ({
    "click button[name=sendMessage]" (evt, tmpl) {
        tmpl.sendMessage();
    },

    "keyup input[name=messageText]" (evt, tmpl) {
        if (evt.keyCode == 13) tmpl.sendMessage();
    }
});

Template.messageInput.onCreated(function() {
    var instance = this;
    instance.sendMessage = () => {
        var txtBox = instance.find("input[name=messageText]");
        var message = txtBox.value;
        if(!message) {
            return;
        }
        var messageObj = {
            timestemp: (new Date()).getTime(),
            msg: message,
            roomId: Session.get("currentRoom"),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            email: Meteor.user().emails[0].address
        };
        //Messages.insert(messageObj);
        Meteor.call("insertMessage", messageObj);
        console.log(messageObj);

        txtBox.value = "";
        txtBox.focus();
    };
});