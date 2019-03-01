import * as uuid from "uuid/v4";
import { eventManager, EVENT_TYPES } from "./eventManager";
import { ALERT_TYPES } from "./alertTypes";

const getAlertOptions = type => {
  return {
    type,
    id: uuid()
  };
};

const alerts = {
  show(content, type = ALERT_TYPES.DEFAULT) {
    const options = getAlertOptions(type);
    eventManager.emit(EVENT_TYPES.SHOW, content, options);

    return options.id;
  },
  showError(content) {
    return this.show(content, ALERT_TYPES.ERROR);
  },
  showWarning(content) {
    return this.show(content, ALERT_TYPES.WARN);
  },
  showSuccess(content) {
    return this.show(content, ALERT_TYPES.SUCCESS);
  },
  close(id) {
    eventManager.emit(EVENT_TYPES.REMOVE, id);
  }
};

export { alerts };
