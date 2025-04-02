export const styles = {
    desktop: {
        section: "sm:px-6 md:px-8 h-[800px] lg:px-10",
        text: "flex-row justify-between mb-8 w-full",
        textTitle: "text-9xl",
        textDescription: "w-[30%]",
        textSize: "xl",
        card: "grid grid-cols-2 gap-[40px] h-[80%]",
        cardSize: "max-h-[270px]"
    },
    tablet: {
        section: "sm:px-6 md:px-8",
        text: "flex-col mb-6 w-full",
        textTitle: "text-4xl mb-2",
        textDescription: "mb-4",
        textSize: "base",
        card: "flex flex-col gap-4",
        cardSize: "min-h-[200px]"
    },
    mobile: {
        section: "",
        text: "flex-col mb-6 w-full",
        textTitle: "text-3xl mb-2",
        textDescription: "mb-4",
        textSize: "sm",
        card: "flex flex-col gap-4",
        cardSize: "h-[270px]"
    }
}