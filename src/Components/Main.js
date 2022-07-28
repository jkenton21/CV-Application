// Applicant.js

import React from "react";
import GeneralSection from './GeneralSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import CardFooter from './CardFooter'

class Main extends React.Component {
  constructor(props) {
    super(props)

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = () => {
    setIsSubmitted(!isSubmitted)
    }
  }

  render() {
    return (
      <MainContainer>
        <Card>
          <GeneralSection />
          <ExperienceSection />
          <EducationSection />
          <CardFooter />
        </Card>
      </MainContainer>
    )
  }
}

export default Main;