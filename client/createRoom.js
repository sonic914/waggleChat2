Template.createRoom.events ({
<<<<<<< HEAD

=======
    "click button[name=saveRoom]" (evt, tmpl) {
        Rooms.insert (
            {
                _id: tmpl.find("input[name=roomId]").value,
                name: tmpl.find("input[name=roomId]").value,
                owner: Meteor.userId(),
                userList: [Meteor.userId()] 
            }
        );
        tmpl.find("input[name=roomId]").value = "";
    }
>>>>>>> a9ef17fb6291934005c7bcdd0e0a3b6f6b2b6bee
});