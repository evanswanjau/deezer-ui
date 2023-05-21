import { useEffect } from "react";
import axios from "axios";
import { HiOutlineSearch } from "react-icons/hi";
import background from "../assets/background.jpg";
import { useSnackbar } from "notistack";

export const SearchBar = ({
    keyword,
    setKeyword,
    setData,
    setLoading,
}: {
    keyword: string;
    setKeyword: any;
    setData: any;
    setLoading: any;
}) => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (keyword !== "") {
                axios
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    .post(`${process.env.REACT_APP_API_URL}/search/track`, {
                        keyword,
                    })
                    .then((response) => {
                        setData(response.data);
                    })
                    .catch((err) => {
                        enqueueSnackbar(err.message, { variant: "error" });
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        }, 3000);

        return () => {
            clearTimeout(delayDebounceFn);
        };
    }, [keyword]); // eslint-disable-line

    return (
        <div
            className="fixed w-full lg:w-10/12 pt-2 pb-5 z-10"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-11/12 sm:w-6/12 md:w-4/12 mx-auto">
                <div className="text-white text-xl font-regular flex justify-center my-2 mx-auto">
                    Search {keyword === "" ? "track" : keyword}
                </div>
                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        className="block w-full border-none p-2 outline-none tracking-wide text-sm text-gray-800 border rounded-lg bg-gray-100"
                        placeholder={`Search ${
                            keyword === "" ? "track" : keyword
                        }`}
                        onChange={(event: any) => {
                            setLoading(event.target.value !== "");
                            setKeyword(event.target.value);
                        }}
                    />
                    <HiOutlineSearch className="text-2xl text-gray-400 absolute right-1 bottom-1.5" />
                </div>
            </div>
        </div>
    );
};
