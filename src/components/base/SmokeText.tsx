import * as React from "react";
import { updateStyle } from '@/utils/slotSheet';
import { reverseLines } from '@/utils/reverseLines';

export default ({children, ...props}) => {
	const {
		transform,
		locator,
		index
	} = props

	// Переворачиваем текст и заменяем некоторые буквы, которые пишутся одинаково на ru и eng
	const reversedArr = children.split('').reverse()
	for (let i = 0; i < reversedArr.length; i++) {
		switch(reversedArr[i]) {
			case 'а': {reversedArr[i] = 'a'; break}
			case 'с': {reversedArr[i] = 'c'; break}
			case 'о': {reversedArr[i] = 'o'; break}
			case 'е': {reversedArr[i] = 'e'; break}
			case 'р': {reversedArr[i] = 'p'; break}
			case 'a': {reversedArr[i] = 'а'; break}
			case 'c': {reversedArr[i] = 'с'; break}
			case 'o': {reversedArr[i] = 'о'; break}
			case 'e': {reversedArr[i] = 'е'; break}
			case 'p': {reversedArr[i] = 'р'; break}
		}
	}
	const reversedStr = reversedArr.join('')

	// Применяем стили, при которых текст будет отображаться справа налево ("отзеркаливаться" построчно) ...
	// но порядок строк остается по-прежнему сверху вниз, поэтому применение данных стилей на перевернутый ...
	// текст отобразит строки в обратном порядке, это необходимо изменить
	const style = {
		[`.${transform('hidden')}`]: {
			'display': 'inline',
			'direction': 'rtl',
			'unicode-bidi': 'bidi-override',
		},
	}

	updateStyle(null, locator, style)

	// После рендеринга компонента вызываем функцию, которая меняет порядок строк в тексте на противоположный
	React.useEffect(() => {
		reverseLines(index);
	})

	return (
		<div className={`${transform('hidden')}`} id={index}>{reversedStr}</div>
	)
};
