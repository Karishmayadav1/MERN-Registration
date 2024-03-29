import React from 'react'
import { Link } from 'react-router-dom'

function ShowUser() {
  return (
  <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 p-0">
            <div className="side-bar">
              <Link to="/admin/das" className="sider-link">
                DashBoard
              </Link>
              <Link to="/admin/user"  className="sider-link">Users</Link>
              <Link  to="/admin/product" className="sider-link">Add Product</Link>
              <Link to="/admin/show" className="sider-link"> Show Product</Link>
              <Link className="sider-link">Log-Out</Link>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 mt-2">
                <h1>User </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default ShowUser
