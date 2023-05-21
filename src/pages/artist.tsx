import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import { Album } from "../component/album";
import { TopTracks } from "../component/topTracks";
import { ArtistHeader } from "../component/artistHeader";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSnackbar } from "notistack";

interface Track {
    id: number;
    title: string;
    duration: string;
}

interface AlbumInterface {
    id: number;
    title: string;
    release_date: string;
    cover_medium: string;
}

interface Artist {
    id: number;
    name: string;
    nb_fan: number;
    bio: string;
    picture_medium: string;
}

export const ArtistPage = ({ match: { params } }: any) => {
    const [artist, setArtist] = useState<Artist>({
        id: 0,
        name: "-",
        nb_fan: 0,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        picture_medium: "",
    });

    const [tracks, setTracks] = useState<Track[]>([]);
    const [albums, setAlbums] = useState<AlbumInterface[]>([]);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL;
        axios
            .all([
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                axios.get(`${url}/artist/${params.id}`),
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                axios.get(`${url}/artist/${params.id}/top`),
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                axios.get(`${url}/artist/${params.id}/albums`),
            ])
            .then(
                axios.spread((data1, data2, data3) => {
                    if (data1.data.error !== undefined) {
                        throw new Error(data1.data.message);
                    }

                    setArtist({ ...artist, ...data1.data.artist });
                    setTracks(data2.data.data);
                    setAlbums(data3.data.data);
                })
            )
            .catch((err) => {
                console.log(err.message);
                enqueueSnackbar(err.message, { variant: "error" });
            });
    }, []); // eslint-disable-line

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
                <Link
                    to=""
                    className="text-white py-5 flex hover:text-green-600 transition duration-150 ease-in-out w-fit"
                >
                    <HiOutlineArrowLeft className="mx-5 mt-0.2 text-2xl" />
                    back to search
                </Link>

                <div className="flex flex-col lg:flex-row">
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
