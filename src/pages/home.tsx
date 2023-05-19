import background from "../assets/background.jpg";
import { SearchBar } from "../component/searchBar";
import { SearchResults } from "../layouts/searchResults";

export const Home = () => {
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
                    <SearchBar />
                    <SearchResults />
                </div>
            </div>
        </div>
    );
};
