

const From = () => {
    return (
        <div className="bg-gray-300 p-16">

            <div className="flex gap-4">

            <div className="w-full">
                <h1 className="text-2xl py-2">Name</h1>
            <input className="bg-white py-2 px-6 text-xl  rounded-lg w-full" type="text" placeholder="Enter Your Name" name="name" id="" />
            </div>

            <div className="w-full">
                <h1 className="text-2xl py-2">Email</h1>
            <input className="bg-white py-2 px-6 text-xl  rounded-lg w-full " type="email" placeholder="Enter Your Email" name="email" id="" />
            </div>

            </div>

            <div className="w-full">
                <h1 className="text-2xl py-2">Phone</h1>
            <input className="bg-white py-2 px-6 text-xl  rounded-lg w-full "  type="text" placeholder="Enter Your Phone Number" name="phone" id="" />
            </div>

            <div className="w-full">
                <h1 className="text-2xl py-2">Massage</h1>
            <textarea className="bg-white py-2 px-6 text-xl  rounded-lg w-full h-[300px]"  placeholder="Massage" name="massage" id=""></textarea>
            </div>
            <div className="flex justify-center my-8">
            <button className="btn btn-accent">Send Message <i className="text-2xl"><MaterialSymbolsLightSendRounded/></i></button>
            </div>

        </div>
    );
};

export function MaterialSymbolsLightSendRounded(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5.133 18.02q-.406.163-.77-.066T4 17.288v-3.942L9.846 12L4 10.654V6.712q0-.438.364-.666t.77-.067l12.512 5.269q.49.225.49.756q0 .53-.49.748z"></path></svg>
    )
  }
export default From;