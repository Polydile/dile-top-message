import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileTopMessage } from '../src/DileTopMessage.js';
import '../dile-top-message.js';

storiesOf('dile-top-message', module)
  .addDecorator(withKnobs)
  
  .add(
    'Message from slot',
    () => html`
      <dile-top-message opened>This message comes from the slot</dile-top-message>
    `,
  )

  .add(
    'Message from property',
    () => html`
      <dile-top-message message="Hi to everyone!" opened></dile-top-message>
    `,
  )

  .add(
    'Open / close button',
    () => html`
      <dile-top-message message="Open and close..." id="msg"></dile-top-message>
      <br>
      <button @click="${() => document.getElementById('msg').open() }">Open</button>
      <button @click="${() => document.getElementById('msg').close() }">Close</button>
    `,
  )

  .add(
    'Customized',
    () => html`
      <style>
        dile-top-message {
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 1.8em;
          --dile-top-message-background-color: red;
          --dile-top-message-color: white;
          --dile-top-message-padding: 30px;
          --dile-top-message-icon-size: 36px;
        }
      </style>
      <dile-top-message message="Open and close..." id="msg"></dile-top-message>
      <br>
      <button @click="${() => document.getElementById('msg').open() }">Open</button>
      <button @click="${() => document.getElementById('msg').close() }">Close</button>
    `,
  )

  .add(
    'Diferent messages',
    () => html`
      <dile-top-message id="msg"></dile-top-message>
      <br>
      <button @click="${() => document.getElementById('msg').openMessage('Hello!') }">Say hello</button>
      <button @click="${() => document.getElementById('msg').openMessage('Bye!') }">Say Bye</button>
    `,
  )

  
