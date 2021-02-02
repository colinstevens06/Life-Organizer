import React, { useState, useEffect } from "react";

// Components
import CreateNoteBtn from '../components/CreateNoteBtn'
import FilterableData from '../components/main/FilterableData'

function Main() {

  const [dbRefreshVariant, setDbRefreshVariant] = useState(false)

  const dbRefresh = input => {
    setDbRefreshVariant(input)
  }

  return (
    <div>
      <CreateNoteBtn
        dbRefreshTrigger={dbRefresh}
        dbRefreshVariant={dbRefreshVariant}
      />
      <FilterableData
        dbRefreshTrigger={dbRefreshVariant}
      />
    </div>
  )
}

export default Main
