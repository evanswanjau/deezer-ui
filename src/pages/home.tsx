import { useState } from "react";
import background from "../assets/background.jpg";
import { SearchBar } from "../component/searchBar";
import { SearchResults } from "../layouts/searchResults";

interface Track {
    id: number;
    title: string;
    duration: number;
    album: string;
    artist: string;
    cover_medium: string;
}

export const Home = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>("");
    const [data, setData] = useState<Track[]>([]);

    return (
        <div
            className="h-screen flex"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="overflow-y-auto flex justify-center w-full">
                <div className="w-full lg:w-10/12">
                    <SearchBar
                        keyword={keyword}
                        setKeyword={setKeyword}
                        setLoading={setLoading}
                        setData={setData}
                    />
                    <SearchResults
                        keyword={keyword}
                        data={data}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};
