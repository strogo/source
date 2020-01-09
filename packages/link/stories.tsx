import React from "react"
import { css } from "@emotion/core"
import { storybookBackgrounds } from "@guardian/src-helpers"
import {
	SvgArrowRightStraight,
	SvgExternal,
	SvgChevronLeftSingle,
} from "@guardian/src-svgs"
import { size } from "@guardian/src-foundations"
import { Link, linkLight, linkBrandYellow, linkBrand } from "./index"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const priorityLinks = [
	<Link href="#">Primary</Link>,
	<Link priority="secondary" href="#">
		Secondary
	</Link>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> * {
		margin-right: ${size.medium}px;
	}
`

export default {
	title: "Link",
	component: Link,
}

export const priorityLight = () => (
	<ThemeProvider theme={linkLight}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityLight.story = { name: "priority light" }

export const priorityBlue = () => (
	<ThemeProvider theme={linkBrand}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityBlue.story = {
	name: "priority blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.blue),
		],
	},
}

export const priorityYellow = () => (
	<ThemeProvider theme={linkBrandYellow}>
		<div css={flexStart}>
			{priorityLinks.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityYellow.story = {
	name: "priority yellow",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.yellow),
		],
	},
}

const spacer = css`
	margin-bottom: 1rem;
`

export const textAndIcon = () => (
	<>
		<div css={spacer}>
			<Link icon={<SvgExternal />} href="#">
				Terms and conditions
			</Link>
		</div>
		<div css={flexStart}>
			<Link icon={<SvgChevronLeftSingle />} href="#">
				Previous
			</Link>
			<Link iconSide="right" icon={<SvgArrowRightStraight />} href="#">
				Next
			</Link>
		</div>
	</>
)
textAndIcon.story = {
	name: "text and icon",
}