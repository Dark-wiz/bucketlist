import React from "react";
import { MDBDataTable, Row, Col, Card, CardBody } from "mdbreact";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import PropTypes from "prop-types";

const DatatablePage = ({ data, searching }) => {
  return (
    <Row className="mb-4">
      <Col md="12">
        <Card>
          <CardBody>
            <MDBDataTable responsive hover data={data} searching={searching} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

DatatablePage.defaultProps = {
  searching: true
};
export default DatatablePage;
