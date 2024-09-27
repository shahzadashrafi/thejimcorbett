'use client';

export default function Floaters(){
    return(
        <div className="z-50">
        <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
            Call Now
        </button>
    </div>
    <div className="fixed bottom-4 left-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
            Email Us
        </button>
    </div>
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
            Enquiry
      </button>
    </div>
    </div>
    )
}