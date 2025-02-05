import React, { useState } from "react";
import { FormWrapper, FormTitle, FormSubtitle, Form, RadioButtonsWrapper, RadioLabel, InputField, SubmitButton, Disclaimer, PrivacyLink, SecureMessage } from './Styled/FormSection.styled';
import Image from "next/image";

const FormSection: React.FC = () => {
    const [isBusiness, setIsBusiness] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cnpj: "",
        phone: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <FormWrapper>
            <FormTitle>Faça parte da revolução digital!</FormTitle>
            <FormSubtitle>Cadastre-se e faça parte do lançamento oficial.</FormSubtitle>

            <Form onSubmit={handleSubmit}>
                {/* Radio buttons */}
                <RadioButtonsWrapper>
                    <RadioLabel>
                        <input
                            type="radio"
                            name="userType"
                            checked={!isBusiness}
                            onChange={() => setIsBusiness(false)}
                        />
                        Para você
                    </RadioLabel>
                    <RadioLabel>
                        <input
                            type="radio"
                            name="userType"
                            checked={isBusiness}
                            onChange={() => setIsBusiness(true)}
                        />
                        Para empresa
                    </RadioLabel>
                </RadioButtonsWrapper>

                {/* Inputs */}
                {isBusiness ? (
                    <div style={{ marginBottom: "10px" }}>
                        <InputField
                            id="cnpj"
                            name="cnpj"
                            type="text"
                            placeholder="CNPJ"
                            value={formData.cnpj}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ) : (
                    <div style={{ marginBottom: "10px" }}>
                        <InputField
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div style={{ marginBottom: "10px" }}>
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <InputField
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Celular"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit button */}
                <SubmitButton type="submit">{isBusiness ? "Quero para minha empresa" : "Quero ser cliente"}</SubmitButton>

                {/* Disclaimer */}
                <Disclaimer>
                    Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da <PrivacyLink href="#"> Política de Privacidade</PrivacyLink>.
                </Disclaimer>

                {/* Secure message */}
                <SecureMessage>
                    <div>
                        <Image
                            src={"/icons/security.svg"}
                            alt={"Segurança de dados"}
                            width={20}
                            height={20}
                        />
                        Suas informações estão seguras conosco.
                    </div>
                </SecureMessage>
            </Form>
        </FormWrapper>
    );
};

export default FormSection;