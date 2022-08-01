// EducationItem.js
/* EducationItem component handles individual education items for the CV*/

import React from 'react'

class EducationItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
         if (!this.props.isSubmitted) {
        return (
            <>
        <Form>
          <div>
            <label htmlFor="schoolName">School Name</label>
            <Input
              type={'text'}
              placeholder="Yale University"
              id="schoolName"
              value={props.schoolName}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="degree">Position Title</label>
            <Input
              type={'text'}
              placeholder="Software Engineering"
              id="degree"
              value={props.degree}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="firstDayDegree">From:</label>
            <Input
              type={'month'}
              id="firstDayDegree"
              value={props.firstDayDegree}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="lastDayDegree">To:</label>
            <Input
              type={'month'}
              id="lastDayDegree"
              value={props.lastDayDegree}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
        </Form>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => props.onDeleteItem(props.id)}
            bgColor="delete"
          >
            Delete
          </Button>
        </ButtonWrapper>
      </>
        )
        } else if (this.props.isSubmitted && this.props.firstDayDegree && this.props.lastDayDegree) {
            return (
                <SubmittedItemWrapper>
        <div>
          <strong>
            {format(new Date(props.firstDayDegree), 'MMM yyyy')} -&nbsp;
            {format(new Date(props.lastDayDegree), 'MMM yyyy')}
          </strong>
        </div>
        <AlignedRightWrapper>
          <div>
            <strong>{props.degree}</strong>
          </div>
          <div>{props.schoolName}</div>
        </AlignedRightWrapper>
      </SubmittedItemWrapper>
            )
        } else {
            return (
                <SubmittedItemWrapper>
        <div>
          <strong>Date -&nbsp; Date</strong>
        </div>
        <AlignedRightWrapper>
          <div>
            <strong>{props.degree}</strong>
          </div>
          <div>{props.schoolName}</div>
        </AlignedRightWrapper>
      </SubmittedItemWrapper>
            )
        }
    }
}

export default EducationItem;