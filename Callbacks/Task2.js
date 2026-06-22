// Callback Problem – Callback Hell

// 1. Calback Problem
function getUser(callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: 1, name: "Santosh" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        callback(["post1", "post2"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log("Comments fetched");
        callback(["nice", "good"]);
    }, 1000);
}

// Callback Hell
getUser((user) => {
    console.log("User:", user);

    getPosts(user.id, (posts) => {
        console.log("Posts:", posts);

        getComments(posts[0], (comments) => {
            console.log("Comments:", comments);
        });
    });
});