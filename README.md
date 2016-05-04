# Redux DevTools Clipboard

Dispatch your actions manually to test if your app reacts well.

### Installation

`npm install --save-dev redux-devtools-clipboard`

### Usage

You should use `<Clipboard>` in combination with `<MultipleMonitors>` from [`redux-devtools-multiple-monitors`](https://github.com/YoruNoHikage/redux-devtools-multiple-monitors).

To use multiple monitors into the `<DockMonitor>`:

```jsx
import React from 'react';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Clipboard from 'redux-devtools-clipboard';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={false}>
    <MultipleMonitors>
      <LogMonitor />
      <Clipboard />
    </MultipleMonitors>
  </DockMonitor>
);
```

Then, just write an JSON action in the field, click on Dispatch, and that's all!

### Props

Name                  | Description
-------------         | -------------
`theme`               | _Same as in LogMonitor's package_ Either a string referring to one of the themes provided by [redux-devtools-themes](https://github.com/gaearon/redux-devtools-themes) (feel free to contribute!) or a custom object of the same format. Optional. By default, set to [`'nicinabox'`](https://github.com/gaearon/redux-devtools-themes/blob/master/src/nicinabox.js).

### License

MIT
