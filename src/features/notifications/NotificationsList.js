import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'
import classnames from 'classnames'

import { selectAllUsers } from '../users/usersSlice'
import { selectAllNotifications, allNotificationsRead, fetchNotifications } from '../notifications/notificationsSlice'


function NotificationsList() {
    const dispatch = useDispatch()
    const notifications = useSelector(selectAllNotifications)
    const users = useSelector(selectAllUsers)
    //dispatch(fetchNotifications())
    console.log(notifications)

    useLayoutEffect(() => {
        dispatch(allNotificationsRead())  
    })

    const renderedNotifications = notifications.map(notification => {
        console.log(notification.date)
        const date = parseISO(notification.date)
        const timeAgo = formatDistanceToNow(date)
        const user = users.find(user => user.id === notification.user) || {
          name: 'Unknown User'
        }
    
        const notificationClassname = classnames('notification', {
          new: notification.isNew
        })
    
        return (
          <div key={notification.id} className={notificationClassname}>
            <div>
              <b>{user.name}</b> {notification.message}
            </div>
            <div title={notification.date}>
              <i>{timeAgo} ago</i>
            </div>
          </div>
        )
    })

    return (
        <section className="notificationsList">
            <h2>Notifications</h2>
            {renderedNotifications}
        </section>
    )
}

export default NotificationsList
