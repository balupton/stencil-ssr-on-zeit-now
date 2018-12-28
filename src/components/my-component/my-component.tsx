import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string
  @Prop() middle: string
  @Prop() last: string
  @Prop({ context: 'isServer' }) private isServer: boolean

  componentWillLoad() {
    if (this.isServer === false) {
      this.first = 'preloaded'
    }
  }

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    )
  }

  render() {
    return <div>Hello, World! I'm {this.format()}</div>
  }
}
