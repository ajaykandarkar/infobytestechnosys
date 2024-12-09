import React from "react";
import { useNotifications } from "../hooks/NotificationContext";

export const NavBar = () => {
  const { notifications, unreadCount, markAsRead, dismissNotification } = useNotifications();
  return (
    <>
      <nav
        className="navbar navbar-light navbar-expand-lg shadow-sm"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Notification Task
          </a>
          <div className="me-4 d-flex align-items-center">
            <button
              className="btn border-0 bg-transparent p-0 position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="fa-solid fa-bell fs-4"></i>
              {unreadCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {unreadCount}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Notifications</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {notifications.length > 0 ? (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="d-flex justify-content-between align-items-center border-bottom py-2"
                  >
                    <div>
                      <p
                        className={`mb-0 ${
                          notif.read ? "text-muted" : "fw-bold"
                        }`}
                      >
                        {notif.message}
                      </p>
                    </div>
                    <div>
                      {!notif.read && (
                        <button
                          className="btn btn-sm btn-success me-1"
                          onClick={() => markAsRead(notif.id)}
                        >
                           Read
                        </button>
                      )}
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dismissNotification(notif.id)}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">
                  No notifications available.
                </p>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
