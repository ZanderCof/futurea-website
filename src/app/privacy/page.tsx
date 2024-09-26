import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Politiche sulla Privacy</h1>
            <p className="mb-4">
                La tua privacy è importante per noi. Questa pagina descrive le nostre politiche riguardo alla raccolta, utilizzo e divulgazione delle informazioni personali quando utilizzi il nostro servizio e le tue scelte associate a tali informazioni.
            </p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-2">Informazioni Raccolte</h2>
            <p className="mb-4">
                Raccogliamo diversi tipi di informazioni per vari scopi per fornire e migliorare il nostro servizio.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Informazioni personali (nome, email, numero di telefono, ecc.)</li>
                <li>Dati di utilizzo (indirizzo IP, browser, pagine visitate, tempo speso, ecc.)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Utilizzo delle Informazioni</h2>
            <p className="mb-4">
                Utilizziamo le informazioni raccolte per vari scopi, tra cui:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Fornire e mantenere il nostro servizio</li>
                <li>Notificarti sui cambiamenti del nostro servizio</li>
                <li>Fornire assistenza clienti</li>
                <li>Analizzare l'utilizzo del servizio</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Divulgazione delle Informazioni</h2>
            <p className="mb-4">
                Potremmo divulgare le tue informazioni personali in buona fede, se necessario per:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Rispondere a un obbligo legale</li>
                <li>Proteggere e difendere i diritti o la proprietà della nostra azienda</li>
                <li>Prevenire o indagare su possibili irregolarità in relazione al servizio</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Sicurezza delle Informazioni</h2>
            <p className="mb-4">
                La sicurezza delle tue informazioni è importante per noi, ma ricorda che nessun metodo di trasmissione su Internet o metodo di archiviazione elettronica è sicuro al 100%. Sebbene ci sforziamo di utilizzare mezzi commercialmente accettabili per proteggere le tue informazioni personali, non possiamo garantirne la sicurezza assoluta.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Modifiche a questa Politica sulla Privacy</h2>
            <p className="mb-4">
                Potremmo aggiornare le nostre politiche sulla privacy di tanto in tanto. Ti notificheremo eventuali modifiche pubblicando la nuova politica sulla privacy in questa pagina. Ti invitiamo a rivedere frequentemente questa pagina per eventuali aggiornamenti.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Contattaci</h2>
            <p>
                Se hai domande su questa politica sulla privacy, contattaci:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Email: info@futurea.com</li>
                <li>Telefono: +39 0123 456 789</li>
            </ul>
        </div>
    );
}
