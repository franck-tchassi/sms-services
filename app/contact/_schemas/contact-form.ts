import { z } from "zod";

export const ContactFormSchema = z.object({
  Nom: z.string().min(2, { message: "Veuillez entrer un nom valide" }),
  Email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  Phone: z.string().min(10, { message: "Veuillez entrer un numéro de téléphone valide" }),
  Forfait: z.string().nonempty({ message: "Veuillez sélectionner un forfait" }),
  Message: z.string()
    .min(10, { message: "Votre message doit contenir au moins 10 caractères" })
    .max(2000, { message: "Votre message ne peut pas dépasser 2000 caractères" }),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;