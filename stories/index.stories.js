import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileTopMessage } from '../src/DileTopMessage.js';
import '../dile-top-message.js';

storiesOf('dile-top-message', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(DileTopMessage))
  .add(
    'Alternative Title',
    () => html`
      <dile-top-message .title=${'Something else'}></dile-top-message>
    `,
  );
