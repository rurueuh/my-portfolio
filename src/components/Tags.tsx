export default function Tags(
    { text, logo, alt, link }: { text: string, logo?: string, alt: string, link?: string }
) {

    if (link) {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <div className="bg-gray-700 w-fit rounded-lg shadow-md text-gray-200 w-fit py-1.5 px-2 flex items-center justify-center">
                    {logo &&
                        <img src={logo} alt={alt} className="w-5 h-5 mr-2" />
                    }
                    <p className="text-[12px] font-semibold text-white">{text}</p>
                </div>
            </a>
        );
    }

    return (
        <div className="bg-gray-700 w-fit rounded-lg shadow-md text-gray-200 w-fit p-1.5 flex items-center justify-center">
            {logo &&
                <img src={logo} alt={alt} className="w-5 h-5 mr-2" />
            }
            <p className="text-[12px] font-semibold text-white">{text}</p>
        </div>
    );
}