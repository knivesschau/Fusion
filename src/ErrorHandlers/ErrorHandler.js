import React, {Component} from 'react'; 
import './ErrorHandler.css';

export default class ErrorHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    };

    static getDerivedStateFromError(error) {
        return {hasError:true}
    };

    render() {
        if (this.state.hasError) {
            return (
                <main className="error-catcher">
                    <h1>
                        An unexpected error occurred. This could be due to an expired session or server error. Either refresh
                        the page, or try logging in again. If the error persits, please try again later.
                    </h1>
                </main>
            );
        }
        return this.props.children; 
    };
};