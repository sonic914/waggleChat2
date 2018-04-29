Template.roomList.onCreated (function () {
    var self = this;
    self.roomListSub = self.subscribe("roomList");
});

Template.roomList.onDestroyed (function () {
    var self = this;
    self.roomListSub.stop();
});

Template.roomList.helpers ({
    list() {
        return Rooms.find();
    }
});

Template.roomList.events ({
    "click a[name=selectRoom]" () {
        Session.set("viewMode", "chatRoom");
        Session.set("currentRoom", this._id);
    }
});