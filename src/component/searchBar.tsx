import { useState } from "react";

export const SearchBar = () => {
    const [keyword, setKeyword] = useState("keyword");

    return (
        <div className="w-11/12 sm:w-6/12 md:w-4/12 mx-auto">
            <div className="text-white text-xl font-regular flex justify-center my-5 mx-auto">
                Search {keyword}
            </div>
            <div className="relative">
                <input
                    type="email"
                    id="email"
                    className="block w-full border-none p-4 outline-none tracking-wide text-sm text-gray-800 border rounded-lg bg-gray-100"
                    placeholder="Search"
                    onChange={(event) => {
                        setKeyword(
                            event.target.value === ""
                                ? "keyword"
                                : event.target.value
                        );
                    }}
                />
                <button
                    type="submit"
                    className="text-gray-800 font-semibold tracking-widest font-inter absolute right-1 bottom-1 bg-gray-300 shadow-lg hover:bg-gray-900 hover:text-white focus:outline-none rounded-lg text-sm px-4 py-[0.9em] transition duration-300 delay-50"
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
};
