import React, { useState } from "react"
import starSvg from "../images/icon-star.svg"
import thankYouSvg from "../images/illustration-thank-you.svg"

export default function Rating() {
    const [selectedRating, setSelectedRating] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleRatingSelect = (rating) => {
        setSelectedRating(rating)
    }

    const handleSubmit = () => {
        if (selectedRating) {
            // some backend logic here
            setIsSubmitted(true)
        }
    }

    return (
        <article
            aria-label="Feedback rating form"
            className={`bg-black-gradient flex w-full max-w-[20.438rem] flex-col rounded-xl text-white md:max-w-[25.75rem]  ${
                isSubmitted ? "px-9 pt-6 pb-8 md:py-8 md:px-11" : "p-6 md:p-8"
            }`}
        >
            {isSubmitted ? (
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 h-auto w-36 md:mb-8 md:w-40">
                        <img src={thankYouSvg.src} alt="" />
                    </div>
                    <p className="mb-6 rounded-full bg-dark-blue px-4 py-1 text-sm text-orange md:mb-8 md:px-6 md:py-2 md:text-base15">
                        You selected {selectedRating} out of 5
                    </p>
                    <h2 className="mb-4 text-2xl font-bold md:mb-2">Thank you!</h2>
                    <p className="text-sm text-light-gray">
                        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                    </p>
                </div>
            ) : (
                <>
                    <div className="mb-4 flex items-center md:mb-7">
                        <div className="rounded-full bg-dark-blue p-3">
                            <img src={starSvg.src} alt="" />
                        </div>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold md:mb-3.5">How did we do?</h2>
                    <p className="font-base mb-6 font-normal text-light-gray">
                        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
                        offering!
                    </p>
                    <div className="mb-6 flex justify-between md:mb-8">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => handleRatingSelect(rating)}
                                className={`text-base pt-[.2rem] w-11 h-11 md:w-12 md:h-12 flex justify-center items-center rounded-full ${
                                    selectedRating === rating
                                        ? "bg-orange text-black"
                                        : "bg-dark-blue text-light-gray hover:bg-white hover:text-dark-blue"
                                }`}
                            >
                                {rating}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full rounded-full bg-orange py-3 text-base15 font-bold uppercase tracking-widest text-black transition hover:bg-white md:py-3.5"
                    >
                        Submit
                    </button>
                </>
            )}
        </article>
    )
}
