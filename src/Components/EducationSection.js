// EducationSection.js
/* EducationSection component contains education info entry for the CV */

import React, {useState} from 'react'
import EducationItem from './EducationItem'

class EducationSection extends React.Component {
    constructor(props) {
        super(props)

        const [itemsArray, setItemsArray] = useState([])

        const handleAddEducation = () => {
            setItemsArray((prevState) => [
                ...prevState,
                {
                    id: uniqid(),
                    schoolName: '',
                    degree: '',
                    degreeStartDate: '',
                    degreeEndDate: ''
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

        const educationItems = itemsArray.map((item) => (
            <EducationItem
      key={item.id}
      id={item.id}
      schoolName={item.schoolName}
      degree={item.degree}
      firstDayDegree={item.firstDayDegree}
      lastDayDegree={item.lastDayDegree}
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
        <SectionTitle>Education</SectionTitle>
        {educationItems}
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
        <SectionTitle>Education</SectionTitle>
        {educationItems}
      </section>
            )
        }
    }
}

export default EducationSection;