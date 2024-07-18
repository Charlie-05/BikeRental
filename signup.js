const users = [];
let form = document.getElementById('signUpForm');
let row = document.getElementById('info');
document.addEventListener('DOMContentLoaded', () => {
    let tab2 = document.getElementById('verification');
    tab2.classList.add('hidden');

    let tabBtn = document.getElementById('nextTabBtn');
    tabBtn.addEventListener('click', verifyDetails);
    function verifyDetails(event) {
        event.preventDefault();
        tab2.classList.remove('hidden');
        document.getElementById('registerUser').classList.add('hidden');
        document.getElementById('nextTabBtn').classList.add('hidden');
        let userRole = document.getElementById('userRole').value;
        let field1 = document.createElement('div');
        let label1 = document.createElement('label');
        let input1 = document.createElement('input');
        input1.type = 'text';
        if (userRole === 'customer') {

            label1.innerHTML = "License No:";
        }
        else if (userRole == 'manager') {
            label1.innerHTML = "Work ID:";
        }

        label1.append(input1);
        field1.append(label1);
        row.append(label1);
    }

    form.addEventListener('submit', formActions);
    function formActions(event) {
        event.preventDefault();
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('userPassword').value;
        let NICNo = document.getElementById('userNIC').value;

        userObj = { userName: userName, password: password, NICNo: NICNo, role: userRole };
        users.push(userObj);
        console.log(users);
        let userDetails = JSON.stringify(users);
        localStorage.setItem('users', userDetails);
    }
})
