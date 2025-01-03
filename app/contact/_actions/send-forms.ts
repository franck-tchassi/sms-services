import { Resend } from "resend";
import React from "react";
import { ContactFormInput, ContactFormSchema } from "../_schemas/contact-form";
import { EmailTemplate } from "../_components/email-template";

const sendForm = async (input: ContactFormInput) => {
  try {
    const validateData = ContactFormSchema.safeParse(input);

    if (!validateData.success) {
      return {
        success: false,
        message: "Les données du formulaire sont invalides",
      };
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Clé API Resend non configurée");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Générer l'élément React
    const emailContent = React.createElement(EmailTemplate, {
      Nom: validateData.data.Nom,
      Email: validateData.data.Email,
      Phone: validateData.data.Phone,
      Forfait: validateData.data.Forfait,
      Message: validateData.data.Message,
    });

    // Envoyer l'email
    const { error } = await resend.emails.send({
      from: "Noreply <noreply@fabelganie.com>",
      to: ["franckraulin@gmail.com"],
      subject: "Demande de devis",
      react: emailContent as React.ReactNode, // Forcer le typage ici
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: "Message envoyé avec succès",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi du message",
    };
  }
};

export default sendForm;
