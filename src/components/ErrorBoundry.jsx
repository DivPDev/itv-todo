import { Component } from 'react'

export default class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error) {
        return { hasError: true};
    }

    render() {

        if(this.state.hasError) {
            return (
                <div><h2>Something went wrong!</h2></div>
            );
        }

        return this.props.children;
    }
}
