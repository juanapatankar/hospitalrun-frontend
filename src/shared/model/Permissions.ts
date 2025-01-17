enum Permissions {
  ReadPatients = 'read:patients',
  WritePatients = 'write:patients',
  ReadAppointments = 'read:appointments',
  WriteAppointments = 'write:appointments',
  DeleteAppointment = 'delete:appointment',
  AddAllergy = 'write:allergy',
  AddDiagnosis = 'write:diagnosis',
  RequestLab = 'write:labs',
  CancelLab = 'cancel:lab',
  CompleteLab = 'complete:lab',
  ViewLab = 'read:lab',
  ViewLabs = 'read:labs',
  ViewIncidents = 'read:incidents',
  ViewIncident = 'read:incident',
  ReportIncident = 'write:incident',
  ResolveIncident = 'resolve:incident',
  AddCarePlan = 'write:care_plan',
  ReadCarePlan = 'read:care_plan',
  AddCareGoal = 'write:care_goal',
  ReadCareGoal = 'read:care_goal',
  RequestMedication = 'write:medications',
  CancelMedication = 'cancel:medication',
  CompleteMedication = 'complete:medication',
  ViewMedication = 'read:medication',
  ViewMedications = 'read:medications',
  AddVisit = 'write:visit',
  ReadVisits = 'read:visit',
  RequestImaging = 'write:imaging',
  ViewImagings = 'read:imagings',
  ViewIncidentWidgets = 'read:incident_widgets',
}

export default Permissions
