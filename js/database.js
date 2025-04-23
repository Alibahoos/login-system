// ذخیره اطلاعات در فرم add-data
document.getElementById('dataForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        timestamp: new Date().toISOString()
    };
    
    // ذخیره در localStorage (می‌توانید با IndexedDB یا WebSQL جایگزین کنید)
    let savedData = JSON.parse(localStorage.getItem('userData') || '[]');
    savedData.push(data);
    localStorage.setItem('userData', JSON.stringify(savedData));
    
    alert('اطلاعات با موفقیت ذخیره شد!');
    document.getElementById('dataForm').reset();
});

// نمایش اطلاعات در صفحه send-data
if(document.getElementById('dataPreview')) {
    const savedData = JSON.parse(localStorage.getItem('userData') || '[]');
    const preview = document.getElementById('dataPreview');
    
    if(savedData.length > 0) {
        preview.innerHTML = '<h3>اطلاعات ذخیره شده:</h3>';
        savedData.forEach(item => {
            preview.innerHTML += `
                <div class="data-item">
                    <p>نام: ${item.name}</p>
                    <p>سن: ${item.age}</p>
                    <p>ایمیل: ${item.email}</p>
                    <hr>
                </div>
            `;
        });
    } else {
        preview.innerHTML = '<p>هیچ اطلاعاتی برای نمایش وجود ندارد.</p>';
    }
    
    document.getElementById('sendBtn').addEventListener('click', function() {
        // اینجا می‌توانید منطق ارسال به سرور را اضافه کنید
        alert('اطلاعات با موفقیت ارسال شد!');
    });
}
