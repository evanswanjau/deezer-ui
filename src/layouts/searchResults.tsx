import { Track } from "../component/track";
import { Loader } from "../component/loader";

interface TrackProp {
    id: number;
    title: string;
    duration: number;
    album: string;
    artist: string;
    cover_medium: string;
}

export const SearchResults = ({
    keyword,
    data,
    loading,
}: {
    keyword: string;
    data: TrackProp[];
    loading: boolean;
}) => {
    return (
        <div className="mt-32 p-5">
            {loading ? (
                <div className="flex justify-center">
                    <Loader />
                </div>
            ) : (
                <div>
                    {data.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-8">
                            {data.map((item, i) => {
                                return <Track key={i} {...item} />;
                            })}
                        </div>
                    )}
                    {data.length < 1 && keyword !== "track" && (
                        <div className="flex justify-center">
                            <h3 className="text-white text-2xl">
                                {keyword !== "" ? (
                                    <span>
                                        No tracks with the keyword{" "}
                                        <u>{keyword}</u>
                                    </span>
                                ) : (
                                    <span>Start typing</span>
                                )}
                            </h3>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
