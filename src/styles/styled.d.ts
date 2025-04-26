import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryHover: string;
            background: string;
            surface: string;
            text: string;
            subText: string;
            border: string;
            error: string;
            success: string;
        }
    }
} 