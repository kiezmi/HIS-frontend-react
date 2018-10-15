import React from 'react';
import api from './services/api';
import './createUser.css';

class CreateUser extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           role: 'patient',
           name: '',
           uid:'',
           address: '',
           dni: '',
           sip: '',
           username:'',
           password:''
       };

       this.handleChange = this.handleChange.bind(this);
   }

   handleChange(ev) {
       this.setState({
           [ev.target.name]: ev.target.value});
   }

   handleSubmit(ev) {
       ev.preventDefault();
       api.createUser(this.state);
       this.cancelCourse();
   }

   cancelCourse = () => {
       document.getElementById("newuser").reset();
     }

   goBack = () => {this.props.history.goBack();}

   render() {
       return (
           <div>
               <div className="userRegistry">
                   <form id="newuser" onSubmit={this.handleSubmit.bind(this)}>
                       <label>Rol: </label>
                       <select name="role" value={this.state.value} onChange={this.handleChange}>>
                           <option value="patient">Paciente</option>
                           <option value="doctor">Doctor</option>
                           <option value="technical">Técnico</option>
                       </select>
                       <label>      ID: </label>
                       <input type="text" name="uid" placeholder="introduzca id" value={this.state.newid} onChange={this.handleChange}></input><br/>
                       <label>Nombre: </label>
                       <input type="text" name="name" placeholder="introduzca nombre" value={this.state.newname} onChange={this.handleChange}></input><br/>
                       <label>Dirección: </label>
                       <input type="text" name="address" placeholder="introduzca dirección" value={this.state.newaddress} onChange={this.handleChange}></input><br/>
                       <label>DNI: </label>
                       <input type="text" name="dni" placeholder="introduzca DNI" value={this.state.newdni} onChange={this.handleChange}></input><br/>
                       <label>SIP: </label>
                       <input type="text" name="sip" placeholder="introduzca SIP" value={this.state.newsip} onChange={this.handleChange}></input><br/>
                       <label>Nombre de usuario: </label>
                       <input type="text" name="username" placeholder="introduzca nombre de usuario" value={this.state.newusername} onChange={this.handleChange}></input><br/>
                       <label>Contraseña: </label>
                       <input type="text" name="password" placeholder="introduzca contraseña" value={this.state.newpass} onChange={this.handleChange}></input><br/>
                       <button type="submit">Registrar</button>
                   </form>
               </div>
           </div>
       )
   }
}

export default CreateUser;