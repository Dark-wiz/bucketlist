import React, { Component } from 'react';
import { InputField } from '../../ReusableComponents/inputField';
import { connect } from 'react-redux'
import { editBucketlistAction, getBucketlistAction } from '../../../redux/actions/bucketlistAction';
import { ReusableModal } from '../../ReusableComponents/modal'


class EditBucketlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            created_By: '',
            date_Created: "",
            date_Modified: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentWillReceiveProps(props) {
        console.log(props, 'inner props')
        const { list } = props
        this.setState({
            name: list.name,
            id: list.id,
            created_By: list.created_By,
            date_Created: list.date_Created,
            date_Modified: list.date_Modified
        })
    }

    onChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state, 'state')
        this.props.editBucketlistAction(this.state)
    }


    render() {
        const { submitted } = this.props

        return (
            <ReusableModal label="Edit bucketlist" id="editBucketlist">

                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <InputField label="Name of Bucketlist" placeholder="" name="name" value={this.state.name} onChange={this.onChange} required={true} length="col-sm-6" />

                        <InputField label="Name of Bucketlist" placeholder="" name="created_By" value={this.state.created_By} onChange={this.onChange} required={true} length="col-sm-6" />
                    </div>
                    <button type="submit" className="btn btn-accent" disabled={submitted}>Update</button>
                </form>
            </ReusableModal>
        );
    }
}

const mapStateToProps = state => ({
    submitted: state.bucketlist.submitted,
    list: state.bucketlist.list
})
export default connect(mapStateToProps, { editBucketlistAction, getBucketlistAction })(EditBucketlist);