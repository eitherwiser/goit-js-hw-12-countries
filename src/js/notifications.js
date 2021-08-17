import { success, notice, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

function successNotice() {
  success({
    title: 'Success',
    delay: 1000,
    text: 'The search proceeded successfully',
  });
}

function warningNotice() {
  notice({
    title: 'Warning',
    delay: 1000,
    text: 'Enter correct value',
  });
}

function errorNotice() {
  error({
    title: 'Error',
    delay: 1000,
    text: 'Too many matches found. Please enter a more specific query',
  });
}

export { successNotice, warningNotice, errorNotice };