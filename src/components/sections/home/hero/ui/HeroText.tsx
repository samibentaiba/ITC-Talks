export default function HeroText({ size }: { size: string }) {
    return (
        <div className="herotext-container animate-fade-in-left delay-100">
            <h1 className={`herotext-h1-text ${size}`}>
                ITC Talks 6th Edition
                <br />
                Join the Conversation!
            </h1>
            <p className="font-normal ">
                — Be part of a day filled with expert insights, engaging talks, and great conversations
            </p>
        </div>
    )
}