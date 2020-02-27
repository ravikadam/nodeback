import { struct, maybe, String, Date, Boolean, Any } from 'tcomb'
import { define } from '../../containerHelper'

const scheduleEmailMeta = struct({
  id: maybe(String),
  user_id: String,
  due_date: Date,
  stop_date: maybe(Date),
  email_type: String,
  is_active: maybe(Boolean),
  request_meta: maybe(Any),
  response_meta: maybe(Any),
  created_by: maybe(String),
  updated_by: maybe(String)
})

scheduleEmailMeta.prototype.getExecutionArn = function() {
  if (this.response_meta && this.response_meta.executionArn) {
    return this.response_meta.executionArn
  }
}

scheduleEmailMeta.prototype.getId = function() {
  return this.id
}

scheduleEmailMeta.prototype.getResponseMeta = function() {
  return this.response_meta
}

scheduleEmailMeta.prototype.setResponseMeta = function(response, instance) {
  const scheduleEmailMeta2 = scheduleEmailMeta.update(instance, {
    response_meta: { $set: response }
  })
  return scheduleEmailMeta2
}

scheduleEmailMeta.prototype.getRequestMeta = function() {
  return this.request_meta
}

scheduleEmailMeta.prototype.getData = function() {
  return {
    user_id: this.user_id,
    due_date: this.due_date,
    email_type: this.email_type,
    request_meta: this.request_meta,
    response_meta: this.response_meta,
    created_by: this.user_id,
    updated_by: this.user_id
  }
}

module.exports = define('scheduleEmailMetaDomain', () => {
  return scheduleEmailMeta
})
