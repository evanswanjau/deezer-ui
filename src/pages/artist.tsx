import { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import { Album } from "../component/album";
import { TopTracks } from "../component/topTracks";
import { ArtistHeader } from "../component/artistHeader";
import { HiOutlineArrowLeft } from "react-icons/hi";

interface Track {
    name: string;
    duration: string;
}

interface AlbumInterface {
    name: string;
    released: string;
    image: string;
}

interface Artist {
    name: string;
    fans: number;
    bio: string;
    image: string;
}

export const ArtistPage = () => {
    const [artist] = useState<Artist>({
        name: "drake",
        fans: 382000,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/her-loss.jpg",
    });

    const [tracks] = useState<Track[]>([
        { name: "Get it together", duration: "4:10" },
        { name: "Jorja Interlude", duration: "1:47" },
        { name: "Jumpman", duration: "2:12" },
        { name: "Controller", duration: "3:39" },
        { name: "Know yourself", duration: "3:32" },
    ]);

    const [albums] = useState<AlbumInterface[]>([
        { name: "Take care", released: "2011", image: "/her-loss.jpg" },
        { name: "Views", released: "2016", image: "/her-loss.jpg" },
        { name: "Scorpion", released: "2018", image: "/her-loss.jpg" },
        { name: "More life", released: "2017", image: "/her-loss.jpg" },
        {
            name: "Certified lover boy",
            released: "2021",
            image: "/her-loss.jpg",
        },
        {
            name: "Certified lover boy",
            released: "2021",
            image: "/her-loss.jpg",
        },
        {
            name: "Certified lover boy",
            released: "2021",
            image: "/her-loss.jpg",
        },
        {
            name: "Certified lover boy",
            released: "2021",
            image: "/her-loss.jpg",
        },
    ]);

    return (
        <div
            className="h-screen"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="overflow-y-auto flex flex-col h-full w-full px-10">
                <Link to="" className="text-white py-5 flex hover:text-green-600 transition duration-150 ease-in-out w-fit"><HiOutlineArrowLeft className="mx-5 mt-0.2 text-2xl"/>back to search</Link>

                <div className="flex">
                    <ArtistHeader {...artist} />
                    <TopTracks tracks={tracks} />
                </div>
                <div className="my-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-10">
                    {albums.map((album, i) => {
                        return <Album key={i} {...album} />;
                    })}
                </div>
            </div>
        </div>
    );
};
