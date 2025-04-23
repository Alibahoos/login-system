// بررسی لاگین در صفحات
if(location.pathname !== '/index.html' && !localStorage.getItem('isLoggedIn')) {
    window.location.href = 'index.html';
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // اطلاعات ورود پیش‌فرض
    if(username === 'admin' && password === 'admin') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('نام کاربری یا رمز عبور اشتباه است!');
    }
});

// بررسی سن در صفحه age-verification
document.getElementById('ageForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const age = parseInt(document.getElementById('userAge').value);
    
    if(age >= 18) {
        window.location.href = 'send-data.html';
    } else {
        alert('شما مجاز به استفاده از این بخش نیستید!');
    }
});
