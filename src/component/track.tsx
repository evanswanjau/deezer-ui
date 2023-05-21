import { Link } from "react-router-dom";
import { capitalizeFL } from "../helpers/strings";
import { secondsToTime } from "../helpers/date";

export const Track = ({
    id,
    title,
    duration,
    album,
    artist,
    cover_medium, // eslint-disable-line
}: {
    id: number;
    title: string;
    duration: number;
    album: string;
    artist: string;
    cover_medium: string;
}) => {
    return (
        <div className="text-white space-y-0.5 group">
            <img
                className="rounded-lg shadow-md mb-5 group-hover:shadow-green-400 group-hover:scale-[1.02] transition duration-200 ease-in-out"
                src={cover_medium}
            />
            <p className="text-sm">{secondsToTime(duration)}</p>
            <h4 className="text-lg font-bold">{capitalizeFL(title)}</h4>
            <p className="tracking-wide hidden lg:block">
                {capitalizeFL(album)}
            </p>
            <Link
                to={"/artist/" + artist.replace(/ /g, "-")}
                className="tracking-wide hover:text-green-400 transition duration-150 ease-in-out"
            >
                {artist}
            </Link>
        </div>
    );
};
