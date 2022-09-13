import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({
  type = 'default',
  text,
  duration = 5000,
}) {
  toastEventManager.emit('addtoast', { type, text, duration });
}
