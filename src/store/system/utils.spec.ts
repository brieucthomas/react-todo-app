import { createNotification, createInfoNotification, createSuccessNotification, createErrorNotification, createWarningNotification } from "./utils"
import { Notification, NotificationType } from "./types"

describe('system utils', () => {
  it('should create a notification from a message', () => {
    const n = createNotification('Note Archived.')
    expect(n.id && n.id.length > 0).toBeTruthy()
    expect(n.message).toEqual('Note Archived.')
    expect(n.type).toEqual(NotificationType.Info)
    expect(n.duration).toEqual(6000)        
  })

  it('should create a notification from a message and a type', () => {
    const n = createNotification('Note Not Archived.', NotificationType.Error)
    expect(n.id && n.id.length > 0).toBeTruthy()
    expect(n.message).toEqual('Note Not Archived.')
    expect(n.type).toEqual(NotificationType.Error)
    expect(n.duration).toEqual(6000)        
  })  

  it('should create an info notification', () => {
    const n = createInfoNotification('Note Archived.')
    expect(n.id && n.id.length > 0).toBeTruthy()
    expect(n.message).toEqual('Note Archived.')
    expect(n.type).toEqual(NotificationType.Info)
    expect(n.duration).toEqual(6000)        
  })  

  it('should create a success notification', () => {
    const n = createSuccessNotification('Note Archived.')
    expect(n.id && n.id.length > 0).toBeTruthy()
    expect(n.message).toEqual('Note Archived.')
    expect(n.type).toEqual(NotificationType.Success)
    expect(n.duration).toEqual(6000)        
  })    

  it('should create a warning notification', () => {
    const n = createWarningNotification('Note Archived.')
    expect(n.id && n.id.length > 0).toBeTruthy()
    expect(n.message).toEqual('Note Archived.')
    expect(n.type).toEqual(NotificationType.Warning)
    expect(n.duration).toEqual(6000)        
  })      

  it('should create an error notification', () => {
    const n = createErrorNotification('Note Archived.')
    expect(n.id && n.id.length > 0).toBeTruthy()
    expect(n.message).toEqual('Note Archived.')
    expect(n.type).toEqual(NotificationType.Error)
    expect(n.duration).toEqual(6000)        
  })      
})