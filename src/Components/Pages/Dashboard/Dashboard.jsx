import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const admin = true;
    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-white space-y-2">
                   {
                    admin ? <>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/home'}> <MaterialSymbolsOtherHouses/> User Home</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/addItems'}> <AkarIconsUtensils/> AddItems</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/manageItems'}> <IcBaselineFormatListBulleted/>Manage Items</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/manageBookings'}> <MaterialSymbolsBookmark/> Manage Bookings</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/allUsers'}> <Fa6SolidUsers/>All Users</NavLink>
                    </li>
                    </> : <>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/home'}> <MaterialSymbolsOtherHouses/> User Home</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/reservation'}> <MaterialSymbolsCalendarMonthSharp/> Reservation</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/paymentHistory'}> <StreamlineMoneyCashBagDollarBagPaymentCashMoneyFinance/> Payment History</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/cart'}> <MaterialSymbolsShoppingCartRounded/> My Cart</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/review'}> <FluentPreviewLink16Filled/> ADD Review</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/dashboard/booking'}> <MaterialSymbolsBookmark/> My booking</NavLink>
                    </li>
                    </>
                   }
                     
                     
                    <div className="divider"></div>
                    <li className="text-2xl">
                    <NavLink to={'/'}> <MaterialSymbolsOtherHouses/> Home</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/menu'}> <MaterialSymbolsMenu/> Menu</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/orders/salad'}> <MaterialSymbolsOrderApproveSharp/> Order</NavLink>
                    </li>
                    <li className="text-2xl">
                    <NavLink to={'/contact'}> <TeenyiconsContactSolid/> Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="p-8 flex-1">
            <Outlet></Outlet>
            </div>
        </div>
    );
};
// home
export function MaterialSymbolsOtherHouses(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 21v-9.375L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21zm4-6q-.425 0-.712-.288T7 14t.288-.712T8 13t.713.288T9 14t-.288.713T8 15m4 0q-.425 0-.712-.288T11 14t.288-.712T12 13t.713.288T13 14t-.288.713T12 15m4 0q-.425 0-.712-.288T15 14t.288-.712T16 13t.713.288T17 14t-.288.713T16 15"></path></svg>
    )
  }
//   reservation 

export function MaterialSymbolsCalendarMonthSharp(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11 14v-2h2v2zm-4 0v-2h2v2zm8 0v-2h2v2zm-4 4v-2h2v2zm-4 0v-2h2v2zm8 0v-2h2v2zM3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5z"></path></svg>
    )
  }
//   payment 

export function StreamlineMoneyCashBagDollarBagPaymentCashMoneyFinance(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10.02v1.01m0-6.02v.94m0 7.54c3.5 0 6-1.24 6-4c0-3-1.5-5-4.5-6.5l1.18-1.52a.66.66 0 0 0-.56-1H4.88a.66.66 0 0 0-.56 1L5.5 3C2.5 4.51 1 6.51 1 9.51c0 2.74 2.5 3.98 6 3.98Z"></path><path d="M6 9.56A1.24 1.24 0 0 0 7 10a1.12 1.12 0 0 0 1.19-1A1.12 1.12 0 0 0 7 8a1.12 1.12 0 0 1-1.19-1A1.11 1.11 0 0 1 7 6a1.26 1.26 0 0 1 1 .4"></path></g></svg>
    )
  }
//   cart 
export function MaterialSymbolsShoppingCartRounded(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425z"></path></svg>
    )
}
// review 

export function FluentPreviewLink16Filled(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M4 5v1h8V5zm6 4v2.005h2V9zM1 4.75A2.75 2.75 0 0 1 3.75 2h8.5A2.75 2.75 0 0 1 15 4.75v6.5A2.75 2.75 0 0 1 12.25 14h-8.5A2.75 2.75 0 0 1 1 11.25zm2-.25v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5m6 4v3.005a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-5.5 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 11a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5"></path></svg>
    )
  }
// booking 

export function MaterialSymbolsBookmark(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z"></path></svg>
    )
  }
// admin home 

export function AkarIconsUtensils(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 8V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4m4 8V2h3a4 4 0 0 1 4 4v10h-4m-3 0v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5M5 12v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-9M5 6V2m3 4V2"></path></svg>
  )
}
// manage Items 

export function IcBaselineFormatListBulleted(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"></path></svg>
  )
}
// users 

export function Fa6SolidUsers(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512" {...props}><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7c0 11.8-9.6 21.3-21.3 21.3H405.4zM224 224a96 96 0 1 1 192 0a96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.3c73.7 0 133.4 59.7 133.4 133.3c0 14.7-11.9 26.7-26.7 26.7H154.6c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg>
  )
}
// menu 

export function MaterialSymbolsMenu(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path></svg>
    )
  }
//   order 

export function MaterialSymbolsOrderApproveSharp(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m17.275 20.25l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075zM6 9h12V7H6zm12 14q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M3 22V3h18v8.675q-.7-.35-1.463-.513T18 11H6v2h7.1q-.425.425-.787.925T11.675 15H6v2h5.075q-.05.25-.062.488T11 18q0 1.05.288 2.013t.862 1.837L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5z"></path></svg>
    )
  }
//   contact 

export function TeenyiconsContactSolid(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}><path fill="currentColor" fillRule="evenodd" d="M11 2H4V0H3v2H1.5A1.5 1.5 0 0 0 0 3.5v8A1.5 1.5 0 0 0 1.5 13h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 2H12V0h-1zM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.618 4.618a2.927 2.927 0 0 1 5.236 0l.33.658A.5.5 0 0 1 7.5 12h-5a.5.5 0 0 1-.447-.724zM9 6h3V5H9zm0 3h3V8H9z" clipRule="evenodd"></path><path fill="currentColor" d="M15 14v1H0v-1z"></path></svg>
    )
  }
export default Dashboard;