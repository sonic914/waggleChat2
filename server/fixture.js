Meteor.startup (() => {
    /* Rooms 컬렉션을 이용하여 방이 없을 경우 */
    if(!Rooms.findOne({_id: "MeteorSchool"})) {
        /* 사용자 등록 */
<<<<<<< HEAD
        var usr1 = Accounts.createUser ( {
=======
        var usr1 = Accounts.createUser ({
>>>>>>> a9ef17fb6291934005c7bcdd0e0a3b6f6b2b6bee
            username: "와글이",
            email: "waggle@fake.com",
            password: "12345678"
        });
<<<<<<< HEAD

        var usr2 = Accounts.createUser ({
            username: "수다쟁이",
            email: "sudajangi@fake.com",
            password: "12345678"
        });

=======

        var usr2 = Accounts.createUser ({
            username: "수다쟁이",
            email: "sudajangi@fake.com",
            password: "12345678"
        });
>>>>>>> a9ef17fb6291934005c7bcdd0e0a3b6f6b2b6bee
        /* 채팅방 등록 */
        Rooms.insert({
            _id: "MeteorSchool",
            name: "MeteorSchool",
<<<<<<< HEAD
            owner: "usr1",
            userList: [usr1, usr2],
            createAt: (new Date()).getTime()
        });
=======
            owner: usr1,
            userList: [usr1, usr2],
            createAt: (new Date()).getTime()
        })
>>>>>>> a9ef17fb6291934005c7bcdd0e0a3b6f6b2b6bee
    }
});