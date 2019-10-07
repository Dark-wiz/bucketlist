import React from 'react';

const CardWithGraph = ({ label, value, graphValue, graphClass }) => {
    return (
        <div className="col-lg col-md-6 col-sm-6 mb-3">
            <div className="stats-small stats-small--1 card card-small">
                <div className="card-body p-0 d-flex">
                    <div className="d-flex flex-column m-auto">
                        <div className="stats-small__data text-center">
                            <span className="stats-small__label text-uppercase">{label}</span>
                            <h6 className="stats-small__value count my-3">{value}</h6>
                        </div>
                        <div className="stats-small__data">
                            {/* <span class>{graphValue}</span> */}
                            <span className={graphClass}>{graphValue}</span>
                        </div>
                    </div>
                    {/* <canvas height="120" className="blog-overview-stats-small-5"></canvas> */}
                </div>
            </div>
        </div>);
};

export default CardWithGraph;