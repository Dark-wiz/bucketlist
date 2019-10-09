import React, { Component } from 'react';
import { InputField } from '../../ReusableComponents/inputField';
import { connect } from 'react-redux'
import { getBucketlistAction } from '../../../redux/actions/bucketlistAction';
import { ReusableModal } from '../../ReusableComponents/modal'
import { editItemAction } from '../../../redux/actions/bucketlistItemAction';


class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
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
        const { list } = props
        this.setState({
            bucketlistId: list.bucketlistId,
            id: list.id,
            name: list.name,
            date_Created: list.date_Created,
            date_Modified: list.date_Modified,
            done: list.done
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
        this.props.editItemAction(this.state)
    }


    render() {
        const { submitted } = this.props

        return (
            <ReusableModal label="Edit item" id="editItem">
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <InputField label="Name of item" placeholder="" name="name" onChange={this.onChange} value={this.state.name} required={true} length="col-sm-6" />

                        <div class="form-group col-md-4">
                            <label>Done</label>
                            <select class="form-control" name="done" onChange={this.onChange}>
                                <option value="">Choose...</option>
                                <option value="true" selected={this.state.done == 1}>True</option>
                                <option value="false" selected={this.state.done == 0}>False</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-accent" disabled={submitted}>Update</button>
                </form>
            </ReusableModal>
        );
    }
}

const mapStateToProps = state => ({
    submitted: state.item.submitted,
    list: state.item.item

})
export default connect(mapStateToProps, { editItemAction, getBucketlistAction })(EditItem);