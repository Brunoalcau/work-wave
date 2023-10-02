type AlertType = 'danger' | 'success' | 'warning' | 'info';

export function getRandomAlertType(): AlertType {
  const alertTypes: AlertType[] = ['danger', 'success', 'warning', 'info'];
  const randomIndex = Math.floor(Math.random() * alertTypes.length);
  return alertTypes[randomIndex];
}
