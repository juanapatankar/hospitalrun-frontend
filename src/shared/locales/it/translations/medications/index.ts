export default {
  medications: {
    label: 'Farmaci',
    filterTitle: 'Filtra per stato',
    search: 'Cerca farmaci',
    status: {
      draft: 'Bozza',
      active: 'Attiva',
      onHold: 'In attesa',
      cancelled: 'Annullata',
      completed: 'Completato',
      enteredInError: 'Inserito per errore',
      stopped: 'Fermato',
      unknown: 'Sconosciuta',
    },
    intent: {
      proposal: 'Proposta',
      plan: 'Piano',
      order: 'Ordine',
      originalOrder: 'Ordine originale',
      reflexOrder: 'Ordine riflesso',
      fillerOrder: 'Ordine di riempimento',
      instanceOrder: 'Ordine istanza',
      option: 'Opzione',
    },
    priority: {
      routine: 'Routine',
      urgent: 'Urgente',
      asap: 'Al più presto',
      stat: 'statistica',
    },
    filter: {
      all: 'Tutti gli stati',
    },
    requests: {
      label: 'Richieste di farmaci',
      new: 'Richiedi farmaci',
      view: 'Visualizza farmaci',
      cancel: 'Annulla farmaco',
      complete: 'Farmaco completo',
      error: {
        unableToRequest: 'Impossibile creare la richiesta di farmaco.',
        unableToComplete: 'Impossibile completare la richiesta del farmaco.',
        quantityRequired: 'La quantità è richiesta.',
        unitRequired: `L'unità è richiesta.`,
      },
    },
    medication: {
      medication: 'Farmaco',
      for: 'Per',
      status: 'Stato',
      intent: 'Intenta',
      priority: 'Priorità',
      notes: 'Appunti',
      quantity: 'Quantità',
      quantityValue: 'Valore',
      quantityUnit: 'Unità',
      requestedOn: 'Richiesto il',
      requestedBy: 'Richiesto da',
      completedOn: 'Completato il',
      canceledOn: 'Annullato il',
      patient: 'Paziente',
    },
  },
}
