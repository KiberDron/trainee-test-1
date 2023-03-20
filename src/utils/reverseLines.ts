export const reverseLines = (id) => {
  const el = document.getElementById(id)
  const text = el.innerText;

  // Записываем высоту одной строки, обнуляем содержимое элемента
  el.innerText = 'a';
  const singleLineHeight = el.offsetHeight;
  el.innerText = ''

  // Создаем массив с обратным порядком по словам (т.к применяем на уже перевернутую строку, ...
  // то получим изначальный порядок слов, при этом каждое отдельное слово записано задом наперед)
  const arr = text.split(' ').reverse()

  const lines = []
  let cur = ''
  let prev = ''

  for (let i = 0; i < arr.length; i++) {
    cur += arr[i]
    el.innerText = cur

    if (el.offsetHeight > singleLineHeight) {
      // Добавляем в массив строк накопившуюся на данный момент в 'prev' строку
      // Снова переворачиваем порядок по словам для того чтобы строка отображалась в соответствии ...
      // с примененными стилями ("отзеркалено" по горизонтали)
      lines.push(prev.split(' ').reverse().join(' ') + '\n')
      cur = arr[i] + ' '
      prev = arr[i] + ' '
      el.innerText = ''
    } else {
      prev += arr[i] + ' '
      cur += ' '
    }

    // Добавляем последнюю оставшуюся строку
    if (i === arr.length - 1) {
      lines.push(prev.split(' ').reverse().join(' '))
    }
  }

  el.innerText = lines.join(' ')
}
