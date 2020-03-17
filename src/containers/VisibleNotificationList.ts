import { connect } from 'react-redux'

import { AppState } from '../store'
import NotificationList from '../components/NotificationList'
import { clearNotification } from '../store/system/actions'

const mapState = (state: AppState) => ({
  notifications: state.system.notifications
})

const mapDispatch = {
  clearNotification: (id: string) => clearNotification(id),
}

const connector = connect(mapState, mapDispatch)

export default connector(NotificationList)