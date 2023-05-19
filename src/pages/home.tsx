import background from "../assets/background.jpg";
import { SearchBar } from "../component/searchBar";

export const Home = () => {
    return (
        <div
            className="h-screen overflow-y-auto flex items-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <SearchBar />
        </div>
    );
};
