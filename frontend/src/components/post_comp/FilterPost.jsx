import React from 'react'
const FilterPost = ({ searchQuery, setSearchQuery }) => {



    return (
        <div className="bg-blue-500 text-white p-6 rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-4">Find Your Post</h1>
            <input
                type="text"
                placeholder="Search by title or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 rounded border w-full text-black outline-none"
            />
        </div>
    )
}

export default FilterPost