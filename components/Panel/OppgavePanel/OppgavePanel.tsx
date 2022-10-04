import { Button, Panel, Select, Textarea } from '@navikt/ds-react';
import { useState } from "react";
import { post } from "../../../lib/api/post";
import { toBoolean } from "../../../lib/utils/string";
import styles from "./OppgavePanel.module.css";

export const OppgavePanel = () => {
  const [tekst, setTekst] = useState("Skriv inn tekst");
  const [lenke, setLenke] = useState("Skriv inn lenke");
  const [eksternVarsling, setEksternVarsling] = useState("false");

  const createOppgave = async () => {
    await post("innboks", {
      tekst: tekst,
      link: lenke,
      eksternVarsling: toBoolean(eksternVarsling),
    });
  };

  return (
    <Panel>
      <div className={styles.content}>
        <Textarea
          label="Tekst"
          value={tekst}
          onChange={e => setTekst(e.target.value)}
          size="small"
        />
      </div>
      <div className={styles.content}>
        <Textarea
          label="Lenke"
          value={lenke}
          onChange={e => setLenke(e.target.value)}
          size="small"
        />
      </div>
      <div className={styles.content}>
        <Select
          label="Ekstern varsling"
          size="medium"
          onChange={(e) => setEksternVarsling(e.target.value)}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </Select>
      </div>
      <div className={styles.content}>
        <Button variant="secondary" onClick={createOppgave}>Opprett</Button>
      </div>
    </Panel>
  );
};
