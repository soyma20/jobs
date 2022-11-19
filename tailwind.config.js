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
            lg: ['18px', '24px'],
            xl: ['20px', '25px'],
            '2xl': ['24px', '30px'],
            '3xl': ['28px', '34px'],
        },
        listStyleType: {
            square: 'square',
        },
        extend: {
            boxShadow: {
                'md': ' 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
            },
            colors: {
                'light-gray': '#F5F5F5',
                'dark-gray': '#EFF0F5',
                'button-gray': '#e4e5ea',
                'line-gray': '#DEE3EF',
                'posted-gray': '#b9bcc5',
                'light-black': '#878D9D',
                'mid-black': '#70778B',
                'dark-black': '#3A4562',
                'extra-dark-black': '#2A3047',
                'button-black': '#384564',
                'dark-blue': '#5876C5',
                'mid-blue': '#55699E',
                'border-blue': '#b8c0da',
                'light-blue': '#e1e6f4',
                'dark-orange': '#988B49',
                'mid-orange': '#ffcf02',
                'light-orange': '#fff8d9',

            }
        },
        plugins: [],
    }
}
