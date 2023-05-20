export const Album = ({
    image,
    name,
    released,
}: {
    image: string;
    name: string;
    released: string;
}) => {
    return (
        <div>
            <img
                src={`/images${image}`}
                className="rounded-lg shadow-md mb-3 hover:scale-[1.02] transition duration-200 ease-in-out cursor-pointer"
            />
            <p className="text-sm font-bold text-white">{name}</p>
            <p className="text-gray-400">{released}</p>
        </div>
    );
};
