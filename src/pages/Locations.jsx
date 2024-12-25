import React from 'react'
import ContentHeading from '../Global/ContentHeading'
import Button from '../Global/Button'
import { FaPlus } from 'react-icons/fa'

function Locations() {
  return (
    <section>
      <ContentHeading headingTitle="DR-4699 March 2023 Severe Storms" isSearch={true} isSort={true}>
        <Button classNm="flex items-center justify-center bg-primaryColor text-white gap-2">
          <FaPlus />
          New Location
        </Button>
      </ContentHeading>
    </section>
  )
}

export default Locations