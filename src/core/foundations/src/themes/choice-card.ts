import { border, text } from "../index"
import { InlineErrorTheme, inlineErrorDefault } from "./inline-error"

export type ChoiceCardTheme = {
	text: string
	borderColor: string
	textChecked: string
	backgroundChecked: string
	borderColorChecked: string
}

export const choiceCardDefault: {
	choiceCard: ChoiceCardTheme
	inlineError: InlineErrorTheme
} = {
	choiceCard: {
		text: text.choiceCard,
		borderColor: border.choiceCard,
		textChecked: text.choiceCardChecked,
		backgroundChecked: "rgba(0, 178, 255, 0.26)",
		borderColorChecked: border.choiceCardChecked,
	},
	...inlineErrorDefault,
}
