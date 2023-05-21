import { compactNumber } from "../helpers/integers";

export const ArtistHeader = ({
    id,
    name,
    nb_fan, // eslint-disable-line
    bio,
    picture_medium, // eslint-disable-line
}: {
    id: number;
    name: string;
    nb_fan: number;
    bio: string;
    picture_medium: string;
}) => {
    return (
        <div
            className="w-full lg:w-8/12 m-3 rounded-xl shadow-md"
            style={{
                backgroundImage: `url('${picture_medium}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <div className="w-full h-full backdrop-brightness-50 rounded-xl p-16">
                <div className="w-10/12 text-white">
                    <h4 className="font-bold text-6xl capitalize">{name}</h4>
                    <p className="border-b-2 border-gray-600 w-fit py-5">
                        <span className="font-bold">
                            {compactNumber(nb_fan)}{" "}
                        </span>
                        fans
                    </p>
                    <p className="mt-8">{bio}</p>
                </div>
            </div>
        </div>
    );
};
