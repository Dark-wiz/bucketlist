import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddItem from './add_item';
import { allItemAction, getItemAction, deleteItemAction } from '../../../redux/actions/bucketlistItemAction';
import { BounceLoader } from "react-spinners";
import EditItem from './edit_item';
import DatatablePage from '../../ReusableComponents/dataTables';
import CardWithGraph from '../../ReusableComponents/cardWithGraph';
import { toTimestamp } from '../../../utils';


class AllItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bucketId: ''
        }
    }

    componentDidMount() {
        this.props.allItemAction(this.props.match.params.bucketlistId)
    }

    getItem = (id) => {
        const allItems = this.props.allBucklistitems
        const item = allItems.find(item => item.id == id)
        this.props.getItemAction(item)
    }
    deleteItem = (id) => {
        this.props.deleteItemAction(this.props.match.params.bucketlistId, id)
    }
    render() {
        const { allBucklistitems } = this.props
        const allItems = []

        if (allBucklistitems != null) {
            allBucklistitems.map((item, i) => {
                return allItems.push(
                    {
                        serial: i + 1,
                        name: item.name,
                        dateCreated: item.date_Created,
                        dateUpdated: item.date_Modified,
                        edit: (
                            <button
                                className="btn btn-primary"
                                onClick={() => this.getItem(item.id)}
                                id={item.id}
                                data-target="#editItem"
                                data-toggle="modal"
                                type="button"
                            >
                                Edit
                            </button>),
                        delete: (<button
                            className="btn btn-primary"
                            onClick={() => this.deleteItem(item.id)}
                            id={item.id}
                            data-toggle="modal"
                            type="button"
                        >
                            Delete
                            </button>)
                    }
                )
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
            rows: allItems
        }
        return (

            <div>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <span className="text-uppercase page-subtitle">All items under bucketlist</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 push-1">
                        <CardWithGraph label="Total No of Items" value={allBucklistitems.length > 0 ? allBucklistitems.length : 0} graphClass="stats-small__percentage stats-small__percentage" />
                    </div>
                    <div className="col-lg-12">
                        <ul className="list-group list-group-flush">
                            <div className="row">
                                <div className="col-md-12">
                                    {allBucklistitems.length > 0 ? (
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
                                    <EditItem />
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
    submitted: state.item.submitted,
    allBucklistitems: state.item.allItems,
    singleBucketlist: state.bucketlist.list
})
export default connect(mapStateToProps, { allItemAction, getItemAction, deleteItemAction })(AllItems);