"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInput, ContactFormSchema } from "../_schemas/contact-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import sendForm from "../_actions/send-forms";
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";
import { Terminal } from "lucide-react";

// Liste des forfaits
const forfaits = [
  { id: 1, name: " " },
  { id: 2, name: "Lavage Extérieur" },
  { id: 3, name: "Lavage Intérieur" },
  { id: 4, name: "Lavage Complet" },
  { id: 5, name: "Formule Sièges" },
  { id: 6, name: "Formule Intégrale" },
  { id: 7, name: "Formule Sur Carte" },
];

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormInput) => {
    const response = await sendForm(data);

    if (response.success) {
      setIsSuccess(true);
      form.reset();
    } else {
      setIsSuccess(false);
      form.setError("root.serverError", {
        message: response.message,
        type: "500",
      });
    }
  };

  return (
    <div className="">
      <Card className=" p-12  border-2 border-green-500 w-full">

        {isSuccess ? (
          <CardContent>
            <p className="text-green-600">Votre message a été envoyé avec succès !</p>
          </CardContent>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 flex flex-col justify-center">
              <CardContent className="space-y-4">
                {form.formState.errors?.root?.serverError && (
                  <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Erreur!</AlertTitle>
                    <AlertDescription>
                      {form.formState.errors?.root?.serverError?.message}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Champ pour le nom */}
                <FormField
                  control={form.control}
                  name="Nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrez votre nom"
                          {...field}
                          className="mt-1 border-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Champ pour l'email */}
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrez votre adresse email"
                          {...field}
                          className="mt-1 border-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Champ pour le numéro de téléphone */}
                <FormField
                  control={form.control}
                  name="Phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrez votre numéro de téléphone"
                          {...field}
                          className="mt-1 border-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Sélecteur pour le forfait */}
                <FormField
                  control={form.control}
                  name="Forfait"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Forfait</FormLabel>
                      <FormControl>
                        <Select  onValueChange={field.onChange} defaultValue={forfaits[0].name}>
                          <SelectTrigger className="border-2">
                            <SelectValue placeholder="Choisissez un forfait" />
                          </SelectTrigger>
                          <SelectContent>
                            {forfaits.map((forfait) => (
                              <SelectItem key={forfait.id} value={forfait.name}>
                                {forfait.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Champ pour le message */}
                <FormField
                  control={form.control}
                  name="Message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Entrez votre message..."
                          {...field}
                          className="mt-1 h-24 border-2 "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <CardFooter className="flex justify-end">
                <Button
                  variant={"outline"}
                  className="hover:bg-green-100 border-green-100"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Envoi..." : "Envoyer"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default ContactForm;
