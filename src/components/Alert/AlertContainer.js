import React, { Component } from "react";
import PropTypes from "prop-types";
import DefaultTemplate from "./DefaultAlertTemplate";
import DefaultCloseButton from "./DefaultAlertCloseBtn";
import { eventManager, EVENT_TYPES } from "./eventManager";

class AlertContainer extends Component {
  static propTypes = {
    template: PropTypes.element,
    closeButton: PropTypes.element
  };

  static defaultProps = {
    template: DefaultTemplate,
    closeButton: DefaultCloseButton
  };

  state = { alerts: [] };

  componentDidMount() {
    eventManager.on(EVENT_TYPES.SHOW, (content, options = {}) => {
      const alert = {
        content,
        ...options
      };

      const { alerts } = this.state;
      const newAlerts = [...alerts, alert];
      this.setState({ alerts: newAlerts });
    });

    eventManager.on(EVENT_TYPES.REMOVE, alertId => {
      this.closeAlert(alertId);
    });
  }

  componentWillUnmount() {
    eventManager.off(EVENT_TYPES.SHOW);
    eventManager.off(EVENT_TYPES.REMOVE);
  }

  closeAlert = id => {
    const { alerts } = this.state;
    const idxOfAlert = alerts.findIndex(alert => alert.id === id);
    if (idxOfAlert > -1) {
      const newAlerts = [...alerts];
      newAlerts.splice(idxOfAlert, 1);
      this.setState({ alerts: newAlerts });
    } else {
      console.warn(`Could not close alert with id: ${id}`);
    }
  };

  render() {
    const { template, closeButton } = this.props;
    const Template = template;
    const CloseButton = closeButton;
    const { alerts } = this.state;
    return alerts.map(alert => {
      let content = alert.content;
      if (React.isValidElement(alert.content)) {
        content = React.cloneElement(alert.content, alert.content.props);
      }
      return (
        <Template
          alertType={alert.type}
          key={alert.id}
          id={`alert-${alert.id}`}
        >
          {content}
          <CloseButton close={this.closeAlert.bind(this, alert.id)} />
        </Template>
      );
    });
  }
}

export default AlertContainer;
