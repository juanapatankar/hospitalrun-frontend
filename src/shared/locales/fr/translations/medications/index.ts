export default {
  medications: {
    label: 'Medications',
    filterTitle: 'Filtrer par statut',
    search: 'Rechercher des médicaments',
    status: {
      draft: 'Brouillon',
      active: 'Active',
      onHold: 'En attente',
      cancelled: 'Annulé',
      completed: 'Terminé',
      enteredInError: 'Entré par erreur',
      stopped: 'Arrêté',
      unknown: 'Inconnue',
    },
    intent: {
      proposal: 'Proposition',
      plan: 'Plan',
      order: 'Commande',
      originalOrder: 'Commande originale',
      reflexOrder: 'Ordre réflexe',
      fillerOrder: 'Ordre de remplissage',
      instanceOrder: 'Ordre des instances',
      option: 'Option',
    },
    priority: {
      routine: 'Routine',
      urgent: 'Urgente',
      asap: 'Au plus vite',
      stat: 'Stat',
    },
    filter: {
      all: 'Tous les statuts',
    },
    requests: {
      label: 'Demandes de médicaments',
      new: 'Demander des médicaments',
      view: 'Voir les médicaments',
      cancel: 'Annuler le médicament',
      complete: 'Médicament complet',
      error: {
        unableToRequest: 'Impossible de créer une demande de médicament.',
        unableToComplete: 'Impossible de terminer la demande de médicaments.',
        quantityRequired: 'La quantité est requise.',
        unitRequired: `L'unité est requise.`,
      },
    },
    medication: {
      medication: 'Médicament',
      for: 'Pour',
      status: 'Statut',
      intent: 'Intention',
      priority: 'Priorité',
      notes: 'Remarques',
      quantity: 'Quantité',
      quantityValue: 'Valeur',
      quantityUnit: 'Unité',
      requestedOn: 'Demandé le',
      requestedBy: 'Demandé par',
      completedOn: 'Terminé le',
      canceledOn: 'Annulé le',
      patient: 'Patiente',
    },
  },
}
