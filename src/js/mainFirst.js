const contentTextSecond = document.querySelector('.main__content--text--second');
const contentTextThird = document.querySelector('.main__content--text--third');
const contentTextOpenCloser = document.querySelector('.main__content--readMore');
const contentTextOpenCloserImg = document.querySelector(
  '.main__content--readMore--img'
)
const contentTextOpenCloserFont = document.querySelector(
  '.main__content--readMore--font'
)

contentTextOpenCloser.addEventListener('click', () => {
  contentTextSecond.classList.toggle('main__content--text--hidden')
  contentTextThird.classList.toggle('main__content--text--hidden')

  if (contentTextThird.classList.contains('main__content--text--hidden')) {
    contentTextOpenCloserFont.textContent = 'Читать дальше'
    contentTextOpenCloserImg.style.transform = 'rotate(0deg)'
  } else {
    contentTextOpenCloserFont.textContent = 'Скрыть'
    contentTextOpenCloserImg.style.transform = 'rotate(180deg)'
  }
})
