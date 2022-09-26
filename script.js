const userName = 'PedroSanto';
const passWord = 'pedrosanto';
const button = document.getElementById('button');

function loggin() {
    const uName = document.getElementById('username');
    const pWord = document.getElementById('password');
    
    if (uName === userName && pWord === passWord) {
        document.getElementById('loggin_status').innerHTML = 'Loggin OK!';
    } else if (uName === userName && pWord != passWord) {
        document.getElementById('loggin_status').innerHTML = 'Somethin went wrong! Try Again';
    } else if (uName != userName && pWord === passWord) {
        document.getElementById('loggin_status').innerHTML = 'Somethin went wrong! Try Again';
    } else if (uName != userName && pWord != passWord) {
        document.getElementById('loggin_status').innerHTML = 'Somethin went wrong! Try Again';
    } else {
        document.getElementById('loggin_status').innerHTML = 'Somethin went wrong! Try Again';
    }
}


button.addEventListener('click', loggin);