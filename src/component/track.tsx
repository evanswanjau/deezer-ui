import { Link } from "react-router-dom";
import { capitalizeFL } from "../helpers/strings";

export const Track = ({
    duration,
    track,
    artist,
    album,
    image,
}: {
    duration: string;
    track: string;
    artist: string;
    album: string;
    image: string;
}) => {
    return (
        <Link
            to={"/?track=" + track.replace(/ /g, "-")}
            className="text-white space-y-0.5 group"
        >
            <img
                className="rounded-lg shadow-md mb-5 group-hover:shadow-green-400 group-hover:scale-[1.02] transition duration-200 ease-in-out"
                src={`images/${image}`}
            />
            <div className="group-hover:text-green-400 transition duration-150 ease-in-out">
                <p>{duration}</p>
                <p>{capitalizeFL(track)}</p>
                <p className="hidden lg:block">{capitalizeFL(album)}</p>
                <p>{capitalizeFL(artist)}</p>
            </div>
        </Link>
    );
};
