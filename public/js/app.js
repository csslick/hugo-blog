const toggle = document.querySelector('.navbar .toggle'); // toggle 버튼
let isDark = true; // 테마를 초기화

// 테마를 업데이트하는 함수
function updateTheme() {
  if(isDark) {
    document.body.classList.add('dark');
    toggle.classList.remove('bx-sun');
    toggle.classList.add('bx-moon');
  } else {
    document.body.classList.remove('dark');
    toggle.classList.remove('bx-moon');
    toggle.classList.add('bx-sun');
  }
}

// 로컬 스토리지에 저장된 테마 값이 있으면 그 값으로 설정
if(localStorage.getItem('theme') === 'dark') {
  isDark = true;
  updateTheme();
} else if(localStorage.getItem('theme') === 'sun') {
  isDark = false;
  updateTheme();
}

// toggle 버튼을 클릭하면 테마를 업데이트
toggle.addEventListener('click', function() {
  isDark =!isDark;
  if(isDark) {
    updateTheme();
    // 로컬 스토리지에 저장
    localStorage.setItem('theme','dark');
  } else {
    updateTheme();
    // 로컬 스토리지에 저장
    localStorage.setItem('theme','sun');
  }
});