import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const NewsletterSignupForm = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setIsSuccess(undefined);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(undefined);
    subscribe({ email }).then((successValue) => {
      setIsSuccess(successValue);
      setIsSubmitting(false);
    });
  };

  const subscribe = (props: { email: string }): Promise<boolean> => {
    return fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    })
      .then((response) => {
        return response.ok && response.status === 201;
      })
      .catch((error) => {
        console.error('Error:', error);
        return false;
      });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group-header">
            <label htmlFor="email">Adresse Email</label>
          </div>
          <div className="form-group-body">
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          Je m’inscris
        </button>
      </form>
      <div>
        {isSuccess !== undefined &&
          (!!isSuccess ? (
            <div>
              <p>🎉 L’inscription a réussi !</p>
              <p>
                N’oubliez pas de confirmer votre inscription avec le message que vous allez recevoir
                dans votre boîte mail dans quelques instants.
              </p>
            </div>
          ) : (
            <div>
              <p>🤦‍♂️ L’inscription a échoué.</p>
              <p>Bummer. Si après quelques essais, ça ne marche toujours pas, contactez-moi.</p>
            </div>
          ))}
      </div>
    </FormWrapper>
  );
};

export default NewsletterSignupForm;
