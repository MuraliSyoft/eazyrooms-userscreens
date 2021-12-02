import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./settings.css";
import SearchBar from "../searchbar/SearchBar";
import AddPipeline from "../modals/AddPipeline";

function PipeLine() {
    let history = useHistory();
    const [activeStep, setActiveStep] = useState('Embed as widget');
    const [addPipeLineModal, setAddPipeLineModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    const tableheader = [

        {
            header: "Name",
            id: "3",
            userName: "Pipe line 01",
            permission: "Permission"

        },

        {
            header: "Permission",
            id: "5",
            userName: "Pipe line 02",
            permission: "Permission"
        }
    ]

    const dashSidebarOpts = [
        {
            name: "Dashboard",
            route: "/",
            icon: "fas fa-tachometer-alt",
        },
        {
            name: "Subscriptions",
            route: "/super-admin/bid-history",
            icon: "fas fa-history"
        },
        {
            name: "Settings",
            route: "/working-hours",
            icon: "far fa-file-alt"
        },
        {
            name: "Integrations",
            route: "/superadmin/userlogs",
            icon: "fas fa-user"
        },
        {
            name: "CRM",
            route: "/superadmin/bidproducts",
            icon: "fas fa-bold"
        },
        {
            name: "Appointments",
            route: "/superadmin/gateways",
            icon: "fas fa-torii-gate"
        },
        {
            name: "Chat Consoles",
            route: "/superadmin/sms",
            icon: "fas fa-comment"
        },
        {
            name: "Calenders",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        },

        {
            name: "Logout",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        }
    ]

    const settingsTabsData = [
        {
            tabs: "Embed as widget",
            route: "/embed-widgets",
            icon: "fas fa-tachometer-alt",
        },
        {
            tabs: "Company Settings",
            route: "/company-settings",
            icon: "fas fa-history"
        },
        {
            tabs: "Working Hours",
            route: "/working-hours",
            icon: "far fa-file-alt"
        },
        {
            tabs: "Payment Settings",
            route: "/payment-settings",
            icon: "fas fa-user"
        },
        {
            tabs: "Manage Profile",
            route: "/manage-profile",
            icon: "fas fa-bold"
        },
        {
            tabs: "Change Passwords",
            route: "/change-password",
            icon: "fas fa-lock"
        },
        {
            tabs: "Staff",
            route: "/staff",
            icon: "fas fa-comment"
        },
        {
            tabs: "Services",
            route: "/service",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "Role",
            route: "/role",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "PipeLine",
            route: "/pipeline",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "Stage",
            route: "/stage",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "Source",
            route: "/source",
            icon: "fas fa-ticket-alt"
        },
    ]

    function openNav() {
        document.getElementById("main").style.marginLeft = "19%";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("textHide").style.display = "block"

        var hideText, i;
        hideText = document.querySelectorAll("#textHide");

        for (i = 0; i < hideText.length; i++) {
            hideText[i].style.display = "block";
        }
    }

    function closeNav() {
        // document.getElementById("sidebarTexts").style.display = "none";
        document.getElementById("main").style.marginLeft = "80px";
        document.getElementById("mySidebar").style.width = "75px";
        document.getElementById("openNav").style.display = "inline-block";

        var hideText, i;
        hideText = document.querySelectorAll("#textHide");
        for (i = 0; i < hideText.length; i++) {
            hideText[i].style.display = "none";
        }
    }

    const sidebarClick = (item, index) => {
        setActiveStep(item.name)
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.name }
        })
    }

    const settingsSidebarClick = (item, index) => {
        setActiveStep(item.tabs)
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.tabs }
        })
    }

    const handleLogout = () => {
        localStorage.clear();
        return history.push('/')
    }
    return (
        <>
            <div className="custom-bg-light custom-padding">
                <aside id="mySidebar" className="sidebar">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="project-name d-flex align-items-center" style={{ color: "#fff", fontWeight: "500", fontSize: "15px" }}>
                            <i className="far fa-calendar-alt text-white py-2 fa-2x" style={{ marginLeft: "22px", marginRight: "10px" }}></i> <span id="textHide" style={{ fontSize: "18px" }}>Appointmently</span>
                        </div>
                        <a id="textHide" className="red cursor-pointer" onClick={closeNav}>×</a>
                    </div>

                    <div className="border-top">
                        <ul className="list-group" style={{ marginLeft: "5px" }}>
                            {
                                dashSidebarOpts.map((item, index) =>
                                    <li id="sidebarTexts" onClick={() => sidebarClick(item, index)}
                                        className={activeStep === item.name ? 'hamburger sidebar-texts F custom-list-group-item border-0 d-flex align-items-center mb-2' : 'mb-2 hamburger sidebar-texts sidebar-inactive-tabs custom-list-group-item border-0 d-flex align-items-center'}
                                        data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className={item.icon} style={{ marginRight: "2px", width: "12%" }}></i>
                                        <div id="textHide" style={{ width: "88%" }}>{item.name}</div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </aside>

                <div id="main" style={{ marginLeft: "243px", marginRight: "4px" }}>
                    <div onClick={openNav}>
                        <div className="bg-white p-1">
                            <div style={{ marginLeft: "26px", marginRight: "23px" }}>
                                <div className="d-flex justify-content-between mb-2" style={{ paddingTop: "11px" }}>
                                    <div className="align-items-center">
                                        <i className="green fas fa-bars sidebar-icon cursor-pointer" id="openNav"></i>

                                    </div>
                                    <span className="cursor-pointer"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                    ><i className="far fa-user rounded-circle"></i> Admin</span>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li onClick={() => handleLogout()}><a className="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div style={{ height: "550px", overflow: "auto" }}>
                            <div className="row mx-2 bg-light">
                                <div className="cols-sm-12 col-md-3 p-3">
                                    <div className="bg-white p-3">
                                        {
                                            settingsTabsData.map((item, index) =>
                                                <li onClick={() => settingsSidebarClick(item, index)}
                                                    className={activeStep === item.tabs ? 'hamburger sidebar-texts sidebar-active-tab custom-list-group-item border-0 d-flex align-items-center mb-2' : 'mb-2 hamburger sidebar-texts sidebar-inactive-tab custom-list-group-item border-0 d-flex align-items-center'}
                                                    data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <i className={item.icon} style={{ marginRight: "2px", width: "12%" }}></i>
                                                    <div style={{ width: "88%" }}>{item.tabs}</div>
                                                </li>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="cols-sm-12 p-3 col-md-9">
                                    <div className="embedAswidget mb-4" style={{ fontSize: "18px" }}>PipeLine</div>
                                    <div className="d-flex justify-content-end mb-3">
                                        <button type="button" className="btn btn-secondary" style={{ fontSize: "13px" }}
                                            onClick={() => setAddPipeLineModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                                        >Add Pipe line</button>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <select className="form-select normal-text w-50 form-select" aria-label=".form-select-sm example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8 align-items-center">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <button type="button" className="btn btn-outline-secondary normal-text px-3">CSV</button>
                                                    <button type="button" className="btn btn-outline-secondary normal-text px-3 mx-2">Excel</button>
                                                    <button type="button" className="btn btn-outline-secondary normal-text px-3">Print</button>

                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <SearchBar />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <table className="mb-5 table">
                                        <thead>
                                            <tr>
                                                {
                                                    tableheader.map((item, index) =>
                                                        <th className="border-bottom-0 table-header" style={{ color: "#000" }} scope="col">{item.header}</th>
                                                    )
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tableheader.map((item, index) =>
                                                    <tr key={index} className="table-hover">
                                                        <td className="table-text table-body-text">{item.userName}</td>
                                                        <td className="table-text table-body-text">{item.permission}</td>

                                                        <td className="table-text table-body-text"><i className="delete-icon-bg far fa-trash-alt text-white"></i></td>

                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    <div className="row mb-5">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div style={{ color: "#000", fontSize: "13px" }}>
                                                Showing page 1 of 2
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end">
                                            <button type="button" className="btn btn-secondary">Previous</button>
                                            <button type="button" className="btn buttonColors mx-2">1</button>
                                            <button type="button" className="btn btn-secondary px-3">Next</button>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-2">
                                        <button className="btn buttonColors">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AddPipeline
                show={addPipeLineModal.modal}
                onHide={() => setAddPipeLineModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={addPipeLineModal}
            />
        </>
    );
}

export default PipeLine;
