export default function Login() {
    return (
        <div className="fixed inset-0 z-50 lg:flex lg:flex-col lg:items-center bg-[#0000004d] sm:justify-start cursor-pointer">
            <div className="bg-white w-full xl:top-12 lg:w-[720px] p-8 relative">
                {/* Close Button */}
                <div className="cursor-pointer absolute top-4 end-4">
                    <span className="close-icon">Close Icon</span>
                </div>
                <h2 className="text-3xl font-bold text-center font-bodoni-moda">Login</h2>
                <form>
                    <div className="my-8">
                        <input type="text" className="border text-center placeholder:text-gray-300 border-[#c7c7c7] w-full py-4 px-4 focus:outline-none" placeholder="Your username" />
                        <input type="password" className="border text-center mt-2.5 placeholder:text-gray-300 border-[#c7c7c7] w-full py-4 px-4 focus:outline-none" placeholder="Your password" />
                    </div>
                    <a href="log-in.html" className="font-bold py-4 text-center block px-4 hover:bg-green-400 bg-black w-full text-white">Log In</a>
                    <a href="signup.html" className="font-bold bg-green-400 text-white hover:text-white py-4 text-center block px-4 mt-2.5 w-full">Sign Up</a>
                    <a href="register-account.html" className="text-17 block font-medium hover:text-ellipsis-red-500 hover:underline mt-5 text-center">Forgot password?</a>
                </form>
            </div>
        </div>
    )
}
