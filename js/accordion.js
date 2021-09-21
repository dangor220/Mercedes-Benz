const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    if (!btnItem.classList.contains('feature__link_active')) {
      btns.forEach((btnItem, index) => {
        btnItem.classList.remove('feature__link_active');
      });

      btnItem.classList.add('feature__link_active');

      lists.forEach((listItem) => {
        listItem.classList.add('hidden');
      });
      lists[index].classList.remove('hidden');
    } else {
      btnItem.classList.remove('feature__link_active');
      lists[index].classList.add('hidden');
    }
  });
});
