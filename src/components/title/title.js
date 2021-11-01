import React from "react";

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col-12 mx-auto my-2 text-title">
                <h1 className="text-capitalize">
                    {title}
                </h1>
            </div>
        </div>
    )
}