import React, { useEffect } from 'react'
import EMIEntryForm from '../components/forms/EMIEntryForm'
import EMIEntryTable from '../components/tables/EMIEntryTable'

function EMIEntry() {
  useEffect(() => {
    document.title= "EMI - Entries";
  }, [])
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 py-10">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transhtmlForm-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="items-center mx-auto max-w-2xl py-10 sm:py-10 lg:py-36">
          <EMIEntryForm />
        </div>
          <EMIEntryTable />
      </div>
    </div>
  )
}

export default EMIEntry