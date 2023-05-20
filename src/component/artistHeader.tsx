export const ArtistHeader = ({
    name,
    fans,
    bio,
    image,
}: {
    name: string;
    fans: number;
    bio: string;
    image: string;
}) => {
    return (
        <div
            className="w-8/12 mx-3 rounded-xl shadow-md shadow-green-400"
            style={{
                backgroundImage: `url('/images${image}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <div className="w-full h-full backdrop-brightness-50 rounded-xl p-16">
                <div className="w-10/12 text-white">
                    <h4 className="font-bold text-6xl capitalize">{name}</h4>
                    <p className="border-b-2 border-gray-600 w-fit py-5">
                        <span className="font-bold">{fans} </span>
                        fans
                    </p>
                    <p className="mt-8">{bio}</p>
                </div>
            </div>
        </div>
    );
};
