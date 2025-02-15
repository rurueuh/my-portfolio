export default function Tags(
    {text, logo}: {text: string, logo?: string}
) {
    return (
        <div className="bg-gray-700 w-fit rounded-lg shadow-md text-gray-200 w-fit p-1.5 flex items-center justify-center">
            {logo && 
                <img src={logo} alt="Logo" className="w-5 h-5 mr-2" />
            }
            <p className="text-[12px] font-semibold text-white">{text}</p>
        </div>
    );
}