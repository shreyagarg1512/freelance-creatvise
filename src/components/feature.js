import macbook_highlight from "../Assets/macbook_highlight.png"
export default function Feature() {

    return (
        <div className=" w-full flex flex-col lg:flex-row items-center justify-end font-montserrat">

            <div className=" p-12 lg:p-36 flex flex-col gap-y-6">
                <h1 className=" font-semibold text-[40px] text-slateblue ">
                    Unleash your creativity in your curative zone !
                </h1>
                <p className=" text-slateblue text-xl ">Whether you're a creative enthusiast or a professional designer, Creativise zone is the first browser based design tool that allows to create stunning graphics with more user friendly experience. It has the power of stitching your .psd (Photoshop) and .ai (Illustrator) files with intuitive features to meet all your design needs. This tool prioritizes user-friendliness and aims to provide a seamless and enjoyable design experience like never before.</p>
                <div className=" text-slateblue font-semibold  flex items-center gap-x-4">
                    <p className=" text-xl">Explore Now
                    </p>
                    <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 9L25 0.339746V17.6603L40 9ZM0 10.5H26.5V7.5H0V10.5Z" fill="#5552B9"/>
                    </svg>

                </div>
            </div>
            <div className=" hidden lg:flex">
                <img src={macbook_highlight}/>
            </div>

        </div>
    )
}
