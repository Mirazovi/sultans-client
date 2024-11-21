

const Location = () => {
    return (
        <div className="grid grid-cols-3 gap-4 my-10">
            <div className="border-2 rounded-lg " >
                <div className="py-3 flex justify-center bg-orange-500 text-white text-2xl">
                    <i><MaterialSymbolsPhoneInTalk /></i>
                </div>
                <div className="text-xl bg-gray-300 p-4 text-center" style={{ margin: '0 10px 10px 10px' }}>
                    <h1>Phone</h1>
                    <p>+38 (012) 34 56 789</p>
                </div>
            </div>
            <div className="border-2 rounded-lg">
                <div className="py-3 flex justify-center bg-orange-500 text-white text-2xl">
                    <i><IcBaselineLocationOn /></i>
                </div>
                <div className="text-xl bg-gray-300 p-4 text-center" style={{ margin: '0 10px 10px 10px' }}>
                    <h1>PHONE</h1>
                    <p>+38 (012) 34 56 789</p>
                </div>

            </div>
            <div className="border-2 rounded-lg ">
                <div className="py-3 flex justify-center bg-orange-500 text-white text-2xl">
                    <i><MaterialSymbolsNestClockFarsightAnalogOutlineRounded /></i>
                </div>
                <div className="text-xl bg-gray-300 p-4 text-center" style={{ margin: '0 10px 10px 10px' }}>
                    <h1>ADDRESS</h1>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

            </div>
        </div>
    );
};

export function MaterialSymbolsPhoneInTalk(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 11.95q0-2.925-2.037-4.962T12 4.95v-2q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 11.95zm-4 0q0-1.25-.875-2.125T12 8.95v-2q2.075 0 3.538 1.463T17 11.95zM19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path></svg>
    )
}

export function IcBaselineLocationOn(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></path></svg>
    )
}

export function MaterialSymbolsNestClockFarsightAnalogOutlineRounded(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m13 12.175l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L11.3 13.3q-.15-.15-.225-.337T11 12.575V9q0-.425.288-.712T12 8t.713.288T13 9zM12 6q-.425 0-.712-.288T11 5V4h2v1q0 .425-.288.713T12 6m6 6q0-.425.288-.712T19 11h1v2h-1q-.425 0-.712-.288T18 12m-6 6q.425 0 .713.288T13 19v1h-2v-1q0-.425.288-.712T12 18m-6-6q0 .425-.288.713T5 13H4v-2h1q.425 0 .713.288T6 12m6 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m8-10q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20t5.675-2.325T20 12m-8 0"></path></svg>
    )
}
export default Location;