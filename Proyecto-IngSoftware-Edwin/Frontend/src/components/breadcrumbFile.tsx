import React from "react";


const directional:React.FC = () =>(
    <div className="breadcrumbs">
            <div className="breadcrumbs-inner">
                <div className="row m-0">
                    <div className="col-sm-4">
                        <div className="page-header float-left">
                            <div className="page-title">
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="page-header float-right">
                            <div className="page-title">
                                <ol className="breadcrumb text-right">
                                    <li><a href="#">App</a></li>
                                    <li className="active">Categorias</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)

export default directional;