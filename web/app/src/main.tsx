import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom";
import {ErrorMessage, ErrorMessageProps, Field, FormikBag, FormikProps, withFormik} from "formik";
import {getBundleForLocale} from "./i18n/fluent";

declare var _BUILD_TIME: string;

console.log("Build:", new Date(_BUILD_TIME).toLocaleString());

const i18n = getBundleForLocale("ru");

const initialValues: KotlinJobsFormValues = {
  positionAgreement: false,
  frequencyAgreement: false,
  title: "",
  company: "",
  location: "",
  occupation: "Full-time",
  type: "Office",
  salary: "",
  contact: "",
  description: ""
};

// TypeScript FTW!!!
type FormErrors = Partial<{ -readonly [key in keyof KotlinJobsFormValues]: string }>;

function validate(values: KotlinJobsFormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.positionAgreement) errors.positionAgreement = i18n("Position-agreement-unchecked");
  if (!values.frequencyAgreement) errors.frequencyAgreement = i18n("Frequency-agreement-unchecked");
  if (!values.title) errors.title = i18n("Title-is-required");
  if (!values.location) errors.location = i18n("Location-is-required");
  if (!values.company) errors.company = i18n("Company-is-required");
  if (!values.salary) errors.salary = i18n("Salary-is-required");
  if (!values.contact) errors.contact = i18n("Contact-is-required");
  if (!values.description) errors.description = i18n("Description-is-required");
  if (values.description && values.description.length > 1500) {
    errors.description = i18n("Description-max-length", {"length": values.description.length});
  }
  return errors;
}

function onSubmit(
  values: KotlinJobsFormValues,
  formikBag: FormikBag<BuildFormProps, KotlinJobsFormValues>
): void {
  formikBag.props.callback(`Вакансия: ${values.title}
Локация: ${values.location}
Компания: ${values.company}
Формат работы: ${values.type}
Занятость: ${values.occupation}
Зарплатная вилка: ${values.salary}

${values.description}

Контакт: @${values.contact}
`);
  formikBag.setSubmitting(false);
  scrollToRendered();
}

function scrollToRendered() {
  if (!window.scroll) return;

  window.scroll({
    top: window.outerHeight,
    behavior: "smooth"
  });
}

const BuildForm = withFormik<BuildFormProps, KotlinJobsFormValues>({
  mapPropsToValues: () => (initialValues),
  validate: validate,
  handleSubmit: (values, actions) => onSubmit(values, actions),
  displayName: "KotlinJobsBuildForm",
})(BuildFormFields);

function BuildFormFields(props: FormikProps<KotlinJobsFormValues>) {
  const {
    handleSubmit,
    isSubmitting,
    isValid,
    dirty
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="checkbox">
          <Field component="input" type="checkbox" name="positionAgreement" autoFocus/>
          <span style={{paddingLeft: 10}}>Я хочу опубликовать вакансию на позицию Kotlin разработчика</span>
        </label>
        <ErrorHelper name="positionAgreement"/>
      </div>

      <div className="field">
        <label className="checkbox">
          <Field component="input" type="checkbox" name="frequencyAgreement"/>
          <span style={{paddingLeft: 10}}>Репост вакансии происходит с частотой в один месяц. Цена повторного размещения в течение месяца - 30€, оплата через <a href="https://opencollective.com/kotlin-community">Kotlin Community Telegram OpenCollective</a>.</span>
        </label>
        <ErrorHelper name="frequencyAgreement"/>
      </div>

      <div className="field">
        <label className="label">Вакансия *</label>
        <div className="control">
          <Field component="input" className="input" type="text" name="title" placeholder="Senior Backend Engineer"/>
          <ErrorHelper name="title"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Локация *</label>
        <div className="control">
          <Field className="input" type="text" name="location" placeholder="Украина, Киев"/>
          <ErrorHelper name="location"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Компания *</label>
        <div className="control">
          <Field className="input" type="text" name="company" placeholder="KoSolutions (https://kosolutions.com)"/>
          <ErrorHelper name="company"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Формат работы</label>
        <div className="control">
          <div className="select">
            <Field component="select" name="type">
              <option value="Office">Office</option>
              <option value="Remote">Remote</option>
            </Field>
          </div>
          <ErrorHelper name="type"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Занятость</label>
        <div className="control">
          <div className="select">
            <Field component="select" name="occupation">
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </Field>
          </div>
          <ErrorHelper name="occupation"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Зарплатная вилка *</label>
        <div className="control">
          <Field className="input" type="text" name="salary" placeholder="2000$-3000$"/>
          <ErrorHelper name="salary"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Ник в Telegram *</label>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control">
              <a className="button is-static">
                @
              </a>
            </p>
            <p className="control">
              <Field className="input" type="text" name="contact" placeholder="Kotliner"/>
              <ErrorHelper name="contact"/>
            </p>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Описание *</label>
        <div className="control">
          <Field component="textarea" name="description" className="textarea" placeholder="Описание в свободной форме"/>
          <ErrorHelper name="description"/>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button type="submit"
                  className="button is-primary"
                  disabled={isSubmitting || !isValid || !dirty}>
            Сгенерировать
          </button>
        </div>
      </div>
    </form>
  )
}

function ErrorHelper(props: ErrorMessageProps) {
  return (
    <ErrorMessage {...props} render={errorMessage =>
      <span className="help is-danger">{errorMessage}</span>
    }/>
  )
}

interface KotlinJobsFormValues {
  readonly positionAgreement: boolean;
  readonly frequencyAgreement: boolean;
  readonly title: string;
  readonly location: string;
  readonly company: string;
  readonly type: string;
  readonly occupation: string;
  readonly salary: string;
  readonly description: string;
  readonly contact: string;
}

interface BuildFormProps {
  readonly callback: (text: string) => void;
}

ReactDOM.render(
  <Container/>,
  document.getElementById("root")
);

function Container() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="section">
        <div className="content">
          <h1>Kotlin Jobs Builder</h1>
          <p>
            Пожалуйста заполните все поля формы и
            отправьте сгенерирование описание вакансии
            <a href="https://t.me/HeapyHop"> @HeapyHop</a> или
            <a href="https://t.me/Harmonizr"> @Harmonizr</a>
          </p>
        </div>
        <div className="content">
          <BuildForm callback={setText}/>
        </div>
        <div className="content">
          {text && (
            <React.Fragment>
              <textarea rows={30} className="textarea" contentEditable="false" value={text}/>
              <p>Скопируйте этот фрагмент и отправьте одному из модераторов</p>
            </React.Fragment>
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            The source code is licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPLv3</a>,
            and available on <a href="https://github.com/heapy/kotlin_jobs">GitHub</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}
