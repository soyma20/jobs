/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            '2xl': {'max': '1535px'},
            'xl': {'max': '1279px'},
            'lg': {'max': '1023px'},
            'md': {'max': '767px'},
            'sm': {'max': '639px'},
        },
        fontSize: {
            xs: ['13px', '25px'],
            sm: ['14px', '17px'],
            base: ['16px', '25p'],
            lg: ['18px','24px'],
            xl: ['20px', '25px'],
            '2xl': ['24px','30px'],
            '3xl': ['28px','34px'],
        },
        listStyleType: {
            square: 'square',
        },
        extend: {
            boxShadow: {
                'md': ' 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
            },
        }
    },
    plugins: [],
}
