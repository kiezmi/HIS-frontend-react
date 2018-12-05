# HISFrontendREACT

Actividad didáctica consistente en la creación de un frontend con angular simulando una app de gestión hospitalaria

## Objetivos

- Creación de una arquitectura avanzada de frontend MVC 
- Gestión de usuarios con distintos roles
- Uso avanzado de servicios siguiendo el principio de responsabilidad única.
- Centralizar el estado de la app en un servicio central (llamado por ejemplo stateManagerService o dataService ) del cuál se nutren todos los componentes y servicios
- Creación de vistas publicas y privadas gestionadas por el router del frontend haciendo uso del evento canActivate de la configuración del router


## Roles

- Doctor 
- Patient
- Technical
- Admin (permiso root: puede hacer todo)


## Api

Simular la interacción con un backend mediante un servicio fake (mock) 

- login()

- getPatients()   // doctor, admin
- getPatient(uid) //  doctor, admin, patient
- postPatient(patient) // technical

- getMedicalHistories() // doctor, admin
- getMedicalHistory(id)  // doctor, admin, patient
- postMedicalHistory(medicalHistory) // doctor

- postDoctor(doctor)  // technical
- postPatient(patient) // technical
- postTechnical(technical) // technical

### Vistas

- Públicas
    - /login
- Privadas todos
    - /dashboard (distribuidor da acceso al resto de vistas privadas según el role )
- Privadas doctor
    - /patients
    - /patient/:id
    - /histories
    - /history/:id
- Privadas technical
    - /newUser/:role (role === 'admin' || role === 'doctor' || role === 'technical' )
- Privadas patient
    - /patient/:id  sólo puede ver su ficha
    - /history/:id  sólo puede ver su historial

# Ejemplos para probar la aplicacion

## Admin
- uid: "000", name: "Manolo", surname: "Fernandez", dni: "123456789K", username: "Manolo", password: "0"

## Tecnico
- uid: "001", name: "Javi", surname: "Guerra", dni: "123456789N", username: "Javi", password: "1"

## Doctor
- uid: "010", name: "Cristian", surname: "Martinez", dni: "123456789M", username: "Cristian", password: "10"

## Paciente
- uid: "100", name: "Juan", surname: "Lopez", dni: "123456789J", username: "Juan", password: "100"