export const styles = {
    desktop: {
        titleSize: "text-6xl lg:text-9xl",
            textSize: "text-xl w-[50%] justify-end align-top self-start place-self-end",
                containerClass: "grid grid-cols-1 gap-8 w-full",
                    contentClass: "grid grid-cols-2 gap-8 w-full",
    },
    tablet: {
        titleSize: "text-4xl md:text-6xl",
            textSize: "text-lg",
                containerClass: "flex flex-col gap-6 w-full",
                    contentClass: "",
    },
    mobile: {
        titleSize: "text-3xl sm:text-4xl mb-2",
            textSize: "text-base sm:text-lg mb-4",
                containerClass: "flex flex-col gap-4 w-full",
                    contentClass: "",
    },
}