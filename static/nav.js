// 获取列表
const navList = document.querySelector('.nav_list');

// 打开/关闭
function showMenu() {
  const open = navList.classList.toggle('open');
  document.querySelector('.mobile-toggle')?.setAttribute('aria-expanded', String(open));
}
function hideMenu() {
  navList.classList.remove('open');
  document.querySelector('.mobile-toggle')?.setAttribute('aria-expanded', 'false');
}
navList.querySelectorAll('a').forEach(link => link.addEventListener('click', hideMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') hideMenu();
});

// 点击菜单外自动关闭（可选）
// document.addEventListener('click', e => {
//   if (!e.target.closest('.navbar')) {
//     hideMenu();
//   }
// });

// 滚动时高亮
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top    = sec.offsetTop - 70;
    const bottom = top + sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = document.querySelector(`.nav_list a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < bottom);
    }
  });
});