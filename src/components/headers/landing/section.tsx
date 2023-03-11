interface SectionProps {
    title: string;
    gradiant: string;
}

export default function Section({ title, gradiant }: SectionProps) {
    return (
        <>
            <div className={`${gradiant}`}>
                <h1 className="text-white text-[26px] font-bold">{title}</h1>
            </div>
        </>
    );
}