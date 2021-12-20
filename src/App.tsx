import { useState } from 'react';
import './App.css';

const App = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const validateForm = (e: any) => {
    const FULL_NAME = /^[a-z '-]+$/i;
    const validateFullName = () => FULL_NAME.test(fullName);

    const isValidFullName = validateFullName();
    if (!isValidFullName) {
      // set text of err if validation failed
      setError('Please supply correct full name');
    } else {
      // set text of err if validation success
      setError('');
      setTimeout(() => setIsSubmited(true), 2000);
    }
    e.preventDefault();
  };

  if (isSubmited) {
    return <div className="submited">Your data has been saved...</div>;
  }

  return (
    <main className="main">
      <article className="intro">
        <div className="container container_intro">
          <h1 className="intro__title">Join the community!</h1>
          <p className="intro__main-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            ducimus? Harum eaque adipisci at officiis animi aperiam quos. Quidem
            dolore temporibus delectus alias quod magnam quasi, officia ipsam
            reprehenderit modi deserunt laudantium harum ducimus nihil facilis
            assumenda voluptatum itaque velit culpa voluptate accusamus?
            Necessitatibus animi similique enim suscipit ullam. In!
          </p>
          <p className="intro__bottom-text">
            At the end of the trial you manually choose whether to subscribe.You
            will not be charged automatically.
          </p>
        </div>
      </article>
      <article className="registration">
        <div className="container container_registration">
          <img
            src="./calendar-img.png"
            alt="Calendar"
            className="registration__calendar-img"
          />
          <form
            className="registration-form"
            id="registration-form"
            onSubmit={(e) => validateForm(e)}
          >
            <p className="registration-form__item">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border_grey"
                required
              />
            </p>
            <div className="registration-form__item registration-form__password">
              <label htmlFor="password">Password</label>
              <div className="input-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="border_grey"
                  required
                  minLength={8}
                  maxLength={12}
                />
                <button
                  className="toggle-password-btn"
                  id="toggle-password-btn"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 'hide' : 'show'}
                </button>
              </div>
            </div>
            <div className="registration-form__item registration-form__fullname">
              <div className="label-fullname-wrapper">
                <label htmlFor="fullname">Full name</label>
                <span
                  className={`fullname-error ${
                    error ? 'fullname-error_active' : ''
                  }`}
                  id="fullname-error"
                >
                  {error}
                </span>
              </div>
              <input
                type="text"
                id="fullname"
                className={`border_grey ${error ? 'border_error' : ''}`}
                name="fullname"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <fieldset className="registration-form__item date-fieldset">
              <legend>Date of birth</legend>
              <p className="date-fieldset__item">
                <select
                  id="months"
                  name="months"
                  className="date-fieldset__months border_grey"
                  // onChange="this.setAttribute('data-selected', true)"
                >
                  <option value="" disabled selected hidden>
                    Month
                  </option>
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
                <input
                  type="number"
                  name="day"
                  placeholder="Day"
                  min="1"
                  max="31"
                  className="date-fieldset__day border_grey"
                />
                <input
                  type="number"
                  name="year"
                  placeholder="Year"
                  min="1900"
                  max="2020"
                  className="date-fieldset__year border_grey"
                />
              </p>
            </fieldset>
            <fieldset className="registration-form__item gender-fieldset">
              <legend>Gender</legend>
              <p className="gender-fieldset__item">
                <input
                  type="radio"
                  value="male"
                  className="border_grey"
                  name="gender"
                  id="male"
                  checked
                />
                <label htmlFor="male">Male</label>
              </p>
              <p className="gender-fieldset__item">
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  className="border_grey"
                />
                <label htmlFor="female">Female</label>
              </p>
            </fieldset>
            <p className="registration-form__item registration-form__agreement">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                className="custom-checkbox border_grey"
                required
              />
              <label htmlFor="agreement">
                I agree with Terms and Conditions
              </label>
            </p>
            <p className="registration-form__item">
              <button type="submit" className="submit-btn">
                Create my account
              </button>
            </p>
          </form>
        </div>
      </article>
    </main>
  );
};

export default App;
