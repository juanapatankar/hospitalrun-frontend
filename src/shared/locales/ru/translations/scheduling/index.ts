export default {
  scheduling: {
    label: 'Расписание',
    appointments: {
      label: 'Назначения',
      new: 'Новое назначение',
      schedule: 'Расписание назначений',
      editAppointment: 'Редактировать назначение',
      deleteAppointment: 'Удалить назначение',
      viewAppointment: 'Просмотр назначения',
    },
    appointment: {
      startDate: 'Дата начала',
      endDate: 'Дата окончания',
      location: 'Место',
      type: 'Тип',
      errors: {
        createAppointmentError: 'Невозможно создать назначение.',
        updateAppointmentError: 'Невозможно обновить назначение.',
        patientRequired: 'Необходимо указать пациента.',
        startDateMustBeBeforeEndDate: 'Дата начала не может быть позже даты конца.',
      },
      reason: 'Причина',
      patient: 'Пациент',
      deleteConfirmationMessage: 'Вы уверены, что хотите удалить назначение?',
      successfullyCreated: 'Назначение успешно создано.',
      successfullyDeleted: 'Назначение успешно удалено.',
    },
  },
}
