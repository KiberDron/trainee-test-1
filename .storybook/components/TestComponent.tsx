import * as React from "react";
import SmokeText from '../../src/components/base/SmokeText'
import { nanoid } from 'nanoid'
import { locator, transform} from './RenderComponent'

export const TEXT_CASES = [
  "Любви, надежды, тихой славы Недолго нежил нас обман, Исчезли юные забавы, Как сон, как утренний туман; Но в нас горит еще желанье, Под гнетом власти роковой Нетерпеливою душой Отчизны внемлем призыванье. Мы ждем с томленьем упованья Минуты вольности святой, Как ждет любовник молодой Минуты верного свиданья. Пока свободою горим, Пока сердца для чести живы, Мой друг, отчизне посвятим Души прекрасные порывы! Товарищ, верь: взойдет она, Звезда пленительного счастья, Россия вспрянет ото сна, И на обломках самовластья Напишут наши имена!",
  "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And by opposing end them. To die—to sleep, No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to: 'tis a consummation Devoutly to be wish'd. To die, to sleep; To sleep, perchance to dream—ay, there's the rub: For in that sleep of death what dreams may come, When we have shuffled off this mortal coil, Must give us pause—there's the respect That makes calamity of so long life. For who would bear the whips and scorns of time, Th'oppressor's wrong, the proud man's contumely, The pangs of dispriz'd love, the law's delay, The insolence of office, and the spurns That patient merit of th'unworthy takes, When he himself might his quietus make With a bare bodkin? Who would fardels bear, To grunt and sweat under a weary life, But that the dread of something after death, The undiscovere'd country, from whose bourn No traveller returns, puzzles the will, And makes us rather bear those ills we have Than fly to others that we know not of? Thus conscience doth make cowards of us all, And thus the native hue of resolution Is sicklied o'er with the pale cast of thought, And enterprises of great pith and moment With this regard their currents turn awry And lose the name of action.",
  "У лукоморья дуб зелёный, Златая цепь на дубе том: И днём и ночью кот учёный Всё ходит по цепи кругом, Идёт направо — песнь заводит, Налево — сказку говорит. Там чудеса: там леший бродит, Русалка на ветвях сидит, Там на неведомых дорожках Следы невиданных зверей, Избушка там на курьих ножках Стоит без окон, без дверей, Там лес и дол видений полны, Там о заре прихлынут волны На брег песчаный и пустой, И тридцать витязей прекрасных Чредой из вод выходят ясных, И с ними дядька их морской, Там королевич мимоходом Пленяет грозного царя, Там в облаках перед народом Через леса, через моря Колдун несёт богатыря, В темнице там царевна тужит, А бурый волк ей верно служит, Там ступа с Бабою Ягой Идёт, бредёт сама собой, Там царь Кащей над златом чахнет, Там русский дух… там Русью пахнет! И там я был, и мёд я пил, У моря видел дуб зелёный, Под ним сидел, и кот учёный Свои мне сказки говорил.",
]

const styles = {
  backgroundColor: 'antiquewhite',
  width: '800px',
  margin: '0 auto'
};

export default class extends React.Component<any> {
	render() {
		return (
      <div style={styles}>
        <SmokeText transform={transform} locator={locator} index={nanoid()}>
          {TEXT_CASES[0]}
        </SmokeText>
        <br></br>
        <br></br>
        <SmokeText transform={transform} locator={locator} index={nanoid()}>
          {TEXT_CASES[1]}
        </SmokeText>
        <br></br>
        <br></br>
        <SmokeText transform={transform} locator={locator} index={nanoid()}>
          {TEXT_CASES[2]}
        </SmokeText>
      </div>
		);
	}
}
