/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LoginPage {
    }
    interface RegisterPage {
    }
}
declare global {
    interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {
    }
    var HTMLLoginPageElement: {
        prototype: HTMLLoginPageElement;
        new (): HTMLLoginPageElement;
    };
    interface HTMLRegisterPageElement extends Components.RegisterPage, HTMLStencilElement {
    }
    var HTMLRegisterPageElement: {
        prototype: HTMLRegisterPageElement;
        new (): HTMLRegisterPageElement;
    };
    interface HTMLElementTagNameMap {
        "login-page": HTMLLoginPageElement;
        "register-page": HTMLRegisterPageElement;
    }
}
declare namespace LocalJSX {
    interface LoginPage {
        "onFormSubmitted"?: (event: CustomEvent<{ email: string; password: string }>) => void;
    }
    interface RegisterPage {
        "onFormSubmitted"?: (event: CustomEvent<{ email: string; password: string }>) => void;
    }
    interface IntrinsicElements {
        "login-page": LoginPage;
        "register-page": RegisterPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "login-page": LocalJSX.LoginPage & JSXBase.HTMLAttributes<HTMLLoginPageElement>;
            "register-page": LocalJSX.RegisterPage & JSXBase.HTMLAttributes<HTMLRegisterPageElement>;
        }
    }
}
