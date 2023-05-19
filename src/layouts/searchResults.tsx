import { useState } from "react";
import { Track } from "../component/track";

interface TrackProp {
    track: string;
    artist: string;
    album: string;
    duration: string;
    image: string;
}

export const SearchResults = () => {
    const [data] = useState<TrackProp[]>([
        {
            track: "major distribution",
            artist: "drake",
            album: "rich flex",
            duration: "3:59",
            image: "/her-loss.jpg",
        },
        {
            track: "privileged rappers",
            artist: "drake",
            album: "rich flex",
            duration: "2:40",
            image: "/her-loss.jpg",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "major distribution",
            artist: "drake",
            album: "rich flex",
            duration: "3:59",
            image: "/her-loss.jpg",
        },
        {
            track: "privileged rappers",
            artist: "drake",
            album: "rich flex",
            duration: "2:40",
            image: "/her-loss.jpg",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "major distribution",
            artist: "drake",
            album: "rich flex",
            duration: "3:59",
            image: "/her-loss.jpg",
        },
        {
            track: "privileged rappers",
            artist: "drake",
            album: "rich flex",
            duration: "2:40",
            image: "/her-loss.jpg",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "privileged rappers",
            artist: "drake",
            album: "rich flex",
            duration: "2:40",
            image: "/her-loss.jpg",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "major distribution",
            artist: "drake",
            album: "rich flex",
            duration: "3:59",
            image: "/her-loss.jpg",
        },
        {
            track: "privileged rappers",
            artist: "drake",
            album: "rich flex",
            duration: "2:40",
            image: "/her-loss.jpg",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "privileged rappers",
            artist: "drake",
            album: "rich flex",
            duration: "2:40",
            image: "/her-loss.jpg",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
        {
            track: "major distribution",
            artist: "drake",
            album: "rich flex",
            duration: "3:59",
            image: "/her-loss.jpg",
        },
        {
            track: "privileged rappers",
            artist: "drake",
            album: "rich flex",
            duration: "2:40",
            image: "/her-loss.jpg",
        },
        {
            track: "strangers by nature",
            artist: "adele",
            album: "30",
            duration: "3:02",
            image: "/30.png",
        },
        {
            track: "easy on me",
            artist: "adele",
            album: "30",
            duration: "3:44",
            image: "/30.png",
        },
    ]);

    return (
        <div className="my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-8 mt-32 p-5">
            {data.map((item, i) => {
                return <Track key={i} {...item} />;
            })}
        </div>
    );
};
