import React from 'react'

class CardFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.isSubmitted) {
            return (
                <ButtonWrapper>
                    <Button type="button" onClick={this.props.onSubmitBtn}>
                        Edit
                    </Button>
                </ButtonWrapper>
            )
        } else {
            return (
                <ButtonWrapper>
                    <Button type="button" onClick={this.props.onSubmitBtn}>
                        Submit
                    </Button>
                </ButtonWrapper>
            )
        }
    }
}

export default CardFooter;