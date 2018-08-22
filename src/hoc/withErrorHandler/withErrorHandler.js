import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      // if sucessfully removed => "will mount 0 0', else "1 1"
      console.log("Will Unmount", this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqinterceptor);
      axios.interceptors.response.eject(this.resinterceptor);
    }

    errorConfirmedHandler() {
      this.setState({ error: null });
    }

    render() {
      console.log(this.state);
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={() => this.errorConfirmedHandler()}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
