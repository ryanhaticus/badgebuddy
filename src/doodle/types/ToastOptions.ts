import { ToastType } from './ToastType';

export interface ToastOptions {
  type?: ToastType;
  cancelText?: string;
  closeOnRedirect?: boolean;
}
