import {FluentBundle, FluentResource} from "@fluent/bundle";

interface LocaleData {
  readonly locale: string;
  readonly data: string;
}

const enResource: LocaleData = {
  locale: "en",
  data: require("./main.en.fluent").default
};

const ruResource: LocaleData = {
  locale: "ru",
  data: require("./main.ru.fluent").default
};

const resources = new Map<string, LocaleData>([
  ["en", enResource],
  ["ru", ruResource]
]);

type Translator = (id: string, args?: { [key: string]: any }) => string

export function getBundleForLocale(locale: string): Translator {
  const data = resources.get(locale) ?? enResource;
  const resource = new FluentResource(data.data);

  const bundle = new FluentBundle(data.locale);
  const errors = bundle.addResource(resource);

  if (errors.length) {
    errors.forEach(error => {
      console.error(`Error processing bundle: ${error}`)
    });
  }

  return function (id: string, args: { [key: string]: any } = {}): string {
    const message = bundle.getMessage(id);

    if (message?.value) {
      return bundle.formatPattern(message.value, args)
    } else {
      return id
    }
  }
}
