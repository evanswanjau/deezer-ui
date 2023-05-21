import { Link } from "react-router-dom";

interface Track {
    id: number;
    title: string;
    duration: string;
}

interface Tracks {
    tracks: Track[];
}

export const TopTracks = ({ tracks }: Tracks) => {
    return (
        <div className="w-full lg:w-4/12 m-3 rounded-xl shadow-md bg-white p-8">
            <h4 className="text-xl font-bold">Top Tracks</h4>
            <ul className="mt-5">
                {tracks.map(({ title, duration }: Track, i: number) => {
                    return (
                        <li key={i}>
                            <Link
                                to="#"
                                className={`flex justify-between ${
                                    i !== tracks.length - 1 ? "border-b" : ""
                                } py-3 group hover:text-green-600`}
                            >
                                <div className="flex justify-start space-x-8 w-10/12">
                                    <span>{i + 1}</span>
                                    <p>{title}</p>
                                </div>

                                <p className="text-gray-400 group-hover:text-green-600">
                                    {duration}
                                </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
