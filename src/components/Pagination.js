import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const Pagination = () => {
    return (
        <MDBRow>
            <MDBCol>
                <MDBPagination circle>
                    <MDBPageItem disabled>
                        <MDBPageNav className="page-link">
                            <span>Start</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem disabled>
                        <MDBPageNav className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem active>
                        <MDBPageNav className="page-link">
                            1 <span className="sr-only">(current)</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav className="page-link">
                            &raquo;
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav className="page-link">
                            Ostatnia strona
                        </MDBPageNav>
                    </MDBPageItem>
                </MDBPagination>
            </MDBCol>
        </MDBRow>
    )
}

export default Pagination;