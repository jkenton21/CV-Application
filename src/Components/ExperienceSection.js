// ExperienceSection.js
/* ExperienceSection component experience info entry for the CV */

import React, {useState} from 'react'
import ExperienceItem from './ExperienceItem'

class ExperienceSection extends React.Component {
    constructor(props) {
        super(props)

        const handleAddEducation = () => {
            setItemsArray((prevState) => [
            ...prevState,
            {
                id: uniqid(),
                companyName: '',
                companyPosition: '',
                startDate: '',
                endDate: ''
            }
            ])
        }

        const handleDeleteEducation = (id) => {
            setItemsArray((prevState) => [
                ...prevState.filter((item) => item.id !== id)
            ])
        }

        const handleInputChange = (e, id) => {
            setItemsArray((prevState) => {
                const newArray = prevState.map((item) => {
                    if (item.id === id) {
                        return { ...item, [e.target.id]: e.target.value}
                    }
                    return item
                })
                return newArray
            })
        }

        const experienceItems = itemsArray.map((item) => (
            <ExperienceItem
      key={item.id}
      id={item.id}
      companyName={item.companyName}
      companyPosition={item.companyPosition}
      firstDayJob={item.firstDayJob}
      lastDayJob={item.lastDayJob}
      isSubmitted={props.isSubmitted}
      onInputChange={handleInputChange}
      onDeleteItem={handleDeleteEducation}
    />
        ))
    }

    render() {
        if (!this.props.isSubmitted) {
            return (
                <section>
        <SectionTitle>Experience</SectionTitle>
        {experienceItems}
        <ButtonWrapper>
          <Button type="button" onClick={handleAddEducation} bgColor="add">
            Add
          </Button>
        </ButtonWrapper>
      </section>
            )
        } else {
            return (
                <section>
        <SectionTitle>Experience</SectionTitle>
        {experienceItems}
      </section>
            )
        }
    }
}

export default ExperienceSection;