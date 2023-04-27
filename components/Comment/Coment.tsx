const Coment = () => {
    return (
        <div className="pt-6">
            <div className=" mx-auto max-w-4xl carding p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
                <p className="mb-3 text-3xl fonting font-normal text-gray-700 dark:text-gray-400">Add your comment</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name"></input>
                <textarea className="block w-full h-18 px-4 py-2 mt-3 text-gray-700 border border-gray-300 rounded-md resize-none focus:outline-none    sm:text-sm" placeholder="Your Comment">
                </textarea>
                <div className="text-end mt-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>

                </div>

            </div>



        </div>

    )
}
export default Coment;