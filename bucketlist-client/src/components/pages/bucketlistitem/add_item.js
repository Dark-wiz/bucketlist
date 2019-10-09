import React, { Component } from 'react';
import { InputField } from '../../ReusableComponents/inputField';
import { connect } from 'react-redux'
import { getBucketlistAction } from '../../../redux/actions/bucketlistAction';
import { ReusableModal } from '../../ReusableComponents/modal'
import { addItemAction } from '../../../redux/actions/bucketlistItemAction';


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date_Created: "",
            date_Modified: "",
            done: false,
            bucketlistId: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentWillReceiveProps(props) {
        const { id } = props
        this.setState({
            bucketlistId: id
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
        this.props.addItemAction(this.state)
    }


    render() {
        const { submitted } = this.props

        return (
            <ReusableModal label="Add item to bucketlist" id="addBucketItem">
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <InputField label="Name of item" placeholder="" name="name" onChange={this.onChange} required={true} length="col-sm-6" />
                        <div class="form-group col-md-4">
                            <label>Done</label>
                            <select class="form-control" name="done" onChange={this.onChange}>
                                <option value="">Choose...</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-accent" disabled={submitted}>Add</button>
                </form>
            </ReusableModal>
        );
    }
}

const mapStateToProps = state => ({
    submitted: state.item.submitted,
    id: state.bucketlist.list.id
})
export default connect(mapStateToProps, { addItemAction, getBucketlistAction })(AddItem);