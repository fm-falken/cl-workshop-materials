const data = {
    users: [
        { id: 1, name: "Alice", role: "admin" },
        { id: 2, name: "Bob", role: "user" },
        { id: 3, name: "Charlie", role: "guest" }
    ],
    settings: {
        theme: "dark",
        notifications: true,
    }
};

function fetchUserById(id) {
    const user = data.users.find(u => u.id === id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

function updateUserRole(id, newRole) {
    const user = fetchUserById(id);
    if (["admin", "user", "guest"].includes(newRole)) {
        user.role = newRole;
    } else {
        throw new Error("Invalid role");
    }
}

function displayUserInfo(id) {
    const user = fetchUserById(id);
    console.log(`User ${user.name} has role ${user.role}`;
}

// This function contains the syntax error
function complexFunctionWithSyntaxError(data, operation, value) {
    switch (operation) {
        case "fetch":
            return fetchUserById(data);
        case "update":
            updateUserRole(data, value);
            break;
        case "display":
            displayUserInfo(data);
            break;
        default:
            console.log("Unknown operation");
    }
    console.log("Completed operation:", operation;
}

// Usage
complexFunctionWithSyntaxError(1, "display");
