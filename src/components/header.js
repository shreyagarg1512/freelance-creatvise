import logo from "../Assets/Creative_logo_2.png"
export default function Header() {

    return (
        <div className=" bg-white flex items-center justify-between py-4 px-8 z-10">
            <img src={logo}></img>
            <div className=" items-center hidden lg:flex gap-x-4 h-6 text-xl text-gray-100">
                <div className="a tracking-[-0.05em] leading-[120%] font-semibold text-darkslateblue">
                    Home
                </div>
                <div className="tracking-[-0.05em] leading-[120%] font-semibold">
                    Products
                </div>
                <div className=" tracking-[-0.05em] leading-[120%] font-semibold">
                    About Us
                </div>
                <div className="tracking-[-0.05em] leading-[120%] font-semibold">
                    Blogs
                </div>
            </div>
            <div className="  hidden lg:flex items-center gap-x-4">

                <div className=" flex items-center justify-center rounded-3xs bg-gainsboro  tracking-[-0.05em] leading-[120%] text-lg font-semibold text-center p-4">

                    Login
                </div>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.5" cy="4.5" r="4.5" fill="#5552B9"/>
                </svg>


                <div className=" flex items-center justify-center rounded-3xs box-border border-[1px] border-solid border-slateblue tracking-[-0.05em] leading-[120%] font-semibold p-4">

                    Sign up
                </div>
            </div>
        </div>

    )
}
