import React, { useRef } from 'react'

const Form = ({CardGenerator}) => {
    const nameRef = useRef(null)
    const ageRef = useRef(null)

    const submitHandle = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const age = ageRef.current.value
        CardGenerator(name, age)
        // Clear form fields after submit
        nameRef.current.value = ''
        ageRef.current.value = ''
    }
    return (
        <div className="flex items-center justify-center py-15 bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-3 m-0">
                <form className="flex flex-col gap-4" onSubmit={submitHandle}>
                    <input
                        type="text"
                        ref={nameRef}
                        placeholder="First Name"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        ref={ageRef}
                        placeholder="Age"
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form