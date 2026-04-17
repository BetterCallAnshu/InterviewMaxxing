tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "brand-bg": "#050505",
                "brand-surface": "#1a1a1a",
                "brand-elevated": "#2e2e2e",
                "brand-cobalt": "#3B5BDB",
                "brand-cobalt-tint": "rgba(59,91,219,0.10)",
                "brand-lime": "#AAFF00",
                "brand-lime-tint": "rgba(170,255,0,0.08)",
                "brand-text": "#FAFAFA",
                "brand-muted": "#888888",
            },
            fontFamily: {
                "headline": ["Space Grotesk", "sans-serif"],
                "body": ["Plus Jakarta Sans", "sans-serif"],
                "label": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0px",
                "sm": "0px",
                "md": "2px",
                "lg": "4px",
                "xl": "4px",
                "2xl": "4px",
                "3xl": "4px",
                "full": "9999px"
            },
        },
    },
}
