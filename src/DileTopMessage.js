import { html, css, LitElement } from 'lit-element';
import { DileSlideDownMixin } from 'dile-slide-down-mixin';
import { closeIcon, closeIconCss } from 'dile-close-icon-template';

export class DileTopMessage extends DileSlideDownMixin(LitElement) {

  static get styles() {
    return [closeIconCss, css`
      :host {
        display: block;
        --dile-close-icon-template-color: var(--dile-top-message-color, #fff)
      }
      #message {
        height: 0;
        overflow: hidden;
        transition: height 0.5s ease-in;
        -webkit-transition: height 0.5s ease-in;
      }
      section {
        display: flex;
        align-items: center;
        background-color: var(--dile-top-message-background-color, #666);
        color: var(--dile-top-message-color, #fff);
        padding: var(--dile-top-message-padding, 15px);
      }
      .content {
        flex-grow: 1;
      }
      .icon {
        min-width: var(--dile-top-message-icon-size, 20px);
        width: var(--dile-top-message-icon-size, 20px);
        cursor: pointer;
      }
    `];
  }
  static get properties() {
    return {
      /**
       * If true the feedbak box is in opened status.
       */
      opened: { type: Boolean },
      /**
       * Message to display. If message='' then the component will display the content comming from the slot.
       */
      message: { type: String },
    };
  }

  constructor() {
    super();
    this.opened = false;
    this.message = '';
  }

  firstUpdated() {
    this.display = this.shadowRoot.getElementById('message');
    if(this.opened) {
      this.open();
    }
  }

  render() {
    return html`
      <div id="message">
        <section>
          <div class="content">
            ${this.message != '' && this.message != undefined
              ? this.message
              : html`<slot></slot>`
            }
          </div>
          <div class="icon" @click="${this.close}">
            ${ closeIcon }
          </div>
        </section>
      </section>
    `;
  }

  close() {
    this.slideHide(this.display);
    this.opened = false;
  }

  open() {
    this.slideShow(this.display);
    this.opened = true;
  }

  openMessage(msg) {
    this.message = msg;
    this.open();
  }

  updated(changedProperties) {
    if(changedProperties.has('opened') && this.opened) {
      this.open();
    } 
  }
}
