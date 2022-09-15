export interface Dokument {
  tittel: string;
  timestamp: string;
  url: string;
  type: string;
}

export interface Søknad {
  timestamp: string;
  applicationPdf: {
    url: string;
    timestamp: string;
  };
  documents: Array<Dokument>;
  missingDocuments: Array<'FOSTERFORELDER' | 'STUDIESTED'>;
}

export interface Beskjed {
  uid: string,
  forstBehandlet: string,
  eventId: string,
  tekst: string,
  link: string | null,
  sistOppdatert: string,
  sikkerhetsnivaa: number,
}

export interface MellomlagretSøknad {
  timestamp: string;
}

export interface Vedleggskrav {
  type: 'STUDIESTED' | 'FOSTERFORELDER';
  dokumentasjonstype: string;
  beskrivelse: string;
}

export interface OpplastetVedlegg {
  name: string;
  size: number;
  vedleggId?: string;
  file: File;
}
