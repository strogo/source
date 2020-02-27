import { neutral, brand } from "../global"

const primary = neutral[100]
const inverse = "#1A1A1A"
const checked = brand[500]
const ctaPrimary = brand[400]
const ctaPrimaryHover = "#234B8A"
const ctaSecondary = brand[800]
const ctaSecondaryHover = "#ACC9F7"

const root = {
	primary,
	inverse,
	checked,
}

const button = {
	buttonPrimary: ctaPrimary,
	buttonPrimaryHover: ctaPrimaryHover,
	buttonSecondary: ctaSecondary,
	buttonSecondaryHover: ctaSecondaryHover,
}

const checkbox = {
	checkboxChecked: checked,
}

const radio = {
	radioChecked: checked,
}

const textInput = {
	textInput: primary,
}

export const background = {
	...root,
	...button,
	...checkbox,
	...radio,
	...textInput,
}
