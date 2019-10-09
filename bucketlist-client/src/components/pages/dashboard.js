import React, { Component } from 'react';
import CardWithGraph from '../ReusableComponents/cardWithGraph';
import { connect } from 'react-redux';
import { allBucketlistAction } from '../../redux/actions/bucketlistAction';
import AddBucketlist from './bucketlist/add_bucketlist';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.allBucketlistAction()

    }
    render() {

        return (
            <div className="main-content-container container-fluid px-4">
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <span className="text-uppercase page-subtitle">Dashboard</span>
                    </div>
                </div>
                <AddBucketlist />


            </div>);
    }
}
const mapStateToProps = (state) => ({
    allLists: state.bucketlist.allLists
})
export default connect(mapStateToProps, { allBucketlistAction })(Dashboard);