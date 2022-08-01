// ExperienceItem.js
/* ExperienceItem component handles individual experience items for the CV*/

import React from 'react'

class ExperienceItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.isSubmitted) {
            return (
                <>
        <Form>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <Input
              type={'text'}
              placeholder="Microsoft"
              id="companyName"
              value={props.companyName}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="companyPosition">Position Title</label>
            <Input
              type={'text'}
              placeholder="Senior Developer"
              id="companyPosition"
              value={props.companyPosition}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="firstDayJob">From:</label>
            <Input
              type={'month'}
              id="firstDayJob"
              value={props.firstDayJob}
              onChange={(e) => props.onInputChange(e, props.id)}
            ></Input>
          </div>
          <div>
            <label htmlFor="lastDayJob">To:</label>
            <Input
              type={'month'}
              id="lastDayJob"
              value={props.lastDayJob}
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
        } else if (this.props.isSubmitted && this.props.firstDayJob && this.props.lastDayJob) {
            return (
                <SubmittedItemWrapper>
        <div>
          <strong>
            {format(new Date(props.firstDayJob), 'MMM yyyy')} -&nbsp;
            {format(new Date(props.lastDayJob), 'MMM yyyy')}
          </strong>
        </div>
        <AlignedRightWrapper>
          <div>
            <strong>{props.companyPosition}</strong>
          </div>
          <div>{props.companyName}</div>
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
            <strong>{props.companyPosition}</strong>
          </div>
          <div>{props.companyName}</div>
        </AlignedRightWrapper>
      </SubmittedItemWrapper>
            )
        }
    }
}

export default ExperienceItem;