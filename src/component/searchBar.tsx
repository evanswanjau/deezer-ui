import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import background from "../assets/background.jpg";

export const SearchBar = () => {
    const [keyword, setKeyword] = useState<string>("track");

    return (
        <div
            className="fixed w-full lg:w-10/12 pt-2 pb-5"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-11/12 sm:w-6/12 md:w-4/12 mx-auto">
                <div className="text-white text-xl font-regular flex justify-center my-2 mx-auto">
                    Search {keyword}
                </div>
                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        className="block w-full border-none p-2 outline-none tracking-wide text-sm text-gray-800 border rounded-lg bg-gray-100"
                        placeholder="Search track"
                        onChange={(event: any) => {
                            setKeyword(
                                event.target.value === ""
                                    ? "track"
                                    : event.target.value
                            );
                        }}
                    />
                    <HiOutlineSearch className="text-2xl text-gray-400 absolute right-1 bottom-1.5" />
                </div>
            </div>
        </div>
    );
};
