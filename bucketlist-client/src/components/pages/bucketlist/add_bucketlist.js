import React, { Component } from 'react';
import { InputField } from '../../ReusableComponents/inputField';
import { connect } from 'react-redux'
import { addBucketlistAction, allBucketlistAction, getBucketlistAction, deleteBucketlistAction } from '../../../redux/actions/bucketlistAction';
import DatatablePage from '../../ReusableComponents/dataTables';
import { BounceLoader } from "react-spinners";
import EditBucketlist from './editBucketlist';
import CardWithGraph from '../../ReusableComponents/cardWithGraph';
import AddItem from '../bucketlistitem/add_item';
import { Link } from "react-router-dom";

class AddBucketlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            created_By: 'admin',
            items: [],
            date_Created: "",
            date_Modified: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    getBucketlist = (id) => {
        const { allLists } = this.props
        const item = allLists.find(list => list.id == id)
        this.props.getBucketlistAction(item)
    }

    deleteItem = (id) => {
        this.props.deleteBucketlistAction(id)
    }

    onChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.props.allBucketlistAction()
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state, 'state')
        this.props.addBucketlistAction(this.state)
    }
    render() {
        const { submitted, allLists } = this.props
        const allBucketlists = []
        if (allLists != null) {
            allLists.map((bucket, index) => {
                return allBucketlists.push({
                    serial: index + 1,
                    name: bucket.name,
                    createdBy: bucket.created_By,
                    dateCreated: bucket.date_Created,
                    dateUpdated: bucket.date_Modified,
                    add: (
                        <i className="material-icons col-md-2"
                            style={{ fontSize: '35px', marginLeft: '-15px', cursor: 'pointer' }} onClick={() => this.getBucketlist(bucket.id)}
                            id={bucket.id}
                            data-target="#addBucketItem"
                            data-toggle="modal">add_circle</i>
                    ),
                    list: (
                        <Link to={`/all_bucketlistItems/${bucket.id}`}>
                            <button className="btn btn-primary" type="button" onClick={() => this.getBucketlist(bucket.id)}>
                                View
                          </button>
                        </Link>),
                    edit: (
                        <button
                            className="btn btn-primary"
                            onClick={() => this.getBucketlist(bucket.id)}
                            id={bucket.id}
                            data-target="#editBucketlist"
                            data-toggle="modal"
                            type="button"
                        >
                            Edit
                        </button>),
                    delete: (<button
                        className="btn btn-primary"
                        onClick={() => this.deleteItem(bucket.id)}
                        id={bucket.id}
                        data-toggle="modal"
                        type="button"
                    >
                        Delete
                        </button>)
                })
            })
        }

        const data = {
            columns: [
                {
                    label: "S/N",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Name",
                    field: "name",
                    sort: "asc"
                },
                {
                    label: "Created by",
                    field: "createdBy",
                    sort: "asc"
                },
                {
                    label: "Date created",
                    field: "dateCreated",
                    sort: "asc"
                },
                {
                    label: "Date updated",
                    field: "dateUpdated",
                    sort: "asc"
                },
                {
                    label: "Add item",
                    field: "add",
                    sort: "asc"
                },
                {
                    label: "View list",
                    field: "list",
                    sort: "asc"
                },
                {
                    label: "Edit",
                    field: "edit",
                    sort: "asc"
                },
                {
                    label: "Delete",
                    field: "delete",
                    sort: "asc"
                }
            ],
            rows: allBucketlists
        }


        return (

            <div>
                <div className="row">
                    <div className="row push">
                        <CardWithGraph label="Total No of Bucketlist" value={this.props.allLists.length > 0 ? this.props.allLists.length : 0} graphClass="stats-small__percentage stats-small__percentage" />
                    </div>

                    <div className="col-lg-3">
                        <div className="card card-small mb-4">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col">
                                            <form onSubmit={this.onSubmit}>
                                                <div className="form-row">
                                                    <InputField label="Name of Bucketlist" placeholder="" name="name" value={this.state.name} onChange={this.onChange} required={true} length="col-sm-12" />
                                                </div>
                                                <button type="submit" className="btn btn-accent" disabled={submitted}>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <ul className="list-group list-group-flush">
                            <div className="row">
                                <div className="col-md-12">
                                    {allLists.length > 0 ? (
                                        <DatatablePage data={data} />
                                    ) : (
                                            <div className="col-md-push-5" style={{ marginLeft: "45%" }}>
                                                <BounceLoader
                                                    sizeUnit={"px"}
                                                    size={80}
                                                    color={"#123abc"}
                                                    loading={true}
                                                />
                                            </div>
                                        )}
                                    <EditBucketlist />
                                    <AddItem />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    submitted: state.bucketlist.submitted,
    allLists: state.bucketlist.allLists
})
export default connect(mapStateToProps, { addBucketlistAction, allBucketlistAction, getBucketlistAction, deleteBucketlistAction })(AddBucketlist);