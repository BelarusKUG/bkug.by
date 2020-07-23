declare module "@fluent/bundle" {
  export interface FluentNode {
    readonly value: any;
  }

  export class FluentResource {
    constructor(ftl: string);
  }

  export class FluentBundle {
    constructor(locales: string | string[]);
    getMessage(id: string): FluentNode | undefined;
    formatPattern(message: FluentNode[], args?: object, errors?: Array<string | Error>): string;
    addResource(res: FluentResource): string[];
  }
}
