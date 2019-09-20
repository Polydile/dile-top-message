# \<dile-top-message>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i dile-top-message
```

## Usage

```html
<script type="module">
  import 'dile-top-message/dile-top-message.js';
</script>

<dile-top-message opened>Hi from Polydile!!</dile-top-message>
```

Also is posible to set the display message in the "message" property, and open the interface with the open() method.

```html
<dile-top-message message="This is other message" id="msgElement"></dile-top-message>

<script>
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('msgElement').open();
});
</script>
```

Another possibility is to simply call the openMessage() method, setting the message in the method parameter. 

```html
<dile-top-message id="msgElement"></dile-top-message>

<script>
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('msgElement').openMessage('Setting a message and opening the interface in one step');
});
</script>
```

## Properties

- **opened**: If true the feedbak box is in opened status.
- **message**: Message to display. Remember that, if message='' or undefined, then the component will display the content comming from the slot.

## Events

- **dile-top-message-closed-by-user**: This event is dispatched when the component closes by a user click on the close icon.

## Style customization

You can customize the message box interface by using the CSS custom properties bellow.

Custom property | Description | Default
----------------|-------------|---------
--dile-top-message-color | Message text and icon color | #fff
--dile-top-message-background-color | Message background color | #666
--dile-top-message-padding | Padding for the message box | 15px
--dile-top-message-icon-size | Close icon size | 20px