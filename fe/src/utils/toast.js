import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ type = 'default', text }) {
  toastEventManager.emit('addtoast', { type, text });
}
