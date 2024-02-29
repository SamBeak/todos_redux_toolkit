import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <>
        <div id="header">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h3>TODO LIST</h3>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
    </>
  )
}
