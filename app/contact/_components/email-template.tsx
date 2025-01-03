interface EmailTemplateProps {
    Nom: string;
    Email: string;
    Phone: string;
    Forfait: string;
    Message: string;
}
  
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    Nom,
    Email,
    Phone,
    Forfait,
    Message,
  }) => (
    <div>
      <h1>Demande de devis</h1>
      <p>Nom: {Nom}</p>
      <p>Email: {Email}</p>
      <p>Téléphone: {Phone}</p>
      <p>Forfait: {Forfait}</p>
      <p>Message: {Message}</p>
    </div>
 );

