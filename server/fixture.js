Meteor.startup (() => {
    /* Rooms 컬렉션을 이용하여 방이 없을 경우 */
    if(!Rooms.findOne({_id: "MeteorSchool"})) {
        /* 사용자 등록 */
        /* 채팅방 등록 */

    }
})