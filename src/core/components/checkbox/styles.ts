import { css } from "@emotion/core"
import { space, size, transitions } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"
import {
	checkboxDefault,
	CheckboxTheme,
} from "@guardian/src-foundations/themes"

export const fieldset = css`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	border: 0;
	padding: 0;
	margin: 0;
`

export const label = ({
	checkbox,
}: { checkbox: CheckboxTheme } = checkboxDefault) => css`
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: ${size.large}px;

	&:hover {
		input {
			border-color: ${checkbox.borderHover};
		}
	}
`

export const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[3]}px;
`

export const checkbox = ({
	checkbox,
}: { checkbox: CheckboxTheme } = checkboxDefault) => css`
	flex: 0 0 auto;
	box-sizing: border-box;
	display: inline-block;
	cursor: pointer;
	width: ${size.small}px;
	height: ${size.small}px;
	margin: 0 ${space[2]}px 0 0;

	border: 2px solid currentColor;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${checkbox.border};

	&:focus {
		${focusHalo};
	}

	@supports (appearance: none) {
		appearance: none;
		&:checked {
			border: 2px solid ${checkbox.borderChecked};

			& ~ span:before {
				right: 0;
			}
			& ~ span:after {
				top: 0;
			}
		}

		&:indeterminate {
			&:after {
				${textSans.xlarge()};
				color: ${checkbox.textIndeterminate};
				content: "-";
				position: absolute;
				top: -10px;
				left: 5px;
				z-index: 5;
			}
		}
	}
`

export const labelText = ({
	checkbox,
}: { checkbox: CheckboxTheme } = checkboxDefault) => css`
	${textSans.medium()};
	color: ${checkbox.text};
`

export const labelTextWithSupportingText = css`
	${textSans.medium()};
`

export const supportingText = ({
	checkbox,
}: { checkbox: CheckboxTheme } = checkboxDefault) => css`
	${textSans.small({ lineHeight: "regular" })};
	color: ${checkbox.textSupporting};
`

export const tick = ({
	checkbox,
}: { checkbox: CheckboxTheme } = checkboxDefault) => css`
	@supports (appearance: none) {
		/* overall positional properties */
		position: absolute;
		top: 15px;
		left: 9px;
		width: 6px;
		height: 12px;
		transform: rotate(45deg);
		z-index: 5;

		/* the checkmark ✓ */
		&:after,
		&:before {
			position: absolute;
			display: block;
			background-color: ${checkbox.backgroundChecked};
			transition: all ${transitions.short} ease-in-out;
			content: "";
		}

		/* the short side */
		&:before {
			height: 2px;
			bottom: 0;
			left: 0;
			right: 100%;
			transition-delay: 0.05s;
		}

		/* the long side */
		&:after {
			bottom: 0;
			right: 0;
			top: 100%;
			width: 2px;
			transition-delay: 0.1s;
		}
	}
`

export const tickWithSupportingText = css`
	@supports (appearance: none) {
		top: 5px;
	}
`

export const errorCheckbox = ({
	checkbox,
}: { checkbox: CheckboxTheme } = checkboxDefault) => css`
	border: 4px solid ${checkbox.borderError};
`
