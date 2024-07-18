const users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users);

let form = document.getElementById('loginForm');
form.addEventListener('submit', formActions);

function formActions(event) {
    event.preventDefault();
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('userPassword').value;
    let userFound = checkUser(userName, password);
    console.log(userFound);
}

function checkUser(userName, password) {
    // Use find to check if there's a user with the given userName and password
    let foundUser = users.find(element => {
        return (element['userName'] === userName && element['password'] === password);
    });

    // Return true if found, false if not found
    return foundUser !== undefined;
}
