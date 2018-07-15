import React, {Component} from 'react';

function getRequestData(state, defaultState) {
    let data = {};
    
    for (let key of Object.keys(defaultState)) {
        data[key] = state[key];
    }

    return data;
}

export default function withFormManager(Form, model, submitter) {
    return class FormManager extends Component {
        constructor(props) {
            super(props);
            this.dataModel = {
                ...model.defaultState,
                ...this.props.extraState
            };

            this.state = {
                error: '',
                ...this.dataModel
            }

            this.success = this.props.success || submitter.success.bind(this);
            this.fail = this.props.fail || submitter.fail.bind(this);
        }

        componentWillReceiveProps = (nextProps) => {
            let newState = {};
            for (let key of Object.keys(nextProps.extraState)) {
                newState[key] = nextProps.extraState[key];
            }

            this.setState(newState);
        }

        handleChange = ev => {
            let fieldName = ev.target.name;
            let fieldValue = ev.target.value;
           
            if(fieldName === 'content' && fieldValue !== '') {
                const author = sessionStorage.getItem('username');
                this.setState({ author : author })
            }
            this.setState({ [fieldName] : fieldValue });
            // console.log('state', this.state);
            
        }

        handleSubmit = ev => {
            ev.preventDefault();
          
            let author = sessionStorage.getItem('username');
            // this.setState({author: author});
            // console.log('state', this.state);

            let data = this.state;

            if (model.validate) {
                let error = model.validate(data);
                if (error) {
                    this.setState({ error })
                }
            }
            
            submitter.send(data)
                .then(this.success)
                .catch(this.fail);
        }

        render = () => {
            // console.log('FormManager', this.state);
            return (<Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state} />
            )
        }
    }
}