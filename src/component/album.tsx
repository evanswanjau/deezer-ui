export const Album = ({
    id,
    title,
    release_date, // eslint-disable-line
    cover_medium, // eslint-disable-line
}: {
    id: number;
    title: string;
    release_date: string;
    cover_medium: string;
}) => {
    return (
        <div>
            <img
                src={cover_medium}
                className="rounded-lg shadow-md mb-3 hover:scale-[1.02] transition duration-200 ease-in-out cursor-pointer"
            />
            <p className="text-sm font-bold text-white">{title}</p>
            <p className="text-gray-400 mt-0.5">{release_date.split("-")[0]}</p>
        </div>
    );
};
