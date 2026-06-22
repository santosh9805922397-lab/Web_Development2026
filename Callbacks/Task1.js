// Understanding Callbacks


function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Santosh" });
    }, 2000);
}

// Calling the function
getUser(1, (user) => {
    console.log("User Name:", user.name);
});