const users =[
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

const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    }
}
export default api;