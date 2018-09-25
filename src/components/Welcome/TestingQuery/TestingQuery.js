import React, { Component } from "react";

import { withRouter } from 'react-router';
import queryString from 'query-string'

class TestingQuery extends Component {
    //   // path params
    // { pathname: `/path/name/${SOME_ID}` }
    //  // search params
    // { search: `?someID=${SOME_ID}` }
    render() {
        console.log(this.props.location)
        let query = queryString.parse(this.props.location.search);
        return (
            <div>
                <h1>Testing Query</h1>
                {Object.entries(query).map((val, ind) => (
                    <p key={ind}>{`${val[0]} : ${val[1]}`}</p>
                ))}
            </div>
        );
    }
}

export default withRouter(TestingQuery);
