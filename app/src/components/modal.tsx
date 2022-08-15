import React from "react"
import Form from "./form"

export default ({closeModal}) => {

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative sm:w-3/5 md:w-3/5 lg:w-/5 xl:w-2/6 2xl:w-1/5 my-6 mx-auto max-w-5xl ">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Greetings
                        </h3>
                        <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={closeModal}>
                        <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>   
                    <div className="relative p-6 flex-auto">
                            <Form/>
                    </div> 
                    <div className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-primary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                     </div>
                </div>   
            </div>
       </div>
    )
}