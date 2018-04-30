Template.messageList.onCreated (function() {
    var instance = this;
    Session.set("limit", 30);
    instance.subcnt = 0;
    instance.autorun (function () {
        instance.messagesSub = instance.subscribe ("messages", 
        Session.get("currentRoom"),
        Session.get("limit"),
        function () {
            if(instance.subcnt == 0) {
                instance.subcnt = 1;
                $(".panel-body").scrollTop($(".chat").height());
            }
        });
        instance.subscribe ("room", Session.get("currentRoom"), function() {
            Rooms.find({_id: Session.get("currentRoom")}).observe ({
                changed: function(newDoc, oldDoc) {
                    $(".panel-body").scrollTop($(".chat").height())
                }
            });
        });
    });
});

Template.messageList.onDestroyed (function() {
    var instance = this;
    instance.messagesSub.stop();
});

Template.messageList.onRendered (function () {
    var staticSize = 90;

    $(".panel-body").height($(window).height() - staticSize);
    $(window).resize(function() {
        $(".panel-body").height($(window).height() - staticSize);
    });
    $(".panel-body").scroll (function () {
        if ($(".panel-body").scrollTop() == 0) {
            $(".panel-body").scrollTop(100);
            Session.set("limit", Session.get("limit")+10);
        }
    });
});

Template.messageList.helpers ({
    messages() {
        return Messages.find({}, {sort: {timestemp: 1}});
    }
});