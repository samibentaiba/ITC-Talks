export const styles = {
    desktop: {
        section: "mx-auto flex-col w-full px-10 max-w-[1880px] flex items-center justify-between py-4",
        header: "flex flex-row justify-between mb-8 w-full",
        headerTitle: "text-9xl font-bold mb-6",
        headerText: "text-sm max-w-[15%] mb-0",
        Agenda: "self-stretch p-14 bg-[#1C1A1A] w-full rounded-[3rem] inline-flex flex-col justify-start items-center gap-20",
        AgendaElement: "self-stretch flex flex-col justify-start items-start",
        AgendaDue: "self-stretch inline-flex justify-start items-start",
        element: "flex-1 px-14 py-10 flex justify-start items-start gap-10",
        elementTime: "justify-start text-white text-4xl font-bold font-Syne",
        elementText: "flex-1 inline-flex flex-col justify-start items-start gap-5",
        elementTextTitle: "self-stretch justify-start text-white text-4xl font-bold font-Syne",
        elementTextDescription: "self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-Syne leading-loose",
        type: "desktop"
    },
    tablet: {
        section: "mx-auto flex-col w-full p-[24px] max-w-[1880px] flex items-center justify-between",
        header: "flex flex-col mb-4 w-full",
        headerTitle: "text-8xl font-bold mb-2",
        headerText: "text-2xl max-w-full mb-4",
        Agenda: "self-stretch p-4 bg-[#1C1A1A] w-full rounded-[24px] inline-flex flex-col justify-start items-center gap-10",
        AgendaElement: "self-stretch flex flex-col justify-start items-start",
        AgendaDue: "",
        element: "w-full px-4 py-6 border-b border-white border-opacity-60 flex flex-col justify-start items-start gap-3",
        elementTime: "text-white text-3xl font-bold font-Syne",
        elementText: "flex justify-between w-full",
        elementTextTitle: "text-white text-3xl font-bold font-Syne",
        elementTextDescription: "self-stretch text-white text-opacity-80 text-2xl font-normal font-Syne leading-relaxed",
        type: "tablet"
    },
    mobile: {
        section: "mx-auto flex-col w-full px-[16px] max-w-[1880px] flex items-center justify-between",
        header: "flex flex-col mb-4 w-full",
        headerTitle: "text-3xl font-bold mb-2",
        headerText: "text-xs max-w-full mb-4",
        Agenda: "self-stretch p-4 bg-[#1C1A1A] w-full rounded-[24px] inline-flex flex-col justify-start items-center gap-10",
        AgendaElement: "self-stretch flex flex-col justify-start items-start",
        AgendaDue: "",
        element: "w-full px-4 py-6 border-b border-white border-opacity-60 flex flex-col justify-start items-start gap-3",
        elementTime: "text-white text-xl font-bold font-Syne",
        elementText: "flex justify-between w-full",
        elementTextTitle: "text-white text-xl font-bold font-Syne",
        elementTextDescription: "self-stretch text-white text-opacity-80 text-sm font-normal font-Syne leading-relaxed",
        type: "mobile"
    }
}