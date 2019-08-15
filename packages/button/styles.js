import { css } from "@emotion/core";
import { textSans } from "@guardian/pasteup/typography";
import { palette } from "@guardian/pasteup/palette";
import { size } from "@guardian/src-foundations/size";

const ctaHeight = 42;

export const button = css`
	/* LAYOUT */
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	/* TYPOGRAPHY */
	font-weight: bold;
	text-decoration: none;
	${textSans(2)};

	/* STYLES */
	box-sizing: border-box;
	height: ${size.large};
	min-height: ${size.large};
	padding: 0 ${size.large};
	border: none;
	border-radius: ${size.large / 2};
	background: transparent;
	cursor: pointer;
	transition: 0.3s ease-in-out;
`;

export const primary = css`
	background-color: ${palette.highlight.main};
	color: ${palette.neutral[7]};

	&:hover,
	&:focus {
		background-color: ${palette.highlight.dark};
	}
`;

export const secondary = css`
	background-color: ${palette.neutral[20]};
	color: ${palette.neutral[100]};

	&:hover,
	&:focus {
		background-color: ${palette.neutral[7]};
	}
`;

export const icon = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${ctaHeight / 2}px;
		height: auto;
	}
`;

export const iconLeft = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${ctaHeight / 4}px 0 ${-ctaHeight / 8}px;
	}
`;

export const iconRight = css`
	svg {
		margin: 0 ${-ctaHeight / 8}px 0 ${ctaHeight / 4}px;
	}
`;
