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