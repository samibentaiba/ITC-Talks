interface StyleFunction {
    info: string;
    infoTitle: string;
    infoText: string;
}

interface SectionFunction {
    title: string;
    content?: string;
    children?: React.ReactNode;
    styles: StyleFunction;
}

export default function InfoSection({ title, content, children, styles }: SectionFunction) {
    return (
        <div className={styles.info}>
            <div className={styles.infoTitle}>{title}</div>
            {content ? <div className={styles.infoText}>{content}</div> : children}
        </div>
    );
}
