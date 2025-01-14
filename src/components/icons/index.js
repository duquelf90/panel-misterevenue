export const ExitFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
}) => (
    <svg
        aria-hidden="true"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            d="M13 9V2H1v20h12v-7m9-3H5m12-5l5 5l-5 5"
        ></path>
    </svg>
);