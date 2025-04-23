document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('databaseFile');
    const file = fileInput.files[0];
    
    if(file) {
        // اینجا می‌توانید منطق آپلود فایل را اضافه کنید
        alert(`فایل ${file.name} با موفقیت انتخاب شد!`);
        console.log('نوع فایل:', file.type);
        console.log('اندازه فایل:', file.size, 'bytes');
        
        // ذخیره اطلاعات فایل در localStorage (به عنوان مثال)
        localStorage.setItem('lastUploadedFile', file.name);
    } else {
        alert('لطفاً یک فایل انتخاب کنید!');
    }
});
