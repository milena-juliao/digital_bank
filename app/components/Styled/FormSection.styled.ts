import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30.5rem;
  margin-top: 2rem;

  @media (max-width: 1300px) {
    width: 40%;
    padding: 1.5rem;
  }

  @media (max-width: 1200px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const FormTitle = styled.h2`
  width: 100%;
  font-size: var(--font-body-14-semi);
  color: #777;
  margin-bottom: .5rem;
`;

export const FormSubtitle = styled.p`
  width: 100%;
  font-size: var(--font-body-18-semi);
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const RadioButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    gap: 1rem;
  }
`;

export const RadioLabel = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;

  input {
    margin-right: 5px;
  }

  @media (max-width: 1200px) {
    font-size: .9rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: #777;
  text-align: justify;
  margin: 1.6rem 0;
`;

export const PrivacyLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SecureMessage = styled.div`
  font-size: 0.8rem;
  color: #777;
  margin-top: 10px;
  
  div{
    display: flex;
    align-items: center;
    border-top: 3px solid var(--color-light-2);
    padding: 1.6rem 0 0 0;

    img {
        margin-right: .5rem;
    }
  }
`;