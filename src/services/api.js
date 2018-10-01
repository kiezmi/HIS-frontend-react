const users = localStorage.getItem('users') || [
    { role: 'admin', uid: "000", name: "Manolo", surname: "Fernandez", dni: "123456789K", username: "Manolo", password: "0" },
    { role: 'patient', uid: "100", name: "Juan", surname: "Lopez", dni: "123456789J", username: "Juan", password: "100" },
    { role: 'patient', uid: "200", name: "Juanito", surname: "Lopez", dni: "123456789Y", username: "Lito", password: "200" },
    { role: 'patient', uid: "300", name: "Sergio", surname: "Zaragoza", dni: "123456789Y", username: "Sergio", password: "300" },
    { role: 'doctor', uid: "010", name: "Cristian", surname: "Martinez", dni: "123456789M", username: "Cristian", password: "10" },
    { role: 'doctor', uid: "020", name: "Cristianito", surname: "Martinez", dni: "123456789P", username: "Cris", password: "20" },
    { role: 'doctor', uid: "030", name: "Ivan", surname: "Martinez", dni: "123456789P", username: "Ivan", password: "30" },
    { role: 'technical', uid: "001", name: "Javi", surname: "Guerra", dni: "123456789N", username: "Javi", password: "1" },
    { role: 'technical', uid: "001", name: "Javo", surname: "Guerra", dni: "123456789W", username: "Javo", password: "2" }

    ];

const histories = localStorage.getItem('histories') || [
        { id: '1', userId: "100", doctorId: "010", log: ["12/2/1999 Rotura de ligamento anterior"] },
        { id: '2', userId: "100", doctorId: "020", log: ["12/2/1978 Rotura de ligamento "] },
        { id: '3', userId: "200", doctorId: "020", log: ["12/2/2000 Rotura de ligamento anterior"] },
        { id: '4', userId: "200", doctorId: "010", log: ["12/2/2001 Rotura de ligamento "] },
        { id: '5', userId: "300", doctorId: "030", log: ["12/2/2002 Rotura de ligamento anterior"] },
        { id: '6', userId: "300", doctorId: "010", log: ["12/2/2005 Rotura de ligamento "] },
        { id: '7', userId: "300", doctorId: "020", log: ["12/2/2014 Rotura de ligamento anterior"] }
      ];

const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    },
    createUser(user) {
        users.push(user);
        localStorage.setItem('users', users);
    },
    getPatients() {
        return users.filter(patient => patient.role === 'patient')
    },
    getPatientUID(uid){
        return users.find(patient => patient.uid === uid)
    },
    getHistories() {
        return histories
    },
    getHistory(id){
        return histories.find(user => user.uid === id)
    }
}
export default api;