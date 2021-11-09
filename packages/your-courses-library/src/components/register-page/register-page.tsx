import { Component, h, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';
import { EMAIL_REGEX, ERROR_MESSAGES } from '../../constants';
@Component({
  tag: 'register-page',
  styleUrl: 'register-page.css',
  shadow: false,
})
export class RegisterPage {
  @Event() formSubmitted: EventEmitter<{ email: string; password: string }>;
  @State() emailError = ERROR_MESSAGES.REQUIRED;
  @State() passwordError = ERROR_MESSAGES.REQUIRED;
  @State() confirmPasswordError = ERROR_MESSAGES.REQUIRED;
  email: string;
  password: string;
  confirmPassword: string;
  formElement: HTMLFormElement;

  private emailChanged = (event: Event) => {
    this.email = (event.target as HTMLInputElement).value;
    const target = event.target as any;
    const { validity } = target;
    if (validity.patternMismatch) {
      this.emailError = ERROR_MESSAGES.INVALID_EMAIL;
    } else if (validity.valueMissing) {
      this.emailError = ERROR_MESSAGES.REQUIRED;
    } else {
      this.emailError = '';
    }
  };

  private passwordChanged = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
    const target = event.target as any;
    const { validity } = target;
    this.passwordError = validity.valueMissing ? ERROR_MESSAGES.REQUIRED : '';
  };

  private confirmPasswordChanged = (event: Event) => {
    this.confirmPassword = (event.target as HTMLInputElement).value;
    const target = event.target as any;
    const { validity } = target;
    if (validity.valueMissing) {
      this.confirmPasswordError = ERROR_MESSAGES.REQUIRED;
    }
    this.confirmPasswordError = this.password === this.confirmPassword ? '' : ERROR_MESSAGES.PASSWORDS_DONT_MATCH;
    target.setCustomValidity(this.confirmPasswordError);
  };

  private submitForm(e) {
    e.preventDefault();
    if (!this.formElement.checkValidity()) {
      this.formElement.classList.add('was-validated');
      return;
    } else {
      this.formElement.classList.remove('was-validated');
    }
    console.log({
      email: this.email,
      password: this.password,
    });
    this.formSubmitted.emit({
      email: this.email,
      password: this.password,
    });
  }
  render() {
    return (
      <div class="register container">
        <div class="heading">
          <h2>Register</h2>
        </div>
        <form
          ref={el => (this.formElement = el as HTMLFormElement)}
          class="needs-validation"
          novalidate
          onSubmit={this.submitForm.bind(this)}
        >
          <div class="mb-3">
            <label htmlFor="emailInput" class="form-label">
              Email address
            </label>
            <input
              pattern={EMAIL_REGEX}
              onChange={this.emailChanged.bind(this)}
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="Enter your email"
              required
            />
            <div class="invalid-feedback">{this.emailError}</div>
          </div>
          <div class="mb-3">
            <label htmlFor="passwordInput" class="form-label">
              Password
            </label>
            <input
              onChange={this.passwordChanged.bind(this)}
              type="password"
              class="form-control"
              id="passwordInput"
              placeholder="Enter your password"
              required
            />
            <div class="invalid-feedback">{this.passwordError}</div>
          </div>
          <div class="mb-3">
            <label htmlFor="confirmPasswordInput" class="form-label">
              Repeat Password
            </label>
            <input
              onChange={this.confirmPasswordChanged.bind(this)}
              type="password"
              class="form-control"
              id="confirmPasswordInput"
              placeholder="Repeat your password"
              required
            />
            <div class="invalid-feedback">{this.confirmPasswordError}</div>
          </div>
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
