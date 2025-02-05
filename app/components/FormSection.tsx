import React, { useState } from "react";
import { InputMask } from "@react-input/mask";
import { FormWrapper, FormTitle, FormSubtitle, Form, RadioButtonsWrapper, RadioLabel, InputField, MaskedInputField, SubmitButton, Disclaimer, PrivacyLink, SecureMessage, ErrorMessage } from './Styled/FormSection.styled';
import Image from "next/image";

const FormSection: React.FC = () => {
    const [isBusiness, setIsBusiness] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cnpj: "",
        phone: ""
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        cnpj: false,
        phone: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleValidation = () => {
        const newErrors = {
            name: !formData.name && !isBusiness,
            email: !/\S+@\S+\.\S+/.test(formData.email),
            cnpj: !formData.cnpj && isBusiness,
            phone: !/^\d+$/.test(formData.phone.replace(/\D/g, ''))
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (handleValidation()) {
            console.log(formData);
        }
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
                        <InputMask
                            id="cnpj"
                            name="cnpj"
                            type="text"
                            placeholder="CNPJ"
                            mask="__.___.___/____-__"
                            replacement={{ _: /\d/ }}
                            value={formData.cnpj}
                            onChange={handleChange}
                            required
                            className={errors.cnpj ? 'error' : ''}
                        />
                        {errors.cnpj && <ErrorMessage>Preencha o CNPJ corretamente.</ErrorMessage>}
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
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <ErrorMessage>Preencha o nome corretamente.</ErrorMessage>}
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
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <ErrorMessage>Preencha o e-mail corretamente.</ErrorMessage>}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <InputMask
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Celular"
                        mask="(__) _ ____-____"
                        replacement={{ _: /\d/ }}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <ErrorMessage>Preencha o celular corretamente.</ErrorMessage>}
                </div>

                {/* Submit button */}
                <SubmitButton type="submit">{isBusiness ? "Quero para minha empresa" : "Quero ser cliente"}</SubmitButton>

                {/* Disclaimer */}
                <Disclaimer>
                    Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da <PrivacyLink href="#">Política de Privacidade</PrivacyLink>.
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
