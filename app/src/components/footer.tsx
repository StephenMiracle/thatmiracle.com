import React, {useState} from "react"
import Modal from "./modal"

export default () => {

    const [showModal, setshowModal] = useState(false)

    const closeModal = () => {
        setshowModal(false);
    }

    return ( 
        <>
        <div className ="mx-auto mt-16 bg-black border-t-secondary border-t-4 px-4 pb-1 flex flex-row justify-center">
                <div className= "basis-1/12 text-white font-bold p-5"><a className="link" onClick = {() => setshowModal(true)} target = "_blank" data-tippy-content="@email_handle"><svg className="h-9 fill-current text-grey-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"/></svg></a></div>
                <div className= "basis-1/12 text-white font-bold p-5"><a className="link" href="https://twitter.com/stephenmiracle" target = "_blank" data-tippy-content="@twitter_handle"><svg className="h-9 fill-current text-grey-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a></div>
                <div className= "basis-1/12 text-white font-bold p-5"><a className="link" href="https://www.linkedin.com/in/stephen-miracle/" target = "_blank" data-tippy-content="@linkedin_handle"><svg className="h-9 fill-current text-grey-300" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>LinkedIn</title><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></div>
                <div className= "basis-1/12 text-white font-bold p-5"><a className="link" href="https://medium.com/swlh/why-successful-startups-focus-on-serving-not-exciting-customers-8499f12283ee" target = "_blank" data-tippy-content="@medium_handle"><svg className="h-12 fill-current text-grey-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/> </svg></a></div>
        </div>

        {showModal && <Modal closeModal={closeModal}/>}
        </>
    )
}