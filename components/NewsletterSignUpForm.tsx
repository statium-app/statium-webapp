import { ChangeEventHandler, FormEventHandler, useState } from 'react';

const NewsletterSignupForm = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    subscribe({ email });
  };

  const subscribe = (props: { email: string }): Promise<boolean> => {
    return fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    })
      .then((response) => response.json())
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error('Error:', error);
        return false;
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="email" value={email} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <a className="btn btn-primary" href="https://buttondown.email/statium.app" role="button">
        S’abonner
      </a>
    </>
  );
};

export default NewsletterSignupForm;
