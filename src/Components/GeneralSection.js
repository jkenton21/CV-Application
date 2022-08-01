// GeneralSection.js
/* GeneralSection component contains general info entry for the CV */

import React, {useState} from 'react'

class GeneralSection extends React.Component {
    constructor(props) {
        super(props)

        const [generalData, setGeneralData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            description: ''
        })

        const handleChangeInput = (e) => {
            setGeneralData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value
            }))
        }
    }

    render () {
        if (!this.props.isSubmitted) {
            return (
                <section>
        <FirstSectionTitle>General Information</FirstSectionTitle>
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              placeholder="Adam"
              id="firstName"
              value={generalData.firstName}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Input
              type={'text'}
              placeholder="Smith"
              id="lastName"
              value={generalData.lastName}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              type={'email'}
              placeholder="adamsmith@gmail.com"
              id="email"
              value={generalData.email}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              type={'number'}
              placeholder="686354264"
              id="phoneNumber"
              value={generalData.phoneNumber}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <TextAreaWrapper>
            <label htmlFor="description">Brief Description</label>
            <Textarea
              placeholder="I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing."
              id="description"
              value={generalData.description}
              onChange={handleChangeInput}
            ></Textarea>
          </TextAreaWrapper>
        </Form>
      </section>
            )
        } else {
            return (
                <section>
        <FirstSectionTitle>
          {generalData.firstName} {generalData.lastName}
        </FirstSectionTitle>
        <article>
          <DescriptionWrapper>
            &quot;{generalData.description}&quot;
          </DescriptionWrapper>
          <EmailPhoneWrapper>
            <div>
              <div className="email">Email</div>
              <div>{generalData.email}</div>
            </div>
            <div>
              <div className="phoneNumber">Phone Number</div>
              <div>{generalData.phoneNumber}</div>
            </div>
          </EmailPhoneWrapper>
        </article>
      </section>
            )
        }
    }
}

export default GeneralSection;